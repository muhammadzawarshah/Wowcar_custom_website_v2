import { appDealerId, dealerCustomerAppId, validCustomerAppScope } from './dealer-app-identity';
import { GROUP1_DEALER_IDS } from './group1';
describe('dealer app identity', () => {
 it('binds the app identity to exactly one numeric dealer ID', () => {
  expect(dealerCustomerAppId('3490')).toBe('dealer-3490');
  expect(appDealerId('dealer-3490')).toBe('3490');
  expect(validCustomerAppScope({ id: 'dealer-3490', dealerIds: ['3490'] })).toBe(true);
  for(const dealerIds of [[], ['3491'], ['3490','3491'], ['3490','3490']]) expect(validCustomerAppScope({ id: 'dealer-3490', dealerIds })).toBe(false);
 });
 it('supports newly registered dealers with UUID IDs ', async () => {
  const id = '01937f13-cfda-7000-8000-000000000001';
  expect(dealerCustomerAppId(id)).toBe(`dealer-${id}`);
  expect(validCustomerAppScope({ id: `dealer-${id}`, dealerIds: [id] })).toBe(true);
 });
 it('retains the original Group1 identity and all four branches', () => {
  expect(validCustomerAppScope({ id: 'group1', dealerIds: [...GROUP1_DEALER_IDS].reverse() })).toBe(true);
  expect(validCustomerAppScope({ id: 'group1', dealerIds: ['3490'] })).toBe(false);
  expect(validCustomerAppScope({ id: 'changecars', dealerIds: ['3490'] })).toBe(false);
 });
 it.each(['dealer-admin','dealer-123/../admin','dealer-123,999','dealer-12345678901','dealer-'])('rejects unsupported identities %s', id => {
  expect(appDealerId(id)).toBeNull(); expect(validCustomerAppScope({ id, dealerIds: ['123'] })).toBe(false);
 });
});
