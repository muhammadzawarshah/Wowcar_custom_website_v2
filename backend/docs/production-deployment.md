# Plesk production deployment

API: https://changecarapi.wowcar.co.th

Dashboard: https://changecars.wowcar.co.th

Both use `app.js` as the Passenger startup file. Startup runs prebuilt artifacts;
dependency installation and builds happen in staging before switching releases.
Keep each application's existing private `.env` and media files on the server.
Never upload the local development environment.

## Build and switch

1. Back up application source, runtime artifacts and PostgreSQL.
2. Stage the updated source with matching dependency lockfiles. For fresh
   dependency installations, run `npm ci --include=dev`.
3. In the API staging directory, run `npm run prisma:generate` and
   `npm run build`. Review and apply pending migrations with
   `npm run prisma:deploy` before the new API starts.
4. In the dashboard staging directory, use its production `API_URL` and run
   `NODE_ENV=production npm run build -- --webpack`. Copy `public` and
   `.next/static` into `.next/standalone` before publishing.
5. Give the Plesk application user access to files created by the deployment
   user, including write access to runtime cache directories. Preserve the
   existing project ownership and private configuration.
6. Switch prepared artifacts while preserving the previous build for rollback,
   then touch each application's `tmp/restart.txt`.
7. Verify API readiness, login and JavaScript assets through the public domains.
   Purge cached login HTML from Cloudflare after changing builds. New `/login`
   responses are dynamic and carry private/no-store headers.

On this server the API uses `REDIS_URL=redis://127.0.0.1:6379/15`.
`API_PUBLIC_URL` points to the public API domain and `GROUP_DASHBOARD_URL` to the
dashboard domain. SSH tunneling is only needed for remote development clients.

## Verified release, 6 November 2026

Release: `changecars-20261106T144057Z`.

Private backups and deployment metadata are under
`/home/developer/deployments/changecars-20261106T144057Z/` on the server. The
317,171,500-byte PostgreSQL dump was verified with `pg_restore --list`.

- Local backend: 482 tests passed; dashboard typecheck and lint passed (existing
  image warnings only). Both applications built successfully on Linux.
- Production readiness: HTTP 200, PostgreSQL up, Redis up.
- New dashboard login: HTTP 200 with private/no-store cache control; its Server
  Action correctly displayed the invalid-credentials message for a nonexistent
  diagnostic account. Two current JavaScript assets returned HTTP 200.
- Full production filter response: HTTP 200, all 47,568 vehicle rows present.
  Direct origin measurement: 27 ms TTFB and 183 ms full compressed transfer and
  client-side decompression. An external download took 6.91 seconds, including
  network and transfer time; origin timing is not an internet-download guarantee.
- The normal login URL still served an older Cloudflare-cached build during
  verification. Without Cloudflare account access, use the fresh URL
  `https://changecars.wowcar.co.th/login?release=changecars-20261106T144057Z-v2`
  until its cached HTML is purged. Authenticated dashboard data was not checked
  using an existing user's password.
