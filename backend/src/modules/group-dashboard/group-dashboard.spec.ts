import { ValidationPipe } from '@nestjs/common';
import { GroupAccess, GroupDashboardService, GroupDashboardController, GroupGuard, GroupBranchProfileDto } from './group-dashboard.module';
import { GROUP1_DEALER_IDS } from '../customer-apps/group1';
import { GUARDS_METADATA } from '@nestjs/common/constants';

const actor = { id: 'actor', role: 'DEALER', appId: 'changecars' } as any;
const staffUser = (overrides: any = {}) => ({ id: 'actor', role: 'DEALER', appId: 'changecars', status: 'ACTIVE', deletedAt: null, firstName: 'Group', lastName: 'Staff', dealerMember: { status: 'ACTIVE', role: 'STAFF', dealerId: '3490', dealer: { status: 'APPROVED' } }, ...overrides });
function fixture(user = staffUser()) {
 const db = { dealer: { findFirst: jest.fn().mockResolvedValue(null) }, dealerMember: { findFirst: jest.fn().mockResolvedValue(null) }, user: { findUnique: jest.fn().mockResolvedValue(user), findFirst: jest.fn().mockResolvedValue(null), count: jest.fn().mockResolvedValue(1), findMany: jest.fn().mockResolvedValue([]) }, vehicle: { findFirst: jest.fn().mockResolvedValue(null), findMany: jest.fn().mockResolvedValue([]), count: jest.fn().mockResolvedValue(0) }, lead: { findFirst: jest.fn().mockResolvedValue(null), findMany: jest.fn().mockResolvedValue([]), count: jest.fn().mockResolvedValue(0) } };
 const access = new GroupAccess(db as any);
 const broadcasts = { queue: jest.fn().mockResolvedValue({ recipients: 1 }) };
 const vehicles = { update: jest.fn(), transition: jest.fn() };
 const leads = { changeStage: jest.fn(), assign: jest.fn() };
 const dealers = { updateProfile: jest.fn().mockResolvedValue({ id: "3490" }) };
 const service = new GroupDashboardService(db as any, access, broadcasts as any, { configured: false } as any, vehicles as any, leads as any, dealers as any);
 return { db, access, broadcasts, service, vehicles, leads, dealers };
}
describe('Group1 dashboard security and isolation', () => {
 it('guards every endpoint including reads and writes', () => { expect(Reflect.getMetadata(GUARDS_METADATA, GroupDashboardController)).toContain(GroupGuard); });
 it('admits active group staff for reads but requires management membership for writes', async () => {
  const { access } = fixture(); expect(await access.resolve(actor)).toMatchObject({ canManage: false, dealerIds: [...GROUP1_DEALER_IDS] }); await expect(access.resolve(actor, true)).rejects.toThrow();
 });
 it.each([
  staffUser({ role: 'CUSTOMER' }), staffUser({ role: 'ADMIN' }), staffUser({ status: 'SUSPENDED' }), staffUser({ deletedAt: new Date() }), staffUser({ appId: 'group1' }),
  staffUser({ dealerMember: null }), staffUser({ dealerMember: { status: 'ACTIVE', role: 'OWNER', dealerId: '9999', dealer: { status: 'APPROVED' } } }),
  staffUser({ dealerMember: { status: 'REMOVED', role: 'OWNER', dealerId: '3490', dealer: { status: 'APPROVED' } } }),
  staffUser({ dealerMember: { status: 'ACTIVE', role: 'OWNER', dealerId: '3490', dealer: { status: 'SUSPENDED' } } }),
 ])('rejects outsiders, customers, inactive and revoked accounts %#', async user => { await expect(fixture(user).access.resolve(actor)).rejects.toThrow(); });
 it('uses current database membership rather than trusting an old super-admin claim', async () => { const { access } = fixture(); await expect(access.resolve({ ...actor, role: 'SUPER_ADMIN' }, true)).rejects.toThrow(); });
 it('allows an active super admin without dealer membership', async () => { const { access } = fixture(staffUser({ role: 'SUPER_ADMIN', dealerMember: null })); expect(await access.resolve(actor, true)).toMatchObject({ superAdmin: true, canManage: true }); });
 it('rechecks revocation on every request', async () => { const { db, access } = fixture(); await access.resolve(actor); db.user.findUnique.mockResolvedValueOnce(staffUser({ status: 'SUSPENDED' })); await expect(access.resolve(actor)).rejects.toThrow(); });
 it('always scopes inventory and leads to the fixed group IDs, including counts', async () => {
  const { db, service } = fixture(); await service.inventory({ q: 'Toyota', page: 2 }); await service.leadList({});
  for(const model of [db.vehicle, db.lead]) { expect(model.findMany).toHaveBeenCalledWith(expect.objectContaining({ where: expect.objectContaining({ dealerId: { in: [...GROUP1_DEALER_IDS] } }) })); expect(model.count).toHaveBeenCalledWith(expect.objectContaining({ where: expect.objectContaining({ dealerId: { in: [...GROUP1_DEALER_IDS] } }) })); }
 });
 it('shows only Group1 app customers and no password hashes', async () => { const { db, service } = fixture(); await service.customers({}); const query = db.user.findMany.mock.calls[0][0]; expect(query.where).toMatchObject({ appId: 'group1', role: 'CUSTOMER' }); expect(query.select).not.toHaveProperty('passwordHash'); });
 it('does not permit updates to an outside-group record', async () => { const { service, vehicles, db } = fixture(staffUser({ role: 'SUPER_ADMIN' })); await expect(service.updateVehicle(actor, 'outside', { price: 100 })).rejects.toThrow(); expect(db.vehicle.findFirst).toHaveBeenCalledWith(expect.objectContaining({ where: { id: 'outside', dealerId: { in: [...GROUP1_DEALER_IDS] } } })); expect(vehicles.update).not.toHaveBeenCalled(); });
 it('queues group announcements with forced Group1 app scope', async () => { const { service, broadcasts } = fixture(staffUser({ role: 'SUPER_ADMIN' })); await service.broadcast(actor, { title: 'Hello', body: 'Group news', audience: 'customers' }); expect(broadcasts.queue).toHaveBeenCalledWith(actor, expect.objectContaining({ appId: 'group1', audience: 'customers' })); });
 it.each([{ appId: 'changecars', audience: 'customers' }, { appId: 'group1', audience: 'all' }, { appId: 'group1', audience: 'dealers' }])('rejects cross-app or non-customer broadcast targets %j', async target => { const { service, broadcasts } = fixture(staffUser({ role: 'SUPER_ADMIN' })); await expect(service.broadcast(actor, { title: 'x', body: 'y', ...target })).rejects.toThrow(); expect(broadcasts.queue).not.toHaveBeenCalled(); });
 it('rejects selected recipients outside Group1 instead of silently sending elsewhere', async () => { const { service, db, broadcasts } = fixture(staffUser({ role: 'SUPER_ADMIN' })); db.user.count.mockResolvedValueOnce(0); await expect(service.broadcast(actor, { title: 'x', body: 'y', audience: 'selected', userIds: ['outside'] })).rejects.toThrow(); expect(broadcasts.queue).not.toHaveBeenCalled(); });
 it('group managers cannot provision or disable dashboard accounts', async () => {
  const { service } = fixture(staffUser({ dealerMember: { status: 'ACTIVE', role: 'MANAGER', dealerId: '3490', dealer: { status: 'APPROVED' } } }));
  await expect(service.inviteStaff(actor, '3490', { email: 'x@example.com', firstName: 'X', lastName: 'Y', role: 'MANAGER' })).rejects.toThrow();
  await expect(service.updateStaff(actor, 'member', { status: 'DISABLED' })).rejects.toThrow();
 });
 it('super admins cannot invite staff into an outside-group dealership through this dashboard', async () => {
  const { service } = fixture(staffUser({ role: 'SUPER_ADMIN' }));
  await expect(service.inviteStaff(actor, '9999', { email: 'x@example.com', firstName: 'X', lastName: 'Y', role: 'MANAGER' })).rejects.toThrow();
 });
 it.each(['vehicleDetail', 'leadDetail', 'staffDetail'] as const)('keeps %s requests inside the group, including guessed record IDs', async method => {
  const { db, service } = fixture();
  await expect(service[method]('outside')).rejects.toThrow();
  const model = method === 'vehicleDetail' ? db.vehicle : method === 'leadDetail' ? db.lead : db.dealerMember;
  expect(model.findFirst).toHaveBeenCalledWith(expect.objectContaining({ where: { id: 'outside', dealerId: { in: [...GROUP1_DEALER_IDS] } } }));
 });
 it('restricts branch details to group dealership IDs', async () => {
  const { db, service } = fixture(); await expect(service.branchDetail('outside')).rejects.toThrow();
  expect(db.dealer.findFirst).toHaveBeenCalledWith(expect.objectContaining({ where: { id: 'outside', AND: { id: { in: [...GROUP1_DEALER_IDS] } } } }));
 });
 it('restricts customer profiles to Group1 and excludes credentials', async () => {
  const { db, service } = fixture(); await expect(service.customerDetail('outside')).rejects.toThrow();
  const query = db.user.findFirst.mock.calls[0][0]; expect(query.where).toMatchObject({ id: 'outside', appId: 'group1', role: 'CUSTOMER', deletedAt: null });
  expect(query.select).not.toHaveProperty('passwordHash'); expect(query.select).not.toHaveProperty('sessions');
 });
 it('selects real vehicle gallery images and features without exposing private identifiers', async () => {
  const { db, service } = fixture(); db.vehicle.findFirst.mockResolvedValueOnce({ id: '1581', images: [] } as any);
  expect(await service.vehicleDetail('1581')).toEqual({ id: '1581', images: [] });
  const query = db.vehicle.findFirst.mock.calls[0][0]; expect(query.select.images.select).toMatchObject({ url: true, largeUrl: true, altText: true });
  expect(query.select.featureAssignments).toBeDefined(); expect(query.select).not.toHaveProperty('vin'); expect(query.select).not.toHaveProperty('registrationNumber');
 });
 it('allows a group manager to update only a configured group branch through the audited profile service', async () => {
  const { db, service, dealers } = fixture(staffUser({ dealerMember: { status: 'ACTIVE', role: 'MANAGER', dealerId: '3490', dealer: { status: 'APPROVED' } } }));
  db.dealer.findFirst.mockResolvedValueOnce({ id: '3490' } as any);
  await service.updateBranch(actor, '3490', { name: 'Updated branch', email: 'branch@example.com' });
  expect(dealers.updateProfile).toHaveBeenCalledWith({ dealerId: '3490' }, { name: 'Updated branch', email: 'branch@example.com' }, { preserveFeedFields: true });
 });
 it('denies ordinary staff and outside-group branch edits', async () => {
  const staff = fixture(); await expect(staff.service.updateBranch(actor, '3490', { name: 'X' })).rejects.toThrow(); expect(staff.dealers.updateProfile).not.toHaveBeenCalled();
  const admin = fixture(staffUser({ role: 'SUPER_ADMIN' })); await expect(admin.service.updateBranch(actor, 'outside', { name: 'X' })).rejects.toThrow(); expect(admin.dealers.updateProfile).not.toHaveBeenCalled();
 });
 it('rejects changes to status, billing or access through the profile DTO', async () => {
  const pipe = new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true });
  for (const key of ['status', 'plan', 'biddingEnabled', 'dealerIds']) await expect(pipe.transform({ name: 'Group1 branch', [key]: 'APPROVED' }, { type: 'body', metatype: GroupBranchProfileDto })).rejects.toThrow();
  await expect(pipe.transform({ email: 'invalid', logoUrl: 'javascript:alert(1)' }, { type: 'body', metatype: GroupBranchProfileDto })).rejects.toThrow();
  await expect(pipe.transform({ logoUrl: 'http://localhost:4000/media/logo.png', website: null }, { type: 'body', metatype: GroupBranchProfileDto })).resolves.toBeDefined();
 });
 it('ordinary group staff cannot send announcements', async () => { const { service, broadcasts } = fixture(); await expect(service.broadcast(actor, { title: 'x', body: 'y', audience: 'customers' })).rejects.toThrow(); expect(broadcasts.queue).not.toHaveBeenCalled(); });
});
