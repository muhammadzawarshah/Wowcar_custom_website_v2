import { INestApplication } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Test } from '@nestjs/testing';
import compression from 'compression';
import { gzipSync } from 'node:zlib';
import { CacheHeadersInterceptor } from '../../common/interceptors/cache-headers.interceptor';
import { DealerTradeIdentityInterceptor } from '../../common/interceptors/dealertrade-identity.interceptor';
import { ProvinceLabelInterceptor } from '../../common/interceptors/province-label.interceptor';
import { PublicVehiclesController } from '../vehicles/vehicles.controller';
import { PublicVehiclesService } from '../vehicles/public-vehicles.service';
import { SearchService } from './search.service';

describe('all-filters HTTP representation', () => {
  let app: INestApplication;
  let url: string;
  const payload = { total: 1, vehicles: [{ id: '123', title: '車', province: 'Gauteng' }] };
  const encoded = { body: gzipSync(JSON.stringify(payload)), etag: 'W/"filters-test"', cachedAt: Date.now() };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [PublicVehiclesController],
      providers: [
        { provide: SearchService, useValue: { allFilterResponse: async () => encoded } },
        { provide: PublicVehiclesService, useValue: {} },
      ],
    }).compile();
    app = module.createNestApplication();
    app.use(compression());
    // The normal response interceptors must not traverse an Express Response or encoded bytes.
    app.useGlobalInterceptors(
      new CacheHeadersInterceptor(app.get(Reflector)),
      new ProvinceLabelInterceptor(),
      new DealerTradeIdentityInterceptor({ refresh: async () => undefined, present: (body: unknown) => body } as never),
    );
    await app.listen(0, '127.0.0.1');
    url = `${await app.getUrl()}/vehicles/filters/all`;
  });

  afterAll(async () => { await app?.close(); });

  it('delivers complete gzip and identity JSON with equivalent content', async () => {
    for (const encoding of ['gzip', 'identity', 'gzip;q=0, identity;q=1']) {
      const response = await fetch(url, { headers: { 'accept-encoding': encoding } });
      expect(response.status).toBe(200);
      expect(response.headers.get('content-encoding')).toBe(encoding === 'gzip' ? 'gzip' : null);
      expect(response.headers.get('vary')).toContain('Accept-Encoding');
      expect(response.headers.get('cache-control')).toContain('public,');
      expect(await response.json()).toEqual(payload);
    }
  });

  it('supports conditional requests without a body and rejects unacceptable encodings', async () => {
    // Node fetch's default conditional request sends Cache-Control: no-cache (forces 200).
    const response = await fetch(url, { cache: 'no-cache', headers: { 'accept-encoding': 'gzip', 'if-none-match': encoded.etag } });
    expect(response.status).toBe(304);
    expect((await response.arrayBuffer()).byteLength).toBe(0);
    expect((await fetch(url, { headers: { 'accept-encoding': 'gzip;q=0, identity;q=0' } })).status).toBe(406);
  });

  it('never makes authenticated responses publicly cacheable', async () => {
    const response = await fetch(url, { headers: { authorization: 'Bearer test', 'accept-encoding': 'gzip' } });
    expect(response.headers.get('cache-control')).toBe('private, no-store');
    expect(await response.json()).toEqual(payload);
  });
});
