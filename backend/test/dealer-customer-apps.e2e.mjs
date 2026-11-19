/** Local-only account-isolation check. Creates and removes reserved test identities; sends no broadcasts. */
import 'dotenv/config';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import pg from 'pg';
const database = new URL(process.env.DATABASE_URL || 'http://missing');
assert(['localhost', '127.0.0.1'].includes(database.hostname) && database.port === '55432', 'This check is restricted to the local database on port 55432');
const base = process.env.TEST_API_URL || 'http://localhost:4000/api/v1';
assert(/^http:\/\/(localhost|127\.0\.0\.1):\d+\/api\/v1$/.test(base), 'Use a local API');
const db = new pg.Client({ connectionString: process.env.DATABASE_URL });
const stamp = randomUUID().replaceAll('-', '').slice(0, 14);
const email = `dealer-app-check-${stamp}@example.invalid`;
const fields = { username: `appcheck_${stamp}`, email, firstName: 'Temporary', lastName: 'App Check' };
const request = async (path, options = {}) => {
 const response = await fetch(`${base}${path}`, { ...options, signal: AbortSignal.timeout(20000) });
 return { status: response.status, data: await response.json().catch(() => ({})) };
};
const post = (path, body, token) => request(path, { method: 'POST', headers: { 'content-type': 'application/json', ...(token ? { authorization: `Bearer ${token}` } : {}) }, body: JSON.stringify(body) });
const get = (path, token) => request(path, { headers: token ? { authorization: `Bearer ${token}` } : {} });
await db.connect();
try {
 const dealers = (await db.query(`SELECT id FROM dealers WHERE status='APPROVED' AND id NOT IN ('3490','3491','3493','3496') AND EXISTS (SELECT 1 FROM vehicles WHERE "dealerId"=dealers.id AND status='PUBLISHED') ORDER BY id LIMIT 2`)).rows;
 assert.equal(dealers.length, 2);
 const ids = dealers.map(row => row.id);
 const paths = [`/apps/dealer-${ids[0]}`, `/apps/dealer-${ids[1]}`, '', '/apps/group1'];
 const tokens = [];
 for (let index = 0; index < paths.length; index++) {
  const result = await post(`${paths[index]}/auth/register`, { ...fields, password: `Isolated${stamp}${index}!`, ...(index === 0 ? { accountType: 'DEALER' } : {}) });
  assert.equal(result.status, 201, `Signup ${paths[index]}: ${result.status}`);
  assert.equal(result.data.user.role, 'CUSTOMER');
  tokens.push(result.data);
 }
 assert.equal(new Set(tokens.map(token => token.user.id)).size, 4);
 console.log('Same email/username has four independent customer accounts: two dealers, ChangeCars and Group1');
 assert.equal((await post(`${paths[0]}/auth/register`, { ...fields, password: `Isolated${stamp}0!` })).status, 409);
 assert.equal((await post(`${paths[1]}/auth/login`, { email, password: `Isolated${stamp}0!` })).status, 401);
 assert.equal((await post(`/scope/${ids[0]}/auth/login`, { email, password: `Isolated${stamp}0!` })).status, 200);
 assert.equal((await get(`${paths[0]}/auth/me`, tokens[0].accessToken)).status, 200);
 assert.equal((await get(`${paths[1]}/auth/me`, tokens[0].accessToken)).status, 403);
 assert.equal((await get('/auth/me', tokens[0].accessToken)).status, 403);
 assert.equal((await post(`${paths[1]}/auth/refresh`, { refreshToken: tokens[0].refreshToken })).status, 401);
 const refreshed = await post(`${paths[0]}/auth/refresh`, { refreshToken: tokens[0].refreshToken });
 assert.equal(refreshed.status, 200); tokens[0] = refreshed.data;
 console.log('Passwords, tokens, refresh and legacy dealer-ID login stay inside their own app');
 for (let index = 0; index < 2; index++) {
  await db.query('INSERT INTO notifications (id,"userId",type,title,body) VALUES ($1,$2,$3,$4,$5)', [randomUUID(), tokens[index].user.id, 'announcement', `Fixture ${index}`, 'Local isolation check']);
  const inbox = await get(`${paths[index]}/me/notifications`, tokens[index].accessToken);
  assert.equal(inbox.status, 200);
  assert.equal(inbox.data.data.length, 1);
  assert.equal(inbox.data.data[0].title, `Fixture ${index}`);
  const stock = await get(`${paths[index]}/vehicles?pageSize=5`);
  assert.equal(stock.status, 200);
  assert(stock.data.data.every(vehicle => (vehicle.dealer?.id || vehicle.dealerId) === ids[index]));
 }
 const override = await get(`${paths[0]}/vehicles?dealerId=${ids[1]}`);
 assert(override.status === 400 || (override.status === 200 && override.data.data.every(vehicle => (vehicle.dealer?.id || vehicle.dealerId) === ids[0])));
 assert.equal((await get(`${paths[0]}/group-dashboard/me`, tokens[0].accessToken)).status, 404);
 assert.equal((await get(`${paths[0]}/admin/users`, tokens[0].accessToken)).status, 404);
 assert.equal((await post(`${paths[0]}/auth/forgot-password`, { email })).data.code, 'APP_RESET_NOT_CONFIGURED');
 console.log('Inventory, inboxes and staff restrictions are isolated; query selectors cannot change the tenant');
} finally {
 const users = (await db.query('SELECT id FROM users WHERE email=$1', [email])).rows.map(row => row.id);
 if(users.length) {
  await db.query('DELETE FROM outbox_events WHERE "aggregateId" = ANY($1)', [users]);
  await db.query('DELETE FROM notifications WHERE "userId" = ANY($1::uuid[])', [users]);
  await db.query('DELETE FROM users WHERE id = ANY($1::uuid[])', [users]);
 }
 await db.end();
 console.log('Temporary test users, sessions and inbox fixtures removed');
}
