# Group1 mobile app: registration, login and notifications

Audience: the Android/iOS app developer. This guide covers the existing Group1 customer
app only. Signing up in it creates a customer account, not a dealer/staff account.

## 1. Set the API base once

The existing Group1 base remains supported:

```text
https://changecarapi.wowcar.co.th/api/v1/scope/3490,3491,3493,3496
```

Alternatively, use this explicit base for the same Group1 accounts:

```text
https://changecarapi.wowcar.co.th/api/v1/apps/group1
```

Choose one base and use it for **all customer requests**. Both bases share the same
Group1 user directory; they do not create different accounts.

Constants:

```js
const API_ORIGIN = 'https://changecarapi.wowcar.co.th';
const API_BASE = `${API_ORIGIN}/api/v1/apps/group1`;
const APP_ID = 'group1';
```

The four existing branches are fixed: `3490`, `3491`, `3493`, `3496`. Do not use a
partial list such as `/scope/3490` for authentication. Individual dealer apps use `/api/v1/apps/dealer-<dealerId>` and have independent customer accounts. See [all-dealer mobile integration](dealer-app-developer-guide.md).
Group1 is provisioned automatically at backend startup; no manual app-registration
request or app secret is required from the mobile app.

The main Change Cars app continues using `/api/v1` with app ID `changecars`.
`ali@example.com` can have one account there and a separate account in Group1. Their
user IDs, passwords, sessions, favourites and notifications are independent. Existing
main-app users are not automatically copied into Group1.

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

Send these five fields. Do not supply a role, app ID or dealer ID in the body.

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
    "appId": "group1",
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
Check that `user.appId` is `group1`. Persist tokens in platform secure storage, never
in logs. Duplicate email/username is rejected within Group1 with 409; an account with
that email in the main Change Cars app does not prevent Group1 signup.

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
Never use a Change Cars token with the Group1 base, or a Group1 token with `/api/v1`.
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
refresh do not require that access token, but must still use the Group1 base.

Refresh tokens rotate: replace **both tokens** after each successful refresh. Serialize
refresh calls so multiple failed HTTP requests do not reuse one refresh token. On 401,
refresh once and retry the original request once; if refresh fails, return to login.
An app-mismatch 403 is a configuration/account problem, not a refresh loop.

Missing reset-page configuration returns `400 APP_RESET_NOT_CONFIGURED`.
Email recovery needs the actual Group1 HTTPS reset page/universal link configured by
the backend team. Automatic Group1 setup does not invent one. A 202 forgot-password
response does not prove email delivery. The reset link includes `token` and `appId`;
the app/page handler must post the new password to the Group1 reset endpoint.

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
- Handshake authentication: `{token: accessToken, appId: 'group1'}`

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
Group1 mobile apps must be registered in the same project as the backend credentials.

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

Push data fields: `notificationId`, `type`, `appId`. On tap, open the Group1 app and
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
| 400 `VALIDATION_FAILED` | Display validation messages from `details` |
| 409 `EMAIL_TAKEN` / `USERNAME_TAKEN` | Offer Group1 login or a different username |
| 401 `INVALID_CREDENTIALS` | Display incorrect email/password |
| 401 on protected API | Attempt serialized refresh once |
| 403 `APP_MISMATCH` | Use the correct app base and that app's session |
| 403 `ACCOUNT_DISABLED` | Account is inactive; do not retry login in a loop |
| 404 `APP_NOT_FOUND` | Group1 app unavailable, disabled, or updated backend not active |
| 400 `APP_CONTEXT_REQUIRED` | Use the complete four-ID scope or `/apps/group1` base |
| 429 | Respect retry timing; avoid repeated automatic retries |

Other structured error codes may occur. Use the returned code/message and do not
interpret a failed login as permission to search another app's user directory.

## 9. Integration checklist

- Backend commit `b2fc887` or newer must be running; preceding app-directory migrations
  must be applied. Backend startup auto-creates Group1 and preserves its disable/reset settings.
- Main and Group1 signup with the same email produce different user IDs.
- Signup through the old Group1 base followed by signup through the new base gives a
  duplicate conflict, because they are aliases for the same directory.
- Same-app login works and cross-app tokens fail.
- Refresh persists the rotated token pair and reconnects the socket.
- Inbox loads, read state updates, and reconnect recovers missed notifications.
- Group1-targeted announcements stay in Group1.
- Foreground/background push works on real Android/iOS devices after Firebase setup.
- Logout unregisters the device and clears the app's account state.

Local backend verification already passed 18 Group1 HTTP integration checks. That is
not certification of production deployment, email recovery or real-device push delivery.

Further backend references: [Group1 setup](group1-registration.md),
[notification backend configuration](notifications-realtime.md).
