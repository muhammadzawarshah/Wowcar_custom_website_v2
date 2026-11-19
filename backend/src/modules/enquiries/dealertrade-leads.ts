import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { EnquiryType, Prisma } from '../../generated/prisma/client';
import { dealerTradeToken } from '../../infrastructure/dealertrade/dealertrade-token';
import { PrismaService } from '../../infrastructure/database/prisma.service';
import { OutboxEvents } from '../../infrastructure/outbox/outbox.events';
import { OutboxService } from '../../infrastructure/outbox/outbox.service';
import { customerTokenFor } from './customer-token';

export const DEALERTRADE_LEAD_URL = 'https://dealertrade.co.za/api/apk/lead';
/** Marks a contact-the-dealer enquiry (no vehicle). */
export const CONTACT_DEALER = 'CONTACT_DEALER';
/** Enquiries about one listed car that DealerTrade receives as a stock enquiry. */
export const VEHICLE_LEAD_TYPES: EnquiryType[] = [EnquiryType.VEHICLE, EnquiryType.TEST_DRIVE, EnquiryType.FINANCE, EnquiryType.TRADE_IN];
/** DealerTrade vehicle and dealer IDs are numeric; dealers that registered on ChangeCars (UUIDs) are not in DealerTrade. */
const DEALERTRADE_ID = /^\d{1,10}$/;

export type DealerTradeLeadStatus = 'SENT' | 'FAILED' | 'SKIPPED';
export type DealerTradeLeadResult = { status: DealerTradeLeadStatus; at: string; reason?: string; httpStatus?: number; response?: unknown; leadType?: string };

/** Should this enquiry be forwarded? Checked when it is created (no extra queries). */
export function forwardsToDealerTrade(input: { type: EnquiryType; vehicleId?: string | null; dealerId?: string | null; details?: Record<string, unknown> | null }): boolean {
  if (input.vehicleId) return VEHICLE_LEAD_TYPES.includes(input.type) && DEALERTRADE_ID.test(input.vehicleId);
  return input.details?.kind === CONTACT_DEALER && !!input.dealerId && DEALERTRADE_ID.test(input.dealerId);
}

/** First name and surname: the form's own fields when it had them, else the full name split at the last space. */
export function splitName(name: string, details: Record<string, unknown>): { name: string; surname: string } {
  const first = typeof details.firstName === 'string' ? details.firstName.trim() : '';
  const last = typeof details.surname === 'string' ? details.surname.trim() : '';
  if (first && last) return { name: first, surname: last };
  const parts = name.trim().replace(/^(mr|mrs|miss|ms|dr|prof)\.?\s+/i, '').split(/\s+/);
  return parts.length > 1 ? { name: parts.slice(0, -1).join(' '), surname: parts[parts.length - 1] } : { name: parts[0] ?? name, surname: last || '-' };
}

/** Retry later (network, timeouts, DealerTrade busy or down); anything else is a final answer. */
class RetryableLeadError extends Error {}

/**
 * Sends ChangeCars vehicle enquiries and contact-the-dealer enquiries to DealerTrade's lead API, which passes them on to
 * the dealer's CRM (e.g. Elemental). The enquiry is always saved and shown to the dealer in ChangeCars first; this only
 * forwards it. The result is kept on the enquiry under details.dealertrade, so each enquiry is sent at most once.
 * DEALERTRADE_LEADS_ENABLED=true turns sending on; DEALERTRADE_LEAD_APK_NAME (default CHANGECARS) names the channel;
 * DEALERTRADE_LEAD_URL overrides the endpoint (for a DealerTrade test server).
 */
@Injectable()
export class DealerTradeLeads implements OnModuleInit {
  private readonly logger = new Logger(DealerTradeLeads.name);

  constructor(private readonly outbox: OutboxService, private readonly prisma: PrismaService) {}

  onModuleInit(): void {
    this.outbox.on(OutboxEvents.DealerTradeLeadRequested, 'enquiries.dealertrade-lead', async (event) => { await this.send(String(event.payload.enquiryId)); });
  }

  async send(enquiryId: string): Promise<DealerTradeLeadResult | null> {
    const enquiry = await this.prisma.enquiry.findUnique({ where: { id: enquiryId } });
    if (!enquiry) return null;
    const details = (enquiry.details ?? {}) as Record<string, unknown>;
    const previous = details.dealertrade as DealerTradeLeadResult | undefined;
    if (previous?.status === 'SENT') return previous;
    if (!forwardsToDealerTrade({ type: enquiry.type, vehicleId: enquiry.vehicleId, dealerId: enquiry.dealerId, details })) return this.save(enquiry.id, details, { status: 'SKIPPED', at: new Date().toISOString(), reason: 'Not a DealerTrade vehicle or dealer' });
    if (process.env.DEALERTRADE_LEADS_ENABLED !== 'true') return this.save(enquiry.id, details, { status: 'SKIPPED', at: new Date().toISOString(), reason: 'DealerTrade lead forwarding is turned off' });
    const token = dealerTradeToken();
    if (!token) return this.save(enquiry.id, details, { status: 'SKIPPED', at: new Date().toISOString(), reason: 'DEALERTRADE_TOKEN is not configured' });

    const person = splitName(enquiry.name, details);
    const common = {
      apk_name: process.env.DEALERTRADE_LEAD_APK_NAME?.trim() || 'CHANGECARS', ...person, phone: enquiry.phone ?? '', email: enquiry.email,
      // Who sent it (same customer = same token) and which ChangeCars enquiry it is, so both sides can match the lead.
      customer_token: enquiry.customerToken ?? customerTokenFor(enquiry.email), reference: enquiry.reference,
    };
    const body = enquiry.vehicleId
      ? { ...common, apk_source: 'vehicle_display', apk_lead_type: 'VEHICLE_STOCK_ENQUIRY', vehicle_id: Number(enquiry.vehicleId), message: this.message(enquiry.type, enquiry.message, 'Hi, I am interested in this car') }
      : { ...common, apk_source: 'dealer_display', apk_lead_type: CONTACT_DEALER, dealer_id: Number(enquiry.dealerId), message: enquiry.message?.trim() || 'Hi, please contact me' };

    let response: Response;
    try {
      response = await fetch(process.env.DEALERTRADE_LEAD_URL?.trim() || DEALERTRADE_LEAD_URL, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(20_000),
      });
    } catch (error) {
      throw new RetryableLeadError(`DealerTrade lead ${enquiry.reference} not sent: ${(error as Error).message}`);
    }
    const text = await response.text().catch(() => '');
    let parsed: unknown = text.slice(0, 1000);
    try { parsed = JSON.parse(text); } catch { /* keep the text */ }
    if (response.status === 429 || response.status === 408 || response.status >= 500) {
      throw new RetryableLeadError(`DealerTrade lead ${enquiry.reference} not accepted yet: HTTP ${response.status}`);
    }
    const result: DealerTradeLeadResult = { status: response.ok ? 'SENT' : 'FAILED', at: new Date().toISOString(), httpStatus: response.status, response: parsed, leadType: body.apk_lead_type };
    if (!response.ok) this.logger.warn(`DealerTrade rejected lead ${enquiry.reference}: HTTP ${response.status} ${text.slice(0, 300)}`);
    return this.save(enquiry.id, details, result);
  }

  /** Test drive, finance and trade-in requests say what they are, so the dealer sees the same intent in their CRM. */
  private message(type: EnquiryType, message: string | null, fallback: string) {
    const text = message?.trim() || fallback;
    const label = ({ TEST_DRIVE: 'Test drive request', FINANCE: 'Finance enquiry', TRADE_IN: 'Trade-in enquiry' } as Partial<Record<EnquiryType, string>>)[type];
    return label ? `${label}: ${text}` : text;
  }

  private async save(id: string, details: Record<string, unknown>, result: DealerTradeLeadResult) {
    await this.prisma.enquiry.update({ where: { id }, data: { details: { ...details, dealertrade: result } as Prisma.InputJsonValue } });
    return result;
  }
}
