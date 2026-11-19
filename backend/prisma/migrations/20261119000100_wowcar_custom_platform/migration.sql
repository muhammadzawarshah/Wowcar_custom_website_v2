-- WowCar Custom Platform v2.0 Migration
-- Adds Thai/multilingual fields, dealer Line/WhatsApp/OneSignal config, vehicle badges & license plates,
-- dealer-scoped sell requests, and Make/Model Follow Alerts (make_model_alerts).

ALTER TABLE "dealers"
  ADD COLUMN IF NOT EXISTS "lineId" TEXT,
  ADD COLUMN IF NOT EXISTS "whatsappNumber" TEXT,
  ADD COLUMN IF NOT EXISTS "verified" BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS "oneSignalAppId" TEXT,
  ADD COLUMN IF NOT EXISTS "oneSignalRestKeyEncrypted" TEXT;

ALTER TABLE "makes"
  ADD COLUMN IF NOT EXISTS "translations" JSONB;

ALTER TABLE "models"
  ADD COLUMN IF NOT EXISTS "translations" JSONB;

ALTER TABLE "categories"
  ADD COLUMN IF NOT EXISTS "translations" JSONB;

ALTER TABLE "features"
  ADD COLUMN IF NOT EXISTS "translations" JSONB;

ALTER TABLE "vehicles"
  ADD COLUMN IF NOT EXISTS "plateNumber" TEXT,
  ADD COLUMN IF NOT EXISTS "badges" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  ADD COLUMN IF NOT EXISTS "translations" JSONB;

CREATE INDEX IF NOT EXISTS "vehicles_badges_gin_idx" ON "vehicles" USING GIN ("badges");

ALTER TABLE "sell_requests"
  ADD COLUMN IF NOT EXISTS "dealerId" TEXT,
  ADD COLUMN IF NOT EXISTS "source" TEXT NOT NULL DEFAULT 'website',
  ADD COLUMN IF NOT EXISTS "plateNumber" TEXT,
  ADD COLUMN IF NOT EXISTS "dealerNotes" TEXT;

CREATE INDEX IF NOT EXISTS "sell_requests_dealer_status_idx" ON "sell_requests" ("dealerId", "status", "createdAt" DESC);

ALTER TABLE "push_devices"
  ADD COLUMN IF NOT EXISTS "dealerId" TEXT,
  ADD COLUMN IF NOT EXISTS "appId" TEXT,
  ADD COLUMN IF NOT EXISTS "language" TEXT NOT NULL DEFAULT 'th',
  ADD COLUMN IF NOT EXISTS "appVersion" TEXT;

CREATE INDEX IF NOT EXISTS "push_devices_dealer_idx" ON "push_devices" ("dealerId");

ALTER TABLE "customer_apps"
  ADD COLUMN IF NOT EXISTS "appKey" TEXT,
  ADD COLUMN IF NOT EXISTS "oneSignalAppId" TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS "customer_apps_appKey_key" ON "customer_apps" ("appKey");

CREATE TABLE IF NOT EXISTS "make_model_alerts" (
  "id" UUID NOT NULL,
  "userId" UUID NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
  "appId" TEXT NOT NULL DEFAULT 'changecars',
  "dealerId" TEXT,
  "makeId" UUID REFERENCES "makes"("id") ON DELETE CASCADE,
  "modelId" UUID REFERENCES "models"("id") ON DELETE CASCADE,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "make_model_alerts_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "make_model_alerts_userId_appId_makeId_modelId_key"
  ON "make_model_alerts" ("userId", "appId", "makeId", "modelId");
CREATE INDEX IF NOT EXISTS "make_model_alerts_makeId_idx" ON "make_model_alerts" ("makeId");
CREATE INDEX IF NOT EXISTS "make_model_alerts_modelId_idx" ON "make_model_alerts" ("modelId");
CREATE INDEX IF NOT EXISTS "make_model_alerts_userId_appId_idx" ON "make_model_alerts" ("userId", "appId");
