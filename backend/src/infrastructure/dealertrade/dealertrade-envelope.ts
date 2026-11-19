/**
 * DealerTrade wraps paginated responses as `{ status, message, data: { current_page, data: [...], meta, total, ... } }`.
 * Earlier responses returned the page object itself. Both shapes are accepted; anything else returns the body unchanged.
 */
export function dealerTradePage(body: unknown): Record<string, unknown> {
  const value = body && typeof body === 'object' ? body as Record<string, unknown> : {};
  const inner = value.data;
  return inner && typeof inner === 'object' && !Array.isArray(inner) ? inner as Record<string, unknown> : value;
}
