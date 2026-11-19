import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';
import { DealerAppsBootstrap } from '../src/modules/customer-apps/customer-apps.module';
import type { PrismaService } from '../src/infrastructure/database/prisma.service';
import { appDealerId } from '../src/modules/customer-apps/dealer-app-identity';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

async function main() {
  if (!process.env.DATABASE_URL) throw new Error('Set DATABASE_URL for the intended backend environment');
  const db = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });
  try {
    const result = await new DealerAppsBootstrap(db as unknown as PrismaService).provision();
    console.log(result);
    const exportPath = process.argv.find(value => value.startsWith('--export='))?.slice('--export='.length);
    if (exportPath) {
      const apps = await db.customerApp.findMany({ orderBy: { id: 'asc' } });
      const quote = (value: string) => `"${value.replaceAll('"', '""')}"`;
      const rows = apps.flatMap(app => {
        const id = appDealerId(app.id);
        if (!id) return [];
        const base = `/${(process.env.API_PREFIX || 'api/v1').replace(/^\/+|\/+$/g, '')}/apps/${app.id}`;
        return [[id, app.id, app.name, base, `${base}/auth/register`, `${base}/auth/login`].map(quote).join(',')];
      });
      const file = resolve(exportPath);
      await mkdir(dirname(file), { recursive: true });
      await writeFile(file, ['dealerId,appId,name,apiBase,signupPath,loginPath', ...rows].join('\n') + '\n');
      console.log(`Exported ${rows.length} dealer app URLs to ${file}`);
    }
  } finally { await db.$disconnect(); }
}
void main().catch(error => { console.error(error instanceof Error ? error.message : 'Provisioning failed'); process.exitCode = 1; });
