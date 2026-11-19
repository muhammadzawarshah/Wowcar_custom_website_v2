import { WebDashboardService } from './web-dashboard.service';
import { buildWhere } from '../search/search.builder';

function setup(total: number | null) {
  const prisma = {
    dealer: { groupBy: jest.fn().mockResolvedValue([]) },
    vehicle: {
      aggregate: jest.fn().mockImplementation(async (args) => args._count
        ? { _count: { _all: 49910 }, _sum: { price: 100000 } }
        : { _sum: { viewCount: 12 } }),
      count: jest.fn().mockResolvedValue(0),
    },
    lead: { count: jest.fn().mockResolvedValue(0) },
    $queryRaw: jest.fn().mockResolvedValue([]),
  };
  const stock = { summary: jest.fn().mockResolvedValue({ source: 'dealertrade', total_stock_count: total, total: 38357 }) };
  const service = new WebDashboardService(prisma as any, {} as any, {} as any, stock as any);
  return { service, prisma, stock };
}
const viewer = { isAdmin: true, user: { id: 'admin' }, dealer: null } as any;

it('matches the app live stock count instead of stale synced inventory or source row totals', async () => {
  const { service, stock } = setup(38122);
  expect(await service.overview(viewer)).toMatchObject({ activeListings: 38122, stockValue: 100000 });
  expect(stock.summary).toHaveBeenCalledTimes(1);
});

it('preserves a real zero live count', async () => {
  const { service } = setup(0);
  expect((await service.overview(viewer)).activeListings).toBe(0);
});

it('falls back to the same public visibility rules as app filters when live stock is unavailable', async () => {
  const { service, prisma } = setup(null);
  expect((await service.overview(viewer)).activeListings).toBe(49910);
  expect(prisma.vehicle.aggregate).toHaveBeenCalledWith({ where: buildWhere({}), _count: { _all: true }, _sum: { price: true } });
});

it('rejects non-admins before reading platform stock', async () => {
  const { service, stock, prisma } = setup(38122);
  await expect(service.overview({ ...viewer, isAdmin: false })).rejects.toMatchObject({ status: 403 });
  expect(stock.summary).not.toHaveBeenCalled();
  expect(prisma.vehicle.aggregate).not.toHaveBeenCalled();
});
