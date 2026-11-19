# Dealer mobile apps: developer integration guide

Updated: 2 November 2026. Audience: Android/iOS, Flutter and React Native developers.

This integration creates **customer accounts** in each dealer's app. It does not create dealer staff, dashboard logins or copied accounts. No default customer passwords are provided.

## 1. Configure the dealer app

Each approved dealer has a permanent app ID `dealer-<dealerId>`. Use the dealer's actual ID from the backend directory; do not substitute a vehicle ID, slug or dealer name.

```js
const API_ORIGIN = 'https://changecarapi.wowcar.co.th';
const DEALER_ID = '100'; // Example only: replace with this app's dealership ID.
const APP_ID = `dealer-${DEALER_ID}`;
const API_BASE = `${API_ORIGIN}/api/v1/apps/${APP_ID}`;
```

| App | App ID | API base path |
| --- | --- | --- |
| Individual dealer 100 | `dealer-100` | `/api/v1/apps/dealer-100` |
| Individual Group1 branch 3490 | `dealer-3490` | `/api/v1/apps/dealer-3490` |
| Existing combined Group1 | `group1` | `/api/v1/apps/group1` |
| Main ChangeCars | `changecars` | `/api/v1` |

Group1 keeps its existing four branches: `3490`, `3491`, `3493`, `3496`. Its customers are independent of every individual branch app. To build the existing combined Group1 app, set `APP_ID = 'group1'` and use that API base throughout.

Use one configured API_BASE for all customer HTTP calls: signup, login, refresh, profile, favourites, inventory and notifications. App identity comes from the URL, not a body field or a client-selected role. No app secret or admin token belongs in the mobile app.

The same email/username may exist independently in different apps, with different passwords, user IDs, sessions, favourites and inboxes. Existing main-app and Group1 customers are not copied into dealer apps.

Compatibility aliases: `/api/v1/scope/100` maps to `dealer-100`; the complete `/api/v1/scope/3490,3491,3493,3496` maps to `group1`. Prefer the explicit `/apps/...` base. `?dealerId=100` is an inventory selector, not an authentication base. UUID dealer IDs use the canonical `/apps/dealer-<UUID>` form.

### Backend availability

Backend release `92b02dc` or newer must be deployed with existing customer-app migrations applied. Startup provisions approved dealer directories automatically. Local provisioning of 955 dealers is complete; this does not prove that production has deployed this release.

The backend team can run `npm run apps:provision` and export its own server directory:

```sh
npm run apps:provision -- --export=.local/dealer-app-directory.csv
```

The CSV includes dealer ID, app ID and signup/login paths. The mobile app must not call admin provisioning/settings endpoints. Backend setup details: [dealer app accounts](dealer-app-accounts.md).

## 2. Register

```http
POST {API_BASE}/auth/register
Content-Type: application/json

{
  "username": "ali",
  "email": "ali@example.com",
  "firstName": "Ali",
  "lastName": "Khan",
  "password": "Example123!"
}
```

Send these five fields. Do not supply a role, app ID, dealer ID or accountType in the body. The backend creates a CUSTOMER.

Validation:

- Username: 3–30 characters; letters, digits, dots, underscores and hyphens; starts
  with a letter or digit. The server trims it and stores it lowercase.
- Email: valid email, up to 254 characters; trimmed and stored lowercase.
- First/last name: 1–80 characters each after trimming.
- Password: 8–128 characters, containing at least one letter and one digit.

Success is **201**. Registration also signs the user in and returns tokens:

```json
{
  "tokenType": "Bearer",
  "accessToken": "<access-token>",
  "expiresIn": 900,
  "refreshToken": "<refresh-token>",
  "refreshTokenExpiresAt": "<ISO timestamp>",
  "user": {
    "id": "<user UUID>",
    "appId": "dealer-100",
    "username": "ali",
    "accountType": "PRIVATE_SELLER",
    "email": "ali@example.com",
    "firstName": "Ali",
    "lastName": "Khan",
    "phone": null,
    "role": "CUSTOMER"
  }
}
```

This is an example shape; use the returned expiry values rather than hardcoding 900.
Check that `user.appId === APP_ID`; `dealer-100` is only the example configuration. Persist tokens in platform secure storage, never
in logs. Duplicate email/username is rejected within the configured dealer app with 409; an account with
that email in the main Change Cars app does not prevent the configured dealer app signup.

## 3. Login and authenticated requests

```http
POST {API_BASE}/auth/login
Content-Type: application/json

{"email":"ali@example.com","password":"Example123!"}
```

Success: **200**, with the same token/user shape as registration.

Attach the access token to every protected request:

```http
GET {API_BASE}/auth/me
Authorization: Bearer <access-token>
```

Users enter email/password normally; the mobile client manages tokens internally.
Never use a Change Cars token with the configured dealer app base, or a dealer-app token with `/api/v1`.
The server rejects the wrong app with `403 APP_MISMATCH`.

## 4. Refresh and password flows

| Action | Endpoint relative to API_BASE | JSON body | Success |
| --- | --- | --- | --- |
| Refresh | `POST /auth/refresh` | `{"refreshToken":"<refresh-token>"}` | 200, new token pair |
| Forgot password | `POST /auth/forgot-password` | `{"email":"ali@example.com"}` | 202, generic message |
| Reset password | `POST /auth/reset-password` | `{"token":"<reset-token>","password":"NewExample123!"}` | 204 |
| Change password | `POST /auth/change-password` | `{"currentPassword":"Example123!","newPassword":"NewExample123!"}` | 204 |
| Logout | `POST /auth/logout` | No body | 204 |
| Logout all devices | `POST /auth/logout-all` | No body | 204 |

Change-password and logout calls require the Bearer access token. Forgot/reset and
refresh do not require that access token, but must still use the configured dealer app base.

Refresh tokens rotate: replace **both tokens** after each successful refresh. Serialize
refresh calls so multiple failed HTTP requests do not reuse one refresh token. On 401,
refresh once and retry the original request once; if refresh fails, return to login.
An app-mismatch 403 is a configuration/account problem, not a refresh loop.

Missing reset-page configuration returns `400 APP_RESET_NOT_CONFIGURED`.
Email recovery needs the configured app’s HTTPS reset page/universal link configured by
the backend team. Automatic directory setup does not invent one. A 202 forgot-password
response does not prove email delivery. The reset link includes `token` and `appId`;
the app/page handler must post the new password to the configured dealer app reset endpoint.

## 5. Notification inbox

All of these endpoints require the Bearer access token:

| Action | Endpoint relative to API_BASE |
| --- | --- |
| List inbox | `GET /me/notifications?page=1&pageSize=20` |
| Unread-only inbox | `GET /me/notifications?unreadOnly=true&page=1&pageSize=20` |
| Unread count | `GET /me/notifications/unread-count` |
| Mark one read | `POST /me/notifications/{notificationId}/read` |
| Mark all read | `POST /me/notifications/read-all` |
| List preferences | `GET /me/notifications/preferences` |
| Update preferences | `PUT /me/notifications/preferences` |

Unread-count returns `{"unread":3}`. Inbox listing returns `data` and pagination `meta`.
Marking one read returns 204; do not try to parse a JSON body from 204 responses.

Preference example:

```json
{
  "items": [
    {"eventType":"admin.announcement","channel":"IN_APP","enabled":true}
  ]
}
```

Currently IN_APP preferences govern inbox, live and mobile push delivery for that
notification type. There is no separate PUSH preference channel in this implementation.

## 6. Connected-app real-time delivery

Use **Socket.IO v4**, not a raw WebSocket client. Connect to the backend origin;
Socket.IO does not use the HTTP API base or its scope prefix.

- Namespace URL: `https://changecarapi.wowcar.co.th/notifications`
- Transport path: `/socket.io/`
- Transport: `websocket`
- Handshake authentication: `{token: accessToken, appId: APP_ID}`

JavaScript/React Native example; use equivalent SDK options in Flutter/native clients:

```js
import { io } from 'socket.io-client';

const socket = io(`${API_ORIGIN}/notifications`, {
  autoConnect: false,
  transports: ['websocket'],
  auth: { token: accessToken, appId: APP_ID },
});

socket.on('notification', notification => {
  // Implement in the app: upsert by notification.id and update unread UI.
  inbox.upsert(notification);
});

socket.on('ready', async () => {
  // Implement in the app: fetch the authenticated inbox from API_BASE.
  // Run on every ready, including reconnection, to recover missed events.
  await inbox.syncFromApi();
});

socket.connect();

// After HTTP token refresh:
function reconnectWithAccessToken(newAccessToken) {
  socket.auth = { token: newAccessToken, appId: APP_ID };
  socket.disconnect().connect();
}
```

`inbox` above is illustrative app-side state, not a supplied library. The event contains
`id`, `userId`, `type`, `title`, `body`, `data`, `readAt` and `createdAt`. `ready` contains
`userId`. The room comes from the verified user's ID; do not send a userId to subscribe.

Deduplicate by notification ID. Worker retries, reconnects and phone push can refer to
the same notification. The inbox is authoritative; a socket event is not durable replay.
The server rechecks token expiry/session/app status every 15 seconds. Refresh and
reconnect with a new token when needed. Do not put access tokens in URL query strings.

## 7. Android/iOS push

Use Firebase Messaging in the mobile app, request notification permission, and obtain
its FCM registration token. The backend currently uses one Firebase project, so the
dealer mobile apps must be registered in the same project as the backend credentials.

After login/signup and whenever Firebase rotates the device token:

```http
POST {API_BASE}/me/notifications/devices
Authorization: Bearer <access-token>
Content-Type: application/json

{"token":"<FCM-device-token>","platform":"android"}
```

Use `"ios"` for iOS. A device registration is not a user login and does not replace
the access token. The backend's Firebase service-account private key stays server-side.
Android notification channels and iOS APNs capabilities/keys must be configured in the
mobile/Firebase projects. Phone delivery cannot be assumed until tested on real devices.

Push data fields: `notificationId`, `type`, `appId`. On tap, open configured app and
fetch the authenticated inbox. In the foreground, merge push and WebSocket messages by
notification ID to avoid duplicate visible alerts.

**Logout order:**

1. Unregister the FCM token while the access token is still available:
   `DELETE {API_BASE}/me/notifications/devices` with `{"token":"<FCM-device-token>"}`.
2. Call `POST {API_BASE}/auth/logout`.
3. Disconnect Socket.IO and clear secure tokens and account-specific cached state.

If connectivity prevents unregister/logout, handle that failure explicitly and retry
when appropriate; do not report server-side logout as confirmed when it was not.

## 8. Common responses

| HTTP / code | Client handling |
| --- | --- |
| 400 `APP_RESET_NOT_CONFIGURED` | Hide/retry recovery only after the backend team configures this app’s reset URL |
| 400 `VALIDATION_FAILED` | Display validation messages from `details` |
| 409 `EMAIL_TAKEN` / `USERNAME_TAKEN` | Offer login for this app or a different username |
| 401 `INVALID_CREDENTIALS` | Display incorrect email/password |
| 401 on protected API | Attempt serialized refresh once |
| 403 `APP_MISMATCH` | Use the correct app base and that app's session |
| 403 `ACCOUNT_DISABLED` | Account is inactive; do not retry login in a loop |
| 404 `APP_NOT_FOUND` | configured app unavailable, disabled, or updated backend not active |
| 400 `APP_CONTEXT_REQUIRED` | Use the configured `/apps/<APP_ID>` base |
| 429 | Respect retry timing; avoid repeated automatic retries |

Other structured error codes may occur. Use the returned code/message and do not
interpret a failed login as permission to search another app's user directory.

## 9. Inventory and public marketplace

Use `GET {API_BASE}/vehicles` and `GET {API_BASE}/vehicles/{id-or-slug}` for this app's inventory and vehicle details. Use returned identifiers and pagination. Each individual app is restricted to its own dealer; Group1 includes its four configured branches. Changing query parameters does not grant another dealer's scope.

Published dealer stock remains visible on ChangeCars. App directories do not duplicate vehicle records. Customer signup does not authorize adding/editing stock or accessing staff routes.

## 10. Isolation and acceptance checks

Before release, test with two configured dealer apps A and B:

- Register the same email in A and B; expect different user IDs and correct `user.appId`.
- Login with each app's own password; A's token must fail at B's protected endpoints.
- Keep account caches and secure tokens keyed by APP_ID and user ID. Clear them when switching apps/accounts.
- Confirm refresh rotation, one retry after refresh, and socket reconnection.
- Confirm only the configured dealer's cars appear; Group1 still includes its four branches.
- Send an authorized test announcement from super admin to A; B and main ChangeCars customers must not receive it.
- Confirm inbox, unread count, read state and reconnect recovery.
- Configure the app's own reset URL, test recovery, and handle missing configuration.
- Test foreground/background FCM on real Android/iOS devices.
- On logout, unregister the device, revoke the session and clear account state.

The backend currently uses one Firebase project. Register each mobile package/bundle in that project with its own platform configuration. An FCM token is associated with one current user record; sharing the same device token across simultaneous app identities reassigns its registration. Keep device-token lifecycle and app identities consistent.

Local HTTP integration tests passed for independent dealer accounts and existing Group1. Production deployment, recovery email and physical-device push still need environment-specific verification.

References: [backend provisioning and settings](dealer-app-accounts.md), [existing Group1 integration](group1-app-developer-guide.md), [notification infrastructure](notifications-realtime.md).

Existing public read-only dealer details/documents integration: [read-only dealer API guide](dealer-app-readonly-api-guide.md). It uses a separate public endpoint and does not replace the customer authentication flow above.
