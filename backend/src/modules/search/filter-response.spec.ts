import { gzipSync, gunzipSync } from 'node:zlib';
import { dealerScopeStorage, currentDealerScope } from '../../infrastructure/database/dealer-scope';
import { SearchService } from './search.service';

describe('encoded all-filters response', () => {
  function setup() {
    let version = 0;
    const cache = {
      versionedKey: jest.fn(async () => `vehicles:v${version}:wire`),
      getBuffer: jest.fn(async (): Promise<Buffer | undefined> => undefined),
      setBuffer: jest.fn(async () => undefined),
    };
    const service = new SearchService({} as never, cache as never);
    const build = jest.spyOn(service, 'allFilterData').mockImplementation(async () => ({
      total: 1, vehicles: [{ id: currentDealerScope()?.dealerIds[0] ?? 'marketplace' }],
    }) as never);
    return { service, cache, build, bump: () => version++ };
  }

  it('shares concurrent builds and returns the same complete JSON without rebuilding on hits', async () => {
    const { service, build, cache } = setup();
    const [first, second] = await Promise.all([service.allFilterResponse(), service.allFilterResponse()]);
    expect(first).toBe(second);
    expect(JSON.parse(gunzipSync(first.body).toString())).toEqual({ total: 1, vehicles: [{ id: 'marketplace' }] });
    expect(await service.allFilterResponse()).toBe(first);
    expect(build).toHaveBeenCalledTimes(1);
    expect(cache.setBuffer).toHaveBeenCalledTimes(1);
  });

  it('uses compressed Redis data directly after a process restart', async () => {
    const { service, build, cache } = setup();
    const body = gzipSync(JSON.stringify({ total: 42, vehicles: [] }));
    cache.getBuffer.mockResolvedValue(body);
    expect((await service.allFilterResponse()).body).toBe(body);
    expect(build).not.toHaveBeenCalled();
  });

  it('preserves public identity and province presentation before encoding', async () => {
    const { cache } = setup();
    const identities = { refresh: jest.fn(async () => undefined), present: jest.fn((data) => ({ ...data, vehicles: [{ id: '123', province: 'WESTERN_CAPE' }] })) };
    const service = new SearchService({} as never, cache as never, identities as never);
    jest.spyOn(service, 'allFilterData').mockResolvedValue({ total: 1, vehicles: [] } as never);
    const encoded = await service.allFilterResponse();
    expect(JSON.parse(gunzipSync(encoded.body).toString())).toEqual({ total: 1, vehicles: [{ id: '123', province: 'Western Cape' }] });
    await service.allFilterResponse();
    expect(identities.refresh).toHaveBeenCalledTimes(1);
    expect(identities.present).toHaveBeenCalledTimes(1);
  });

  it('never serves another dealer scope or a previous inventory namespace version', async () => {
    const { service, build, bump } = setup();
    const main = await service.allFilterResponse();
    const scoped = await dealerScopeStorage.run({ dealerIds: ['3490'], path: '/scope/3490' }, () => service.allFilterResponse());
    expect(JSON.parse(gunzipSync(scoped.body).toString()).vehicles).toEqual([{ id: '3490' }]);
    expect(scoped).not.toBe(main);
    bump();
    expect(await service.allFilterResponse()).not.toBe(main);
    expect(build).toHaveBeenCalledTimes(3);
  });

  it('serves the last response during TTL refresh and shares the refresh work', async () => {
    const { service, build } = setup();
    const first = await service.allFilterResponse();
    first.cachedAt = Date.now() - 121_000;
    expect(await service.allFilterResponse()).toBe(first);
    await service.allFilterResponse();
    // Let compression and cache storage finish before verifying the refreshed entry.
    await (service as any).encodingFilters.values().next().value;
    expect(build).toHaveBeenCalledTimes(2);
    expect(await service.allFilterResponse()).not.toBe(first);
  });
});
