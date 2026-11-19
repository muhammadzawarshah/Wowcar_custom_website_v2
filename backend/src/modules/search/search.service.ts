import { colourStockOptions } from '../vehicles/standard-colours';
import { Injectable, Logger, Module, OnModuleInit, OnApplicationBootstrap, Optional } from '@nestjs/common';
import { createHash } from 'node:crypto';
import { promisify } from 'node:util';
import { gzip } from 'node:zlib';
import { currentDealerScope } from '../../infrastructure/database/dealer-scope';
import { DealerTradeIdentityService } from '../../infrastructure/dealertrade/dealertrade-identity.service';
import { labelProvinces } from '../../common/interceptors/province-label.interceptor';
import { VehicleStatus } from '../../generated/prisma/client';
import { toPage } from '../../common/dto/pagination.dto';
import { Errors } from '../../common/errors/app-error';
import { CacheNs, CacheService } from '../../infrastructure/cache/cache.service';
import { PrismaService } from '../../infrastructure/database/prisma.service';
import { OutboxEvents } from '../../infrastructure/outbox/outbox.events';
import { OutboxService } from '../../infrastructure/outbox/outbox.service';
import { NotificationTypes } from '../notifications/notification-types';
import { NotificationsService } from '../notifications/notifications.service';
import { publicVehicleSelect, withAvailability } from '../vehicles/vehicle.presenter';
import { SearchCriteriaDto, SearchVehiclesQueryDto } from './dto/search.dto';
import { buildOrderBy, buildWhere, criteriaKey, haversineKm } from './search.builder';
import { matchesCriteria, VehicleSnapshot } from './search.matcher';
import { buildFilterData, filterVehicleSelect } from './filter-data';
import { FilterSnapshotsController, FilterSnapshotsService } from './filter-snapshots';

const SEARCH_TTL_SECONDS = 30;
const FACETS_TTL_SECONDS = 120;
const DEFAULT_PAGE_SIZE = 20;
const compressFilters = promisify(gzip);
type EncodedFilters = { body: Buffer; etag: string; cachedAt: number };

/**
 * Public vehicle search (brief section 8). Starts on PostgreSQL with targeted indexes and reads
 * from the replica; results are cached briefly and invalidated by namespace bump on listing changes.
 * The query contract (SearchVehiclesQueryDto) is engine-agnostic so this service can move to
 * OpenSearch later without changing the API. Search results are a projection: transactional
 * actions (enquiries, offers) always re-validate against the primary database.
 */
@Injectable()
export class SearchService implements OnApplicationBootstrap {
  private readonly encodedFilters = new Map<string, EncodedFilters>();
  private readonly encodingFilters = new Map<string, Promise<EncodedFilters>>();
  constructor(
    private readonly prisma: PrismaService,
    private readonly cache: CacheService,
    @Optional() private readonly identities?: DealerTradeIdentityService,
  ) {}

  async onApplicationBootstrap(): Promise<void> {
    if (process.env.NODE_ENV !== 'test') {
      // Build before listening so the first marketplace request can use the encoded response.
      await (async () => {
        // Public-route middleware also needs this map, even when compressed Redis data exists.
        await this.identities?.refresh();
        await this.allFilterResponse();
      })().catch((error) => new Logger('SearchService').warn(`Filter response warmup failed: ${error.message}`));
    }
  }

  /** Cache the wire representation as well as the data; large hits never parse JSON. */
  async allFilterResponse(): Promise<EncodedFilters> {
    const versioned = await this.cache.versionedKey(CacheNs.vehicles, 'filters:all:wire:v2');
    const key = `${currentDealerScope()?.dealerIds.join(',') ?? 'marketplace'}:${versioned}`;
    const cached = this.encodedFilters.get(key);
    const load = () => {
      let pending = this.encodingFilters.get(key);
      if (!pending) {
        pending = (async () => {
          let body = await this.cache.getBuffer(versioned);
          if (!body) {
            let data: unknown = await this.allFilterData();
            if (this.identities) {
              await this.identities.refresh();
              data = this.identities.present(data);
            }
            labelProvinces(data);
            body = await compressFilters(JSON.stringify(data));
            await this.cache.setBuffer(versioned, body, FACETS_TTL_SECONDS);
          }
          const entry = { body, etag: `W/"${createHash('sha256').update(body).digest('hex')}"`, cachedAt: Date.now() };
          // Only compressed bytes stay in process memory; cap dealer/version entries.
          if (this.encodedFilters.size >= 8) this.encodedFilters.delete(this.encodedFilters.keys().next().value!);
          this.encodedFilters.set(key, entry);
          return entry;
        })().finally(() => this.encodingFilters.delete(key));
        this.encodingFilters.set(key, pending);
      }
      return pending;
    };
    if (cached) {
      // Expired data refreshes in the background. Namespace changes get a new key immediately.
      if (Date.now() - cached.cachedAt >= FACETS_TTL_SECONDS * 1000) {
        void load().catch((error) => new Logger('SearchService').warn(`Filter response refresh failed: ${error.message}`));
      }
      return cached;
    }
    return load();
  }

  async search(query: SearchVehiclesQueryDto) {
    const page = query.page ?? 1;
    const pageSize = query.pageSize ?? DEFAULT_PAGE_SIZE;
    const key = await this.cache.versionedKey(CacheNs.vehicles, `search:v3:${criteriaKey(query)}`);
    if (query.sort === 'nearest') {
      if (query.lat === undefined || query.lng === undefined) throw Errors.badRequest('VALIDATION_FAILED', 'Request validation failed', ['sort=nearest needs lat and lng']);
      return this.cache.wrap(key, SEARCH_TTL_SECONDS, () => this.searchNearest(query, query.lat!, query.lng!, page, pageSize));
    }
    return this.cache.wrap(key, SEARCH_TTL_SECONDS, async () => {
      const where = buildWhere(query);
      const [rows, total] = await Promise.all([
        this.prisma.replica.vehicle.findMany({
          where,
          select: publicVehicleSelect,
          orderBy: buildOrderBy(query.sort, query.collection),
          skip: (page - 1) * pageSize,
          take: pageSize,
        }),
        this.prisma.replica.vehicle.count({ where }),
      ]);
      return toPage(rows.map(withAvailability), total, page, pageSize);
    });
  }

  /**
   * "Near Me": closest first by straight-line distance, each result carrying `distanceKm`.
   * With radiusKm only vehicles inside the exact radius are returned; without it, vehicles
   * with no location follow the located ones, newest first.
   */
  private async searchNearest(query: SearchVehiclesQueryDto, lat: number, lng: number, page: number, pageSize: number) {
    const where = buildWhere(query);
    const points = await this.prisma.replica.vehicle.findMany({ where, select: { id: true, latitude: true, longitude: true }, orderBy: buildOrderBy('nearest') });
    const located: { id: string; distanceKm: number }[] = [];
    const unlocated: string[] = [];
    for (const point of points) {
      if (point.latitude === null || point.longitude === null) {
        if (!query.radiusKm) unlocated.push(point.id);
        continue;
      }
      const distanceKm = haversineKm(lat, lng, point.latitude, point.longitude);
      if (!query.radiusKm || distanceKm <= query.radiusKm) located.push({ id: point.id, distanceKm });
    }
    located.sort((a, b) => a.distanceKm - b.distanceKm || b.id.localeCompare(a.id));

    const ordered = [...located.map((item) => item.id), ...unlocated];
    const pageIds = ordered.slice((page - 1) * pageSize, page * pageSize);
    const rows = await this.prisma.replica.vehicle.findMany({ where: { id: { in: pageIds } }, select: publicVehicleSelect });
    const byId = new Map(rows.map((row) => [row.id, row]));
    const distances = new Map(located.map((item) => [item.id, Math.round(item.distanceKm * 10) / 10]));
    const data = pageIds.flatMap((id) => {
      const row = byId.get(id);
      return row ? [{ ...withAvailability(row), distanceKm: distances.get(id) ?? null }] : [];
    });
    return toPage(data, ordered.length, page, pageSize);
  }

  /**
   * Fast count of vehicles matching search criteria (FR-02, FR-05) for dynamic hero/filter counters.
   * Returns total matching rows without loading individual vehicle data.
   */
  async count(criteria: SearchCriteriaDto) {
    const key = await this.cache.versionedKey(CacheNs.vehicles, `count:${criteriaKey(criteria)}`);
    return this.cache.wrap(key, SEARCH_TTL_SECONDS, async () => {
      const where = buildWhere(criteria);
      const total = await this.prisma.replica.vehicle.count({ where });
      return {
        total,
        count: total,
        formatted: total.toLocaleString('en-US').replace(/,/g, ' '),
      };
    });
  }

  /** Complete unpaginated public snapshot for app-side dependent filtering. */
  async allFilterData() {
    const key = await this.cache.versionedKey(CacheNs.vehicles, 'filters:all:v3');
    return this.cache.wrap(key, FACETS_TTL_SECONDS, async () => {
      const rows = await this.prisma.replica.vehicle.findMany({
        where: buildWhere({}),
        select: filterVehicleSelect,
        orderBy: { id: 'asc' },
      });
      return buildFilterData(rows);
    });
  }

  /** Filter counts for the current search (FR-05 "filter based on available criteria"). */
  async facets(criteria: SearchCriteriaDto) {
    const key = await this.cache.versionedKey(CacheNs.vehicles, `facets:v4:${criteriaKey(criteria)}`);
    return this.cache.wrap(key, FACETS_TTL_SECONDS, async () => {
      const where = buildWhere(criteria);
      // Read matching public filter fields once; at 500k+ rows when SQL_FACETS_MODE is enabled, use SQL groupBy.
      if (process.env.SQL_FACETS_MODE === 'true' && typeof this.prisma.replica.vehicle.groupBy === 'function') {
        return this.sqlFacets(where);
      }
      const rows = await this.prisma.replica.vehicle.findMany({ where, select: filterVehicleSelect });
      const data = buildFilterData(rows);
      const colour = colourStockOptions(rows);
      return {
        total: data.total,
        ...data.options,
        colour,
        makes: data.options.makes.sort((a, b) => b.count - a.count),
        city: data.options.city.filter(row => row.value),
        specials: [{ value: 'Not on special', count: rows.filter(row => !row.isSpecial).length }, { value: 'On special', count: rows.filter(row => row.isSpecial).length }],
        ranges: data.ranges,
      };
    });
  }

  /**
   * High-scale PostgreSQL SQL GROUP BY facet computation for 500,000+ listings (FR-SRCH-03, NFR-PERF-03).
   * Never loads full vehicle rows into Node.js V8 heap memory.
   */
  async sqlFacets(where: ReturnType<typeof buildWhere>) {
    const [total, agg, byMake, byModel, byFuel, byTrans, byCond, byProvince, byCity, bySpecial] = await Promise.all([
      this.prisma.replica.vehicle.count({ where }),
      this.prisma.replica.vehicle.aggregate({
        where,
        _min: { price: true, year: true, mileage: true, engineCapacityCc: true, powerKw: true },
        _max: { price: true, year: true, mileage: true, engineCapacityCc: true, powerKw: true },
      }),
      this.prisma.replica.vehicle.groupBy({ by: ['makeId'], where, _count: { _all: true } }),
      this.prisma.replica.vehicle.groupBy({ by: ['makeId', 'modelId'], where, _count: { _all: true } }),
      this.prisma.replica.vehicle.groupBy({ by: ['fuelType'], where, _count: { _all: true } }),
      this.prisma.replica.vehicle.groupBy({ by: ['transmission'], where, _count: { _all: true } }),
      this.prisma.replica.vehicle.groupBy({ by: ['condition'], where, _count: { _all: true } }),
      this.prisma.replica.vehicle.groupBy({ by: ['province'], where, _count: { _all: true } }),
      this.prisma.replica.vehicle.groupBy({ by: ['city'], where, _count: { _all: true } }),
      this.prisma.replica.vehicle.groupBy({ by: ['isSpecial'], where, _count: { _all: true } }),
    ]);
    const makeIds = byMake.map((m) => m.makeId);
    const modelIds = byModel.map((m) => m.modelId);
    const [makesList, modelsList] = await Promise.all([
      makeIds.length ? this.prisma.replica.make.findMany({ where: { id: { in: makeIds } }, select: { id: true, slug: true, name: true } }) : Promise.resolve([]),
      modelIds.length ? this.prisma.replica.model.findMany({ where: { id: { in: modelIds } }, select: { id: true, slug: true, name: true, makeId: true } }) : Promise.resolve([]),
    ]);
    const makeMap = new Map(makesList.map((m) => [m.id, m]));
    const modelMap = new Map(modelsList.map((m) => [m.id, m]));
    return {
      total,
      makes: byMake.flatMap((m) => { const info = makeMap.get(m.makeId); return info ? [{ slug: info.slug, name: info.name, count: m._count._all }] : []; }).sort((a, b) => b.count - a.count),
      models: byModel.flatMap((m) => {
        const make = makeMap.get(m.makeId);
        const model = modelMap.get(m.modelId);
        return make && model ? [{ slug: model.slug, name: model.name, make: make.slug, value: `${make.slug}:${model.slug}`, count: m._count._all }] : [];
      }),
      variants: [],
      dealerships: [],
      branches: [],
      categories: [],
      colour: colourStockOptions([]),
      fuelType: byFuel.map((f) => ({ value: f.fuelType, count: f._count._all })),
      transmission: byTrans.map((t) => ({ value: t.transmission, count: t._count._all })),
      condition: byCond.map((c) => ({ value: c.condition, count: c._count._all })),
      province: byProvince.map((p) => ({ value: p.province, count: p._count._all })),
      city: byCity.filter((c) => c.city).map((c) => ({ value: c.city, count: c._count._all })),
      drivetrain: [],
      seats: [],
      cylinders: [],
      engineCapacityCc: [],
      powerKw: [],
      specials: [
        { value: 'Not on special', count: bySpecial.find((s) => !s.isSpecial)?._count._all ?? 0 },
        { value: 'On special', count: bySpecial.find((s) => s.isSpecial)?._count._all ?? 0 },
      ],
      ranges: {
        price: { min: agg._min.price ?? null, max: agg._max.price ?? null },
        year: { min: agg._min.year ?? null, max: agg._max.year ?? null },
        mileage: { min: agg._min.mileage ?? null, max: agg._max.mileage ?? null },
        engineCapacityCc: { min: agg._min.engineCapacityCc ?? null, max: agg._max.engineCapacityCc ?? null },
        powerKw: { min: agg._min.powerKw ?? null, max: agg._max.powerKw ?? null },
      },
    };
  }

  /** Loads the matcher snapshot for one vehicle. */
  async snapshot(vehicleId: string): Promise<VehicleSnapshot | null> {
    const row = await this.prisma.vehicle.findUnique({
      where: { id: vehicleId },
      include: {
        make: { select: { slug: true } },
        model: { select: { slug: true } },
        variant: { select: { slug: true } },
        dealer: { select: { slug: true } },
        categories: { select: { slug: true } },
      },
    });
    if (!row) return null;
    return {
      status: row.status,
      title: row.title,
      makeSlug: row.make.slug,
      modelSlug: row.model.slug,
      variantSlug: row.variant?.slug ?? null,
      condition: row.condition,
      fuelType: row.fuelType,
      transmission: row.transmission,
      drivetrain: row.drivetrain,
      province: row.province,
      city: row.city,
      colour: row.colour,
      dealerSlug: row.dealer.slug,
      branchId: row.branchId,
      categorySlugs: row.categories.map((category) => category.slug),
      price: row.price,
      year: row.year,
      mileage: row.mileage,
      engineCapacityCc: row.engineCapacityCc,
      powerKw: row.powerKw,
      seats: row.seats,
      cylinders: row.cylinders,
      isSpecial: row.isSpecial,
      isFeatured: row.isFeatured,
      popularityScore: row.popularityScore,
      publishedAt: row.publishedAt,
      latitude: row.latitude,
      longitude: row.longitude,
    };
  }
}

/**
 * FR-39 search alerts: new matching vehicle, price drop, back-in-stock. Runs in the worker and
 * walks saved searches in batches, so cost grows linearly and never blocks a request.
 */
@Injectable()
export class SearchAlertHandlers implements OnModuleInit {
  private readonly logger = new Logger(SearchAlertHandlers.name);

  constructor(
    private readonly outbox: OutboxService,
    private readonly prisma: PrismaService,
    private readonly search: SearchService,
    private readonly notifications: NotificationsService,
  ) {}

  onModuleInit(): void {
    this.outbox.on(OutboxEvents.VehicleStatusChanged, 'search.saved-search-alerts', async (event) => {
      const { vehicleId, action } = event.payload;
      // New listing, or back on sale after a reservation/suspension (availability alert).
      if (!['publish', 'release', 'unsuspend', 'relist'].includes(action)) return;
      await this.alert(vehicleId, action === 'publish' ? 'new' : 'available');
    });

    this.outbox.on(OutboxEvents.VehiclePriceChanged, 'search.price-drop-alerts', async (event) => {
      if (event.payload.newPrice < event.payload.oldPrice) await this.alert(event.payload.vehicleId, 'price-drop', { oldPrice: event.payload.oldPrice, newPrice: event.payload.newPrice });
    });
  }

  private async alert(vehicleId: string, kind: 'new' | 'available' | 'price-drop', price?: { oldPrice: number; newPrice: number }) {
    const vehicle = await this.search.snapshot(vehicleId);
    if (!vehicle || vehicle.status !== VehicleStatus.PUBLISHED) return;
    const slug = (await this.prisma.vehicle.findUnique({ where: { id: vehicleId }, select: { slug: true } }))?.slug;

    let cursor: string | undefined;
    const notified = new Set<string>();
    for (;;) {
      const batch = await this.prisma.savedSearch.findMany({
        where: { alertsEnabled: true },
        orderBy: { id: 'asc' },
        take: 1000,
        ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
        select: { id: true, userId: true, name: true, criteria: true },
      });
      if (!batch.length) break;
      cursor = batch[batch.length - 1].id;

      const matches = batch.filter((saved) => !notified.has(saved.userId) && matchesCriteria(vehicle, saved.criteria as SearchCriteriaDto));
      for (const saved of matches) {
        notified.add(saved.userId);
        const body =
          kind === 'new'
            ? `New match for "${saved.name}": ${vehicle.title}`
            : kind === 'available'
              ? `${vehicle.title} matching "${saved.name}" is available again`
              : `${vehicle.title} matching "${saved.name}" dropped to R${price!.newPrice.toLocaleString('en-ZA')}`;
        await this.notifications.notify({
          userIds: [saved.userId],
          type: NotificationTypes.SavedSearchMatch,
          title: kind === 'price-drop' ? 'Price drop on a saved search' : 'New vehicle for your saved search',
          body,
          data: { vehicleId, slug, savedSearchId: saved.id, kind },
        });
      }
      if (matches.length) {
        await this.prisma.savedSearch.updateMany({ where: { id: { in: matches.map((saved) => saved.id) } }, data: { lastAlertedAt: new Date() } });
      }
      if (batch.length < 1000) break;
    }

    // Also notify users who followed this vehicle's Make or Model via MakeModelAlert (FR-APP-03).
    if (this.prisma.makeModelAlert) {
      const vRow = await this.prisma.vehicle.findUnique({ where: { id: vehicleId }, select: { makeId: true, modelId: true, dealerId: true } });
      if (vRow) {
        const followers = await this.prisma.makeModelAlert.findMany({
          where: {
            OR: [
              { makeId: vRow.makeId, modelId: null },
              { modelId: vRow.modelId },
            ],
          },
          select: { userId: true, dealerId: true },
        });
        for (const f of followers) {
          if (notified.has(f.userId)) continue;
          if (f.dealerId && f.dealerId !== vRow.dealerId) continue;
          notified.add(f.userId);
          const body =
            kind === 'new'
              ? `New arrival matching your followed alert: ${vehicle.title}`
              : kind === 'available'
                ? `${vehicle.title} is available again`
                : `${vehicle.title} dropped to ฿${price!.newPrice.toLocaleString('en-US')}`;
          await this.notifications.notify({
            userIds: [f.userId],
            type: NotificationTypes.SavedSearchMatch,
            title: kind === 'price-drop' ? 'Price drop on followed car' : 'New arrival for followed car',
            body,
            data: { vehicleId, slug, kind },
          });
        }
      }
    }

    if (notified.size) this.logger.log(`Saved-search ${kind} alert for ${vehicleId} sent to ${notified.size} users`);
  }
}

@Module({
  controllers: [FilterSnapshotsController],
  providers: [SearchService, SearchAlertHandlers, FilterSnapshotsService],
  exports: [SearchService, FilterSnapshotsService],
})
export class SearchModule {}
