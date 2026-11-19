import { EnquiryType } from '../../generated/prisma/client';
import { customerTokenFor } from './customer-token';
import { CONTACT_DEALER, DEALERTRADE_LEAD_URL, DealerTradeLeads, forwardsToDealerTrade, splitName } from './dealertrade-leads';

const vehicleEnquiry = { id: 'e1', reference: 'ENQ-1', customerToken: 'CUS-ABC123DEF456', type: EnquiryType.VEHICLE, name: 'Mr Piet Skiet', email: 'me@gmail.com', phone: '0822569987', message: 'Hi am interested in this car', vehicleId: '1582806', dealerId: '108', details: { firstName: 'Piet', surname: 'Skiet' } };
const dealerEnquiry = { ...vehicleEnquiry, id: 'e2', type: EnquiryType.GENERAL, vehicleId: null, message: 'Hi, please contact me', details: { kind: CONTACT_DEALER, firstName: 'Piet', surname: 'Skiet' } };

function setup(enquiry: Record<string, unknown> | null) {
  const update = jest.fn().mockResolvedValue({});
  const prisma = { enquiry: { findUnique: jest.fn().mockResolvedValue(enquiry), update } };
  const outbox = { on: jest.fn() };
  return { service: new DealerTradeLeads(outbox as any, prisma as any), update, outbox };
}
const reply = (status: number, body: unknown) => jest.spyOn(global, 'fetch').mockResolvedValue(new Response(JSON.stringify(body), { status }));

describe('DealerTrade leads', () => {
  const env = { ...process.env };
  beforeEach(() => { process.env.DEALERTRADE_LEADS_ENABLED = 'true'; process.env.DEALERTRADE_TOKEN = '8|test'; delete process.env.DEALERTRADE_LEAD_APK_NAME; });
  afterEach(() => { process.env = { ...env }; jest.restoreAllMocks(); });

  it('forwards vehicle enquiries for DealerTrade cars and contact-the-dealer messages for DealerTrade dealers only', () => {
    expect(forwardsToDealerTrade({ type: EnquiryType.VEHICLE, vehicleId: '1582806' })).toBe(true);
    expect(forwardsToDealerTrade({ type: EnquiryType.TEST_DRIVE, vehicleId: '1582806' })).toBe(true);
    expect(forwardsToDealerTrade({ type: EnquiryType.VEHICLE, vehicleId: '01937f13-cfda-7000-8000-000000000001' })).toBe(false);
    expect(forwardsToDealerTrade({ type: EnquiryType.QUOTE, dealerId: '108' })).toBe(false);
    expect(forwardsToDealerTrade({ type: EnquiryType.GENERAL, dealerId: '108', details: { kind: CONTACT_DEALER } })).toBe(true);
    expect(forwardsToDealerTrade({ type: EnquiryType.GENERAL, dealerId: '108', details: { subject: 'Website contact form' } })).toBe(false);
  });

  it('uses the form name parts, else splits the full name and drops a title', () => {
    expect(splitName('Mr Piet Skiet', { firstName: 'Piet', surname: 'Skiet' })).toEqual({ name: 'Piet', surname: 'Skiet' });
    expect(splitName('Mrs Anna Marie van Wyk', {})).toEqual({ name: 'Anna Marie van', surname: 'Wyk' });
    expect(splitName('Thabo', {})).toEqual({ name: 'Thabo', surname: '-' });
  });

  it('sends a vehicle stock enquiry exactly as DealerTrade documents it and records the result', async () => {
    const { service, update } = setup(vehicleEnquiry);
    const fetchMock = reply(200, { success: true, lead_id: 99 });
    const result = await service.send('e1');
    expect(fetchMock).toHaveBeenCalledWith(DEALERTRADE_LEAD_URL, expect.objectContaining({ method: 'POST', headers: expect.objectContaining({ Authorization: 'Bearer 8|test', 'Content-Type': 'application/json', Accept: 'application/json' }) }));
    expect(JSON.parse(fetchMock.mock.calls[0][1]!.body as string)).toEqual({
      apk_name: 'CHANGECARS', apk_source: 'vehicle_display', apk_lead_type: 'VEHICLE_STOCK_ENQUIRY',
      name: 'Piet', surname: 'Skiet', phone: '0822569987', email: 'me@gmail.com', customer_token: 'CUS-ABC123DEF456', reference: 'ENQ-1', vehicle_id: 1582806, message: 'Hi am interested in this car',
    });
    expect(result).toEqual(expect.objectContaining({ status: 'SENT', httpStatus: 200, response: { success: true, lead_id: 99 } }));
    expect(update.mock.calls[0][0].data.details).toEqual(expect.objectContaining({ firstName: 'Piet', dealertrade: expect.objectContaining({ status: 'SENT' }) }));
  });

  it('sends a contact-the-dealer lead with the dealer ID', async () => {
    const { service } = setup(dealerEnquiry);
    const fetchMock = reply(201, { success: true });
    await service.send('e2');
    expect(JSON.parse(fetchMock.mock.calls[0][1]!.body as string)).toEqual({
      apk_name: 'CHANGECARS', apk_source: 'dealer_display', apk_lead_type: 'CONTACT_DEALER',
      name: 'Piet', surname: 'Skiet', phone: '0822569987', email: 'me@gmail.com', customer_token: 'CUS-ABC123DEF456', reference: 'ENQ-1', dealer_id: 108, message: 'Hi, please contact me',
    });
  });

  it('labels test drive requests and uses the configured channel name', async () => {
    process.env.DEALERTRADE_LEAD_APK_NAME = 'CHANGECARSAPP';
    const { service } = setup({ ...vehicleEnquiry, type: EnquiryType.TEST_DRIVE, message: null });
    const fetchMock = reply(200, {});
    await service.send('e1');
    expect(JSON.parse(fetchMock.mock.calls[0][1]!.body as string)).toEqual(expect.objectContaining({ apk_name: 'CHANGECARSAPP', message: 'Test drive request: Hi, I am interested in this car' }));
  });

  it('retries when DealerTrade is down, but records a rejection without retrying', async () => {
    reply(503, { message: 'down' });
    await expect(setup(vehicleEnquiry).service.send('e1')).rejects.toThrow('HTTP 503');
    jest.restoreAllMocks();
    reply(422, { message: 'The vehicle id field is invalid.' });
    const { service, update } = setup(vehicleEnquiry);
    expect(await service.send('e1')).toEqual(expect.objectContaining({ status: 'FAILED', httpStatus: 422 }));
    expect(update).toHaveBeenCalled();
  });

  it('never sends twice, and records why nothing was sent when forwarding is off', async () => {
    const fetchMock = jest.spyOn(global, 'fetch');
    expect(await setup({ ...vehicleEnquiry, details: { dealertrade: { status: 'SENT', at: 'x' } } }).service.send('e1')).toEqual({ status: 'SENT', at: 'x' });
    process.env.DEALERTRADE_LEADS_ENABLED = 'false';
    expect(await setup(vehicleEnquiry).service.send('e1')).toEqual(expect.objectContaining({ status: 'SKIPPED', reason: 'DealerTrade lead forwarding is turned off' }));
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

describe('customer token', () => {
  it('is the same for the same customer, whatever the case or spaces, and different for another email', () => {
    const token = customerTokenFor('Me@Gmail.com ');
    expect(token).toMatch(/^CUS-[0-9A-F]{12}$/);
    expect(customerTokenFor('me@gmail.com')).toBe(token);
    expect(customerTokenFor('someone@gmail.com')).not.toBe(token);
  });
});
