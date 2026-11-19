import { dealerScopeMiddleware, dealerScopeStorage, scopedArgs } from './dealer-scope';

const scope = { dealerIds: ['3490', '3491'], path: '/api/v1/scope/3490,3491' };

describe('dealer app scope', () => {
  it('adds the dealer filter to reads of scoped models and keeps existing conditions', () => {
    expect(scopedArgs('Vehicle', 'findMany', { where: { status: 'PUBLISHED', AND: [{ price: { gt: 1 } }] } }, scope)).toEqual({
      where: { status: 'PUBLISHED', AND: [{ price: { gt: 1 } }, { dealerId: { in: ['3490', '3491'] } }] },
    });
    expect(scopedArgs('Vehicle', 'findUnique', { where: { id: '1' } }, scope)).toEqual({ where: { id: '1', AND: [{ dealerId: { in: ['3490', '3491'] } }] } });
    expect(scopedArgs('Dealer', 'count', undefined, scope)).toEqual({ where: { AND: [{ id: { in: ['3490', '3491'] } }] } });
    expect(scopedArgs('Favourite', 'findMany', { where: { userId: 'u' } }, scope)).toEqual({ where: { userId: 'u', AND: [{ vehicle: { dealerId: { in: ['3490', '3491'] } } }] } });
    expect(scopedArgs('Make', 'findMany', {}, scope)).toEqual({ where: { AND: [{ vehicles: { some: { dealerId: { in: ['3490', '3491'] } } } }] } });
  });

  it('leaves writes, unscoped models and requests outside a scope alone', () => {
    const args = { where: { id: '1' }, data: { viewCount: 2 } };
    expect(scopedArgs('Vehicle', 'update', args, scope)).toBe(args);
    expect(scopedArgs('Article', 'findMany', args, scope)).toBe(args);
    expect(scopedArgs('Vehicle', 'findMany', args)).toBe(args);
  });

  async function run(url: string, known: string[] = ['3490', '3491']) {
    const req = { url, originalUrl: url, method: 'GET' } as any;
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn(), req } as any;
    let seen: { url: string; scope?: unknown } | undefined;
    const next = jest.fn(() => { seen = { url: req.url, scope: dealerScopeStorage.getStore() }; });
    await dealerScopeMiddleware('api/v1', async (ids) => ids.filter((id) => known.includes(id)))(req, res, next);
    return { res, next, seen };
  }

  it('rewrites scoped URLs to the normal API and runs them inside the scope', async () => {
    const { seen } = await run('/api/v1/scope/3491,3490,3490/vehicles?page=2&make=bmw');
    expect(seen).toEqual({ url: '/api/v1/vehicles?page=2&make=bmw', scope });
    expect((await run('/api/v1/vehicles?page=1')).seen).toEqual({ url: '/api/v1/vehicles?page=1', scope: undefined });
  });

  it('scopes lists, facets, filters and counts through dealer query IDs', async () => {
    for (const path of ['vehicles', 'vehicles/12345', 'vehicles/example-car', 'vehicles/12345/similar', 'vehicles/12345/dealer-vehicles', 'vehicles/facets', 'vehicles/filters/all', 'vehicles/count', 'catalogue/makes', 'dealers', 'vehicle-filters/manifest']) {
      for (const key of ['dealerId', 'dealer_id']) {
        expect((await run(`/api/v1/${path}?${key}=3491,3490&make=bmw`)).seen).toEqual({ url: `/api/v1/${path}?make=bmw`, scope });
      }
    }
    expect((await run('/api/v1/vehicles?dealerId=3490')).seen?.scope).toEqual({ dealerIds: ['3490'], path: '/api/v1/scope/3490' });
  });

  it('rejects ambiguous, empty, malformed and unknown query selectors', async () => {
    for (const query of ['dealerId=', 'dealerId=abc', 'dealerId=3490,', 'dealerId=3490&dealer_id=3491', 'dealerId=3490&dealerId=3491']) {
      expect((await run(`/api/v1/vehicles?${query}`)).res.status).toHaveBeenCalledWith(400);
    }
    expect((await run('/api/v1/vehicles?dealerId=9')).res.status).toHaveBeenCalledWith(404);
    expect((await run('/api/v1/scope/3490/vehicles?dealerId=3491')).res.status).toHaveBeenCalledWith(400);
    expect((await run('/api/v1/scope/%ZZ/vehicles')).res.status).toHaveBeenCalledWith(400);
    expect((await run('/api/v1/scope/3490/admin/vehicles')).res.status).toHaveBeenCalledWith(404);
  });

  it('leaves dealerId on staff and admin routes to the route as an ordinary filter', async () => {
    for (const url of ['/api/v1/admin/vehicles?dealerId=4012&pageSize=2', '/api/v1/group-dashboard/vehicles?dealerId=3490', '/api/v1/dealer/vehicles?dealer_id=1', '/api/v1/web/dashboard/leads?dealerId=3490']) {
      expect((await run(url)).seen).toEqual({ url, scope: undefined });
    }
  });

  it('preserves the Group One app callback for both path and query scopes', async () => {
    const ids = ['3490', '3491', '3493', '3496'];
    for (const url of ['/api/v1/scope/3490,3491,3493,3496/vehicles/12345', '/api/v1/vehicles/12345?dealerId=3490,3491,3493,3496']) {
      const req = { url, originalUrl: url, method: 'GET' } as any;
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn(), req } as any;
      const next = jest.fn();
      const runInApp = jest.fn(async (_ids, proceed) => { proceed(); });
      await dealerScopeMiddleware('api/v1', async () => ids, runInApp)(req, res, next);
      expect(runInApp).toHaveBeenCalledWith(ids, expect.any(Function), req.originalUrl.includes("/scope/"));
      expect(next).toHaveBeenCalledTimes(1);
      expect(req.url).toBe('/api/v1/vehicles/12345');
    }
  });

  it('does not let a query selector replace an already established app scope', async () => {
    const req = { url: '/api/v1/vehicles?dealerId=999', originalUrl: '/api/v1/apps/dealer-123/vehicles?dealerId=999', method: 'GET' } as any;
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as any;
    const known = jest.fn().mockResolvedValue(['999']);
    let seen: unknown;
    await dealerScopeStorage.run({ dealerIds: ['123'], path: '/api/v1/apps/dealer-123' }, () => dealerScopeMiddleware('api/v1', known)(req, res, () => { seen = scopedArgs('Vehicle', 'findMany', {}); }));
    expect(known).not.toHaveBeenCalled();
    expect(seen).toEqual({ where: { AND: [{ dealerId: { in: ['123'] } }] } });
  });

  it('rejects bad or unknown dealer IDs and staff APIs', async () => {
    const bad = await run('/api/v1/scope/abc/vehicles');
    expect(bad.res.status).toHaveBeenCalledWith(400);
    const unknown = await run('/api/v1/scope/3490,9/vehicles');
    expect(unknown.res.status).toHaveBeenCalledWith(404);
    expect(unknown.res.json).toHaveBeenCalledWith(expect.objectContaining({ code: 'DEALER_NOT_FOUND', details: ['9'] }));
    for (const path of ['admin/vehicles', 'dealer/vehicles', 'web/dashboard/overview', 'dealer-app/dealers/3490']) {
      const blocked = await run(`/api/v1/scope/3490/${path}`);
      expect(blocked.res.status).toHaveBeenCalledWith(404);
      expect(blocked.next).not.toHaveBeenCalled();
    }
  });
});
