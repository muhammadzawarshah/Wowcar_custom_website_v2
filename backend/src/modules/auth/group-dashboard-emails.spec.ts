import { AuthNotifications } from './auth.notifications';
import { OutboxEvents } from '../../infrastructure/outbox/outbox.events';

describe('Group1 staff password-reset destination', () => {
  it.each([
    ['Group1 staff', { appId: 'changecars', role: 'DEALER', dealerMember: { dealerId: '3490' }, application: { name: 'Change Cars' } }, 'https://console.example/group/reset-password'],
    ['other dealer', { appId: 'changecars', role: 'DEALER', dealerMember: { dealerId: '9999' }, application: { name: 'Change Cars' } }, 'https://website.example/reset-password'],
    ['new group staff', { appId: 'changecars', role: 'DEALER', dealerMember: { dealerId: '5001' }, application: { name: 'Change Cars' } }, 'https://console.example/group/reset-password'],
    ['platform customer', { appId: 'changecars', role: 'CUSTOMER', dealerMember: null, application: { name: 'Change Cars' } }, 'https://website.example/reset-password'],
    ['Group1 app customer', { appId: 'group1', role: 'CUSTOMER', dealerMember: null, application: { name: 'Group1', resetUrl: 'https://group-app.example/reset' } }, 'https://group-app.example/reset'],
  ])('routes %s to the correct frontend', async (_name, user, expected) => {
    const handlers: Record<string, (event: any) => Promise<void>> = {};
    const outbox = { on: jest.fn((type, _name, handler) => { handlers[type] = handler; }) };
    const db = { user: { findUnique: jest.fn().mockResolvedValue({ ...user, firstName: 'Test', email: 'test@example.com' }) }, customerApp: { findFirst: jest.fn().mockImplementation(({ where }) => Promise.resolve(where.dealerIds?.has === '5001' ? { id: 'group-north', name: 'North Group', dealerIds: ['5001', '5002'] } : null)) } };
    const mail = { send: jest.fn() };
    const values: Record<string, string> = { GROUP_DASHBOARD_URL: 'https://console.example', PUBLIC_WEB_URL: 'https://website.example' };
    new AuthNotifications(outbox as any, db as any, mail as any, { get: (key: string) => values[key] } as any).onModuleInit();
    await handlers[OutboxEvents.PasswordResetRequested]({ payload: { userId: 'user', token: 'test-token', ttlMinutes: 30 } });
    expect(mail.send).toHaveBeenCalledWith(expect.objectContaining({ text: expect.stringContaining(expected + '?token=test-token') }));
  });
});
