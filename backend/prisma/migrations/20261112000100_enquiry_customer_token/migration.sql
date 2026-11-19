-- One stable token per customer (same email = same token) on every enquiry, also sent to DealerTrade.
-- Formula matches customerTokenFor() in src/modules/enquiries/customer-token.ts.
ALTER TABLE "enquiries" ADD COLUMN IF NOT EXISTS "customerToken" TEXT;
UPDATE "enquiries"
SET "customerToken" = 'CUS-' || upper(substr(encode(sha256(convert_to('changecars-customer:' || lower(trim("email")), 'UTF8')), 'hex'), 1, 12))
WHERE "customerToken" IS NULL;
CREATE INDEX IF NOT EXISTS "enquiries_customerToken_createdAt_idx" ON "enquiries" ("customerToken", "createdAt" DESC);
