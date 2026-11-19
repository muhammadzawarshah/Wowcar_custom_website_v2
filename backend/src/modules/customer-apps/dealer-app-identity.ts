import { validGroupScope } from './group1';

export const DEALER_CUSTOMER_ID = /^(?:\d{1,10}|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/;

export function dealerCustomerAppId(dealerId: string): string {
  if (!DEALER_CUSTOMER_ID.test(dealerId)) throw new Error('A numeric or UUID dealer ID is required');
  return `dealer-${dealerId}`;
}
export function appDealerId(appId: string): string | null {
  const id = appId.startsWith('dealer-') ? appId.slice('dealer-'.length) : '';
  return DEALER_CUSTOMER_ID.test(id) ? id : null;
}
/** A dealer app owns exactly its dealer; Group1 retains its existing fixed branch set; other groups own 1–20 dealers. */
export function validCustomerAppScope(app: { id: string; dealerIds: readonly string[] }): boolean {
  const dealerId = appDealerId(app.id);
  if (dealerId === null) return validGroupScope(app);
  return app.dealerIds.length === 1 && app.dealerIds[0] === dealerId;
}
