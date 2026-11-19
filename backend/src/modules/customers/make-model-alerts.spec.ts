import { CustomersService } from './customers.service';
import { SearchService } from '../search/search.service';
import { buildWhere } from '../search/search.builder';
import { toProvince } from '../../common/utils/province';

describe('WowCar Custom Platform — Make/Model Follow Alerts, Thai Provinces, Badges & 500k SQL Facets', () => {
  it('resolves Thai and English province names accurately', () => {
    expect(toProvince('กรุงเทพมหานคร')).toBe('กรุงเทพมหานคร');
    expect(toProvince('Bangkok')).toBe('Bangkok');
    expect(toProvince('เชียงใหม่')).toBe('เชียงใหม่');
    expect(toProvince('ภูเก็ต')).toBe('ภูเก็ต');
    expect(toProvince('Gauteng')).toBe('Gauteng');
  });

  it('builds badge filter in Prisma where clause', () => {
    const where = buildWhere({ badge: 'ฟรีดาวน์,รถบ้านแท้' });
    expect(JSON.stringify(where)).toContain('"badges":{"hasSome":["ฟรีดาวน์","รถบ้านแท้"]}');
  });

  it('follows and unfollows a car make and model in CustomersService (FR-APP-03)', async () => {
    const prisma = {
      make: {
        findFirst: jest.fn().mockResolvedValue({ id: 'make-1', name: 'Toyota', slug: 'toyota' }),
      },
      model: {
        findFirst: jest.fn().mockResolvedValue({ id: 'model-1', name: 'Alphard', slug: 'alphard', makeId: 'make-1' }),
      },
      makeModelAlert: {
        findFirst: jest.fn().mockResolvedValue(null),
        create: jest.fn().mockResolvedValue({ id: 'alert-1' }),
        deleteMany: jest.fn().mockResolvedValue({ count: 1 }),
        findMany: jest.fn().mockResolvedValue([
          { makeId: 'make-1', modelId: null, make: { id: 'make-1', name: 'Toyota', slug: 'toyota', translations: null }, model: null },
          { makeId: 'make-1', modelId: 'model-1', make: null, model: { id: 'model-1', name: 'Alphard', slug: 'alphard', makeId: 'make-1', translations: null } },
        ]),
      },
    };
    const service = new CustomersService(prisma as never, {} as never);

    const fMake = await service.followMake('user-1', 'toyota');
    expect(fMake).toEqual({ success: true, followed: true, make: { id: 'make-1', name: 'Toyota', slug: 'toyota' } });
    expect(prisma.makeModelAlert.create).toHaveBeenCalledWith({
      data: { userId: 'user-1', appId: 'changecars', dealerId: null, makeId: 'make-1', modelId: null },
    });

    const fModel = await service.followModel('user-1', 'alphard');
    expect(fModel).toEqual({ success: true, followed: true, model: { id: 'model-1', name: 'Alphard', slug: 'alphard', makeId: 'make-1' } });

    const list = await service.myAlerts('user-1');
    expect(list.makes).toHaveLength(1);
    expect(list.models).toHaveLength(1);

    const uMake = await service.unfollowMake('user-1', 'toyota');
    expect(uMake).toEqual({ success: true, followed: false, makeId: 'make-1' });
  });

  it('computes 500k-scale facets via PostgreSQL SQL groupBy & aggregate without loading rows (FR-SRCH-03 / NFR-PERF-03)', async () => {
    const replica = {
      vehicle: {
        count: jest.fn().mockResolvedValue(500_000),
        aggregate: jest.fn().mockResolvedValue({
          _min: { price: 150_000, year: 2012, mileage: 1000, engineCapacityCc: 1200, powerKw: 75 },
          _max: { price: 12_500_000, year: 2026, mileage: 350_000, engineCapacityCc: 5000, powerKw: 450 },
        }),
        groupBy: jest.fn().mockImplementation(({ by }: { by: string[] }) => {
          const key = by.join(',');
          if (key === 'makeId') return Promise.resolve([{ makeId: 'm1', _count: { _all: 300_000 } }]);
          if (key === 'makeId,modelId') return Promise.resolve([{ makeId: 'm1', modelId: 'mod1', _count: { _all: 120_000 } }]);
          if (key === 'fuelType') return Promise.resolve([{ fuelType: 'PETROL', _count: { _all: 400_000 } }]);
          if (key === 'transmission') return Promise.resolve([{ transmission: 'AUTOMATIC', _count: { _all: 480_000 } }]);
          if (key === 'condition') return Promise.resolve([{ condition: 'USED', _count: { _all: 500_000 } }]);
          if (key === 'province') return Promise.resolve([{ province: 'กรุงเทพมหานคร', _count: { _all: 350_000 } }]);
          if (key === 'city') return Promise.resolve([{ city: 'Bangkok', _count: { _all: 350_000 } }]);
          if (key === 'isSpecial') return Promise.resolve([{ isSpecial: false, _count: { _all: 450_000 } }, { isSpecial: true, _count: { _all: 50_000 } }]);
          return Promise.resolve([]);
        }),
      },
      make: {
        findMany: jest.fn().mockResolvedValue([{ id: 'm1', slug: 'toyota', name: 'Toyota' }]),
      },
      model: {
        findMany: jest.fn().mockResolvedValue([{ id: 'mod1', slug: 'alphard', name: 'Alphard', makeId: 'm1' }]),
      },
    };
    const cache = { versionedKey: jest.fn(async () => 'k'), wrap: jest.fn(async (_k, _t, fn) => fn()) };
    const search = new SearchService({ replica } as never, cache as never);
    const res = await search.sqlFacets(buildWhere({}));

    expect(res.total).toBe(500_000);
    expect(res.makes).toEqual([{ slug: 'toyota', name: 'Toyota', count: 300_000 }]);
    expect(res.models).toEqual([{ slug: 'alphard', name: 'Alphard', make: 'toyota', value: 'toyota:alphard', count: 120_000 }]);
    expect(res.ranges.price).toEqual({ min: 150_000, max: 12_500_000 });
    expect(res.specials).toEqual([
      { value: 'Not on special', count: 450_000 },
      { value: 'On special', count: 50_000 },
    ]);
  });
});
