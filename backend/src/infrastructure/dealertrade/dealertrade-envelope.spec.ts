import { dealerTradePage } from './dealertrade-envelope';

describe('dealerTradePage', () => {
  it('unwraps the current {status, message, data: page} envelope', () => {
    const page = { current_page: 1, data: [{ vehicle_id: 1 }], meta: { total_stock_count: 5 }, total: 6 };
    expect(dealerTradePage({ status: 'Success', message: null, data: page })).toBe(page);
  });

  it('accepts the earlier bare page shape', () => {
    const page = { current_page: 1, data: [{ vehicle_id: 1 }], total: 1 };
    expect(dealerTradePage(page)).toBe(page);
  });

  it('tolerates non-object bodies', () => {
    expect(dealerTradePage(null)).toEqual({});
  });
});
