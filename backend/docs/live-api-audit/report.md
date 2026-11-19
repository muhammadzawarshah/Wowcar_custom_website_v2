# Live API audit — Change Cars

Server: https://changecarapi.wowcar.co.th

Checked: Saturday, 31 October 2026 at 22:02:33 GMT+5

## Coverage and conclusion

Audited all **321 operations documented by the live Swagger schema**, plus five pending-release checks and one existing dealer-scope check. Total unique checked operations/scenarios: 327. Follow-up requests confirmed findings and tested calculator/comparison inputs.

The public API is broadly responding, but this is **not an all-features-working certification**. There is a reproducible dealer-registration validation bug, and the new notification/branded-account release is not active at this URL. Protected flows need a live test login.

| Outcome | Documented operations | What this proves |
| --- | ---: | --- |
| Public reads/calculations returned 2xx with valid requests | 74 | Response observed for the sampled inputs |
| Public input validation returned 400/422 | 21 | Invalid input rejected; successful writes not tested |
| Protected endpoints returned 401/403 | 222 | Anonymous access blocked; authenticated workflows not tested |
| Upload endpoints rejected missing upload token with 403 | 2 | Expected upload-capability boundary |
| Media detail had no available sample | 1 | Empty media collection; placeholder returned MEDIA_ITEM_NOT_FOUND |
| Dealer registration with missing nested input returned 500 | 1 | Reproducible input-handling error |
| **Total documented operations** | **321** | |

An additional existing dealer inventory scope request returned 200. All five pending-release checks returned generic route-not-found 404 responses.

## Confirmed issue: dealer registration validation

`POST /api/v1/dealers/register` with `{}` returned **500 INTERNAL_ERROR** on the initial request and on confirmation. It should reject missing required nested inputs with a client validation error.

A control request with `{"owner":{},"dealership":{}}` returned **400 VALIDATION_FAILED** with nested field errors. This isolates the observed failure to omitted nested objects; it does not prove valid dealer registration is failing.

Confirmation request ID: `d55865d8-52a0-4a4f-9175-b2bf67b89306`.

## Pending release: notifications and branded customer accounts

| Method | Requested path | HTTP | Finding |
| --- | --- | --- | --- |
| GET | `/api/v1/admin/customer-apps` | 404 | UPDATE_NOT_DEPLOYED / NOT_FOUND |
| GET | `/api/v1/admin/notifications/status` | 404 | UPDATE_NOT_DEPLOYED / NOT_FOUND |
| POST | `/api/v1/admin/notifications/broadcast` | 404 | UPDATE_NOT_DEPLOYED / NOT_FOUND |
| POST | `/api/v1/me/notifications/devices` | 404 | UPDATE_NOT_DEPLOYED / NOT_FOUND |
| POST | `/api/v1/apps/deployment-check-noop/auth/register` | 404 | UPDATE_NOT_DEPLOYED / NOT_FOUND |

Swagger also omits the new admin/customer-app and notification-device/broadcast routes. On a deployment containing the new code, protected routes should reject anonymous requests with 401/403 rather than generic 404; unknown registered-app IDs should pass through the new app middleware and produce its app-specific error.

## Other observations

- `/health/ready` returned 200 with database up and Redis disabled.
- Existing customer registration `/auth/register` rejected empty input with 400. No real account was created, and same-email duplicate behavior was not tested on production.
- Existing dealer scope `/api/v1/scope/2854/vehicles?pageSize=2` returned 200 with 28 vehicles reported.
- Variant comparison needs 2–4 variants. A valid two-variant request timed out once at 25 seconds; the bounded retry returned 200 in 162 ms. Treat this as an intermittent latency observation, not a consistently broken endpoint.
- Both finance calculators returned 200 with valid synthetic inputs.
- Media listing was empty, so media-detail success cannot be established with live data.
- Upload token rejection is expected; the upload workflow itself needs a valid form-generated upload token.

## What remains to verify with a live test login

A manual email/password login is enough; there is no need to supply a token manually. The backend uses the authenticated session/access token internally. No live test credentials were supplied for this audit.

- Customer/dealer/admin reads after login and role isolation.
- Successful registration, duplicate email handling, password reset/change and session refresh.
- Enquiry creation and delivery, vehicle management, uploads and payment/bidding-related writes, using agreed test records.
- After release: branded-app same-email signup isolation, notification broadcast, WebSocket delivery and real-device FCM push.

No production accounts, vehicles, enquiries or notifications were created/changed/deleted by this audit. Requests used public GETs, read-only calculators/counts, unauthenticated protected calls, or invalid public-write inputs. Some GET routes may maintain their normal analytics/cache counters.

## Detailed request results

Initial attempts: [results.jsonl](results.jsonl). Follow-up evidence: [followup.json](followup.json). Final classified results: [results.json](results.json).

| Method | Requested path | HTTP | Finding |
| --- | --- | --- | --- |
| POST | `/api/v1/auth/register` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| GET | `/health/live` | 200 | PUBLIC_OK |
| POST | `/api/v1/auth/login` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| GET | `/health/ready` | 200 | PUBLIC_OK |
| POST | `/api/v1/auth/refresh` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| POST | `/api/v1/auth/reset-password` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| POST | `/api/v1/auth/forgot-password` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| POST | `/api/v1/dealers/register` | 500 | SERVER_ERROR / INTERNAL_ERROR |
| GET | `/api/v1/dealers?pageSize=2` | 200 | PUBLIC_OK |
| GET | `/api/v1/dealers/map?pageSize=2` | 200 | PUBLIC_OK |
| GET | `/api/v1/catalogue/makes` | 200 | PUBLIC_OK |
| GET | `/api/v1/dealers/groups` | 200 | PUBLIC_OK |
| GET | `/api/v1/dealers/makes` | 200 | PUBLIC_OK |
| GET | `/api/v1/catalogue/variants/compare?ids=1525ac7e-9662-5e8c-a0da-87a46836a73c,1148dae5-a2a3-5e7b-af4f-c26d7d4d38d7` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicle-filters/manifest` | 200 | PUBLIC_OK |
| GET | `/api/v1/catalogue/features` | 200 | PUBLIC_OK |
| GET | `/api/v1/catalogue/categories` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicles?pageSize=2` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicles/source-summary` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicles/facets` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicles/filters/makes` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicles/filters/all` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicles/filters/colours` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicles/filters/models` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicles/filters/variants` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicles/filters/transmissions` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicles/filters/fuel-types` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicles/filters/drives` | 200 | PUBLIC_OK |
| POST | `/api/v1/vehicles/count` | 200 | PUBLIC_READ_ONLY_OK |
| GET | `/api/v1/vehicles/count` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicles/hot-sellers?pageSize=2` | 200 | PUBLIC_OK |
| POST | `/api/v1/finance/repayment` | 200 | PUBLIC_READ_ONLY_OK |
| GET | `/api/v1/vehicles/specials?pageSize=2` | 200 | PUBLIC_OK |
| POST | `/api/v1/finance/affordability` | 200 | PUBLIC_READ_ONLY_OK |
| GET | `/api/v1/vehicles/compare?ids=1579998%2C1579997` | 200 | PUBLIC_OK |
| POST | `/api/v1/enquiries/vehicle` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| POST | `/api/v1/enquiries/test-drive` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| POST | `/api/v1/enquiries/quote` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| POST | `/api/v1/enquiries/beat-my-quote` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| POST | `/api/v1/enquiries/trade-in` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| POST | `/api/v1/enquiries/concierge` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| POST | `/api/v1/enquiries/help-me-find` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| POST | `/api/v1/enquiries/finance` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| POST | `/api/v1/enquiries/insurance` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| POST | `/api/v1/enquiries/contact` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| POST | `/api/v1/sell-requests` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| GET | `/api/v1/content/article-categories` | 200 | PUBLIC_OK |
| GET | `/api/v1/content/faqs` | 200 | PUBLIC_OK |
| GET | `/api/v1/content/articles?pageSize=2` | 200 | PUBLIC_OK |
| GET | `/api/v1/content/media?pageSize=2` | 200 | PUBLIC_OK |
| GET | `/api/v1/promotions` | 200 | PUBLIC_OK |
| GET | `/api/v1/content/ad-banners` | 200 | PUBLIC_OK |
| GET | `/api/v1/content/testimonials` | 200 | PUBLIC_OK |
| POST | `/api/v1/newsletter/subscribe` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| GET | `/api/v1/content/featured-dealers` | 200 | PUBLIC_OK |
| POST | `/api/v1/newsletter/unsubscribe` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| GET | `/api/v1/seo/sitemap.xml` | 200 | PUBLIC_OK |
| GET | `/api/v1/web/cars` | 200 | PUBLIC_OK |
| GET | `/api/v1/seo/sitemap-static.xml` | 200 | PUBLIC_OK |
| POST | `/api/v1/web/cars/count` | 200 | PUBLIC_READ_ONLY_OK |
| GET | `/api/v1/web/cars/count` | 200 | PUBLIC_OK |
| GET | `/api/v1/web/cars/featured?limit=2` | 200 | PUBLIC_OK |
| GET | `/api/v1/web/cars/all?limit=2` | 200 | PUBLIC_OK |
| GET | `/api/v1/web/cars/recent?limit=2` | 200 | PUBLIC_OK |
| GET | `/api/v1/web/cars/premium?limit=2` | 200 | PUBLIC_OK |
| GET | `/api/v1/web/articles/featured` | 200 | PUBLIC_OK |
| GET | `/api/v1/web/article-categories` | 200 | PUBLIC_OK |
| GET | `/api/v1/web/articles/latest?limit=2` | 200 | PUBLIC_OK |
| POST | `/api/v1/web/uploads/url` | 403 | UPLOAD_TOKEN_REQUIRED / UPLOAD_TOKEN_INVALID |
| POST | `/api/v1/web/uploads/confirm` | 403 | UPLOAD_TOKEN_REQUIRED / UPLOAD_TOKEN_INVALID |
| POST | `/api/v1/web/auth/register` | 422 | VALIDATION_ONLY / FORM_INVALID |
| GET | `/api/v1/web/articles?q=&category=&page=1` | 200 | PUBLIC_OK |
| POST | `/api/v1/price-alerts` | 400 | VALIDATION_ONLY / VALIDATION_FAILED |
| GET | `/api/v1/dealers/4wheels-2222` | 200 | PUBLIC_OK |
| GET | `/api/v1/catalogue/makes/volkswagen/models` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicle-filters/snapshots/inv-9a52b525ef8848289163ce770b199fc900ef83c3114735e06c25925becfe5752.json.gz` | 200 | PUBLIC_OK |
| GET | `/api/v1/catalogue/variants/1525ac7e-9662-5e8c-a0da-87a46836a73c` | 200 | PUBLIC_OK |
| GET | `/api/v1/catalogue/makes/volkswagen/models/polo` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicles/1579998/similar?limit=2` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicles/1579998` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicles/1579998/dealer-vehicles?limit=2` | 200 | PUBLIC_OK |
| GET | `/api/v1/vehicles/1579998/market-price` | 200 | PUBLIC_OK |
| GET | `/api/v1/content/articles/how-to-sell-your-car-for-the-best-price` | 200 | PUBLIC_OK |
| GET | `/api/v1/content/media/audit-missing-sample` | 404 | NO_SAMPLE_RESOURCE / MEDIA_ITEM_NOT_FOUND |
| GET | `/api/v1/promotions/truck-month?pageSize=2` | 200 | PUBLIC_OK |
| GET | `/api/v1/content/pages/privacy-policy` | 200 | PUBLIC_OK |
| GET | `/api/v1/content/featured-dealers/reeds-bellville` | 200 | PUBLIC_OK |
| GET | `/api/v1/seo/vehicles/volkswagen-polo-1-0-tsi-life-1579998/structured-data` | 200 | PUBLIC_OK |
| GET | `/api/v1/seo/sitemap-vehicles-1.xml` | 200 | PUBLIC_OK |
| GET | `/api/v1/web/dealer-stock/2854` | 200 | PUBLIC_OK |
| GET | `/api/v1/web/cars/1579998/dealer-cars?limit=2` | 200 | PUBLIC_OK |
| GET | `/api/v1/web/cars/1579998` | 200 | PUBLIC_OK |
| GET | `/api/v1/web/cars/1579998/similar?limit=2` | 200 | PUBLIC_OK |
| GET | `/api/v1/web/articles/how-to-sell-your-car-for-the-best-price` | 200 | PUBLIC_OK |
| GET | `/api/v1/web/cars/1579998/popular-dealers?limit=2` | 200 | PUBLIC_OK |
| POST | `/api/v1/web/forms/contact` | 422 | VALIDATION_ONLY / FORM_INVALID |
| GET | `/api/v1/web/cars/1579998/market-price` | 200 | PUBLIC_OK |
| POST | `/api/v1/auth/logout` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer-app/dealers/2854?pageSize=2` | 200 | PUBLIC_OK |
| POST | `/api/v1/auth/logout-all` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/auth/change-password` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer-app/dealers/2854/vehicles/1579998?limit=2` | 200 | PUBLIC_OK |
| GET | `/api/v1/auth/me` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me/notifications/unread-count` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/me/notifications/read-all` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me/notifications?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PUT | `/api/v1/me/notifications/preferences` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me/notifications/preferences` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/profile` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/dealer/profile` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/documents/upload-url` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/documents` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/me` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/branches` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/branches` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/documents` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/staff` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/staff` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/catalogue/makes` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/catalogue/makes` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/catalogue/models` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/catalogue/generations` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/dealers?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/catalogue/variants` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/catalogue/categories` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/catalogue/categories` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/catalogue/features` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/catalogue/feature-assignments` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/vehicles?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/vehicles` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/vehicles?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/leads` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/vehicles/review-queue?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/leads?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/enquiries?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me/enquiries?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/leads/stats` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/enquiries?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me/sell-requests?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/sell-requests?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/bidding-sessions?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/bidding/sessions?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/offers?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/me` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me/offers?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me/dashboard` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me/sessions` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me/favourites?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me/favourites/ids` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me/saved-searches` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/me/saved-searches` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/me/recently-viewed` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me/recently-viewed` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/me/delete-account` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me/documents` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/me/documents/upload-url` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me/export` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/me/documents/submit` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/articles` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/article-categories` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/articles?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/media` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/media?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/faqs` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/faqs` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/pages` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/promotions` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/promotions` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/pages` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/ad-banners` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/testimonials` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/testimonials` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/ad-banners` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/featured-dealers` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/featured-dealers` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/dashboard` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/newsletter/subscribers.csv?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/newsletter/subscribers?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/users` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/users?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/stats` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/system/outbox` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/system/outbox/events?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/audit-logs?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/console/leads?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/console/imports` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/console/quality` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/console/snapshots` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/console/snapshots/refresh` | 401 | AUTH_REQUIRED |
| GET | `/api/v1/admin/console/settings` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/web/dashboard/dealers` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/web/dashboard/overview` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/web/dashboard/inventory?dealerId=2854` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/web/dashboard/dealers-by-id` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/web/dashboard/staff` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/web/dashboard/leads?dealerId=2854` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/me/notifications/00000000-0000-4000-8000-000000000000/read` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/dealer/branches/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/dealer/staff/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/web/dashboard/activity` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/dealers/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/dealers/00000000-0000-4000-8000-000000000000/status` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/staff/00000000-0000-4000-8000-000000000000/activity?pageSize=2` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/dealers/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/catalogue/makes/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/admin/catalogue/makes/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/catalogue/makes/00000000-0000-4000-8000-000000000000/models` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/catalogue/models/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/admin/catalogue/models/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/admin/catalogue/generations/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/catalogue/generations/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/catalogue/models/00000000-0000-4000-8000-000000000000/variants` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/catalogue/variants/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/admin/catalogue/variants/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/catalogue/categories/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/admin/catalogue/categories/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/catalogue/features/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/admin/catalogue/feature-assignments/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/admin/catalogue/features/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/submit` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/withdraw` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/edit` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/publish` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/reserve` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/sell` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/release` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/suspend` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/unsuspend` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/archive` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/images/00000000-0000-4000-8000-000000000000/complete` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/images` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/images/upload-url` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/images/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PUT | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/images/order` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/images/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000/flags` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000/approve` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000/reject` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000/publish` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000/suspend` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000/unsuspend` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000/archive` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000/relist` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/dealer/leads/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/leads/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/leads/00000000-0000-4000-8000-000000000000/stage` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/leads/00000000-0000-4000-8000-000000000000/assign` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/leads/00000000-0000-4000-8000-000000000000/activities` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/me/enquiries/00000000-0000-4000-8000-000000000000/cancel` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me/enquiries/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/me/enquiries/00000000-0000-4000-8000-000000000000/reply` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/enquiries/00000000-0000-4000-8000-000000000000/respond` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/enquiries/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/enquiries/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/enquiries/00000000-0000-4000-8000-000000000000/respond` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/enquiries/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/me/sell-requests/00000000-0000-4000-8000-000000000000/request-offers` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/me/sell-requests/00000000-0000-4000-8000-000000000000/cancel` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/me/sell-requests/00000000-0000-4000-8000-000000000000/images/upload-url` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me/sell-requests/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/me/sell-requests/00000000-0000-4000-8000-000000000000/images` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/sell-requests/00000000-0000-4000-8000-000000000000/status` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/sell-requests/00000000-0000-4000-8000-000000000000/valuations` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/bidding-sessions/00000000-0000-4000-8000-000000000000/reopen` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/sell-requests/00000000-0000-4000-8000-000000000000/bidding-sessions` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/sell-requests/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/bidding-sessions/00000000-0000-4000-8000-000000000000/cancel` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/bidding/sessions/00000000-0000-4000-8000-000000000000/offers` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/dealer/bidding/sessions/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/dealer/offers/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/offers/00000000-0000-4000-8000-000000000000/withdraw` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/dealer/offers/00000000-0000-4000-8000-000000000000/counter-response` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/me/offers/00000000-0000-4000-8000-000000000000/accept` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/me/offers/00000000-0000-4000-8000-000000000000/reject` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/me/offers/00000000-0000-4000-8000-000000000000/counter` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PUT | `/api/v1/me/favourites/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/me/sessions/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/me/favourites/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/me/saved-searches/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/me/saved-searches/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/me/documents/00000000-0000-4000-8000-000000000000/complete` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/me/documents/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/me/documents/00000000-0000-4000-8000-000000000000/view` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/articles/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/articles/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/admin/articles/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/articles/00000000-0000-4000-8000-000000000000/status` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/admin/article-categories/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/admin/media/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/media/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/media/00000000-0000-4000-8000-000000000000/status` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/faqs/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/admin/faqs/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/pages/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/admin/pages/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/pages/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/pages/00000000-0000-4000-8000-000000000000/status` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/promotions/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/admin/promotions/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PUT | `/api/v1/admin/promotions/00000000-0000-4000-8000-000000000000/vehicles` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/ad-banners/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/admin/ad-banners/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/admin/testimonials/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/testimonials/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/featured-dealers/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| DELETE | `/api/v1/admin/featured-dealers/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/users/00000000-0000-4000-8000-000000000000/status` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| PATCH | `/api/v1/admin/users/00000000-0000-4000-8000-000000000000/role` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/users/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/system/outbox/events/00000000-0000-4000-8000-000000000000/retry` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/console/leads/00000000-0000-4000-8000-000000000000/assign` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/console/leads/00000000-0000-4000-8000-000000000000/stage` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/admin/console/dealers/00000000-0000-4000-8000-000000000000/view` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/console/leads/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| POST | `/api/v1/web/dashboard/dealers/00000000-0000-4000-8000-000000000000/status` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/web/dashboard/dealers/00000000-0000-4000-8000-000000000000` | 401 | AUTH_REQUIRED / UNAUTHORIZED |
| GET | `/api/v1/admin/customer-apps` | 404 | UPDATE_NOT_DEPLOYED / NOT_FOUND |
| GET | `/api/v1/admin/notifications/status` | 404 | UPDATE_NOT_DEPLOYED / NOT_FOUND |
| POST | `/api/v1/admin/notifications/broadcast` | 404 | UPDATE_NOT_DEPLOYED / NOT_FOUND |
| POST | `/api/v1/me/notifications/devices` | 404 | UPDATE_NOT_DEPLOYED / NOT_FOUND |
| POST | `/api/v1/apps/deployment-check-noop/auth/register` | 404 | UPDATE_NOT_DEPLOYED / NOT_FOUND |
| GET | `/api/v1/scope/2854/vehicles?pageSize=2` | 200 | PUBLIC_OK |
