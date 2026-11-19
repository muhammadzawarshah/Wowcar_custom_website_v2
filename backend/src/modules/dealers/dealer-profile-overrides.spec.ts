import { dealerProfileOverrides } from './dealer-profile-overrides';
import { DealersService } from './dealers.service';

describe('dashboard branch profile edits', () => {
 it('retains only profile fields when applying overrides to a feed refresh', () => {
  expect(dealerProfileOverrides({ email: 'new@example.com', logoUrl: null, status: 'APPROVED', plan: 'PREMIUM', dealerIds: ['9999'] })).toEqual({ email: 'new@example.com', logoUrl: null });
  const feed = { name: 'Feed name', email: 'feed@example.com', phone: '0111111111' };
  expect({ ...feed, ...dealerProfileOverrides({ email: 'custom@example.com' }) }).toEqual({ ...feed, email: 'custom@example.com' });
 });
 it('saves the edit, only changed field overrides and its audit in one transaction, then refreshes public data', async () => {
  const before = { id: '3490', name: 'Group1 branch', email: 'old@example.com', logoUrl: 'https://api.example/logo.png' };
  const after = { ...before, email: 'new@example.com' };
  const tx = { dealer: { update: jest.fn().mockResolvedValue(after) }, sourceFeedRecord: {
    findUnique: jest.fn().mockResolvedValue({ payload: { phone: '0111111111' } }), upsert: jest.fn(),
  } };
  const db = { dealer: { findUniqueOrThrow: jest.fn().mockResolvedValue(before) }, $transaction: jest.fn((run) => run(tx)) };
  const audit = { record: jest.fn() }; const sync = { changed: jest.fn() };
  const service = new DealersService(db as any, {} as any, audit as any, {} as any, {} as any, sync as any, {} as any, {} as any);
  await expect(service.updateProfile({ dealerId: '3490' }, { name: before.name, logoUrl: before.logoUrl, email: 'new@example.com' }, { preserveFeedFields: true })).resolves.toEqual(after);
  expect(tx.sourceFeedRecord.upsert).toHaveBeenCalledWith(expect.objectContaining({ create: { source: 'dashboard', kind: 'dealer-profile', externalId: '3490', payload: { phone: '0111111111', email: 'new@example.com' } } }));
  expect(audit.record).toHaveBeenCalledWith(expect.objectContaining({ action: 'dealer.profile_update', before, after }), tx);
  expect(sync.changed).toHaveBeenCalledWith('cars');
 });
});
