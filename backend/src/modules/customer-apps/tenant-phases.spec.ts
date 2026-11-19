import { customerAppMiddleware, currentAppId, customerAppStorage, MAIN_APP, type CustomerAppContext } from './app-context';
import { currentDealerScope } from '../../infrastructure/database/dealer-scope';
import { appHostResolver } from './app-hosts';
import { AppConfigController } from './customer-apps.module';
import { ContentService } from '../content/content.service';
import { GROUP1_DEALER_IDS } from './group1';

const group1: CustomerAppContext = { id: 'group1', name: 'Group1', dealerIds: [...GROUP1_DEALER_IDS], enabled: true, resetUrl: null };
const north: CustomerAppContext = { id: 'group-north', name: 'North', dealerIds: ['5001', '5002'], enabled: true, resetUrl: null };
async function run(url: string, headers: Record<string, string> = {}, apps: CustomerAppContext[] = [group1, north], hosts: Record<string, string> = {}) {
  const req = { url, originalUrl: url, headers } as any;
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as any;
  const resolve = jest.fn(async (id: string) => apps.find(a => a.id === id) ?? null);
  let seen: any;
  const next = jest.fn(() => { seen = { appId: currentAppId(), scope: currentDealerScope()?.dealerIds, url: req.url }; });
  await customerAppMiddleware('api/v1', resolve, async host => hosts[host] ?? null)(req, res, next);
  return { res, next, resolve, seen };
}

describe('phase 2: choosing the tenant', () => {
  it('leaves main ChangeCars requests untouched (no header, unknown host, main-app header)', async () => {
    for (const headers of [{}, { host: 'changecarapi.wowcar.co.th' }, { 'x-app-id': 'changecars' }] as Record<string, string>[]) {
      const result = await run('/api/v1/vehicles?page=2', headers);
      expect(result.seen).toEqual({ appId: MAIN_APP, scope: undefined, url: '/api/v1/vehicles?page=2' });
      expect(result.resolve).not.toHaveBeenCalled();
    }
  });
  it('keeps the original Group1 path prefix exactly as before', async () => {
    const result = await run('/api/v1/apps/group1/vehicles?q=x');
    expect(result.seen).toEqual({ appId: 'group1', scope: [...GROUP1_DEALER_IDS], url: '/api/v1/vehicles?q=x' });
  });
  it('opens an app from the X-App-Id header or its own domain', async () => {
    expect((await run('/api/v1/vehicles', { 'x-app-id': 'group-north' })).seen).toEqual({ appId: 'group-north', scope: ['5001', '5002'], url: '/api/v1/vehicles' });
    expect((await run('/api/v1/vehicles', { host: 'api.north.co.za:443' }, undefined, { 'api.north.co.za': 'group-north' })).seen).toMatchObject({ appId: 'group-north' });
  });
  it('rejects unknown, conflicting or staff-route app selections', async () => {
    expect((await run('/api/v1/vehicles', { 'x-app-id': 'nope-app' })).res.status).toHaveBeenCalledWith(404);
    expect((await run('/api/v1/apps/group1/vehicles', { 'x-app-id': 'group-north' })).res.status).toHaveBeenCalledWith(400);
    expect((await run('/api/v1/scope/123/vehicles', { 'x-app-id': 'group-north' })).res.status).toHaveBeenCalledWith(400);
    expect((await run('/api/v1/vehicles?dealerId=1', { 'x-app-id': 'group-north' })).res.status).toHaveBeenCalledWith(400);
    for (const path of ['admin/users', 'group-dashboard/me', 'dealer/vehicles']) expect((await run(`/api/v1/${path}`, { 'x-app-id': 'group-north' })).res.status).toHaveBeenCalledWith(404);
  });
  it('caches the host map and survives a database error', async () => {
    let t = 0; const findMany = jest.fn().mockResolvedValueOnce([{ id: 'group-north', domains: ['api.north.co.za'] }]).mockRejectedValueOnce(new Error('down'));
    const resolve = appHostResolver({ customerApp: { findMany } } as any, () => t);
    expect(await resolve('api.north.co.za')).toBe('group-north');
    expect(await resolve('other.example.com')).toBeNull();
    expect(findMany).toHaveBeenCalledTimes(1);
    t = 61_000; expect(await resolve('api.north.co.za')).toBe('group-north');
  });
});

describe('phase 3: tenant content', () => {
  const setup = () => {
    const replica = { adBanner: { findMany: jest.fn().mockResolvedValue([]) }, testimonial: { findMany: jest.fn().mockResolvedValue([]) } };
    const cache = { versionedKey: jest.fn(async (_ns: string, key: string) => key), wrap: jest.fn((_k: string, _t: number, load: () => unknown) => load()) };
    return { replica, cache, service: new ContentService({ replica } as never, cache as never, {} as never) };
  };
  it('shows the main site only shared content (all existing rows) and keys its cache by app', async () => {
    const { service, replica, cache } = setup();
    await service.adBanners(); await service.testimonials();
    expect(replica.adBanner.findMany.mock.calls[0][0].where).toMatchObject({ isActive: true, appId: null });
    expect(replica.testimonial.findMany.mock.calls[0][0].where).toEqual({ isActive: true, appId: null });
    expect(cache.versionedKey).toHaveBeenCalledWith(expect.anything(), 'ad-banners:changecars');
  });
  it('shows an app shared content plus its own', async () => {
    const { service, replica } = setup();
    await customerAppStorage.run(north, () => service.testimonials());
    expect(replica.testimonial.findMany.mock.calls[0][0].where).toEqual({ isActive: true, OR: [{ appId: null }, { appId: 'group-north' }] });
  });
});

describe('phase 4: app config', () => {
  it('returns the calling app branding, and the main app outside an app', async () => {
    const findUnique = jest.fn(async ({ where }: any) => ({ id: where.id, name: where.id === 'changecars' ? 'Change Cars' : 'North', config: where.id === 'changecars' ? {} : { primaryColor: '#112233' } }));
    const controller = new AppConfigController({ customerApp: { findUnique } } as any);
    expect(await controller.get()).toEqual({ id: 'changecars', name: 'Change Cars', dealerIds: [], config: {} });
    expect(await customerAppStorage.run(north, () => controller.get())).toEqual({ id: 'group-north', name: 'North', dealerIds: ['5001', '5002'], config: { primaryColor: '#112233' } });
  });
});
