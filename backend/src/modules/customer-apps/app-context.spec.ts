import { Group1AppBootstrap } from './customer-apps.module';
import { GROUP1_DEALER_IDS, isGroup1Scope } from './group1';
import { Reflector } from '@nestjs/core';
import type { ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { dealerScopeStorage, currentDealerScope } from '../../infrastructure/database/dealer-scope';
import { authAppId, currentAppId, customerAppMiddleware, customerAppStorage, MAIN_APP } from './app-context';

const app: import('./app-context').CustomerAppContext = { id: 'group1', name: 'Group1', dealerIds: [...GROUP1_DEALER_IDS], enabled: true, resetUrl: 'https://dealer-a.example/reset' };
async function run(url: string, registered: typeof app | null = app) {
  const req = { url, originalUrl: url } as any;
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as any;
  const resolve = jest.fn().mockResolvedValue(registered);
  let seen: unknown;
  const next = jest.fn(() => { seen = { appId: currentAppId(), scope: currentDealerScope(), url: req.url }; });
  await customerAppMiddleware('api/v1', resolve)(req, res, next);
  return { res, next, resolve, seen };
}

describe('registered customer app boundary', () => {
  it('uses the registered app and dealer scope while preserving query parameters', async () => {
    const result = await run('/api/v1/apps/group1/auth/register?next=cars');
    expect(result.resolve).toHaveBeenCalledWith('group1');
    expect(result.seen).toEqual({ appId: 'group1', scope: { dealerIds: [...GROUP1_DEALER_IDS], path: '/api/v1/apps/group1' }, url: '/api/v1/auth/register?next=cars' });
    expect(currentAppId()).toBe(MAIN_APP);
  });

  it('rejects unknown/disabled apps and nested or staff routes', async () => {
    expect((await run('/api/v1/apps/unknown/auth/register', null)).res.status).toHaveBeenCalledWith(404);
    const disabled = await run('/api/v1/apps/group1/vehicles', { ...app, enabled: false, supportEmail: 'help@dealer-a.example' });
    expect(disabled.next).not.toHaveBeenCalled();
    expect(disabled.res.status).toHaveBeenCalledWith(403);
    expect(disabled.res.json).toHaveBeenCalledWith({ statusCode: 403, code: 'APP_DISABLED', message: 'This App is disabled, please contact help@dealer-a.example.' });
    expect((await run('/api/v1/apps/group1/auth/register', { ...app, enabled: false })).res.json).toHaveBeenCalledWith(expect.objectContaining({ message: 'This App is disabled, please contact support.' }));
    for (const rest of ['admin/users', 'dealer/vehicles', 'dealer-app/bootstrap', 'web/dashboard/overview', 'dealers/register', 'scope/1/auth/login', 'group-dashboard/me', 'apps/another/auth/login']) {
      const result = await run(`/api/v1/apps/group1/${rest}`);
      expect(result.next).not.toHaveBeenCalled();
      expect(result.res.status).toHaveBeenCalledWith(404);
    }
  });

  it('requires an explicit registered app for legacy inventory-scoped auth', () => {
    expect(() => dealerScopeStorage.run({ dealerIds: ['123'], path: '/scope/123' }, authAppId)).toThrow('registered app');
    expect(authAppId()).toBe(MAIN_APP);
  });

  it('rejects a valid JWT from another app even on an anonymous endpoint', async () => {
    const reflector = { getAllAndOverride: jest.fn().mockReturnValue(true) };
    const guard = new JwtAuthGuard(reflector as unknown as Reflector,
      { verifyAsync: async () => ({ sub: 'other-user', appId: 'dealer-b' }) } as any, { isActive: () => false } as any);
    const request = { headers: { authorization: 'Bearer valid-jwt' } };
    const context = { getType: () => 'http', getHandler: () => ({}), getClass: () => ({}), switchToHttp: () => ({ getRequest: () => request }) } as unknown as ExecutionContext;
    await expect(customerAppStorage.run(app, () => guard.canActivate(context))).rejects.toThrow('another app');
  });

  it('preserves existing platform tokens without an appId claim', async () => {
    const request: any = { headers: { authorization: 'Bearer legacy-jwt' } };
    const guard = new JwtAuthGuard({ getAllAndOverride: () => false } as any,
      { verifyAsync: async () => ({ sub: 'existing', email: 'existing@example.com', sid: 'session', role: 'CUSTOMER' }) } as any,
      { isActive: () => false } as any);
    const context = { getType: () => 'http', getHandler: () => ({}), getClass: () => ({}), switchToHttp: () => ({ getRequest: () => request }) } as unknown as ExecutionContext;
    expect(await guard.canActivate(context)).toBe(true);
    expect(request.user.appId).toBe(MAIN_APP);
  });
  it('does not allow another registered branded app to use these endpoints', async () => {
    const result = await run('/api/v1/apps/dealer-b/auth/register', { ...app, id: 'dealer-b' });
    expect(result.res.status).toHaveBeenCalledWith(404);
    expect(result.resolve).not.toHaveBeenCalled();
  });

  it('opens a canonical single-dealer app with its own directory', async () => {
    const dealer = { ...app, id: 'dealer-123', dealerIds: ['123'], name: 'Dealer A' };
    const result = await run('/api/v1/apps/dealer-123/auth/register', dealer);
    expect(result.seen).toEqual({ appId: 'dealer-123', scope: { dealerIds: ['123'], path: '/api/v1/apps/dealer-123' }, url: '/api/v1/auth/register' });
    expect(customerAppStorage.run(dealer, authAppId)).toBe('dealer-123');
  });
  it('rejects registry records that could redirect a dealer into another dealer scope', async () => {
    for (const dealerIds of [['999'], ['123', '999'], []]) {
      const result = await run('/api/v1/apps/dealer-123/auth/login', { ...app, id: 'dealer-123', dealerIds });
      expect(result.next).not.toHaveBeenCalled(); expect(result.res.status).toHaveBeenCalledWith(404);
    }
    const result = await run('/api/v1/apps/dealer-123/auth/login', { ...app, id: 'dealer-999', dealerIds: ['999'] });
    expect(result.next).not.toHaveBeenCalled();
  });
  it('separates two dealers even when a valid token is supplied', async () => {
    const request = { headers: { authorization: 'Bearer token' } };
    const guard = new JwtAuthGuard({ getAllAndOverride: () => false } as any, { verifyAsync: async () => ({ sub: 'user', sid: 'session', role: 'CUSTOMER', appId: 'dealer-123' }) } as any, { isActive: () => false } as any);
    const ctx = { getType: () => 'http', getHandler: () => ({}), getClass: () => ({}), switchToHttp: () => ({ getRequest: () => request }) } as unknown as ExecutionContext;
    await expect(customerAppStorage.run({ ...app, id: 'dealer-999', dealerIds: ['999'] }, () => guard.canActivate(ctx))).rejects.toThrow('another app');
  });
  it('matches the complete Group1 branch set, regardless of order, but never a subset or outsider', () => {
    expect(isGroup1Scope([...GROUP1_DEALER_IDS].reverse())).toBe(true);
    expect(isGroup1Scope(['3490'])).toBe(false);
    expect(isGroup1Scope([...GROUP1_DEALER_IDS, '2854'])).toBe(false);
  });

  it('automatically provisions Group1 while preserving disable and reset settings', async () => {
    const upsert = jest.fn().mockResolvedValue({});
    await new Group1AppBootstrap({ customerApp: { upsert } } as any).onModuleInit();
    const input = upsert.mock.calls[0][0];
    expect(input.where).toEqual({ id: 'group1' });
    expect(input.create.dealerIds).toEqual([...GROUP1_DEALER_IDS]);
    expect(input.update.enabled).toBeUndefined();
    expect(input.update.resetUrl).toBeUndefined();
  });

});
