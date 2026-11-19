# Group1 management dashboard

The existing `superadmin/` Next.js app now also serves a Group1 console using the same dashboard shell and design system.

- Shared login: `http://localhost:3001/login` (`/group/login` redirects here)
- Dashboard: `http://localhost:3001/group/dashboard`
- Super admins can open it from the **Group1 dashboard** sidebar link.
- Backend prefix: `/api/v1/group-dashboard` (standard platform staff authentication, not the branded customer login).

## Access and boundaries

Use an existing platform (`changecars`) staff account. It must be an active `DEALER` user with active membership in one of dealerships **3490, 3491, 3493, 3496**, and the dealership must be approved. Active platform `SUPER_ADMIN` accounts also have access. Group1 customer app accounts, unrelated dealers, ordinary platform admins, disabled users and revoked memberships are rejected. No public staff registration or default credentials are added. Super admins can invite staff and manage their roles/access from the Group staff screen. Group managers cannot provision new dashboard users.

All Group1 staff may read the group's data. Owners and managers may edit prices, apply permitted vehicle lifecycle actions, update lead stages, assign leads to staff in the same dealership, and send announcements. Super admins also retain their existing moderation actions. Existing vehicle validation, review, lead-stage and audit rules apply.

Inventory, dealership and lead queries always derive their scope from the four configured dealer IDs, including writes. Customers are restricted to `appId=group1`, role `CUSTOMER`. Customer/staff responses explicitly select public management fields and never include password hashes.

The dashboard shares the existing console session cookies. Signing out ends that console session. A Group1 staff session cannot open the super admin console, whose existing SUPER_ADMIN check remains in place.

## Notifications

`POST /api/v1/group-dashboard/notifications` accepts title, body and an audience of `customers` or `selected`. The server always sets `appId=group1`; other app IDs and dealer/all audiences are rejected. Selected recipients must all be active Group1 customers.

Announcements use the existing audited transactional outbox and notification preferences. They appear in the Group1 customer's in-app notification feed and live socket connection. Mobile push requires the existing Firebase configuration and device registration in the Group1 app. Run the notification worker (or `RUN_WORKER_IN_API=true`) for queued campaigns to deliver. The existing super admin notification composer can also select the Group1 app.

No announcements or staff invitations are sent as part of setup or verification.

## Run / release

1. Start the updated backend (`cd backend && npm run start:dev`). No schema migration is needed.
2. Set `API_URL=http://localhost:4000/api/v1` in `superadmin/.env.local` for local testing.
3. Run `cd superadmin && npm run dev -- --webpack --port 3001`.
4. Sign in at `/login`: Group1 staff enter the group dashboard; super admins enter the platform console and can open Group1 from the sidebar.

For production, release **both** the updated backend and `superadmin/` app, and point the console's server-side `API_URL` to the released API. Changing the public customer website's API URL alone does not deploy these dashboard endpoints.

## Staff onboarding

Set backend `GROUP_DASHBOARD_URL` to the console origin (default `http://localhost:3001`). Staff invitations for the four Group1 dealerships and their forgotten-password emails link to `/group/reset-password` on this origin. The super admin can invite a manager, sales user or staff member from the Group staff page. Invitations use the existing mail outbox and seven-day set-password tokens. Configure SMTP for real delivery; local development logs email instead. Disabling membership revokes its refresh sessions and Group1 access is rechecked on every request.

Group1 runs inside the existing super admin application. Use the same hosting deployment and domain. A separate Group1 repository/deployment is no longer required.

## Platform and group relationship

The platform SUPER_ADMIN retains the full ChangeCars console and may also open Group1. Group1 owners/managers remain DEALER accounts; they can manage their group and cannot open platform-admin endpoints. Group1 announcements always target `appId=group1`.

Group1 inventory and public dealer profiles live in the existing shared tables. Approved and published group vehicles appear on the ChangeCars public website/API and in the Group1 app; group profile edits update the shared public dealer record. Draft or review-pending listings continue to follow the platform publication rules. Group1 customer identities and announcement recipients remain app-scoped.
