-- Some installations removed this table after the original dealer-app migration.
-- Restore the updated API's model without changing existing dealer credentials/data.
CREATE TABLE IF NOT EXISTS "dealer_app_tokens" (
    "id" UUID NOT NULL,
    "dealerId" TEXT NOT NULL,
    "appName" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "tokenPrefix" TEXT NOT NULL,
    "scopes" TEXT[] NOT NULL,
    "createdById" UUID NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "dealer_app_tokens_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "dealer_app_tokens_dealerId_fkey" FOREIGN KEY ("dealerId")
        REFERENCES "dealers"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "dealer_app_tokens_tokenHash_key"
    ON "dealer_app_tokens"("tokenHash");
CREATE INDEX IF NOT EXISTS "dealer_app_tokens_dealerId_createdAt_idx"
    ON "dealer_app_tokens"("dealerId", "createdAt" DESC);
