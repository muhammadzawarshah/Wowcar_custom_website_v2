# Enquiries API: vehicle enquiry and contact the dealer

For the ChangeCars mobile app (and branded customer apps). Base URL: `https://changecarapi.wowcar.co.th/api/v1`
(a branded app uses `/api/v1/apps/<appId>` or sends `X-App-Id: <appId>`). No login is needed; if the customer is
logged in, send `Authorization: Bearer <accessToken>` and the enquiry also appears under "My enquiries".

Every enquiry is:

1. saved in ChangeCars and shown to the dealer in their dashboard (as a lead),
2. confirmed to the customer by email,
3. forwarded to the dealer's CRM through DealerTrade (`/api/apk/lead`) when the car or dealer comes from DealerTrade.

The app only calls ChangeCars. It never calls DealerTrade directly and never needs the DealerTrade token.

## 1. Vehicle enquiry: "Enquire about this vehicle" / "Message Dealer" on a car

`POST /enquiries/vehicle`

```json
{
  "vehicleId": "1582806",
  "title": "Mr",
  "firstName": "Piet",
  "surname": "Skiet",
  "email": "me@gmail.com",
  "phone": "0822569987",
  "hearAbout": "Google",
  "message": "I would like you to contact me with regards to the KIA SONET 1.5 CVT LS.",
  "consent": true
}
```

DealerTrade receives it as `apk_source: vehicle_display`, `apk_lead_type: VEHICLE_STOCK_ENQUIRY`, `vehicle_id: 1582806`,
plus `customer_token` and `reference` (see below).

## 2. Contact the dealer: "Message Dealer" on a dealer page (no car)

`POST /enquiries/dealer`

```json
{
  "dealerId": "108",
  "title": "Mr",
  "firstName": "Piet",
  "surname": "Skiet",
  "email": "me@gmail.com",
  "phone": "0822569987",
  "hearAbout": "Google",
  "message": "Hi, please contact me",
  "consent": true
}
```

DealerTrade receives it as `apk_source: dealer_display`, `apk_lead_type: CONTACT_DEALER`, `dealer_id: 108`,
plus `customer_token` and `reference`.

## Fields

| Field | Required | Notes |
|---|---|---|
| `vehicleId` / `dealerId` | yes | The `id` the API returns for the car or dealer. |
| `firstName`, `surname` | yes | Or send one `name` with the full name instead. |
| `title` | no | Mr, Mrs, Miss, Ms, Dr. |
| `email` | yes | |
| `phone` | yes | South African or international number. |
| `hearAbout` | no | Answer to "How did you hear about ChangeCars?". |
| `message` | no | Defaults to a standard message. |
| `consent` | yes | Must be `true` (the "I agree to be contacted about this enquiry" box). |

## Responses

`201 Created`

```json
{ "id": "01a1…", "reference": "ENQ-JWFENYKY", "customerToken": "CUS-9235CF640482", "type": "VEHICLE", "status": "NEW", "createdAt": "2026-11-12T08:15:55.765Z", "duplicate": false }
```

Show the `reference` to the customer. `customerToken` identifies the customer: the same email always gives the same
token (on the app, the website and branded apps, logged in or not), so every enquiry from one person shares it. It is
stored with the enquiry and sent to DealerTrade with the lead. Sending the same enquiry again within 10 minutes returns the first one with
`"duplicate": true` (no second lead).

| Status | Meaning |
|---|---|
| 400 `VALIDATION_FAILED` | A field is missing or invalid; `details` lists each problem. |
| 404 | The car no longer exists. |
| 400 `INVALID_DEALER` | The dealer no longer exists or is not active. |
| 409 `VEHICLE_NOT_AVAILABLE` | The car was sold or removed. |
| 429 | Too many forms in a minute (10 per minute). |

Forwarding to DealerTrade happens in the background a few seconds later and is retried automatically if DealerTrade is
busy, so the app never waits for it and a DealerTrade outage never loses an enquiry.
