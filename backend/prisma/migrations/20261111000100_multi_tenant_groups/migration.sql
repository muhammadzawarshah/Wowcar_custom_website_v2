-- Multi-tenant dealer groups. Additive only: existing rows keep their behaviour
-- (no domains, empty config, banners/testimonials with appId NULL show everywhere as before).
ALTER TABLE "customer_apps" ADD COLUMN IF NOT EXISTS "domains" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];
ALTER TABLE "customer_apps" ADD COLUMN IF NOT EXISTS "config" JSONB NOT NULL DEFAULT '{}';

ALTER TABLE "ad_banners" ADD COLUMN IF NOT EXISTS "appId" TEXT;
ALTER TABLE "testimonials" ADD COLUMN IF NOT EXISTS "appId" TEXT;
CREATE INDEX IF NOT EXISTS "ad_banners_appId_idx" ON "ad_banners"("appId");
CREATE INDEX IF NOT EXISTS "testimonials_appId_idx" ON "testimonials"("appId");

DO $$ BEGIN
  ALTER TABLE "ad_banners" ADD CONSTRAINT "ad_banners_appId_fkey" FOREIGN KEY ("appId") REFERENCES "customer_apps"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_appId_fkey" FOREIGN KEY ("appId") REFERENCES "customer_apps"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
