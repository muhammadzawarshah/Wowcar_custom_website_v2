/** Explicit dashboard edits take precedence over future feed refreshes. */
export const PROFILE_OVERRIDE_SOURCE = 'dashboard';
export const PROFILE_OVERRIDE_KIND = 'dealer-profile';
const FIELDS = ['name', 'email', 'phone', 'website', 'description', 'province', 'city', 'address', 'logoUrl'] as const;
export function dealerProfileOverrides(payload: unknown): Record<string, string | null> {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return {};
  const row = payload as Record<string, unknown>;
  return Object.fromEntries(FIELDS.filter(key => typeof row[key] === 'string' || row[key] === null).map(key => [key, row[key] as string | null]));
}
