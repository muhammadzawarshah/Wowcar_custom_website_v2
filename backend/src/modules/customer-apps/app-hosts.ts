import type { PrismaService } from '../../infrastructure/database/prisma.service';

const REFRESH_MS = 60_000;

/**
 * Maps request host names to customer apps (customer_apps.domains). Loaded at most once a minute; an app's own
 * domain opens its API without the /apps/<id> prefix. With no domains configured nothing ever matches.
 */
export function appHostResolver(db: Pick<PrismaService, 'customerApp'>, now = () => Date.now()) {
  let hosts = new Map<string, string>();
  let loadedAt = -Infinity;
  let loading: Promise<void> | undefined;
  const load = async () => {
    const rows = await db.customerApp.findMany({ where: { enabled: true, NOT: { domains: { isEmpty: true } } }, select: { id: true, domains: true } });
    const next = new Map<string, string>();
    for (const row of rows) for (const domain of row.domains) next.set(domain.toLowerCase(), row.id);
    hosts = next;
    loadedAt = now();
  };
  return async (host: string): Promise<string | null> => {
    if (now() - loadedAt > REFRESH_MS) {
      loading ??= load().finally(() => { loading = undefined; });
      // Keep serving the previous map if the database is briefly unavailable.
      await loading.catch(() => { loadedAt = now(); });
    }
    return hosts.get(host) ?? null;
  };
}

export const DOMAIN = /^(?=.{4,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/;
