/** The existing combined Group1 branded customer app. These are the existing app's four branches. */
export const GROUP1_APP_ID = 'group1';
export const GROUP1_APP_NAME = 'Group1';
export const GROUP1_DEALER_IDS = ['3490', '3491', '3493', '3496'] as const;

export function isGroup1Scope(ids: readonly string[]) {
  const unique = [...new Set(ids)].sort();
  return unique.length === GROUP1_DEALER_IDS.length && unique.every((id, i) => id === GROUP1_DEALER_IDS[i]);
}

/**
 * Dealer groups (multi-tenant customer apps). Group1 keeps its fixed identity and branches above; any other group is a
 * customer_apps row whose ID is not the main app and not a `dealer-<id>` single-dealer app.
 * A dealer belongs to at most one group, so staff always resolve to exactly one group dashboard.
 */
export type GroupScope = { id: string; name: string; dealerIds: string[] };
export const GROUP1_SCOPE: Readonly<GroupScope> = Object.freeze({ id: GROUP1_APP_ID, name: GROUP1_APP_NAME, dealerIds: [...GROUP1_DEALER_IDS] });
export const MIN_GROUP_DEALERS = 1;
export const MAX_GROUP_DEALERS = 20;
const GROUP_APP_ID = /^[a-z0-9][a-z0-9-]{2,63}$/;
const DEALER_ID = /^(?:\d{1,10}|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/;

export function isGroupAppId(id: string): boolean {
  return GROUP_APP_ID.test(id) && id !== 'changecars' && !id.startsWith('dealer-');
}

/** A new group (or branded single-dealer app) needs 1–20 distinct dealer IDs; Group1 must stay exactly its four branches. */
export function validGroupScope(app: { id: string; dealerIds: readonly string[] }): boolean {
  if (app.id === GROUP1_APP_ID) return isGroup1Scope(app.dealerIds);
  if (!isGroupAppId(app.id)) return false;
  const unique = new Set(app.dealerIds);
  return unique.size === app.dealerIds.length && unique.size >= MIN_GROUP_DEALERS && unique.size <= MAX_GROUP_DEALERS && app.dealerIds.every(id => DEALER_ID.test(id));
}

/** Prisma filter for customer_apps rows that are dealer groups (not the main app, not single-dealer apps). */
export const GROUP_APPS_WHERE = { NOT: [{ id: 'changecars' }, { id: { startsWith: 'dealer-' } }] };

type GroupDb = { customerApp: { findFirst(args: object): Promise<{ id: string; name: string; dealerIds: string[] } | null> } };

/** The group a dealer belongs to; Group1 branches resolve without a database read. */
export async function groupForDealer(db: GroupDb, dealerId: string): Promise<GroupScope | null> {
  if ((GROUP1_DEALER_IDS as readonly string[]).includes(dealerId)) return GROUP1_SCOPE;
  const app = await db.customerApp.findFirst({ where: { ...GROUP_APPS_WHERE, dealerIds: { has: dealerId } }, select: { id: true, name: true, dealerIds: true } });
  return app && validGroupScope(app) ? { id: app.id, name: app.name, dealerIds: [...app.dealerIds].sort() } : null;
}

/** A group by its app ID (super admins choosing a dashboard). */
export async function groupById(db: GroupDb, id: string): Promise<GroupScope | null> {
  if (id === GROUP1_APP_ID) return GROUP1_SCOPE;
  if (!isGroupAppId(id)) return null;
  const app = await db.customerApp.findFirst({ where: { id }, select: { id: true, name: true, dealerIds: true } });
  return app && validGroupScope(app) ? { id: app.id, name: app.name, dealerIds: [...app.dealerIds].sort() } : null;
}
