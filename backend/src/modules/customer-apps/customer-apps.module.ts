import { Transform, Type } from 'class-transformer';
import { Body, Controller, Get, Module, Param, Patch, Post, Injectable, OnModuleInit } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ArrayMaxSize, ArrayNotEmpty, IsArray, IsBoolean, IsEmail, IsObject, IsOptional, IsString, Matches, MaxLength, MinLength, ValidateNested } from 'class-validator';
import { Public, Roles } from '../../common/decorators/auth.decorators';
import { Errors } from '../../common/errors/app-error';
import { PrismaService } from '../../infrastructure/database/prisma.service';
import { AuditService } from '../../infrastructure/audit/audit.service';
import { UserRole } from '../../generated/prisma/client';
import { GROUP1_APP_ID, GROUP1_APP_NAME, GROUP1_DEALER_IDS, GROUP_APPS_WHERE, isGroupAppId } from './group1';
import { DEALER_CUSTOMER_ID, validCustomerAppScope } from './dealer-app-identity';
import { currentAppId, customerAppStorage, MAIN_APP } from './app-context';
import { DOMAIN } from './app-hosts';
import { Prisma } from '../../generated/prisma/client';

const HTTPS_URL = /^https:\/\/[^\s]{4,1990}$/;
const COLOUR = /^#[0-9a-fA-F]{6}$/;
/** Branding a branded app reads from GET /app-config. Only these keys are stored. */
class AppConfigDto {
  @IsOptional() @IsString() @Matches(HTTPS_URL) logoUrl?: string;
  @IsOptional() @IsString() @Matches(COLOUR) primaryColor?: string;
  @IsOptional() @IsString() @Matches(COLOUR) secondaryColor?: string;
  @IsOptional() @IsEmail() @MaxLength(200) supportEmail?: string;
  @IsOptional() @IsString() @Matches(/^[+\d][\d\s()-]{5,30}$/) supportPhone?: string;
  @IsOptional() @IsString() @Matches(HTTPS_URL) website?: string;
  @IsOptional() @IsString() @MaxLength(300) tagline?: string;
  @IsOptional() @IsObject() features?: Record<string, boolean>;
}
const cleanConfig = (config: AppConfigDto) => {
  const out: Record<string, unknown> = {};
  for (const key of ['logoUrl', 'primaryColor', 'secondaryColor', 'supportEmail', 'supportPhone', 'website', 'tagline'] as const) {
    const value = config[key]?.trim();
    if (value) out[key] = value;
  }
  const features = Object.entries(config.features ?? {}).filter(([key, value]) => /^[a-zA-Z][\w-]{0,40}$/.test(key) && typeof value === 'boolean').slice(0, 30);
  if (features.length) out.features = Object.fromEntries(features);
  return out;
};

class CreateCustomerAppDto {
  @IsString() @Matches(/^[a-z0-9][a-z0-9-]{2,63}$/) id: string;
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value) @IsString() @MinLength(1) @MaxLength(120) name: string;
  @IsArray() @ArrayNotEmpty() @ArrayMaxSize(20) @IsString({ each: true }) @Matches(DEALER_CUSTOMER_ID, { each: true }) dealerIds: string[];
  @IsOptional() @IsString() @MaxLength(2000) resetUrl?: string;
  @IsOptional() @IsArray() @ArrayMaxSize(5) @IsString({ each: true }) @Transform(({ value }) => Array.isArray(value) ? value.map((d: unknown) => typeof d === 'string' ? d.trim().toLowerCase() : d) : value) @Matches(DOMAIN, { each: true }) domains?: string[];
  @IsOptional() @ValidateNested() @Type(() => AppConfigDto) config?: AppConfigDto;
}
class AppStatusDto { @IsBoolean() enabled: boolean; }

@ApiTags('Customer apps')
@ApiBearerAuth()
@Roles(UserRole.SUPER_ADMIN)
@Controller('admin/customer-apps')
export class CustomerAppsController {
  constructor(private readonly db: PrismaService, private readonly audit: AuditService) {}

  @Get()
  list() { return this.db.customerApp.findMany({ orderBy: { name: 'asc' } }); }

  @Post()
  async create(@Body() dto: CreateCustomerAppDto) {
    if (!validCustomerAppScope({ id: dto.id, dealerIds: dto.dealerIds })) throw Errors.badRequest('INVALID_APP_SCOPE', 'Use dealer-<dealerId> with that one dealer ID, the existing Group1 branch set, or a group ID with 1-20 dealer IDs');
    if (dto.resetUrl) {
      let reset: URL;
      try { reset = new URL(dto.resetUrl); } catch { throw Errors.badRequest('INVALID_RESET_URL', 'Enter a valid HTTPS reset URL'); }
      if ((reset.protocol !== 'https:' && !(reset.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(reset.hostname))) || reset.username || reset.password || reset.hash) {
        throw Errors.badRequest('INVALID_RESET_URL', 'Use an HTTPS reset URL without credentials or fragment');
      }
    }
    const dealerIds = [...new Set(dto.dealerIds)].sort();
    const count = await this.db.dealer.count({ where: { id: { in: dealerIds }, status: 'APPROVED' } });
    if (count !== dealerIds.length) throw Errors.badRequest('INVALID_DEALERS', 'All dealers must be approved');
    if (isGroupAppId(dto.id)) {
      // A dealer belongs to at most one group, so its staff always open exactly one group dashboard.
      const taken = await this.db.customerApp.findFirst({ where: { ...GROUP_APPS_WHERE, id: { not: dto.id }, dealerIds: { hasSome: dealerIds } }, select: { id: true } });
      if (taken) throw Errors.conflict('DEALER_IN_OTHER_GROUP', `One or more dealers already belong to the ${taken.id} group`);
    }
    const domains = dto.domains === undefined ? undefined : [...new Set(dto.domains)];
    if (domains?.length) {
      const apiHosts = [process.env.API_PUBLIC_URL, 'https://changecarapi.wowcar.co.th'].flatMap(url => { try { return url ? [new URL(url).hostname] : []; } catch { return []; } });
      if (domains.some(domain => apiHosts.includes(domain))) throw Errors.badRequest('INVALID_DOMAIN', 'The main API host cannot belong to an app');
      const used = await this.db.customerApp.findFirst({ where: { id: { not: dto.id }, domains: { hasSome: domains } }, select: { id: true } });
      if (used) throw Errors.conflict('DOMAIN_IN_USE', `A domain is already used by the ${used.id} app`);
    }
    const extras = { ...(domains !== undefined ? { domains } : {}), ...(dto.config !== undefined ? { config: cleanConfig(dto.config) as Prisma.InputJsonValue } : {}) };
    try {
      return await this.db.$transaction(async tx => {
        const app = await tx.customerApp.upsert({ where: { id: dto.id },
          create: { id: dto.id, name: dto.id === GROUP1_APP_ID ? GROUP1_APP_NAME : dto.name, dealerIds, resetUrl: dto.resetUrl || null, ...extras },
          update: { name: dto.id === GROUP1_APP_ID ? GROUP1_APP_NAME : dto.name, dealerIds, ...(dto.resetUrl !== undefined ? { resetUrl: dto.resetUrl || null } : {}), ...extras } });
        await this.audit.record({ action: 'customer_app.create', entityType: 'CustomerApp', entityId: app.id, after: app }, tx);
        return app;
      });
    } catch (error) {
      if ((error as { code?: string }).code === 'P2002') throw Errors.conflict('APP_EXISTS', 'This app ID is already registered');
      throw error;
    }
  }

  @Patch(':id/status')
  async status(@Param('id') id: string, @Body() dto: AppStatusDto) {
    if (id === MAIN_APP) throw Errors.badRequest('MAIN_APP_PROTECTED', 'The main app cannot be disabled');
    const registered = await this.db.customerApp.findUnique({ where: { id } });
    if (!registered || !validCustomerAppScope(registered)) throw Errors.notFound('App');
    if (dto.enabled && await this.db.dealer.count({ where: { id: { in: registered.dealerIds }, status: 'APPROVED' } }) !== registered.dealerIds.length) throw Errors.badRequest('INVALID_DEALERS', 'Only approved dealers can enable app access');
    return this.db.$transaction(async tx => {
      const app = await tx.customerApp.update({ where: { id }, data: dto });
      if (!dto.enabled) await tx.session.updateMany({ where: { user: { appId: id }, revokedAt: null }, data: { revokedAt: new Date() } });
      await this.audit.record({ action: 'customer_app.status', entityType: 'CustomerApp', entityId: id, after: dto }, tx);
      return app;
    });
  }
}

/** Public: the calling app's name and branding, so one app build can theme itself per tenant. */
@ApiTags('Customer apps')
@Controller('app-config')
export class AppConfigController {
  constructor(private readonly db: PrismaService) {}
  @Public()
  @Get()
  async get() {
    const app = customerAppStorage.getStore();
    const id = currentAppId();
    const row = await this.db.customerApp.findUnique({ where: { id }, select: { id: true, name: true, config: true } });
    return { id, name: row?.name ?? app?.name ?? 'ChangeCars', dealerIds: app ? [...app.dealerIds].sort() : [], config: row?.config ?? {} };
  }
}

/** No manual app creation or extra migration is needed after the app-directory migration. */
@Injectable()
export class Group1AppBootstrap implements OnModuleInit {
  constructor(private readonly db: PrismaService) {}
  async onModuleInit() {
    await this.db.customerApp.upsert({
      where: { id: GROUP1_APP_ID },
      create: { id: GROUP1_APP_ID, name: GROUP1_APP_NAME, dealerIds: [...GROUP1_DEALER_IDS] },
      // Keep enabled/resetUrl settings; branch selection and identity are fixed.
      update: { name: GROUP1_APP_NAME, dealerIds: [...GROUP1_DEALER_IDS] },
    });
  }
}

@Module({ controllers: [CustomerAppsController, AppConfigController], providers: [Group1AppBootstrap] })
export class CustomerAppsModule {}
