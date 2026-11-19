import { GROUP1_DEALER_IDS, GROUP1_SCOPE, groupById, groupForDealer, isGroupAppId, validGroupScope } from './group1';
import { validCustomerAppScope } from './dealer-app-identity';
import { GroupAccess, GroupDashboardService, GroupGuard } from '../group-dashboard/group-dashboard.module';

const NORTH = { id: 'group-north', name: 'North Group', dealerIds: ['5002', '5001'] };
const lookup = (rows: typeof NORTH[]) => jest.fn(({ where }: any) => Promise.resolve(rows.find(r => (where.id === undefined || r.id === where.id) && (where.dealerIds?.has === undefined || r.dealerIds.includes(where.dealerIds.has))) ?? null));

describe('multi-tenant dealer groups', () => {
  it('keeps Group1 exactly as before and never reads the database for it', async () => {
    const findFirst = jest.fn();
    expect(await groupForDealer({ customerApp: { findFirst } }, '3490')).toBe(GROUP1_SCOPE);
    expect(await groupById({ customerApp: { findFirst } }, 'group1')).toBe(GROUP1_SCOPE);
    expect(findFirst).not.toHaveBeenCalled();
    expect(GROUP1_SCOPE.dealerIds).toEqual([...GROUP1_DEALER_IDS]);
    expect(validCustomerAppScope({ id: 'group1', dealerIds: ['3490', '3491'] })).toBe(false);
  });
  it('never treats the main app or single-dealer apps as groups', () => {
    for (const id of ['changecars', 'dealer-3490', 'dealer-x', 'ab', 'Group-X', 'a/b']) expect(isGroupAppId(id)).toBe(false);
    expect(validCustomerAppScope({ id: 'changecars', dealerIds: [] })).toBe(false);
    expect(validCustomerAppScope({ id: 'changecars', dealerIds: ['1', '2'] })).toBe(false);
  });
  it.each([[[]], [['5001', '5001']], [['5001', 'x/y']], [Array.from({ length: 21 }, (_, i) => String(i + 1))]])('rejects invalid group dealer sets %j', dealerIds => {
    expect(validGroupScope({ id: 'group-north', dealerIds })).toBe(false);
  });
  it('accepts a new group with 1-20 dealers and resolves its staff to it', async () => {
    expect(validCustomerAppScope(NORTH)).toBe(true);
    expect(validCustomerAppScope({ id: 'weelee-app', dealerIds: ['2587'] })).toBe(true);
    expect(await groupForDealer({ customerApp: { findFirst: lookup([NORTH]) } }, '5001')).toEqual({ id: 'group-north', name: 'North Group', dealerIds: ['5001', '5002'] });
    expect(await groupForDealer({ customerApp: { findFirst: lookup([NORTH]) } }, '9999')).toBeNull();
  });

  const user = (overrides: any = {}) => ({ id: 'actor', role: 'DEALER', appId: 'changecars', status: 'ACTIVE', deletedAt: null, firstName: 'A', lastName: 'B', dealerMember: { status: 'ACTIVE', role: 'OWNER', dealerId: '5001', dealer: { status: 'APPROVED' } }, ...overrides });
  const fixture = (u = user()) => {
    const db = { user: { findUnique: jest.fn().mockResolvedValue(u), findMany: jest.fn().mockResolvedValue([]), count: jest.fn().mockResolvedValue(0) }, customerApp: { findFirst: lookup([NORTH]) },
      vehicle: { findMany: jest.fn().mockResolvedValue([]), count: jest.fn().mockResolvedValue(0), findFirst: jest.fn().mockResolvedValue(null) }, lead: { findFirst: jest.fn().mockResolvedValue(null) } };
    const access = new GroupAccess(db as any);
    const broadcasts = { queue: jest.fn() };
    return { db, access, broadcasts, service: new GroupDashboardService(db as any, access, broadcasts as any, { configured: false } as any, { update: jest.fn() } as any, {} as any, {} as any) };
  };
  const guard = async (access: GroupAccess, headers: Record<string, string> = {}) => { const req: any = { user: { id: 'actor' }, headers }; await new GroupGuard(access).canActivate({ switchToHttp: () => ({ getRequest: () => req }) } as any); return req.groupScope; };

  it('scopes new group staff to their own dealers and app customers only', async () => {
    const { access, service, db } = fixture();
    const group = await guard(access);
    expect(group).toMatchObject({ id: 'group-north', dealerIds: ['5001', '5002'] });
    await service.inventory({}, group); await service.customers({}, group);
    expect(db.vehicle.findMany.mock.calls[0][0].where.dealerId).toEqual({ in: ['5001', '5002'] });
    expect(db.user.findMany.mock.calls[0][0].where.appId).toBe('group-north');
  });
  it('keeps staff in their own group whatever group header is sent', async () => {
    const { access } = fixture();
    expect(await guard(access, { 'x-group-id': 'group1' })).toMatchObject({ id: 'group-north' });
    const group1Staff = fixture(user({ dealerMember: { status: 'ACTIVE', role: 'OWNER', dealerId: '3490', dealer: { status: 'APPROVED' } } }));
    expect(await guard(group1Staff.access, { 'x-group-id': 'group-north' })).toBe(GROUP1_SCOPE);
    expect(await guard(group1Staff.access)).toBe(GROUP1_SCOPE);
  });
  it('lets super admins pick a group, defaulting to Group1 as before', async () => {
    const { access } = fixture(user({ role: 'SUPER_ADMIN', dealerMember: null }));
    expect(await guard(access)).toBe(GROUP1_SCOPE);
    expect(await guard(access, { 'x-group-id': 'group-north' })).toMatchObject({ id: 'group-north' });
    await expect(guard(access, { 'x-group-id': 'changecars' })).rejects.toThrow();
    await expect(guard(access, { 'x-group-id': 'dealer-3490' })).rejects.toThrow();
  });
  it('forces broadcasts and writes into the resolved group', async () => {
    const { service, broadcasts, db } = fixture();
    await service.broadcast({ id: 'actor' } as any, { title: 't', body: 'b', audience: 'customers' }, 'group-north');
    expect(broadcasts.queue).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ appId: 'group-north' }));
    await expect(service.broadcast({ id: 'actor' } as any, { title: 't', body: 'b', audience: 'customers', appId: 'group1' })).rejects.toThrow();
    await expect(service.updateVehicle({ id: 'actor' } as any, 'v1', { price: 1 })).rejects.toThrow();
    expect(db.vehicle.findFirst).toHaveBeenCalledWith(expect.objectContaining({ where: { id: 'v1', dealerId: { in: ['5001', '5002'] } } }));
  });
});
