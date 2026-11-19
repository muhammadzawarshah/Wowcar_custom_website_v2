# Independent customer accounts for every dealer app

Mobile developer handoff: [dealer app developer guide](dealer-app-developer-guide.md).

Every approved dealer has an automatically provisioned customer app with permanent ID `dealer-<dealerId>`. There are no default customer passwords or copied users. This does **not** create dealership staff or grant dashboard access.

For dealer **100**, use this API base consistently:

```text
https://changecarapi.wowcar.co.th/api/v1/apps/dealer-100
```

The dealer-ID compatibility base `/api/v1/scope/100` uses the same `dealer-100` customer directory. Plain inventory query selectors such as `?dealerId=100` remain inventory filters and must not be used as a signup/login base.

## Signup

```http
POST /api/v1/apps/dealer-100/auth/register
Content-Type: application/json

{
  "username": "ali",
  "email": "ali@example.com",
  "firstName": "Ali",
  "lastName": "Khan",
  "password": "Example123!"
}
```

Registration returns a CUSTOMER and access/refresh tokens. A supplied `accountType: "DEALER"` does not create staff membership or dashboard access inside a branded app.

## Login

```http
POST /api/v1/apps/dealer-100/auth/login
Content-Type: application/json

{"email":"ali@example.com","password":"Example123!"}
```

For another dealer, replace **100** in the base with that dealer's ID. The same email and username may register independently in multiple apps, with separate passwords, user IDs, sessions, favourites, notification preferences and inboxes. App A credentials/tokens cannot authenticate in App B or the ChangeCars directory. Existing accounts are never moved or cloned.

Use this same app base for `/auth/me`, `/auth/refresh`, `/auth/forgot-password`, `/auth/reset-password`, customer profile, favourites and `/me/notifications`. Tokens carry `appId`; do not manually change it.

## Inventory and public visibility

A dealer app reads only that dealer's inventory. Clients cannot change scope using another dealer ID, nested API URL or token from another app. Published cars remain in the shared ChangeCars marketplace; the apps do not create separate copies of inventory.

## Notifications

Connect Socket.IO namespace `/notifications` on the API origin:

```js
auth: { token: accessToken, appId: 'dealer-100' }
```

Register Firebase devices at `POST /api/v1/apps/dealer-100/me/notifications/devices`. Read the inbox at `GET /api/v1/apps/dealer-100/me/notifications`. The platform super admin selects the target app when sending announcements; recipient queries and device delivery stay within that app's customer identities. Phone push requires configured Firebase, registered devices and a running worker. See [notification delivery](notifications-realtime.md).

## Provisioning existing and future dealers

On API startup, all currently approved dealer IDs (numeric or UUID) receive app directory records. New approved dealer registrations, approvals and feed syncs also provision missing directories automatically. Repeating provisioning preserves existing enabled/disabled status, reset URLs, names, customers and sessions. No schema migration beyond the existing customer-app migration is needed.

Run on the backend server with its intended environment configured:

```sh
npm run apps:provision
# Optional directory of all individual dealer signup/login paths:
npm run apps:provision -- --export=.local/dealer-app-directory.csv
```

Super admin → **Customer apps** lists every app, supports search and pagination, edits names/reset URLs and enables/disables individual apps. **Provision dealer apps** adds any newly approved dealers. The equivalent endpoint is `POST /api/v1/admin/customer-apps/provision`, restricted to SUPER_ADMIN.

`GET /admin/customer-apps` lists registered directories. `POST /admin/customer-apps` saves canonical settings, for example:

```json
{
  "id": "dealer-100",
  "name": "Dealer 100",
  "dealerIds": ["100"],
  "resetUrl": "https://your-dealer-app.example/reset-password"
}
```

The dealer ID and app scope are fixed. Cross-dealer membership changes and arbitrary multi-dealer groups are rejected. Disabling an app revokes its refresh sessions, blocks its HTTP endpoints and disconnects sockets at the next validation. Suspended/non-approved dealerships cannot use their app.

## Password reset

Signup/login are available without a reset URL. Configure the app's own HTTPS reset page or universal link before offering password reset. The page must submit the reset through the same dealer app API base. Missing configuration returns `APP_RESET_NOT_CONFIGURED`; no reset email job is queued.

## Existing Group1 app

`group1` retains its existing four-branch identity: **3490, 3491, 3493, 3496**. `/api/v1/apps/group1` and the complete four-ID scope alias still share the same Group1 customer accounts. Its existing users, reset settings and staff dashboard are preserved.

Each individual dealer also has `dealer-<id>`, including the four Group1 dealerships. A single branch's `dealer-3490` directory is independent of the combined Group1 app; it does not expose or migrate Group1 customers.

## Verification

```sh
npm test -- --runInBand app-context dealer-app-identity notifications dealer-scope
npm run test:dealer-app-accounts:e2e
npm run test:customer-apps:e2e
```

HTTP checks are local-only. They create and clean up reserved test identities and inbox fixtures; no broadcast campaigns are sent.
