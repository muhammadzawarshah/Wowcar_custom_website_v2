# Brand cars API

Shows a list of brands. When the user taps a brand, only that brand's cars are shown. These are existing public endpoints: no login or token needed.

Base URL: `https://<api-domain>/api/v1`

## 1. Brand list

```http
GET /vehicles/filters/makes
```

Returns every brand that has published cars, with how many cars each one has, most cars first.

```json
{
  "total": 39391,
  "options": [
    { "slug": "toyota", "name": "Toyota", "count": 5408 },
    { "slug": "volkswagen", "name": "Volkswagen", "count": 5106 },
    { "slug": "mercedes-benz", "name": "Mercedes-Benz", "count": 796 }
  ]
}
```

Show `name` to the user. Keep `slug`: it is the value you send in the next call.

## 2. Cars of the tapped brand

```http
GET /vehicles?make=toyota&page=1&pageSize=20
```

| Parameter | Required | Notes |
|---|---|---|
| `make` | yes | The brand's `slug` from the brand list, sent unchanged (`mercedes-benz`, not `mercedes benz`). |
| `page` | no | Starts at 1. |
| `pageSize` | no | 1–50. Values above 50 are rejected with `400`. |

```json
{
  "data": [
    { "id": "1583645", "title": "Toyota Hilux 2.4 Gd-6 Rb Raider A/T P/U E/Cab", "price": 499900, "primaryImageUrl": "https://…", "make": { "id": "…", "name": "Toyota", "slug": "toyota" }, "model": { "…": "…" }, "dealer": { "…": "…" } }
  ],
  "meta": { "page": 1, "pageSize": 20, "total": 5408, "pageCount": 271 }
}
```

- Every car in `data` belongs to the requested brand. No other brand is included.
- Load more with `page=2`, `page=3`, … until `page` equals `meta.pageCount`.
- A brand with no cars returns `"data": []` and `"total": 0`.
- Do **not** put the brand name in the search box (`q=Toyota`). Text search also matches titles and descriptions, so it returns extra cars (`q=bmw` gives 1,360 results, `make=bmw` gives exactly the 1,336 BMWs). Always use `make`.

## 3. Optional extra filters

These can be combined with `make`:

| Need | Example |
|---|---|
| One model of the brand | `/vehicles?make=toyota&model=toyota:corolla` |
| Several brands | `/vehicles?make=bmw,audi` |
| Fuel / gearbox | `/vehicles?make=toyota&fuelType=DIESEL&transmission=AUTOMATIC` |
| Province | `/vehicles?make=toyota&province=gauteng` |

Models for a brand come from `GET /vehicles/filters/models?make=toyota`.

## 4. Group1 or a single dealer's app

To show only one dealer group's brands and cars, put the dealer IDs in the path. The calls are otherwise the same:

```http
GET /scope/3490,3491,3493,3496/vehicles/filters/makes
GET /scope/3490,3491,3493,3496/vehicles?make=toyota&page=1&pageSize=20
```

The brand list then contains only brands those dealers stock, with their own counts. The car list contains only those dealers' cars of that brand.

## Checked

Verified against the local DealerTrade data on 2026-11-06:

| Request | Total | Brands in results |
|---|---|---|
| `make=toyota` | 5,408 | Toyota only |
| `make=bmw` | 1,336 | BMW only |
| `make=ford` | 3,873 | Ford only |
| `make=mercedes-benz` | 796 | Mercedes-Benz only |
| `make=notabrand` | 0 | — |
| Group1 scope, `make=toyota` | 7 | Toyota only, Group1 branches only |
