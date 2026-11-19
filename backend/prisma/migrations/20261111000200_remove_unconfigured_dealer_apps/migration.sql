-- Customer apps now exist only when a super admin configures one.
-- Remove the automatically created dealer-<id> apps that were never used or configured:
-- no customers, no newsletter subscribers, no app content and default settings.
-- The main ChangeCars app, Group1 and every configured app are untouched.
DELETE FROM "customer_apps" c
WHERE c."id" LIKE 'dealer-%'
  AND c."resetUrl" IS NULL
  AND c."enabled" = true
  AND cardinality(c."domains") = 0
  AND c."config" = '{}'::jsonb
  AND NOT EXISTS (SELECT 1 FROM "users" u WHERE u."appId" = c."id")
  AND NOT EXISTS (SELECT 1 FROM "newsletter_subscribers" n WHERE n."appId" = c."id")
  AND NOT EXISTS (SELECT 1 FROM "ad_banners" b WHERE b."appId" = c."id")
  AND NOT EXISTS (SELECT 1 FROM "testimonials" t WHERE t."appId" = c."id");
