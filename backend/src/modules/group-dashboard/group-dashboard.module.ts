import { Body, CanActivate, Controller, createParamDecorator, ExecutionContext, Get, Injectable, Module, Param, ParseUUIDPipe, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, PickType } from '@nestjs/swagger';
import { IsUrl, IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { CurrentUser } from '../../common/decorators/auth.decorators';
import type { AuthUser } from '../../common/types/auth-user';
import { Errors } from '../../common/errors/app-error';
import { PaginationQueryDto, pageArgs, toPage } from '../../common/dto/pagination.dto';
import { PrismaService } from '../../infrastructure/database/prisma.service';
import { DealerMemberRole, DealerPermission, Prisma, VehicleStatus } from '../../generated/prisma/client';
import { GROUP1_SCOPE, GROUP_APPS_WHERE, groupById, groupForDealer, validGroupScope, type GroupScope } from '../customer-apps/group1';
import { BroadcastNotificationDto } from '../notifications/dto/notification.dto';
import { BroadcastService } from '../notifications/broadcast.service';
import { PushService } from '../notifications/push.service';
import { NotificationsModule } from '../notifications/notifications.module';
import { CrmModule } from '../crm/crm.module';
import { LeadsService } from '../crm/leads.service';
import { ChangeStageDto, AssignLeadDto } from '../crm/dto/lead.dto';
import { DealersModule } from '../dealers/dealers.module';
import { DealersService } from '../dealers/dealers.service';
import { CreateStaffDto, UpdateStaffDto, UpdateDealerProfileDto } from '../dealers/dto/dealer.dto';
import { effectivePermissions } from '../dealers/dealer-permissions';
import type { DealerContext } from '../dealers/dealer-access';
import { VehiclesModule } from '../vehicles/vehicles.module';
import { VehiclesService } from '../vehicles/vehicles.service';
import { UpdateVehicleDto, TransitionDto } from '../vehicles/dto/vehicle.dto';

/** Super admins pick a group with this header; without it they see Group1, as before. Staff always see their own group. */
export const GROUP_HEADER = 'x-group-id';
type GroupRequest = { user: AuthUser; headers: Record<string, string | string[] | undefined>; groupScope?: GroupScope };
const requestedGroup = (req: GroupRequest) => { const value = req.headers[GROUP_HEADER]; return (Array.isArray(value) ? value[0] : value)?.trim() || undefined; };
/** The group the guard resolved for this request. */
export const CurrentGroup = createParamDecorator((_: unknown, ctx: ExecutionContext) => ctx.switchToHttp().getRequest<GroupRequest>().groupScope ?? GROUP1_SCOPE);
class GroupTransitionDto extends TransitionDto { @IsEnum(VehicleStatus) to: VehicleStatus; }
export class GroupBranchProfileDto extends PickType(UpdateDealerProfileDto, ['name', 'email', 'phone', 'website', 'description', 'province', 'city', 'address'] as const) {
  @IsOptional() @IsUrl({ require_protocol: true, require_tld: false, protocols: ['http', 'https'] }) logoUrl?: string;
}
class GroupQuery extends PaginationQueryDto {
  @IsOptional() @IsString() @MaxLength(100) q?: string;
}

@Injectable()
export class GroupAccess {
  constructor(private readonly db: PrismaService) {}
  async resolve(actor: AuthUser, write = false, groupId?: string) {
    // Re-read status and membership on every request; revoked members lose access immediately.
    const user = await this.db.user.findUnique({ where: { id: actor.id }, include: { dealerMember: { include: { dealer: true } } } });
    if (!user || user.status !== 'ACTIVE' || user.deletedAt || user.appId !== 'changecars') throw Errors.forbidden('GROUP_ACCESS_DENIED', 'An active Group1 staff account is required');
    const member = user.dealerMember;
    const superAdmin = user.role === 'SUPER_ADMIN';
    let group: GroupScope | null = null;
    if (superAdmin) {
      group = groupId ? await groupById(this.db, groupId) : GROUP1_SCOPE;
      if (!group) throw Errors.notFound('Group');
    } else {
      if (user.role === 'DEALER' && member && member.status === 'ACTIVE' && member.dealer.status === 'APPROVED') group = await groupForDealer(this.db, member.dealerId);
      // Staff always get their own group; a group chosen earlier by a super admin in the same browser is ignored.
      if (!group) throw Errors.forbidden('GROUP_ACCESS_DENIED', 'Only Group1 staff and super admins can access this dashboard');
    }
    const canManage = superAdmin || member?.role === 'OWNER' || member?.role === 'MANAGER';
    if (write && !canManage) throw Errors.forbidden('GROUP_MANAGER_REQUIRED', `${group.name} owner or manager access is required`);
    return { id: user.id, name: `${user.firstName} ${user.lastName}`.trim(), superAdmin, canManage, appId: group.id, dealerIds: [...group.dealerIds], groupName: group.name, group };
  }
}

@Injectable()
export class GroupGuard implements CanActivate {
  constructor(private readonly access: GroupAccess) {}
  async canActivate(ctx: ExecutionContext) {
    const req = ctx.switchToHttp().getRequest<GroupRequest>();
    req.groupScope = (await this.access.resolve(req.user, false, requestedGroup(req))).group;
    return true;
  }
}

@Injectable()
export class GroupDashboardService {
  constructor(private readonly db: PrismaService, private readonly access: GroupAccess, private readonly broadcasts: BroadcastService,
    private readonly push: PushService, private readonly vehicles: VehiclesService, private readonly leads: LeadsService, private readonly dealers: DealersService) {}
  /** Groups a super admin can open (Group1 first). */
  async groups(actor: AuthUser) {
    const current = await this.access.resolve(actor);
    if (!current.superAdmin) return [{ id: current.appId, name: current.groupName, dealerIds: current.dealerIds }];
    const rows = await this.db.customerApp.findMany({ where: GROUP_APPS_WHERE, select: { id: true, name: true, dealerIds: true, enabled: true }, orderBy: { name: 'asc' } });
    return rows.filter(validGroupScope).map(row => ({ ...row, dealerIds: [...row.dealerIds].sort() })).sort((a, b) => Number(b.id === GROUP1_SCOPE.id) - Number(a.id === GROUP1_SCOPE.id));
  }
  async overview(group: GroupScope = GROUP1_SCOPE) {
    const { dealerIds } = group;
    const scope = { dealerId: { in: dealerIds } };
    const [vehicles, published, leads, customers, branches] = await Promise.all([
      this.db.vehicle.count({ where: scope }), this.db.vehicle.count({ where: { ...scope, status: 'PUBLISHED' } }),
      this.db.lead.count({ where: scope }), this.db.user.count({ where: { appId: group.id, role: 'CUSTOMER', status: 'ACTIVE' } }), this.branches(group),
    ]);
    return { vehicles, published, leads, customers, branches, pushConfigured: this.push.configured };
  }
  branches({ dealerIds }: GroupScope = GROUP1_SCOPE) { return this.db.dealer.findMany({ where: { id: { in: dealerIds } }, select: { id: true, name: true, logoUrl: true, city: true, province: true, status: true, _count: { select: { vehicles: true, leads: true, members: true } } }, orderBy: { name: 'asc' } }); }
  async branchDetail(id: string, { dealerIds }: GroupScope = GROUP1_SCOPE) {
    const row = await this.db.dealer.findFirst({ where: { id, AND: { id: { in: dealerIds } } }, select: {
      id: true, name: true, logoUrl: true, description: true, email: true, phone: true, website: true, address: true, city: true, province: true, status: true,
      _count: { select: { vehicles: true, leads: true, members: true } },
      vehicles: { take: 12, orderBy: { updatedAt: 'desc' }, select: { id: true, title: true, primaryImageUrl: true, price: true, status: true } },
    } });
    if (!row) throw Errors.notFound('Dealer');
    return row;
  }
  async updateBranch(actor: AuthUser, id: string, dto: GroupBranchProfileDto, groupId?: string) {
    const { dealerIds } = await this.access.resolve(actor, true, groupId);
    const branch = await this.db.dealer.findFirst({ where: { id, AND: { id: { in: dealerIds } } }, select: { id: true } });
    if (!branch) throw Errors.notFound('Dealer');
    return this.dealers.updateProfile({ dealerId: branch.id }, dto, { preserveFeedFields: true });
  }
  async vehicleDetail(id: string, { dealerIds }: GroupScope = GROUP1_SCOPE) {
    const row = await this.db.vehicle.findFirst({ where: { id, dealerId: { in: dealerIds } }, select: {
      id: true, title: true, slug: true, description: true, status: true, price: true, specialPrice: true, stockNumber: true, year: true, mileage: true,
      condition: true, transmission: true, fuelType: true, colour: true, drivetrain: true, engineCapacityCc: true, powerKw: true, cylinders: true, seats: true, doors: true,
      primaryImageUrl: true, city: true, province: true, createdAt: true, updatedAt: true,
      dealer: { select: { id: true, name: true, logoUrl: true, email: true, phone: true, website: true, description: true, address: true, city: true, province: true } },
      make: { select: { name: true } }, model: { select: { name: true } },
      images: { orderBy: [{ isPrimary: 'desc' }, { position: 'asc' }], select: { id: true, url: true, largeUrl: true, mediumUrl: true, thumbnailUrl: true, altText: true } },
      featureAssignments: { select: { feature: { select: { name: true } } } },
    } });
    if (!row) throw Errors.notFound('Vehicle');
    return row;
  }
  async leadDetail(id: string, { dealerIds }: GroupScope = GROUP1_SCOPE) {
    const row = await this.db.lead.findFirst({ where: { id, dealerId: { in: dealerIds } }, select: {
      id: true, name: true, email: true, phone: true, stage: true, source: true, createdAt: true, nextFollowUpAt: true, lostReason: true,
      dealer: { select: { id: true, name: true, logoUrl: true } }, vehicle: { select: { id: true, title: true, primaryImageUrl: true } },
      assignedTo: { select: { id: true, user: { select: { firstName: true, lastName: true } } } },
      activities: { take: 50, orderBy: { createdAt: 'desc' }, select: { id: true, type: true, note: true, createdAt: true } },
    } });
    if (!row) throw Errors.notFound('Lead');
    return row;
  }
  async customerDetail(id: string, group: GroupScope = GROUP1_SCOPE) {
    const row = await this.db.user.findFirst({ where: { id, appId: group.id, role: 'CUSTOMER', deletedAt: null }, select: {
      id: true, firstName: true, lastName: true, email: true, phone: true, status: true, createdAt: true, lastLoginAt: true,
    } });
    if (!row) throw Errors.notFound('Customer');
    return row;
  }
  async staffDetail(id: string, { dealerIds }: GroupScope = GROUP1_SCOPE) {
    const row = await this.db.dealerMember.findFirst({ where: { id, dealerId: { in: dealerIds } }, select: {
      id: true, role: true, status: true, createdAt: true, dealer: { select: { id: true, name: true, logoUrl: true } },
      user: { select: { firstName: true, lastName: true, email: true, phone: true, lastLoginAt: true } },
    } });
    if (!row) throw Errors.notFound('Staff member');
    return row;
  }
  async inventory(query: GroupQuery, { dealerIds }: GroupScope = GROUP1_SCOPE) {
    const { page, pageSize, skip, take } = pageArgs(query);
    const where: Prisma.VehicleWhereInput = { dealerId: { in: dealerIds }, ...(query.q ? { title: { contains: query.q, mode: 'insensitive' } } : {}) };
    const [data, total] = await Promise.all([this.db.vehicle.findMany({ where, select: { id: true, title: true, status: true, price: true, mileage: true, primaryImageUrl: true, dealer: { select: { id: true, name: true, logoUrl: true } } }, orderBy: { updatedAt: 'desc' }, skip, take }), this.db.vehicle.count({ where })]);
    return toPage(data, total, page, pageSize);
  }
  async leadList(query: GroupQuery, { dealerIds }: GroupScope = GROUP1_SCOPE) {
    const { page, pageSize, skip, take } = pageArgs(query);
    const where: Prisma.LeadWhereInput = { dealerId: { in: dealerIds }, ...(query.q ? { name: { contains: query.q, mode: 'insensitive' } } : {}) };
    const [data, total] = await Promise.all([this.db.lead.findMany({ where, select: { id: true, name: true, email: true, phone: true, stage: true, createdAt: true, dealer: { select: { id: true, name: true } }, vehicle: { select: { title: true } }, assignedTo: { select: { id: true, user: { select: { firstName: true, lastName: true } } } } }, orderBy: { createdAt: 'desc' }, skip, take }), this.db.lead.count({ where })]);
    return toPage(data, total, page, pageSize);
  }
  async customers(query: GroupQuery, group: GroupScope = GROUP1_SCOPE) {
    const { page, pageSize, skip, take } = pageArgs(query);
    const where: Prisma.UserWhereInput = { appId: group.id, role: 'CUSTOMER', deletedAt: null, ...(query.q ? { OR: [{ firstName: { contains: query.q, mode: 'insensitive' } }, { lastName: { contains: query.q, mode: 'insensitive' } }, { email: { contains: query.q, mode: 'insensitive' } }] } : {}) };
    const [data, total] = await Promise.all([this.db.user.findMany({ where, select: { id: true, firstName: true, lastName: true, email: true, phone: true, status: true, createdAt: true }, orderBy: { createdAt: 'desc' }, skip, take }), this.db.user.count({ where })]);
    return toPage(data, total, page, pageSize);
  }
  staff({ dealerIds }: GroupScope = GROUP1_SCOPE) { return this.db.dealerMember.findMany({ where: { dealerId: { in: dealerIds } }, select: { id: true, role: true, status: true, dealer: { select: { id: true, name: true } }, user: { select: { firstName: true, lastName: true, email: true } } }, orderBy: { createdAt: 'desc' } }); }
  private async staffContext(actor: AuthUser, dealerId: string, groupId?: string): Promise<DealerContext> {
    const current = await this.access.resolve(actor, true, groupId);
    if (!current.superAdmin) throw Errors.forbidden('SUPER_ADMIN_REQUIRED', 'Only a super admin can provision group staff');
    if (!current.dealerIds.includes(dealerId)) throw Errors.notFound('Dealer');
    const dealer = await this.db.dealer.findUnique({ where: { id: dealerId } });
    if (!dealer) throw Errors.notFound('Dealer');
    return { userId: actor.id, memberId: actor.id, dealerId, dealerStatus: dealer.status, role: DealerMemberRole.OWNER,
      branchId: null, wideScope: true, permissions: effectivePermissions(DealerMemberRole.OWNER) };
  }
  async inviteStaff(actor: AuthUser, dealerId: string, dto: CreateStaffDto, groupId?: string) {
    return this.dealers.createStaff(await this.staffContext(actor, dealerId, groupId), dto);
  }
  async updateStaff(actor: AuthUser, id: string, dto: UpdateStaffDto, groupId?: string) {
    const current = await this.access.resolve(actor, true, groupId);
    if (!current.superAdmin) throw Errors.forbidden('SUPER_ADMIN_REQUIRED', 'Only a super admin can manage group staff access');
    const member = await this.db.dealerMember.findFirst({ where: { id, dealerId: { in: current.dealerIds } } });
    if (!member || member.userId === actor.id) throw Errors.forbidden('INVALID_STAFF_TARGET', `Choose another ${current.groupName} staff member`);
    return this.dealers.updateStaff(await this.staffContext(actor, member.dealerId, groupId), id, dto);
  }
  async broadcast(actor: AuthUser, dto: BroadcastNotificationDto, groupId?: string) {
    const { appId, groupName } = await this.access.resolve(actor, true, groupId);
    // App and customer audience are forced by the server, including for super admins.
    if (dto.appId && dto.appId !== appId) throw Errors.forbidden('GROUP_APP_ONLY', `Only the ${groupName} app can be targeted`);
    if (!['customers', 'selected'].includes(dto.audience)) throw Errors.badRequest('GROUP_CUSTOMERS_ONLY', `Choose ${groupName} customers or selected ${groupName} customer IDs`);
    if (dto.audience === 'selected') {
      const ids = [...new Set(dto.userIds ?? [])];
      const count = await this.db.user.count({ where: { id: { in: ids }, appId, role: 'CUSTOMER', status: 'ACTIVE' } });
      if (!ids.length || count !== ids.length) throw Errors.badRequest('GROUP_RECIPIENTS_ONLY', `Select active ${groupName} customer IDs only`);
    }
    return this.broadcasts.queue(actor, { ...dto, appId });
  }
  async context(actor: AuthUser, id: string, kind: 'vehicle' | 'lead', groupId?: string): Promise<DealerContext> {
    const { dealerIds } = await this.access.resolve(actor, true, groupId);
    const where = { id, dealerId: { in: dealerIds } };
    const row = kind === 'vehicle' ? await this.db.vehicle.findFirst({ where, include: { dealer: true } }) : await this.db.lead.findFirst({ where, include: { dealer: true } });
    if (!row) throw Errors.notFound(kind === 'vehicle' ? 'Vehicle' : 'Lead');
    return { userId: actor.id, memberId: actor.id, dealerId: row.dealerId, dealerStatus: row.dealer.status, role: DealerMemberRole.MANAGER,
      branchId: null, wideScope: true, permissions: [DealerPermission.LEADS_VIEW_ALL, DealerPermission.LEADS_MANAGE_ALL, DealerPermission.LEADS_ASSIGN] };
  }
  async updateVehicle(actor: AuthUser, id: string, dto: UpdateVehicleDto, groupId?: string) { return this.vehicles.update(await this.context(actor, id, 'vehicle', groupId), id, dto); }
  async transition(actor: AuthUser, id: string, dto: GroupTransitionDto, groupId?: string) { const current = await this.access.resolve(actor, true, groupId); const ctx = await this.context(actor, id, 'vehicle', groupId); return this.vehicles.transition(id, dto.to, { type: current.superAdmin ? 'admin' : 'dealer', userId: actor.id, dealer: ctx }, { reason: dto.reason }); }
  async stage(actor: AuthUser, id: string, dto: ChangeStageDto, groupId?: string) { return this.leads.changeStage(await this.context(actor, id, 'lead', groupId), id, dto); }
  async assign(actor: AuthUser, id: string, dto: AssignLeadDto, groupId?: string) { return this.leads.assign(await this.context(actor, id, 'lead', groupId), id, dto); }
}

@ApiTags('Group1 dashboard')
@ApiBearerAuth()
@UseGuards(GroupGuard)
@Controller('group-dashboard')
export class GroupDashboardController {
  constructor(private readonly service: GroupDashboardService, private readonly access: GroupAccess) {}
  @Get('me') me(@CurrentUser() actor: AuthUser, @CurrentGroup() group: GroupScope) { return this.access.resolve(actor, false, group.id); }
  @Get('groups') groups(@CurrentUser() actor: AuthUser) { return this.service.groups(actor); }
  @Get('overview') overview(@CurrentGroup() group: GroupScope) { return this.service.overview(group); }
  @Get('branches') branches(@CurrentGroup() group: GroupScope) { return this.service.branches(group); }
  @Get('vehicles') vehicles(@Query() query: GroupQuery, @CurrentGroup() group: GroupScope) { return this.service.inventory(query, group); }
  @Get('leads') leads(@Query() query: GroupQuery, @CurrentGroup() group: GroupScope) { return this.service.leadList(query, group); }
  @Get('customers') customers(@Query() query: GroupQuery, @CurrentGroup() group: GroupScope) { return this.service.customers(query, group); }
  @Get('branches/:id') branchDetail(@Param('id') id: string, @CurrentGroup() group: GroupScope) { return this.service.branchDetail(id, group); }
  @Get('vehicles/:id') vehicleDetail(@Param('id') id: string, @CurrentGroup() group: GroupScope) { return this.service.vehicleDetail(id, group); }
  @Get('leads/:id') leadDetail(@Param('id', ParseUUIDPipe) id: string, @CurrentGroup() group: GroupScope) { return this.service.leadDetail(id, group); }
  @Get('customers/:id') customerDetail(@Param('id', ParseUUIDPipe) id: string, @CurrentGroup() group: GroupScope) { return this.service.customerDetail(id, group); }
  @Get('staff/:id') staffDetail(@Param('id', ParseUUIDPipe) id: string, @CurrentGroup() group: GroupScope) { return this.service.staffDetail(id, group); }
  @Get('staff') staff(@CurrentGroup() group: GroupScope) { return this.service.staff(group); }
  @Post('branches/:id/update') updateBranch(@CurrentUser() actor: AuthUser, @Param('id') id: string, @Body() dto: GroupBranchProfileDto, @CurrentGroup() group: GroupScope) { return this.service.updateBranch(actor, id, dto, group.id); }
  @Post('branches/:id/staff') inviteStaff(@CurrentUser() actor: AuthUser, @Param('id') id: string, @Body() dto: CreateStaffDto, @CurrentGroup() group: GroupScope) { return this.service.inviteStaff(actor, id, dto, group.id); }
  @Post('staff/:id/update') updateStaff(@CurrentUser() actor: AuthUser, @Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateStaffDto, @CurrentGroup() group: GroupScope) { return this.service.updateStaff(actor, id, dto, group.id); }
  @Post('notifications') broadcast(@CurrentUser() actor: AuthUser, @Body() dto: BroadcastNotificationDto, @CurrentGroup() group: GroupScope) { return this.service.broadcast(actor, dto, group.id); }
  @Post('vehicles/:id/update') update(@CurrentUser() actor: AuthUser, @Param('id') id: string, @Body() dto: UpdateVehicleDto, @CurrentGroup() group: GroupScope) { return this.service.updateVehicle(actor, id, dto, group.id); }
  @Post('vehicles/:id/transition') transition(@CurrentUser() actor: AuthUser, @Param('id') id: string, @Body() dto: GroupTransitionDto, @CurrentGroup() group: GroupScope) { return this.service.transition(actor, id, dto, group.id); }
  @Post('leads/:id/stage') stage(@CurrentUser() actor: AuthUser, @Param('id', ParseUUIDPipe) id: string, @Body() dto: ChangeStageDto, @CurrentGroup() group: GroupScope) { return this.service.stage(actor, id, dto, group.id); }
  @Post('leads/:id/assign') assign(@CurrentUser() actor: AuthUser, @Param('id', ParseUUIDPipe) id: string, @Body() dto: AssignLeadDto, @CurrentGroup() group: GroupScope) { return this.service.assign(actor, id, dto, group.id); }
}

@Module({ imports: [NotificationsModule, VehiclesModule, CrmModule, DealersModule], controllers: [GroupDashboardController], providers: [GroupAccess, GroupGuard, GroupDashboardService] })
export class GroupDashboardModule {}
