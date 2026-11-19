import { createHash } from 'node:crypto';
import { mkdtempSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import sharp from 'sharp';
import { DealerTradeMediaService } from './dealertrade-media.service';

describe('DealerTrade logo copies', () => {
  const dir = mkdtempSync(join(tmpdir(), 'dt-media-'));
  beforeAll(() => { process.env.DEALERTRADE_MEDIA_DIR = dir; process.env.API_PUBLIC_URL = 'https://api.example.test/'; });
  afterAll(() => { delete process.env.DEALERTRADE_MEDIA_DIR; delete process.env.API_PUBLIC_URL; jest.restoreAllMocks(); });

  it('downloads dealer and group logos once and points dealers at our copy', async () => {
    const png = await sharp({ create: { width: 4, height: 4, channels: 3, background: '#fff' } }).png().toBuffer();
    const placeholder = await sharp({ create: { width: 2, height: 2, channels: 3, background: '#000' } }).png().toBuffer();
    // Like changecars.co.za, unknown files return a placeholder image with HTTP 200.
    const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(async (url) => /broken|missing-/.test(String(url))
      ? new Response(placeholder, { status: 200 }) : new Response(png, { status: 200 }));
    const updateMany = jest.fn().mockResolvedValue({ count: 1 });
    const prisma = {
      sourceFeedRecord: { findMany: jest.fn().mockResolvedValue([]) },
      $queryRaw: jest.fn().mockResolvedValue([
        { dealerId: '3490', image: 'dealers/250711/3490.png', groups: [{ id: 134, name: 'Group 1', logo: 'dealer_categories/241219/gpi-lg.png' }] },
        { dealerId: '3491', image: 'dealers/broken.png', groups: [{ id: 134, name: 'Group 1', logo: 'dealer_categories/241219/gpi-lg.png' }] },
        { dealerId: '9', image: null, groups: [] },
      ]),
      dealer: { updateMany },
    };
    const media = new DealerTradeMediaService(prisma as any);
    expect(media.url('dealers/250711/3490.png')).toBe('https://www.changecars.co.za/images/200/dealers/250711/3490.png');

    await media.mirror();
    expect(fetchMock).toHaveBeenCalledTimes(4);
    expect(String(fetchMock.mock.calls[1][0])).toBe('https://www.changecars.co.za/images/200/dealers/250711/3490.png');
    expect(readdirSync(join(dir, 'dealertrade'))).toHaveLength(2);
    const ours = media.url('dealers/250711/3490.png');
    expect(ours).toMatch(/^https:\/\/api\.example\.test\/media\/dealertrade\/[a-f0-9]{64}\.png$/);
    expect(media.url('dealer_categories/241219/gpi-lg.png')).toMatch(/^https:\/\/api\.example\.test\/media\/dealertrade\//);
    expect(updateMany).toHaveBeenCalledTimes(1);
    expect(updateMany).toHaveBeenCalledWith({ where: { id: '3490', OR: [{ logoUrl: null }, { logoUrl: { not: ours } }] }, data: { logoUrl: ours } });

    // Only the broken logo is tried again (plus the placeholder probe).
    await new DealerTradeMediaService(prisma as any).mirror();
    expect(fetchMock).toHaveBeenCalledTimes(6);
  });
  it('preserves a logo explicitly set through the group dashboard', async () => {
    const updateMany = jest.fn();
    const prisma = { $queryRaw: jest.fn().mockResolvedValue([{ dealerId: '3490', image: 'dealers/250711/3490.png', groups: [] }]),
      sourceFeedRecord: { findMany: jest.fn().mockResolvedValue([{ externalId: '3490', payload: { logoUrl: 'https://custom.example/logo.png' } }]) }, dealer: { updateMany } };
    await new DealerTradeMediaService(prisma as any).mirror();
    expect(updateMany).not.toHaveBeenCalled();
  });
  it('serves local logo copies from the development API when no public origin is configured', () => {
    const previous = { origin: process.env.API_PUBLIC_URL, mode: process.env.NODE_ENV, port: process.env.PORT };
    const source = 'dealers/local-test.png';
    const file = `${createHash('sha256').update(source).digest('hex')}.png`;
    mkdirSync(join(dir, 'dealertrade'), { recursive: true });
    writeFileSync(join(dir, 'dealertrade', file), Buffer.from('local-logo-fixture'));
    try {
      delete process.env.API_PUBLIC_URL;
      process.env.NODE_ENV = 'development';
      process.env.PORT = '4100';
      const media = new DealerTradeMediaService({} as any);
      expect(media.url(source)).toBe(`http://localhost:4100/media/dealertrade/${file}`);
      process.env.API_PUBLIC_URL = 'https://custom-api.example/';
      expect(media.url(source)).toBe(`https://custom-api.example/media/dealertrade/${file}`);
      delete process.env.API_PUBLIC_URL;
      process.env.NODE_ENV = 'production';
      expect(media.url(source)).toBe(`https://changecarapi.wowcar.co.th/media/dealertrade/${file}`);
    } finally {
      for (const [key,value] of Object.entries({ API_PUBLIC_URL: previous.origin, NODE_ENV: previous.mode, PORT: previous.port })) {
        if (value === undefined) delete process.env[key]; else process.env[key] = value;
      }
    }
  });

});
