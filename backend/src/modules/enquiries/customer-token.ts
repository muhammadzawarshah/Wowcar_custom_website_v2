import { createHash } from 'node:crypto';

/**
 * A stable customer token: the same email always gives the same token, on the app, the website and every branded app,
 * logged in or not. It identifies "who sent this enquiry" to ChangeCars staff and DealerTrade without the email itself.
 * Keep in step with the backfill in migration 20261112000100_enquiry_customer_token.
 */
export function customerTokenFor(email: string): string {
  return `CUS-${createHash('sha256').update(`changecars-customer:${email.trim().toLowerCase()}`).digest('hex').slice(0, 12).toUpperCase()}`;
}
