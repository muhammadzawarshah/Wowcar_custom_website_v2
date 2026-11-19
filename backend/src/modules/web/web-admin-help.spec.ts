import { WebFormsService } from './web-forms.service';

function setup() {
  const enquiries = { submit: jest.fn().mockResolvedValue({ reference: 'HELP-123', id: '1' }) };
  const service = new WebFormsService({} as any, enquiries as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any);
  return { service, enquiries };
}

it('records admin help with name, email and message without requiring a phone', async () => {
  const { service, enquiries } = setup();
  expect(await service.submit('admin-help', { name: ' Test User ', email: 'USER@example.com', message: 'I cannot access my account.' })).toEqual({ ok: true, reference: 'HELP-123' });
  expect(enquiries.submit).toHaveBeenCalledWith(expect.objectContaining({ source: 'admin:help-centre', contact: { name: 'Test User', email: 'user@example.com', phone: '', consent: true }, details: expect.objectContaining({ subject: 'Admin Help Centre' }) }), undefined);
});

it.each([
  { name: '', email: 'user@example.com', message: 'Please help me sign in.' },
  { name: 'A', email: 'user@example.com', message: 'Please help me sign in.' },
  { name: 'Test User', email: 'invalid', message: 'Please help me sign in.' },
  { name: 'Test User', email: 'user@example.com', message: 'short' },
  { name: 'Test User', email: 'user@example.com', message: 'x'.repeat(4001) },
])('rejects invalid help requests before saving', async body => {
  const { service, enquiries } = setup();
  await expect(service.submit('admin-help', body)).rejects.toMatchObject({ code: 'FORM_INVALID' });
  expect(enquiries.submit).not.toHaveBeenCalled();
});
