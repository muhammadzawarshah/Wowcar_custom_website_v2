# Live API timing report

Measured: Sunday, 1 November 2026 at 04:13:35 GMT+5

Server: https://changecarapi.wowcar.co.th

Measured from this client host; includes DNS/TLS/network/server/body transfer, not isolated server CPU time.

Three sequential successful samples per critical main/Group1 flow. Single sample for each documented operation, bounded concurrency 3 during the endpoint scan. Protected GETs use a temporary CUSTOMER account; protected writes use no token. Public writes use invalid empty input unless explicitly read-only. No existing production records changed.

Documented operations checked: 328/328. Critical-flow samples: 3 per label. PDF size: 1049211 bytes (~1 MiB). Temporary test accounts: 6. Cleanup confirmed: true.

## Quick summary — successful flows

Median of three successful samples; seconds.

| Operation | Change Cars | Group1 |
| --- | --- | --- |
| Signup | 0.84 s | 0.72 s |
| Login | 0.76 s | 0.75 s |
| Token refresh | 0.14 s | 0.14 s |
| Profile | 0.14 s | 0.14 s |
| Notifications list | 0.13 s | 0.14 s |
| Documents list | 0.14 s | 0.13 s |
| Upload URL | 0.14 s | 0.14 s |
| PDF upload (~1 MiB) | 2.03 s | 1.89 s |
| Complete upload | 0.61 s | 0.41 s |
| Download URL | 0.31 s | 0.24 s |
| PDF download (~1 MiB) | 1.78 s | 1.77 s |
| Delete document | 0.46 s | 0.44 s |
| Logout | 0.13 s | 0.13 s |

The largest decoded response was `/vehicles/filters/all`: 45,149,552 bytes (~45.15 MB decimal). It took 15.00 s initially and 7.15 s on the follow-up. These sizes are response bytes after client decoding, not a measured compressed wire size.

All six benchmark PDFs were checksum-verified and deleted, and all six temporary accounts were closed/anonymised. The existing demo/client accounts were not used or changed.

## Successful login, registration and upload flow timings

| Operation | Samples | Min ms | Median ms | Max ms | HTTP |
| --- | --- | --- | --- | --- | --- |
| ChangeCars registration | 3 | 678.2 | 842.8 | 891.9 | 201 |
| Group1 registration | 3 | 693.9 | 716.1 | 718 | 201 |
| ChangeCars login | 3 | 726.9 | 759.9 | 858 | 200 |
| ChangeCars logout | 3 | 123.3 | 129 | 131.6 | 204 |
| ChangeCars refresh | 3 | 138.4 | 138.5 | 149.5 | 200 |
| ChangeCars /auth/me | 3 | 136.4 | 140.4 | 141 | 200 |
| ChangeCars /me/notifications | 3 | 131.9 | 132.7 | 172.2 | 200 |
| ChangeCars /me/notifications/unread-count | 3 | 130.6 | 131.7 | 205.5 | 200 |
| ChangeCars /me/documents | 3 | 131.6 | 140.5 | 145.5 | 200 |
| ChangeCars upload URL | 3 | 136.8 | 144.2 | 156.3 | 201 |
| ChangeCars upload PDF (~1 MiB) | 3 | 1985.9 | 2031.3 | 2560.2 | 200 |
| ChangeCars complete document | 3 | 409.3 | 611.7 | 1725.7 | 201 |
| ChangeCars download URL | 3 | 280.1 | 311.5 | 332.5 | 200 |
| ChangeCars download PDF (~1 MiB) | 3 | 1769.4 | 1784 | 1825.2 | 200 |
| ChangeCars delete test document | 3 | 444.7 | 460.8 | 475.4 | 200 |
| Group1 login | 3 | 692.9 | 745.8 | 807.3 | 200 |
| Group1 logout | 3 | 130.1 | 132.5 | 137.9 | 204 |
| Group1 refresh | 3 | 138.9 | 141.2 | 146.4 | 200 |
| Group1 /auth/me | 3 | 134.3 | 137.2 | 145.4 | 200 |
| Group1 /me/notifications | 3 | 129.8 | 136.9 | 143.9 | 200 |
| Group1 /me/notifications/unread-count | 3 | 130.4 | 135.7 | 153.4 | 200 |
| Group1 /me/documents | 3 | 131.3 | 133.4 | 140.8 | 200 |
| Group1 upload URL | 3 | 134.2 | 136.6 | 140 | 201 |
| Group1 upload PDF (~1 MiB) | 3 | 1881.5 | 1894.6 | 1930.6 | 200 |
| Group1 complete document | 3 | 382 | 407.8 | 408.4 | 201 |
| Group1 download URL | 3 | 173.9 | 236.5 | 237 | 200 |
| Group1 download PDF (~1 MiB) | 3 | 1769 | 1771.7 | 1773.2 | 200 |
| Group1 delete test document | 3 | 438.6 | 439.7 | 452.4 | 200 |

These are small-sample observations, not a load test or production SLA. First requests may include cold connection/cache effects. Storage PUT/download timings include actual file-body transfer.

## Slowest successful documented requests

| Method | Path | Total ms | TTFB ms | HTTP |
| --- | --- | --- | --- | --- |
| GET | /api/v1/vehicles/filters/all | 15002.3 | 13847.7 | 200 |
| GET | /api/v1/vehicles/facets | 9942.1 | 9774 | 200 |
| GET | /api/v1/vehicles/filters/makes | 7717.1 | 7716.8 | 200 |
| GET | /api/v1/vehicles/filters/variants | 6974.3 | 6957.6 | 200 |
| GET | /api/v1/vehicles?pageSize=2 | 5124.7 | 5123.9 | 200 |
| GET | /api/v1/vehicles/filters/colours | 4878.4 | 4877.9 | 200 |
| GET | /api/v1/vehicles/source-summary | 4010.4 | 4010 | 200 |
| GET | /api/v1/dealers/makes | 801.5 | 799.1 | 200 |
| GET | /api/v1/me/recently-viewed | 750.8 | 750.7 | 200 |
| GET | /api/v1/web/cars/1579998 | 745.8 | 720.7 | 200 |
| GET | /health/live | 695.5 | 695.4 | 200 |
| GET | /api/v1/dealers/4wheels-2222 | 669.4 | 668.8 | 200 |
| GET | /api/v1/me/favourites/ids | 641.5 | 641.4 | 200 |
| GET | /api/v1/catalogue/variants/compare?ids=1525ac7e-9662-5e8c-a0da-87a46836a73c%2C1148dae5-a2a3-5e7b-af4f-c26d7d4d38d7 | 605.4 | 605.1 | 200 |
| POST | /api/v1/vehicles/count | 600.5 | 600 | 200 |

## Limits and interpretation

- 401/403 timings measure rejection only; they do not establish successful admin/dealer functionality.
- 400/422 timings measure input validation only; they do not establish successful writes.
- 404 with a placeholder ID does not prove a missing endpoint. Customer detail operations require appropriate owned records.
- No real enquiries, notifications or dealer inventory changes were submitted.
- Snapshot response timing includes its full download. No snapshot checksum assertion was made.
- Test documents were checksum-verified and deleted. Temporary accounts were anonymised through their own API.

## Every documented endpoint

| Method | Path | Scenario | HTTP | TTFB ms | Total ms |
| --- | --- | --- | --- | --- | --- |
| POST | /api/v1/admin/customer-apps | unauthenticated-write-guard | 401 | 141.5 | 141.6 |
| GET | /api/v1/admin/customer-apps | customer-authorised-read-or-role-rejection | 403 | 142.8 | 143.4 |
| PATCH | /api/v1/admin/customer-apps/00000000-0000-4000-8000-000000000000/status | unauthenticated-write-guard | 401 | 156 | 156.1 |
| GET | /health/ready | public-read | 200 | 141.3 | 141.7 |
| POST | /api/v1/auth/register | invalid-input-validation | 400 | 132.5 | 132.5 |
| POST | /api/v1/auth/login | invalid-input-validation | 400 | 132.9 | 133.1 |
| POST | /api/v1/auth/refresh | invalid-input-validation | 400 | 155.7 | 155.8 |
| GET | /health/live | public-read | 200 | 695.4 | 695.5 |
| POST | /api/v1/auth/logout | unauthenticated-write-guard | 401 | 127.4 | 127.5 |
| POST | /api/v1/auth/logout-all | unauthenticated-write-guard | 401 | 127.1 | 127.3 |
| POST | /api/v1/auth/forgot-password | invalid-input-validation | 400 | 126 | 126.1 |
| POST | /api/v1/auth/reset-password | invalid-input-validation | 400 | 127.2 | 127.3 |
| POST | /api/v1/auth/change-password | unauthenticated-write-guard | 401 | 123.4 | 123.5 |
| GET | /api/v1/auth/me | customer-authorised-read-or-role-rejection | 200 | 141.2 | 141.5 |
| POST | /api/v1/me/notifications/devices | unauthenticated-write-guard | 401 | 131.8 | 131.9 |
| DELETE | /api/v1/me/notifications/devices | unauthenticated-write-guard | 401 | 133.6 | 133.7 |
| GET | /api/v1/me/notifications?pageSize=2 | customer-authorised-read-or-role-rejection | 200 | 258.8 | 259.3 |
| POST | /api/v1/me/notifications/00000000-0000-4000-8000-000000000000/read | unauthenticated-write-guard | 401 | 150.8 | 150.9 |
| GET | /api/v1/me/notifications/unread-count | customer-authorised-read-or-role-rejection | 200 | 326.1 | 326.2 |
| POST | /api/v1/me/notifications/read-all | unauthenticated-write-guard | 401 | 124.4 | 124.5 |
| GET | /api/v1/me/notifications/preferences | customer-authorised-read-or-role-rejection | 200 | 262.1 | 262.5 |
| PUT | /api/v1/me/notifications/preferences | unauthenticated-write-guard | 401 | 132.7 | 132.9 |
| GET | /api/v1/admin/notifications/status | customer-authorised-read-or-role-rejection | 403 | 164.9 | 165.2 |
| POST | /api/v1/admin/notifications/broadcast | unauthenticated-write-guard | 401 | 128 | 128.1 |
| POST | /api/v1/dealers/register | invalid-input-validation | 500 | 131.3 | 131.4 |
| GET | /api/v1/dealers?pageSize=2 | public-read | 200 | 195 | 196.1 |
| GET | /api/v1/dealers/map?pageSize=2 | public-read | 200 | 210.1 | 216.7 |
| GET | /api/v1/dealers/groups | public-read | 200 | 151.2 | 151.7 |
| GET | /api/v1/dealers/makes | public-read | 200 | 799.1 | 801.5 |
| GET | /api/v1/dealer/profile | customer-authorised-read-or-role-rejection | 403 | 286.3 | 286.7 |
| GET | /api/v1/dealers/4wheels-2222 | public-read | 200 | 668.8 | 669.4 |
| PATCH | /api/v1/dealer/profile | unauthenticated-write-guard | 401 | 127.9 | 128 |
| GET | /api/v1/dealer/me | customer-authorised-read-or-role-rejection | 403 | 246.3 | 247.4 |
| POST | /api/v1/dealer/documents/upload-url | unauthenticated-write-guard | 401 | 125.4 | 125.5 |
| POST | /api/v1/dealer/documents | unauthenticated-write-guard | 401 | 125.3 | 125.4 |
| GET | /api/v1/dealer/branches | customer-authorised-read-or-role-rejection | 403 | 163.1 | 163.4 |
| POST | /api/v1/dealer/branches | unauthenticated-write-guard | 401 | 124.8 | 124.9 |
| PATCH | /api/v1/dealer/branches/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 127.9 | 127.9 |
| GET | /api/v1/dealer/staff | customer-authorised-read-or-role-rejection | 403 | 163.6 | 163.9 |
| GET | /api/v1/dealer/documents | customer-authorised-read-or-role-rejection | 403 | 742.3 | 742.9 |
| POST | /api/v1/dealer/staff | unauthenticated-write-guard | 401 | 125.2 | 125.3 |
| PATCH | /api/v1/dealer/staff/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 126.3 | 126.4 |
| GET | /api/v1/dealer/staff/00000000-0000-4000-8000-000000000000/activity?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 242.9 | 243.2 |
| GET | /api/v1/admin/dealers?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 255.8 | 256.3 |
| GET | /api/v1/admin/dealers/00000000-0000-4000-8000-000000000000 | customer-authorised-read-or-role-rejection | 403 | 289.5 | 290 |
| PATCH | /api/v1/admin/dealers/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 129.8 | 129.9 |
| PATCH | /api/v1/admin/dealers/00000000-0000-4000-8000-000000000000/status | unauthenticated-write-guard | 401 | 127 | 127.1 |
| GET | /api/v1/catalogue/makes | public-read | 200 | 259.4 | 259.7 |
| GET | /api/v1/catalogue/makes/volkswagen/models/polo | public-read | 200 | 320.8 | 321.8 |
| GET | /api/v1/catalogue/makes/volkswagen/models | public-read | 200 | 590.5 | 591.6 |
| GET | /api/v1/catalogue/variants/1525ac7e-9662-5e8c-a0da-87a46836a73c | public-read | 200 | 240.6 | 241 |
| GET | /api/v1/catalogue/variants/compare?ids=1525ac7e-9662-5e8c-a0da-87a46836a73c%2C1148dae5-a2a3-5e7b-af4f-c26d7d4d38d7 | public-read | 200 | 605.1 | 605.4 |
| GET | /api/v1/catalogue/categories | public-read | 200 | 289.9 | 290.3 |
| GET | /api/v1/catalogue/features | public-read | 200 | 285 | 285.3 |
| GET | /api/v1/admin/catalogue/makes | customer-authorised-read-or-role-rejection | 403 | 236.3 | 237.5 |
| POST | /api/v1/admin/catalogue/makes | unauthenticated-write-guard | 401 | 127.4 | 127.5 |
| DELETE | /api/v1/admin/catalogue/makes/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 132.9 | 133 |
| PATCH | /api/v1/admin/catalogue/makes/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 138.3 | 138.4 |
| GET | /api/v1/admin/catalogue/makes/00000000-0000-4000-8000-000000000000/models | customer-authorised-read-or-role-rejection | 403 | 162.3 | 162.6 |
| POST | /api/v1/admin/catalogue/models | unauthenticated-write-guard | 401 | 127.7 | 127.8 |
| PATCH | /api/v1/admin/catalogue/models/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 149.5 | 149.6 |
| DELETE | /api/v1/admin/catalogue/models/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 128.1 | 128.2 |
| POST | /api/v1/admin/catalogue/generations | unauthenticated-write-guard | 401 | 134.1 | 134.2 |
| PATCH | /api/v1/admin/catalogue/generations/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 128.1 | 128.2 |
| DELETE | /api/v1/admin/catalogue/generations/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 153.8 | 153.9 |
| POST | /api/v1/admin/catalogue/variants | unauthenticated-write-guard | 401 | 128.1 | 128.2 |
| PATCH | /api/v1/admin/catalogue/variants/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 154.3 | 154.4 |
| DELETE | /api/v1/admin/catalogue/variants/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 127.8 | 127.9 |
| GET | /api/v1/admin/catalogue/models/00000000-0000-4000-8000-000000000000/variants | customer-authorised-read-or-role-rejection | 403 | 599.2 | 599.8 |
| GET | /api/v1/admin/catalogue/categories | customer-authorised-read-or-role-rejection | 403 | 243.7 | 244.1 |
| POST | /api/v1/admin/catalogue/categories | unauthenticated-write-guard | 401 | 132.2 | 132.3 |
| PATCH | /api/v1/admin/catalogue/categories/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 146.9 | 147 |
| DELETE | /api/v1/admin/catalogue/categories/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 130.4 | 130.5 |
| POST | /api/v1/admin/catalogue/features | unauthenticated-write-guard | 401 | 144.3 | 144.4 |
| PATCH | /api/v1/admin/catalogue/features/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 134.9 | 135 |
| DELETE | /api/v1/admin/catalogue/features/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 129.2 | 129.3 |
| POST | /api/v1/admin/catalogue/feature-assignments | unauthenticated-write-guard | 401 | 151.6 | 151.7 |
| DELETE | /api/v1/admin/catalogue/feature-assignments/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 128.4 | 128.8 |
| GET | /api/v1/vehicle-filters/manifest | public-read | 200 | 139.7 | 140.3 |
| GET | /api/v1/vehicle-filters/snapshots/inv-9a52b525ef8848289163ce770b199fc900ef83c3114735e06c25925becfe5752.json.gz | public-read | 200 | 13.9 | 198 |
| GET | /api/v1/vehicles/source-summary | public-read | 200 | 4010 | 4010.4 |
| GET | /api/v1/vehicles?pageSize=2 | public-read | 200 | 5123.9 | 5124.7 |
| GET | /api/v1/vehicles/filters/colours | public-read | 200 | 4877.9 | 4878.4 |
| GET | /api/v1/vehicles/facets | public-read | 200 | 9774 | 9942.1 |
| GET | /api/v1/vehicles/filters/models | public-read | 200 | 500.5 | 502.8 |
| GET | /api/v1/vehicles/filters/makes | public-read | 200 | 7716.8 | 7717.1 |
| GET | /api/v1/vehicles/filters/variants | public-read | 200 | 6957.6 | 6974.3 |
| GET | /api/v1/vehicles/filters/transmissions | public-read | 200 | 147 | 147.4 |
| GET | /api/v1/vehicles/filters/fuel-types | public-read | 200 | 257.1 | 257.6 |
| GET | /api/v1/vehicles/filters/drives | public-read | 200 | 205.8 | 206.2 |
| GET | /api/v1/vehicles/count | public-read | 200 | 310.4 | 311.2 |
| GET | /api/v1/vehicles/filters/all | public-read | 200 | 13847.7 | 15002.3 |
| POST | /api/v1/vehicles/count | successful-read-only-count | 200 | 600 | 600.5 |
| GET | /api/v1/vehicles/specials?pageSize=2 | public-read | 200 | 348.1 | 348.6 |
| GET | /api/v1/vehicles/hot-sellers?pageSize=2 | public-read | 200 | 278.6 | 283 |
| GET | /api/v1/vehicles/compare?ids=1579998%2C1579997 | public-read | 200 | 295.9 | 296.2 |
| GET | /api/v1/vehicles/1579998 | public-read | 200 | 345.4 | 346.7 |
| GET | /api/v1/vehicles/1579998/similar?limit=2 | public-read | 200 | 243.1 | 243.5 |
| GET | /api/v1/vehicles/1579998/dealer-vehicles?limit=2 | public-read | 200 | 522.5 | 522.9 |
| GET | /api/v1/vehicles/1579998/market-price | public-read | 200 | 211.2 | 211.7 |
| GET | /api/v1/dealer/vehicles?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 259.1 | 259.4 |
| POST | /api/v1/dealer/vehicles | unauthenticated-write-guard | 401 | 132.3 | 132.4 |
| PATCH | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 223.9 | 224 |
| POST | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/submit | unauthenticated-write-guard | 401 | 128.5 | 128.6 |
| GET | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000 | customer-authorised-read-or-role-rejection | 403 | 596 | 596.4 |
| POST | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/withdraw | unauthenticated-write-guard | 401 | 121.9 | 122 |
| POST | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/edit | unauthenticated-write-guard | 401 | 133.9 | 134 |
| POST | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/publish | unauthenticated-write-guard | 401 | 126.9 | 127 |
| POST | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/reserve | unauthenticated-write-guard | 401 | 127.1 | 127.2 |
| POST | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/release | unauthenticated-write-guard | 401 | 128.2 | 128.3 |
| POST | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/sell | unauthenticated-write-guard | 401 | 125 | 125.2 |
| POST | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/unsuspend | unauthenticated-write-guard | 401 | 127 | 127.1 |
| POST | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/suspend | unauthenticated-write-guard | 401 | 223.5 | 223.6 |
| POST | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/archive | unauthenticated-write-guard | 401 | 125.1 | 125.3 |
| POST | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/images/upload-url | unauthenticated-write-guard | 401 | 131.4 | 131.4 |
| GET | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/images | customer-authorised-read-or-role-rejection | 403 | 238.5 | 238.8 |
| POST | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/images/00000000-0000-4000-8000-000000000000/complete | unauthenticated-write-guard | 401 | 123.1 | 123.2 |
| PUT | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/images/order | unauthenticated-write-guard | 401 | 127.9 | 128 |
| PATCH | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/images/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 127.9 | 128 |
| DELETE | /api/v1/dealer/vehicles/00000000-0000-4000-8000-000000000000/images/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 129.5 | 129.6 |
| GET | /api/v1/admin/vehicles?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 269.3 | 269.7 |
| GET | /api/v1/admin/vehicles/review-queue?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 245.2 | 245.5 |
| GET | /api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000 | customer-authorised-read-or-role-rejection | 403 | 193.5 | 193.8 |
| PATCH | /api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 129.7 | 129.8 |
| PATCH | /api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000/flags | unauthenticated-write-guard | 401 | 128.1 | 128.2 |
| POST | /api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000/approve | unauthenticated-write-guard | 401 | 128.7 | 128.8 |
| POST | /api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000/reject | unauthenticated-write-guard | 401 | 130.5 | 130.6 |
| POST | /api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000/publish | unauthenticated-write-guard | 401 | 124.5 | 124.6 |
| POST | /api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000/suspend | unauthenticated-write-guard | 401 | 132.7 | 132.8 |
| POST | /api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000/unsuspend | unauthenticated-write-guard | 401 | 127.6 | 127.7 |
| POST | /api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000/archive | unauthenticated-write-guard | 401 | 126.8 | 126.9 |
| POST | /api/v1/admin/vehicles/00000000-0000-4000-8000-000000000000/relist | unauthenticated-write-guard | 401 | 133.5 | 133.6 |
| POST | /api/v1/finance/repayment | successful-calculator | 200 | 170.8 | 171.2 |
| POST | /api/v1/finance/affordability | successful-calculator | 200 | 128.1 | 128.4 |
| GET | /api/v1/dealer/leads?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 241.9 | 242.3 |
| POST | /api/v1/dealer/leads | unauthenticated-write-guard | 401 | 126.8 | 126.9 |
| GET | /api/v1/dealer/leads/stats | customer-authorised-read-or-role-rejection | 403 | 254.7 | 255.4 |
| GET | /api/v1/dealer/leads/00000000-0000-4000-8000-000000000000 | customer-authorised-read-or-role-rejection | 403 | 196.3 | 196.6 |
| PATCH | /api/v1/dealer/leads/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 125 | 125.1 |
| POST | /api/v1/dealer/leads/00000000-0000-4000-8000-000000000000/stage | unauthenticated-write-guard | 401 | 124.6 | 124.7 |
| POST | /api/v1/dealer/leads/00000000-0000-4000-8000-000000000000/assign | unauthenticated-write-guard | 401 | 126.5 | 126.6 |
| POST | /api/v1/dealer/leads/00000000-0000-4000-8000-000000000000/activities | unauthenticated-write-guard | 401 | 126.7 | 126.8 |
| POST | /api/v1/enquiries/vehicle | invalid-input-validation | 400 | 128.8 | 128.9 |
| POST | /api/v1/enquiries/quote | invalid-input-validation | 400 | 125 | 125.1 |
| POST | /api/v1/enquiries/test-drive | invalid-input-validation | 400 | 250.4 | 250.5 |
| POST | /api/v1/enquiries/beat-my-quote | invalid-input-validation | 400 | 133.9 | 134 |
| POST | /api/v1/enquiries/trade-in | invalid-input-validation | 400 | 129.3 | 129.4 |
| POST | /api/v1/enquiries/concierge | invalid-input-validation | 400 | 129.8 | 129.9 |
| POST | /api/v1/enquiries/help-me-find | invalid-input-validation | 400 | 132.9 | 133 |
| POST | /api/v1/enquiries/finance | invalid-input-validation | 400 | 128 | 128.1 |
| POST | /api/v1/enquiries/insurance | invalid-input-validation | 400 | 131.4 | 131.5 |
| POST | /api/v1/enquiries/contact | invalid-input-validation | 400 | 142.5 | 142.6 |
| GET | /api/v1/me/enquiries?pageSize=2 | customer-authorised-read-or-role-rejection | 200 | 249.4 | 250 |
| POST | /api/v1/me/enquiries/00000000-0000-4000-8000-000000000000/reply | unauthenticated-write-guard | 401 | 129.4 | 129.6 |
| GET | /api/v1/me/enquiries/00000000-0000-4000-8000-000000000000 | customer-authorised-read-or-role-rejection | 404 | 246.9 | 247.3 |
| POST | /api/v1/me/enquiries/00000000-0000-4000-8000-000000000000/cancel | unauthenticated-write-guard | 401 | 130.3 | 130.5 |
| GET | /api/v1/dealer/enquiries/00000000-0000-4000-8000-000000000000 | customer-authorised-read-or-role-rejection | 403 | 206.5 | 207.1 |
| POST | /api/v1/dealer/enquiries/00000000-0000-4000-8000-000000000000/respond | unauthenticated-write-guard | 401 | 124.9 | 125 |
| GET | /api/v1/dealer/enquiries?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 527.6 | 528 |
| GET | /api/v1/admin/enquiries?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 264.4 | 265 |
| GET | /api/v1/admin/enquiries/00000000-0000-4000-8000-000000000000 | customer-authorised-read-or-role-rejection | 403 | 247.6 | 248.3 |
| PATCH | /api/v1/admin/enquiries/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 130.1 | 130.2 |
| POST | /api/v1/admin/enquiries/00000000-0000-4000-8000-000000000000/respond | unauthenticated-write-guard | 401 | 134.1 | 134.3 |
| POST | /api/v1/sell-requests | invalid-input-validation | 400 | 132.9 | 133.3 |
| GET | /api/v1/me/sell-requests?pageSize=2 | customer-authorised-read-or-role-rejection | 200 | 256.8 | 257.2 |
| POST | /api/v1/me/sell-requests/00000000-0000-4000-8000-000000000000/request-offers | unauthenticated-write-guard | 401 | 128.4 | 128.5 |
| POST | /api/v1/me/sell-requests/00000000-0000-4000-8000-000000000000/cancel | unauthenticated-write-guard | 401 | 129.5 | 129.7 |
| POST | /api/v1/me/sell-requests/00000000-0000-4000-8000-000000000000/images/upload-url | unauthenticated-write-guard | 401 | 127.7 | 127.9 |
| GET | /api/v1/me/sell-requests/00000000-0000-4000-8000-000000000000 | customer-authorised-read-or-role-rejection | 404 | 632.8 | 633.2 |
| POST | /api/v1/me/sell-requests/00000000-0000-4000-8000-000000000000/images | unauthenticated-write-guard | 401 | 127.7 | 127.8 |
| POST | /api/v1/admin/sell-requests/00000000-0000-4000-8000-000000000000/valuations | unauthenticated-write-guard | 401 | 131.2 | 131.4 |
| GET | /api/v1/admin/sell-requests/00000000-0000-4000-8000-000000000000 | customer-authorised-read-or-role-rejection | 403 | 204.7 | 205.4 |
| GET | /api/v1/admin/sell-requests?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 337.1 | 337.4 |
| PATCH | /api/v1/admin/sell-requests/00000000-0000-4000-8000-000000000000/status | unauthenticated-write-guard | 401 | 129.3 | 129.5 |
| POST | /api/v1/admin/sell-requests/00000000-0000-4000-8000-000000000000/bidding-sessions | unauthenticated-write-guard | 401 | 128.5 | 128.7 |
| GET | /api/v1/admin/bidding-sessions?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 198.9 | 199.3 |
| POST | /api/v1/admin/bidding-sessions/00000000-0000-4000-8000-000000000000/reopen | unauthenticated-write-guard | 401 | 124.5 | 124.7 |
| POST | /api/v1/admin/bidding-sessions/00000000-0000-4000-8000-000000000000/cancel | unauthenticated-write-guard | 401 | 125.2 | 125.3 |
| GET | /api/v1/dealer/bidding/sessions?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 238.6 | 238.9 |
| POST | /api/v1/dealer/bidding/sessions/00000000-0000-4000-8000-000000000000/offers | unauthenticated-write-guard | 401 | 127.8 | 127.9 |
| GET | /api/v1/dealer/bidding/sessions/00000000-0000-4000-8000-000000000000 | customer-authorised-read-or-role-rejection | 403 | 250.1 | 251.5 |
| GET | /api/v1/dealer/offers?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 187.7 | 188.1 |
| PATCH | /api/v1/dealer/offers/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 136.4 | 136.6 |
| POST | /api/v1/dealer/offers/00000000-0000-4000-8000-000000000000/withdraw | unauthenticated-write-guard | 401 | 212.4 | 212.6 |
| POST | /api/v1/dealer/offers/00000000-0000-4000-8000-000000000000/counter-response | unauthenticated-write-guard | 401 | 127.7 | 127.8 |
| POST | /api/v1/me/offers/00000000-0000-4000-8000-000000000000/accept | unauthenticated-write-guard | 401 | 124.6 | 124.7 |
| GET | /api/v1/me/offers?pageSize=2 | customer-authorised-read-or-role-rejection | 200 | 268.4 | 268.8 |
| POST | /api/v1/me/offers/00000000-0000-4000-8000-000000000000/reject | unauthenticated-write-guard | 401 | 127.8 | 128 |
| POST | /api/v1/me/offers/00000000-0000-4000-8000-000000000000/counter | unauthenticated-write-guard | 401 | 123.6 | 123.7 |
| PATCH | /api/v1/me | unauthenticated-write-guard | 401 | 126.2 | 126.3 |
| GET | /api/v1/me | customer-authorised-read-or-role-rejection | 200 | 198 | 198.3 |
| DELETE | /api/v1/me/sessions/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 151.9 | 152 |
| GET | /api/v1/me/dashboard | customer-authorised-read-or-role-rejection | 200 | 272.8 | 273.3 |
| GET | /api/v1/me/sessions | customer-authorised-read-or-role-rejection | 200 | 200.5 | 200.9 |
| GET | /api/v1/me/favourites?pageSize=2 | customer-authorised-read-or-role-rejection | 200 | 369.3 | 369.8 |
| PUT | /api/v1/me/favourites/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 350.6 | 350.7 |
| GET | /api/v1/me/favourites/ids | customer-authorised-read-or-role-rejection | 200 | 641.4 | 641.5 |
| DELETE | /api/v1/me/favourites/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 129.9 | 130 |
| GET | /api/v1/me/saved-searches | customer-authorised-read-or-role-rejection | 200 | 177.9 | 178.1 |
| POST | /api/v1/me/saved-searches | unauthenticated-write-guard | 401 | 146.8 | 146.9 |
| PATCH | /api/v1/me/saved-searches/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 127.7 | 127.8 |
| DELETE | /api/v1/me/saved-searches/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 126 | 126.1 |
| DELETE | /api/v1/me/recently-viewed | unauthenticated-write-guard | 401 | 129.3 | 129.4 |
| GET | /api/v1/me/export | customer-authorised-read-or-role-rejection | 200 | 252.5 | 253.6 |
| POST | /api/v1/me/delete-account | unauthenticated-write-guard | 401 | 146.8 | 146.9 |
| GET | /api/v1/me/documents | customer-authorised-read-or-role-rejection | 200 | 134.2 | 134.7 |
| GET | /api/v1/me/recently-viewed | customer-authorised-read-or-role-rejection | 200 | 750.7 | 750.8 |
| POST | /api/v1/me/documents/upload-url | unauthenticated-write-guard | 401 | 130.5 | 130.6 |
| POST | /api/v1/me/documents/submit | unauthenticated-write-guard | 401 | 128.8 | 128.9 |
| POST | /api/v1/me/documents/00000000-0000-4000-8000-000000000000/complete | unauthenticated-write-guard | 401 | 127.1 | 127.2 |
| GET | /api/v1/me/documents/00000000-0000-4000-8000-000000000000/view | customer-authorised-read-or-role-rejection | 404 | 245.5 | 246.4 |
| DELETE | /api/v1/me/documents/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 126.5 | 126.6 |
| GET | /api/v1/content/articles?pageSize=2 | public-read | 200 | 177.6 | 178 |
| GET | /api/v1/content/articles/how-to-sell-your-car-for-the-best-price | public-read | 200 | 167.5 | 167.9 |
| GET | /api/v1/content/article-categories | public-read | 200 | 161.3 | 161.6 |
| GET | /api/v1/content/media?pageSize=2 | public-read | 200 | 138.7 | 139 |
| GET | /api/v1/content/media/no-sample | public-read | 404 | 236.7 | 237.6 |
| GET | /api/v1/content/faqs | public-read | 200 | 236.2 | 236.5 |
| GET | /api/v1/content/pages/privacy-policy | public-read | 200 | 204.5 | 205.1 |
| GET | /api/v1/promotions | public-read | 200 | 15.2 | 15.5 |
| GET | /api/v1/content/ad-banners | public-read | 200 | 148.8 | 149.4 |
| GET | /api/v1/promotions/truck-month?pageSize=2 | public-read | 200 | 241.6 | 242 |
| GET | /api/v1/content/testimonials | public-read | 200 | 153.7 | 160.1 |
| GET | /api/v1/content/featured-dealers | public-read | 200 | 14.8 | 15.4 |
| GET | /api/v1/content/featured-dealers/reeds-bellville | public-read | 200 | 280 | 280.4 |
| POST | /api/v1/admin/articles | unauthenticated-write-guard | 401 | 130.4 | 130.5 |
| PATCH | /api/v1/admin/articles/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 126.6 | 126.8 |
| GET | /api/v1/admin/articles/00000000-0000-4000-8000-000000000000 | customer-authorised-read-or-role-rejection | 403 | 249.2 | 249.6 |
| GET | /api/v1/admin/articles?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 711.9 | 712.2 |
| DELETE | /api/v1/admin/articles/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 127.6 | 127.7 |
| POST | /api/v1/admin/articles/00000000-0000-4000-8000-000000000000/status | unauthenticated-write-guard | 401 | 133.3 | 133.4 |
| POST | /api/v1/admin/article-categories | unauthenticated-write-guard | 401 | 145.4 | 145.5 |
| DELETE | /api/v1/admin/article-categories/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 124.4 | 124.5 |
| POST | /api/v1/admin/media | unauthenticated-write-guard | 401 | 153.9 | 154 |
| PATCH | /api/v1/admin/media/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 130.9 | 131 |
| DELETE | /api/v1/admin/media/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 132.1 | 132.3 |
| GET | /api/v1/admin/media?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 632.7 | 633.1 |
| POST | /api/v1/admin/media/00000000-0000-4000-8000-000000000000/status | unauthenticated-write-guard | 401 | 150.7 | 150.8 |
| POST | /api/v1/admin/faqs | unauthenticated-write-guard | 401 | 126.1 | 126.2 |
| PATCH | /api/v1/admin/faqs/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 131.8 | 131.9 |
| DELETE | /api/v1/admin/faqs/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 126 | 126.4 |
| GET | /api/v1/admin/faqs | customer-authorised-read-or-role-rejection | 403 | 673.5 | 673.9 |
| GET | /api/v1/admin/pages | customer-authorised-read-or-role-rejection | 403 | 239.8 | 240.2 |
| POST | /api/v1/admin/pages | unauthenticated-write-guard | 401 | 129.6 | 129.8 |
| PATCH | /api/v1/admin/pages/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 145.4 | 145.5 |
| DELETE | /api/v1/admin/pages/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 127.9 | 128 |
| POST | /api/v1/admin/pages/00000000-0000-4000-8000-000000000000/status | unauthenticated-write-guard | 401 | 125.8 | 126 |
| GET | /api/v1/admin/pages/00000000-0000-4000-8000-000000000000 | customer-authorised-read-or-role-rejection | 403 | 683.7 | 684 |
| GET | /api/v1/admin/promotions | customer-authorised-read-or-role-rejection | 403 | 224.3 | 224.9 |
| POST | /api/v1/admin/promotions | unauthenticated-write-guard | 401 | 129.6 | 129.7 |
| PATCH | /api/v1/admin/promotions/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 126.4 | 126.6 |
| DELETE | /api/v1/admin/promotions/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 129.7 | 129.8 |
| PUT | /api/v1/admin/promotions/00000000-0000-4000-8000-000000000000/vehicles | unauthenticated-write-guard | 401 | 132.5 | 132.6 |
| POST | /api/v1/admin/ad-banners | unauthenticated-write-guard | 401 | 147.2 | 147.4 |
| PATCH | /api/v1/admin/ad-banners/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 139.1 | 139.3 |
| DELETE | /api/v1/admin/ad-banners/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 131.1 | 131.2 |
| GET | /api/v1/admin/ad-banners | customer-authorised-read-or-role-rejection | 403 | 760 | 760.5 |
| GET | /api/v1/admin/testimonials | customer-authorised-read-or-role-rejection | 403 | 277.5 | 278 |
| POST | /api/v1/admin/testimonials | unauthenticated-write-guard | 401 | 149.1 | 149.2 |
| PATCH | /api/v1/admin/testimonials/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 129.2 | 129.4 |
| DELETE | /api/v1/admin/testimonials/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 138 | 138.2 |
| GET | /api/v1/admin/featured-dealers | customer-authorised-read-or-role-rejection | 403 | 230.4 | 230.7 |
| POST | /api/v1/admin/featured-dealers | unauthenticated-write-guard | 401 | 125.6 | 125.8 |
| PATCH | /api/v1/admin/featured-dealers/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 149.6 | 149.8 |
| DELETE | /api/v1/admin/featured-dealers/00000000-0000-4000-8000-000000000000 | unauthenticated-write-guard | 401 | 130.2 | 130.3 |
| POST | /api/v1/newsletter/subscribe | invalid-input-validation | 400 | 132.3 | 132.5 |
| POST | /api/v1/newsletter/unsubscribe | invalid-input-validation | 400 | 143.4 | 143.6 |
| GET | /api/v1/admin/newsletter/subscribers?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 264.7 | 265.3 |
| GET | /api/v1/admin/newsletter/subscribers.csv?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 223.2 | 223.5 |
| GET | /api/v1/dealer/dashboard | customer-authorised-read-or-role-rejection | 403 | 205.5 | 206 |
| GET | /api/v1/admin/stats | customer-authorised-read-or-role-rejection | 403 | 165.6 | 166.1 |
| POST | /api/v1/admin/users | unauthenticated-write-guard | 401 | 123.2 | 123.3 |
| PATCH | /api/v1/admin/users/00000000-0000-4000-8000-000000000000/status | unauthenticated-write-guard | 401 | 125.9 | 126 |
| GET | /api/v1/admin/users/00000000-0000-4000-8000-000000000000 | customer-authorised-read-or-role-rejection | 403 | 245.4 | 245.8 |
| GET | /api/v1/admin/users?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 752.5 | 752.9 |
| PATCH | /api/v1/admin/users/00000000-0000-4000-8000-000000000000/role | unauthenticated-write-guard | 401 | 131 | 131.2 |
| GET | /api/v1/admin/audit-logs?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 179.9 | 180.2 |
| GET | /api/v1/admin/system/outbox | customer-authorised-read-or-role-rejection | 403 | 209 | 209.5 |
| GET | /api/v1/admin/system/outbox/events?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 178.5 | 179.7 |
| POST | /api/v1/admin/system/outbox/events/00000000-0000-4000-8000-000000000000/retry | unauthenticated-write-guard | 401 | 123.4 | 123.5 |
| GET | /api/v1/admin/console/quality | customer-authorised-read-or-role-rejection | 403 | 205.7 | 206 |
| GET | /api/v1/admin/console/leads?pageSize=2 | customer-authorised-read-or-role-rejection | 403 | 164.1 | 164.5 |
| GET | /api/v1/admin/console/leads/00000000-0000-4000-8000-000000000000 | customer-authorised-read-or-role-rejection | 403 | 242 | 242.4 |
| POST | /api/v1/admin/console/leads/00000000-0000-4000-8000-000000000000/assign | unauthenticated-write-guard | 401 | 126.4 | 126.5 |
| POST | /api/v1/admin/console/leads/00000000-0000-4000-8000-000000000000/stage | unauthenticated-write-guard | 401 | 131.9 | 132 |
| POST | /api/v1/admin/console/snapshots/refresh | unauthenticated-write-guard | 401 | 126.4 | 126.5 |
| GET | /api/v1/admin/console/snapshots | customer-authorised-read-or-role-rejection | 403 | 253 | 253.3 |
| GET | /api/v1/admin/console/imports | customer-authorised-read-or-role-rejection | 403 | 700.7 | 701.1 |
| POST | /api/v1/admin/console/dealers/00000000-0000-4000-8000-000000000000/view | unauthenticated-write-guard | 401 | 128.4 | 128.6 |
| GET | /api/v1/admin/console/settings | customer-authorised-read-or-role-rejection | 403 | 233.1 | 233.5 |
| GET | /api/v1/seo/sitemap.xml | public-read | 200 | 210.7 | 211.1 |
| GET | /api/v1/seo/sitemap-static.xml | public-read | 200 | 252.2 | 255.6 |
| GET | /api/v1/seo/sitemap-vehicles-1.xml | public-read | 200 | 398.1 | 415.1 |
| GET | /api/v1/seo/vehicles/volkswagen-polo-1-0-tsi-life-1579998/structured-data | public-read | 200 | 177.1 | 177.5 |
| GET | /api/v1/web/cars | public-read | 200 | 308 | 309.1 |
| POST | /api/v1/web/cars/count | successful-read-only-count | 200 | 163.9 | 164.3 |
| GET | /api/v1/web/cars/count | public-read | 200 | 285.8 | 286.2 |
| GET | /api/v1/web/dealer-stock/2854 | public-read | 200 | 261.3 | 263.6 |
| GET | /api/v1/web/cars/all?limit=2 | public-read | 200 | 318.9 | 319.4 |
| GET | /api/v1/web/cars/featured?limit=2 | public-read | 200 | 269.4 | 269.8 |
| GET | /api/v1/web/cars/premium?limit=2 | public-read | 200 | 197.4 | 197.7 |
| GET | /api/v1/web/cars/recent?limit=2 | public-read | 200 | 334.1 | 334.5 |
| GET | /api/v1/web/cars/1579998/dealer-cars?limit=2 | public-read | 200 | 244.9 | 245.9 |
| GET | /api/v1/web/cars/1579998 | public-read | 200 | 720.7 | 745.8 |
| GET | /api/v1/web/cars/1579998/popular-dealers?limit=2 | public-read | 200 | 162.9 | 163.4 |
| GET | /api/v1/web/cars/1579998/similar?limit=2 | public-read | 200 | 350.6 | 350.9 |
| GET | /api/v1/web/article-categories | public-read | 200 | 138.9 | 139.3 |
| GET | /api/v1/web/cars/1579998/market-price | public-read | 200 | 266.1 | 266.2 |
| GET | /api/v1/web/articles?q=&category=&page=1 | public-read | 200 | 141.3 | 141.9 |
| GET | /api/v1/web/articles/how-to-sell-your-car-for-the-best-price | public-read | 200 | 168.2 | 169.1 |
| GET | /api/v1/web/articles/featured | public-read | 200 | 225.3 | 225.6 |
| GET | /api/v1/web/articles/latest?limit=2 | public-read | 200 | 210.9 | 211.3 |
| GET | /api/v1/web/dashboard/overview | customer-authorised-read-or-role-rejection | 403 | 204.5 | 205.7 |
| GET | /api/v1/web/dashboard/dealers-by-id | customer-authorised-read-or-role-rejection | 403 | 207.9 | 208.2 |
| GET | /api/v1/web/dashboard/dealers | customer-authorised-read-or-role-rejection | 403 | 238.2 | 238.7 |
| POST | /api/v1/web/dashboard/dealers/00000000-0000-4000-8000-000000000000/status | unauthenticated-write-guard | 401 | 125.7 | 125.8 |
| GET | /api/v1/web/dashboard/inventory?dealerId=2854 | customer-authorised-read-or-role-rejection | 403 | 176.6 | 177 |
| GET | /api/v1/web/dashboard/dealers/00000000-0000-4000-8000-000000000000 | customer-authorised-read-or-role-rejection | 403 | 249.8 | 250.3 |
| GET | /api/v1/web/dashboard/leads?dealerId=2854 | customer-authorised-read-or-role-rejection | 403 | 186.5 | 186.9 |
| GET | /api/v1/web/dashboard/staff | customer-authorised-read-or-role-rejection | 403 | 170.7 | 171.2 |
| GET | /api/v1/web/dashboard/activity | customer-authorised-read-or-role-rejection | 403 | 162.1 | 162.6 |
| POST | /api/v1/web/forms/contact | invalid-input-validation | 422 | 128.4 | 128.5 |
| POST | /api/v1/web/uploads/url | invalid-input-validation | 403 | 126.7 | 127.2 |
| POST | /api/v1/web/uploads/confirm | invalid-input-validation | 403 | 127 | 127.5 |
| POST | /api/v1/web/auth/register | invalid-input-validation | 422 | 130.6 | 130.7 |
| GET | /api/v1/dealer-app/dealers/2854?pageSize=2 | public-read | 200 | 213 | 213.8 |
| GET | /api/v1/dealer-app/dealers/2854/vehicles/1579998?limit=2 | public-read | 200 | 288.3 | 289.6 |
| POST | /api/v1/price-alerts | invalid-input-validation | 400 | 130.4 | 130.6 |

Full measurements: [CSV](all-endpoints.csv), [JSON](results.json).

## Warm/cache follow-up checks

These follow-ups were made after the initial scan, without forcing a cache purge. Cache state can differ by route; HIT does not measure an uncached database query.

| Route | Initial total ms | Follow-up total ms | Follow-up TTFB ms | HTTP | Cache |
| --- | --- | --- | --- | --- | --- |
| /api/v1/vehicles/filters/all | 15002.3 | 7151.3 | 6693.4 | 200 | REVALIDATED |
| /api/v1/vehicles/facets | 9942.1 | 238.5 | 231.8 | 200 | REVALIDATED |
| /api/v1/vehicles/filters/makes | 7717.1 | 147.5 | 146.9 | 200 | REVALIDATED |
| /api/v1/vehicles/filters/variants | 6974.3 | 184 | 179 | 200 | REVALIDATED |
| /api/v1/vehicles?pageSize=2 | 5124.7 | 345.9 | 345 | 200 | EXPIRED |

## Error responses observed

| Method | Route | HTTP | Total ms | Code |
| --- | --- | --- | --- | --- |
| POST | /api/v1/dealers/register | 500 | 131.4 | INTERNAL_ERROR |

The dealer registration probe used an empty body. Its 500 timing is an error response, not a successful registration measurement. Customer/Group1 registration was measured successfully above.
