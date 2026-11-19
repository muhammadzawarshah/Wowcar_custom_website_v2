# Dealer ID API — App Developer Guide

Base URL: `https://changecarapi.wowcar.co.th/api/v1`

The dealer ID query support is merged into `main`. The server must run that version before these query examples are available.

## 1. Select a dealer

Pass `dealerId` on every public API request to get only that dealer's data. `dealer_id` is also supported. Use only one selector per request.

```text
GET /vehicles?dealerId=3490
GET /vehicles?dealer_id=3490
```

For several dealers, use comma-separated IDs (maximum 20 unique approved dealer IDs):

```text
GET /vehicles?dealerId=3490,3491
```

Without a dealer selector, the normal marketplace API returns data across dealers.

## 2. Vehicle list and detail

```text
GET /vehicles?dealerId=3490&page=1&pageSize=20&sort=recent
GET /vehicles?dealerId=3490&make=toyota&maxPrice=500000
GET /vehicles/{vehicleIdOrSlug}?dealerId=3490
GET /vehicles/{vehicleId}/similar?dealerId=3490
GET /vehicles/{vehicleId}/dealer-vehicles?dealerId=3490
GET /vehicles/specials?dealerId=3490
GET /vehicles/hot-sellers?dealerId=3490
```

Replace placeholders with actual IDs or slugs returned by the list API. A dealer ID selects the dealership; a vehicle ID or slug selects a specific vehicle. Detail returns `404` if that vehicle belongs to another dealer or is unavailable under public detail rules.

Existing pagination, sorting and search filters still apply. Use `meta.total` for the matching list count.

## 3. Facets, filters and counts

| Purpose | Request |
| --- | --- |
| Facets with option counts | `GET /vehicles/facets?dealerId=3490` |
| Facets for selected search | `GET /vehicles/facets?dealerId=3490&make=toyota` |
| Complete dealer filter data | `GET /vehicles/filters/all?dealerId=3490` |
| Makes | `GET /vehicles/filters/makes?dealerId=3490` |
| Models | `GET /vehicles/filters/models?dealerId=3490&make=toyota` |
| Variants | `GET /vehicles/filters/variants?dealerId=3490&make=toyota` |
| Colours | `GET /vehicles/filters/colours?dealerId=3490` |
| Transmissions | `GET /vehicles/filters/transmissions?dealerId=3490` |
| Fuel types | `GET /vehicles/filters/fuel-types?dealerId=3490` |
| Drives | `GET /vehicles/filters/drives?dealerId=3490` |
| Search count | `GET /vehicles/count?dealerId=3490&make=toyota` |

Counts come from the selected dealers' matching public stock. Some standard filter lists retain zero-count options. `/filters/all` provides the complete scoped snapshot; use facets or individual filters for dependent counts with active search criteria.

POST count also works. Keep the dealer selector in the URL and search criteria in the JSON body:

```http
POST /api/v1/vehicles/count?dealerId=3490
Content-Type: application/json

{"make":"toyota","maxPrice":500000}
```

Use `total` from the count response. Global DealerTrade source totals are hidden in a dealer scope and may be `null`.

## 4. Dealer's own profile and catalogue

```text
GET /dealers?dealerId=3490
GET /dealers/{dealerSlug}?dealerId=3490
GET /dealers/map?dealerId=3490
GET /dealers/makes?dealerId=3490
GET /dealers/groups?dealerId=3490
GET /catalogue/makes?dealerId=3490
GET /catalogue/makes/{make}/models?dealerId=3490
```

`/dealers?dealerId=3490` is a directory list restricted to the selected dealer. For the full public dealer profile, use its slug from that response in `/dealers/{dealerSlug}?dealerId=3490`.

## 5. Group One stays supported

The existing scoped path format continues to work:

```text
/api/v1/scope/3490,3491,3493,3496/vehicles
/api/v1/scope/3490,3491,3493,3496/vehicles/{vehicleIdOrSlug}
/api/v1/scope/3490,3491,3493,3496/vehicles/facets
```

The equivalent query format is:

```text
/api/v1/vehicles?dealerId=3490,3491,3493,3496
```

Do not combine a scope path with a dealer query selector. Group One's existing app context remains applied for its configured dealer set. Dealer selection alone does not replace authentication on protected endpoints.

## 6. Offline filter snapshot

```text
GET /vehicle-filters/manifest?dealerId=3490
```

Download the returned `snapshot_url` as supplied. It includes the dealer scope. Follow the existing revision and SHA-256 flow described in [Dealer scope API](dealer-scope-app-api.md).

## 7. Errors

| HTTP status | Meaning |
| --- | --- |
| `400` | Empty or invalid IDs, too many IDs, repeated selectors, or a query selector combined with a scope path |
| `404` | Unknown/unapproved dealer, unavailable vehicle/profile in the selected scope, or unsupported scoped route |

Staff, admin and dealer portal routes do not support dealer query scopes. Use their existing authenticated APIs.

## 8. Frontend example

```js
const API_BASE = 'https://changecarapi.wowcar.co.th/api/v1';

async function dealerGet(path, dealerId, filters = {}) {
  const url = new URL(`${API_BASE}/${path}`);
  for (const [key, value] of Object.entries(filters)) {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value));
    }
  }
  url.searchParams.set('dealerId', String(dealerId));
  const response = await fetch(url);
  if (!response.ok) throw new Error(`API request failed: ${response.status}`);
  return response.json();
}

const cars = await dealerGet('vehicles', '3490', { page: 1, pageSize: 20 });
const facets = await dealerGet('vehicles/facets', '3490', { make: 'toyota' });
// Use an actual vehicle ID returned by the list:
const detail = await dealerGet(`vehicles/${vehicleId}`, '3490');
```

When switching dealers, refresh the vehicle list, facets, counts and profile with the new dealer ID. Include dealer IDs in any app-side cache keys.
