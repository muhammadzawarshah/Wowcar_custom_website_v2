# Group1 customer registration

The existing **Group1** branded customer app remains supported. Other approved dealers now have independent [dealer app accounts](dealer-app-accounts.md). Its app record is
created automatically when the updated backend starts. No superadmin app-registration
step or new schema migration is required if the customer-app account migration is
already installed.

## Fixed identity and branches

- App ID: `group1`
- Name: `Group1`
- Existing Group1 app branches: `3490`, `3491`, `3493`, `3496`
- Main Change Cars app ID: `changecars`

These four IDs are the existing Group1 customer app's selected branches. They are not
all dealerships tagged with DealerTrade group 134; membership in that wider group does
not automatically allow app registration.

## API URLs

The existing Group1 app base continues working:

```text
https://changecarapi.wowcar.co.th/api/v1/scope/3490,3491,3493,3496
```

The new explicit base refers to the same customer directory:

```text
https://changecarapi.wowcar.co.th/api/v1/apps/group1
```

Main Change Cars continues using `https://changecarapi.wowcar.co.th/api/v1`.
Use the selected base consistently for signup, login, refresh, password reset, profile,
favourites, notification inbox and device registration. Branch order in the old scope
URL does not matter. The single-dealer `/scope/3490` base now uses the independent `dealer-3490` directory; it is not an alias for the combined Group1 customer app.

## Signup example

```http
POST /api/v1/apps/group1/auth/register
Content-Type: application/json

{
  "username": "ali",
  "email": "ali@example.com",
  "firstName": "Ali",
  "lastName": "Khan",
  "password": "Example123!"
}
```

The same body may register independently at `/api/v1/auth/register`. It produces two
user IDs. Group1 signup always creates a CUSTOMER, even if a legacy client supplies
`accountType: "DEALER"`. Email/password login uses `POST {app-base}/auth/login`.

Both Group1 bases share the same directory: signing up through one and then registering
again through the other returns a duplicate-account conflict. Main Change Cars and
Group1 passwords, sessions, resets and customer records stay separate. A token from one
app cannot authenticate to the other. Previously shared Change Cars accounts are not
silently moved or copied into Group1.

## Other apps and administration

Other approved dealers use their own canonical `dealer-<dealerId>` app identities. See [dealer app accounts](dealer-app-accounts.md). The Group1 branch list remains fixed.
Superadmin can disable/enable Group1 and save its real password-reset URL through
**Customer apps → search Group1 → Edit settings**. Restarting never re-enables a disabled Group1 app
or overwrites its configured reset URL. Main Change Cars remains protected.

Signup/login do not require a reset URL. **Password reset emails still require a real
Group1 reset URL**; none is invented by the bootstrap. Configure the actual HTTPS reset
page/universal link before using email-based recovery. Its handler must submit to the
Group1 API base. Token-based password reset remains scoped to Group1.

## Real-time notifications

Use Socket.IO namespace `/notifications` on the backend origin, with:

```js
auth: { token: accessToken, appId: 'group1' }
```

The server checks the signed token, app identity, active session and enabled app.
FCM device registration uses the same Group1 HTTP API base.

## Verification and release

Local Group1 integration test: `npm run test:customer-apps:e2e`.
It passed 18 HTTP checks covering auto-configuration, same-email independent signup,
old/new Group1 URL compatibility, duplicate handling, rejected outsiders and scoped
login/refresh/reset. Temporary test users are removed; Group1 configuration is preserved.

Install/build/restart the backend with this code. The customer-app table migration from
the preceding release must already be applied. Bootstrap preserves Group1 and provisions approved individual dealer apps; it does not seed customers, replace inventory or require a database dump.
The Group1 mobile app can retain its existing full four-ID scope base URL.
