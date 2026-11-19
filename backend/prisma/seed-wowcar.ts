/**
 * Idempotent WowCar Custom Platform Database Seeder.
 * Seeds:
 *  - Customer Apps: "changecars" (main platform), "wowcar" (WowCar global app), "dealer-benz-rajchakru" (Benz Rajchakru white-label dealer app)
 *  - Super Admin (admin@wowcar.co.th) & Dealers (WowCar Premium Dealership, Benz Rajchakru)
 *  - Multilingual Categories, Makes, Models (TH / EN / ZH / AR)
 *  - All 746+ WowCar Vehicle Listings & Images from ../src/data/cars.ts
 *  - All Blog Articles from ../src/data/blogs.ts
 */
import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcryptjs';
import {
  ContentStatus,
  DealerMemberRole,
  DealerPlan,
  DealerStatus,
  FuelType,
  ImageStatus,
  PrismaClient,
  Transmission,
  UserRole,
  VehicleCondition,
  VehicleStatus,
} from '../src/generated/prisma/client';
import { CARS_DATA } from '../../src/data/cars';
import { BLOGS_DATA } from '../../src/data/blogs';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL!, options: '-c TimeZone=UTC' }),
});

const slugify = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\u0E00-\u0E7F]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'item';

function mapFuelType(raw: string): FuelType {
  const v = raw.toLowerCase();
  if (v.includes('ดีเซล') || v.includes('diesel')) return FuelType.DIESEL;
  if (v.includes('ปลั๊กอิน') || v.includes('plug')) return FuelType.PLUGIN_HYBRID;
  if (v.includes('ไฮบริด') || v.includes('hybrid')) return FuelType.HYBRID;
  if (v.includes('ไฟฟ้า') || v.includes('ev') || v.includes('electric')) return FuelType.ELECTRIC;
  if (v.includes('lpg') || v.includes('ngv')) return FuelType.LPG;
  return FuelType.PETROL;
}

function mapTransmission(raw: string): Transmission {
  const v = raw.toLowerCase();
  if (v.includes('ธรรมดา') || v.includes('manual')) return Transmission.MANUAL;
  return Transmission.AUTOMATIC;
}

async function main() {
  console.log('Seeding WowCar Custom Platform database...');

  // 1. Customer Apps
  await prisma.customerApp.upsert({
    where: { id: 'changecars' },
    update: { name: 'WowCar Marketplace', enabled: true },
    create: { id: 'changecars', name: 'WowCar Marketplace', appKey: 'wowcar_786', enabled: true },
  });

  // 2. Super Admin
  const passwordHash = await bcrypt.hash('Admin@WowCar2026!', 12);
  const admin = await prisma.user.upsert({
    where: { appId_email: { appId: 'changecars', email: 'admin@wowcar.co.th' } },
    update: { role: UserRole.SUPER_ADMIN, status: 'ACTIVE' },
    create: {
      appId: 'changecars',
      email: 'admin@wowcar.co.th',
      username: 'admin',
      passwordHash,
      firstName: 'WowCar',
      lastName: 'SuperAdmin',
      phone: '+66943516600',
      role: UserRole.SUPER_ADMIN,
      status: 'ACTIVE',
      emailVerifiedAt: new Date(),
    },
  });

  // 3. Dealers (WowCar Premium Dealership & Benz Rajchakru)
  const wowDealer = await prisma.dealer.upsert({
    where: { slug: 'wowcar-premium-dealership' },
    update: {
      name: 'WowCar Premium Dealership',
      lineId: '@wowcar',
      whatsappNumber: '+66943516600',
      verified: true,
      status: DealerStatus.APPROVED,
      plan: DealerPlan.GOLD,
    },
    create: {
      id: 'wowcar-dealer-1',
      name: 'WowCar Premium Dealership',
      slug: 'wowcar-premium-dealership',
      email: 'dealer@wowcar.co.th',
      phone: '(+66) 094-351-6600',
      lineId: '@wowcar',
      whatsappNumber: '+66943516600',
      verified: true,
      province: 'กรุงเทพมหานคร',
      city: 'Bangkok',
      address: 'Bangkok, Thailand',
      status: DealerStatus.APPROVED,
      plan: DealerPlan.GOLD,
      rating: 4.9,
      approvedAt: new Date(),
      approvedById: admin.id,
    },
  });

  const rajchakruDealer = await prisma.dealer.upsert({
    where: { slug: 'benz-rajchakru' },
    update: {
      name: 'Benz Rajchakru',
      lineId: '@benzrajchakru',
      verified: true,
      status: DealerStatus.APPROVED,
      plan: DealerPlan.GOLD,
      oneSignalAppId: '6db3dab1-9285-4878-be9d-c726a9455703',
    },
    create: {
      id: 'benz-rajchakru',
      name: 'Benz Rajchakru',
      slug: 'benz-rajchakru',
      email: 'info@benzrajchakru.co.th',
      phone: '(+66) 02-617-1212',
      lineId: '@benzrajchakru',
      verified: true,
      province: 'กรุงเทพมหานคร',
      city: 'Phaya Thai, Bangkok',
      address: 'Phahonyothin Soi 5, Phaya Thai, Bangkok',
      status: DealerStatus.APPROVED,
      plan: DealerPlan.GOLD,
      rating: 4.9,
      oneSignalAppId: '6db3dab1-9285-4878-be9d-c726a9455703',
      approvedAt: new Date(),
      approvedById: admin.id,
    },
  });

  await prisma.customerApp.upsert({
    where: { id: `dealer-${rajchakruDealer.id}` },
    update: {
      name: 'Benz Rajchakru',
      appKey: 'wc_36c97bcb1b8bfb642eb36f9be580e1742001881845b1c848',
      oneSignalAppId: '6db3dab1-9285-4878-be9d-c726a9455703',
      dealerIds: [rajchakruDealer.id],
      enabled: true,
    },
    create: {
      id: `dealer-${rajchakruDealer.id}`,
      name: 'Benz Rajchakru',
      appKey: 'wc_36c97bcb1b8bfb642eb36f9be580e1742001881845b1c848',
      oneSignalAppId: '6db3dab1-9285-4878-be9d-c726a9455703',
      dealerIds: [rajchakruDealer.id],
      enabled: true,
    },
  });

  // 4. Categories, Makes, Models & Vehicles from CARS_DATA
  const categoryMap = new Map<string, string>();
  const makeMap = new Map<string, string>();
  const modelMap = new Map<string, string>();

  for (const car of CARS_DATA) {
    const bodyName = car.body_type?.trim() || 'รถเก๋ง';
    const bodySlug = slugify(bodyName);
    if (!categoryMap.has(bodySlug)) {
      const cat = await prisma.category.upsert({
        where: { slug: bodySlug },
        update: { name: bodyName },
        create: {
          name: bodyName,
          slug: bodySlug,
          translations: { th: bodyName, en: bodyName === 'รถเก๋ง' ? 'Sedan' : bodyName },
        },
      });
      categoryMap.set(bodySlug, cat.id);
    }

    const makeName = car.brand?.trim() || 'Toyota';
    const makeSlug = slugify(makeName);
    if (!makeMap.has(makeSlug)) {
      const make = await prisma.make.upsert({
        where: { slug: makeSlug },
        update: { name: makeName },
        create: { name: makeName, slug: makeSlug, translations: { th: makeName, en: makeName } },
      });
      makeMap.set(makeSlug, make.id);
    }
    const makeId = makeMap.get(makeSlug)!;

    const modelName = car.model?.trim() || 'Standard';
    const modelSlug = slugify(modelName);
    const modelKey = `${makeSlug}:${modelSlug}`;
    if (!modelMap.has(modelKey)) {
      const model = await prisma.model.upsert({
        where: { makeId_slug: { makeId, slug: modelSlug } },
        update: { name: modelName },
        create: {
          makeId,
          name: modelName,
          slug: modelSlug,
          defaultCategoryId: categoryMap.get(bodySlug),
          translations: { th: modelName, en: modelName },
        },
      });
      modelMap.set(modelKey, model.id);
    }
    const modelId = modelMap.get(modelKey)!;
    const categoryId = categoryMap.get(bodySlug)!;
    const engineCc = Math.round((parseFloat(car.engine) || 2.0) * 1000);
    const dealerId = makeName.toLowerCase().includes('mercedes') ? rajchakruDealer.id : wowDealer.id;

    await prisma.vehicle.upsert({
      where: { id: String(car.id) },
      update: {
        title: car.title,
        price: Math.max(1000, Math.round(car.price)),
        year: car.year >= 1900 ? car.year : 2020,
        mileage: Math.max(0, Math.round(car.mileage)),
        plateNumber: car.plate || null,
        badges: car.badges ?? [],
        isFeatured: !!car.featured,
        primaryImageUrl: car.images?.[0] ?? null,
        imageCount: car.images?.length ?? 0,
        viewCount: car.views ?? 0,
      },
      create: {
        id: String(car.id),
        slug: `${slugify(car.title)}-${car.id}`,
        dealerId,
        makeId,
        modelId,
        condition: VehicleCondition.USED,
        status: VehicleStatus.PUBLISHED,
        title: car.title,
        year: car.year >= 1900 ? car.year : 2020,
        mileage: Math.max(0, Math.round(car.mileage)),
        price: Math.max(1000, Math.round(car.price)),
        isFeatured: !!car.featured,
        transmission: mapTransmission(car.transmission || ''),
        fuelType: mapFuelType(car.fuel || ''),
        colour: car.color || 'สีขาว',
        engineCapacityCc: engineCc,
        plateNumber: car.plate || null,
        badges: car.badges ?? [],
        province: car.location || 'กรุงเทพมหานคร',
        city: car.location || 'กรุงเทพมหานคร',
        primaryImageUrl: car.images?.[0] ?? null,
        imageCount: car.images?.length ?? 0,
        viewCount: car.views ?? 0,
        popularityScore: car.views ?? 0,
        publishedAt: new Date(),
        categories: { connect: [{ id: categoryId }] },
      },
    });
  }

  // 5. Blog Articles from BLOGS_DATA
  for (const post of BLOGS_DATA) {
    const catSlug = slugify(post.category || 'news');
    const cat = await prisma.articleCategory.upsert({
      where: { slug: catSlug },
      update: { name: post.category },
      create: { name: post.category, slug: catSlug },
    });
    await prisma.article.upsert({
      where: { slug: post.slug },
      update: { title: post.title, excerpt: post.excerpt, coverImageUrl: post.image },
      create: {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        coverImageUrl: post.image,
        categoryId: cat.id,
        authorId: admin.id,
        status: ContentStatus.PUBLISHED,
        featured: true,
        publishedAt: new Date(post.date),
        body: [{ type: 'paragraph', text: post.excerpt }],
      },
    });
  }

  console.log(`Seeded ${CARS_DATA.length} WowCar vehicles and ${BLOGS_DATA.length} blog articles successfully.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
