# ChangeCars App Integration Guide: Featured, Blogs, Specials & Testimonials APIs

Complete backend API reference for mobile/frontend developers integrating the **Featured**, **Blogs / Articles**, **Specials / Promotions**, and **Testimonials** sections with the ChangeCars backend.

---

## Base Configuration

| Item | Value |
|---|---|
| **Production Base URL** | `https://changecarapi.wowcar.co.th/api/v1` |
| **Local Base URL** | `http://localhost:4000/api/v1` |
| **Authentication** | **Not required** — all endpoints in this guide are public read-only `GET` endpoints. |
| **Media / Image URLs** | Values may be full `https://...` URLs or site-relative paths (e.g. `/media/...`, `/img/...`, `/images/...`). Prefix relative paths with your configured web/API host when loading in a mobile app. |
| **Vehicle Fallback Image** | `/img/vehicle-fallback.jpg` (when a vehicle has no image) |
| **Dealer Fallback Image** | `/img/dealer-fallback.jpg` (when a dealer logo is `null` or fails to load) |

---

## Quick Endpoint Index

| Section | Method & Endpoint | Purpose |
|---|---|---|
| **Featured Vehicles (App)** | `GET /vehicles?featured=true` | Paginated featured vehicles with full filters & sorting |
| **Featured Vehicles (Carousel)** | `GET /web/cars/featured?limit=6` | Shuffled featured cars list (quick home carousel) |
| **Hot Sellers** | `GET /vehicles/hot-sellers` | Popular / high-demand vehicles |
| **Featured Dealers** | `GET /content/featured-dealers` | Highlighted dealerships for home slider |
| **Featured Dealer Detail** | `GET /content/featured-dealers/:slug` | Spotlight dealer info + linked `dealer.slug` / `dealerId` |
| **Blogs / Articles List** | `GET /content/articles` | Paginated news, reviews, advice & guides |
| **Blog / Article Detail** | `GET /content/articles/:slug` | Full article with structured JSON `body` blocks |
| **Blog Categories** | `GET /content/article-categories` | All article categories (`slug`, `name`) |
| **Blogs (Web Adapter)** | `GET /web/articles`, `/web/articles/featured`, `/web/articles/latest`, `/web/articles/:slug` | Simplified block shape used by the Next.js site |
| **Videos & Podcasts** | `GET /content/media`, `GET /content/media/:slug` | Published video reviews & podcasts |
| **Specials Vehicles** | `GET /vehicles/specials` | Paginated vehicles marked `isSpecial: true` |
| **Promotions / Campaigns** | `GET /promotions` | Active seasonal/dealer campaigns & vehicle counts |
| **Promotion Detail + Cars** | `GET /promotions/:slug` | Campaign metadata + paginated vehicles in that campaign |
| **Ad Banners** | `GET /content/ad-banners` | Active promotional banners ordered by `placement` |
| **Testimonials** | `GET /content/testimonials` | Active customer testimonials & star ratings (`1–5`) |

---

## 1. Featured Section

The Featured section covers **Featured Vehicles**, **Hot Sellers**, and **Featured Dealers**.

### 1.1 Get Featured Vehicles (Recommended for Mobile App)

Returns paginated featured listings (`isFeatured = true`) with full search filters, sorting, monthly finance estimate, and full image gallery.

```http
GET /api/v1/vehicles?featured=true&page=1&pageSize=20&sort=recent
```

> Equivalent shorthand: `GET /api/v1/vehicles?collection=featured`

#### Query Parameters

| Param | Type | Required | Default | Description |
|---|---|---|---|---|
| `featured` | boolean (`true`/`1`) | Yes | — | Set to `true` (or pass `collection=featured`) |
| `page` | integer | No | `1` | Page number (`1–500`) |
| `pageSize` | integer | No | `20` | Items per page (`1–50`) |
| `sort` | string | No | `recent` | `recent`, `oldest`, `price-asc`, `price-desc`, `mileage-asc`, `mileage-desc`, `year-desc`, `year-asc`, `popular`, `nearest` |
| `make` | string | No | — | Comma-separated make slugs (e.g. `bmw,toyota`) |
| `province` | string | No | — | Comma-separated province names (e.g. `Gauteng,Western Cape`) |
| `minPrice` / `maxPrice` | integer | No | — | Price range filter (whole ZAR) |
| `availableOnly` | boolean | No | `false` | `true` hides `RESERVED` listings |

#### Example Request

```bash
curl "https://changecarapi.wowcar.co.th/api/v1/vehicles?featured=true&page=1&pageSize=10"
```

#### Response `200 OK`

```json
{
  "data": [
    {
      "id": "00ae81ea-5064-5746-a0e3-eebf967df818",
      "slug": "2023-isuzu-d-max-1-9-ddi-hr-ls-a-t-e-cab-1532745",
      "title": "2023 ISUZU D-MAX 1.9 Ddi HR LS A/T E-CAB",
      "condition": "USED",
      "conditionLabel": "Used",
      "status": "PUBLISHED",
      "availability": "AVAILABLE",
      "year": 2023,
      "mileage": 79000,
      "price": 429900,
      "specialPrice": null,
      "effectivePrice": 429900,
      "monthlyPrice": 8517,
      "formattedMonthlyPrice": "R 8 517 pm",
      "discount": null,
      "isSpecial": false,
      "isFeatured": true,
      "transmission": "AUTOMATIC",
      "transmissionLabel": "Automatic",
      "fuelType": "DIESEL",
      "fuelTypeLabel": "Diesel",
      "drivetrain": "FOUR_X_TWO",
      "colour": "WHITE",
      "colourId": 15,
      "engineCapacityCc": 1898,
      "powerKw": 110,
      "cylinders": 4,
      "seats": 2,
      "doors": 2,
      "province": "Free State",
      "city": "Bethlehem",
      "primaryImageUrl": "/media/fbook/1532745-1.jpg",
      "imageCount": 1,
      "viewCount": 15,
      "publishedAt": "2026-10-08T00:00:00.000Z",
      "reservedUntil": null,
      "make": { "id": "...", "name": "Isuzu", "slug": "isuzu" },
      "model": { "id": "...", "name": "D-max", "slug": "d-max" },
      "variant": null,
      "dealer": {
        "id": "3265801f-5246-5121-ad67-9666e4a3391d",
        "name": "Morgan Motor Group Bethlehem",
        "slug": "morgan-motor-group-bethlehem",
        "logoUrl": "https://.../logo.png",
        "rating": 5,
        "plan": "GOLD",
        "whatsappNumber": "27583035648"
      },
      "branch": { "id": "...", "name": "Bethlehem", "city": "Bethlehem", "province": "Free State" },
      "categories": [{ "id": "...", "slug": "single-cabs", "name": "Single Cab Bakkie" }],
      "promotion": null,
      "images": [
        {
          "id": "...",
          "url": "/media/fbook/1532745-1.jpg",
          "thumbnailUrl": "/media/fbook/1532745-1.jpg",
          "mediumUrl": "/media/fbook/1532745-1.jpg",
          "largeUrl": "/media/fbook/1532745-1.jpg",
          "width": null,
          "height": null,
          "altText": null,
          "isPrimary": true
        }
      ]
    }
  ],
  "meta": {
    "page": 1,
    "pageSize": 10,
    "total": 142,
    "pageCount": 15
  }
}
```

---

### 1.2 Get Featured Cars (Web Carousel / Shuffled)

Returns a lightweight array of featured cars shuffled on every request (for home-screen carousels).

```http
GET /api/v1/web/cars/featured?limit=6
```

- `limit`: optional integer (`1–48`, default `6`).
- Cached alternative with default `limit=12`: `GET /api/v1/web/cars/premium?limit=12`
- Response is a JSON array (`WebCar[]`) containing `id` (32-char hex), `title`, `make`, `model`, `year`, `price`, `monthlyPrice`, `formattedMonthlyPrice`, `bodyType`, `fuel`, `transmission`, `drive`, `colour`, `engine`, `mileage`, `image`, `gallery`, `photoCount`, `dealer`, `location`, `province`, `featured`, `isSpecial`, `listedAt`.

---

### 1.3 Get Hot Sellers

Returns popular, high-demand vehicles sorted by `popularityScore` (enquiries & favourites).

```http
GET /api/v1/vehicles/hot-sellers?page=1&pageSize=20
```

- Accepts all `SearchVehiclesQueryDto` filter params (`make`, `province`, `minPrice`, `maxPrice`, etc.).
- Returns the same `{ data: [...], meta: {...} }` shape as `GET /vehicles`.

---

### 1.4 Get Featured Dealers (Home Slider)

Returns active featured dealers highlighted on the home page, ordered by `sortOrder ASC, createdAt ASC`.

```http
GET /api/v1/content/featured-dealers
```

```bash
curl "https://changecarapi.wowcar.co.th/api/v1/content/featured-dealers"
```

#### Response `200 OK`

```json
[
  {
    "id": "9f1c2e34-1122-4a5b-8c9d-0123456789ab",
    "name": "Group 1 Cars",
    "slug": "group-1-cars",
    "logoUrl": "https://www.changecars.co.za/images/200/dealer_categories/gpi-lg.png",
    "description": "Quality approved new and used vehicles across Gauteng and Western Cape.",
    "about": "Group 1 Cars offers nationwide delivery and verified multi-point inspections.\nSpeak to our sales team today.",
    "dealerId": "3490",
    "sortOrder": 0,
    "isActive": true,
    "createdAt": "2026-10-08T10:00:00.000Z",
    "updatedAt": "2026-10-15T12:30:00.000Z"
  }
]
```

#### Response Fields

| Field | Type | Nullable | Description |
|---|---|---|---|
| `id` | string (UUID) | No | Unique featured dealer ID |
| `name` | string | No | Dealership display name |
| `slug` | string | No | URL slug (`/featured-dealer/{slug}`) |
| `logoUrl` | string | Yes | Logo image URL or path (use dealer fallback if `null`) |
| `description` | string | Yes | Short card summary (up to 500 chars) |
| `about` | string | Yes | Long page copy (paragraphs separated by `\n`) |
| `dealerId` | string | Yes | Linked marketplace dealer ID (if linked to live stock) |
| `sortOrder` | integer | No | Display order (`0` first) |
| `isActive` | boolean | No | Always `true` on public endpoint |

---

### 1.5 Get Single Featured Dealer Detail

```http
GET /api/v1/content/featured-dealers/:slug
```

```bash
curl "https://changecarapi.wowcar.co.th/api/v1/content/featured-dealers/group-1-cars"
```

#### Response `200 OK`

Same fields as above, plus the linked `dealer` object when `dealerId` is set:

```json
{
  "id": "9f1c2e34-1122-4a5b-8c9d-0123456789ab",
  "name": "Group 1 Cars",
  "slug": "group-1-cars",
  "logoUrl": "https://.../logo.png",
  "description": "Quality approved new and used vehicles...",
  "about": "Paragraph 1...\nParagraph 2...",
  "dealerId": "3490",
  "sortOrder": 0,
  "isActive": true,
  "createdAt": "2026-10-08T10:00:00.000Z",
  "updatedAt": "2026-10-15T12:30:00.000Z",
  "dealer": {
    "id": "3490",
    "name": "Group 1 Nissan Stellenbosch",
    "slug": "group-1-nissan-stellenbosch"
  }
}
```

> **Tip for loading this dealer's stock in the app:**
> If `dealer.slug` is present, call `GET /api/v1/vehicles?dealer={dealer.slug}`. If `dealerId` is present, you can also call `GET /api/v1/dealer-app/dealers/{dealerId}`.

---

## 2. Blogs / Articles & Media Section

ChangeCars exposes two public interfaces for blogs/news:
1. **Standard Content API (`/api/v1/content/articles`)** — recommended for mobile apps (supports `type`, `tag`, `category`, search `q`, `pageSize` up to `50`, and full article metadata).
2. **Web Adapter API (`/api/v1/web/articles`)** — simplified response matching the website (`featured`, `latest`, `search`).

### 2.1 List Articles / Blogs (Paginated)

Returns published articles (`status = PUBLISHED` and `publishedAt <= now`), ordered by `featured DESC, publishedAt DESC`.  
Note: The `body` field is omitted from list responses to keep payloads fast; fetch `GET /content/articles/:slug` for full content.

```http
GET /api/v1/content/articles?page=1&pageSize=20
```

#### Query Parameters

| Param | Type | Required | Default | Description |
|---|---|---|---|---|
| `page` | integer | No | `1` | Page number (`>= 1`) |
| `pageSize` | integer | No | `20` | Items per page (`1–50`) |
| `q` | string | No | — | Case-insensitive search in `title` and `excerpt` |
| `category` | string | No | — | Filter by category `slug` (from `/content/article-categories`) |
| `type` | enum | No | — | `NEWS`, `REVIEW`, `ADVICE`, `GUIDE`, `ARTICLE` |
| `tag` | string | No | — | Filter articles containing a specific tag |

```bash
curl "https://changecarapi.wowcar.co.th/api/v1/content/articles?type=REVIEW&page=1&pageSize=10"
```

#### Response `200 OK`

```json
{
  "data": [
    {
      "id": "b7c4a120-2311-4f90-a91c-88221100ffaa",
      "slug": "2026-toyota-hilux-buying-guide",
      "title": "2026 Toyota Hilux Buying Guide",
      "excerpt": "Everything South African buyers need to check before buying a used Hilux.",
      "type": "GUIDE",
      "status": "PUBLISHED",
      "categoryId": "11223344-5566-7788-99aa-bbccddeeff00",
      "coverImageUrl": "/images/blogs/260928/hilux-guide.jpg",
      "authorId": "aa11bb22-cc33-dd44-ee55-ff6677889900",
      "featured": true,
      "tags": ["toyota", "hilux", "bakkie", "buying-guide"],
      "metaTitle": "2026 Toyota Hilux Buying Guide | CHANGECARS",
      "metaDescription": "Everything South African buyers need to know.",
      "publishedAt": "2026-10-12T06:00:00.000Z",
      "createdAt": "2026-10-11T14:20:00.000Z",
      "updatedAt": "2026-10-12T06:00:00.000Z",
      "category": {
        "slug": "buying-advice",
        "name": "Buying Advice"
      }
    }
  ],
  "meta": {
    "page": 1,
    "pageSize": 10,
    "total": 48,
    "pageCount": 5
  }
}
```

---

### 2.2 Get Single Article / Blog Detail

```http
GET /api/v1/content/articles/:slug
```

```bash
curl "https://changecarapi.wowcar.co.th/api/v1/content/articles/2026-toyota-hilux-buying-guide"
```

#### Response `200 OK`

Returns all fields from the list response plus `body` (structured content blocks) and `author`:

```json
{
  "id": "b7c4a120-2311-4f90-a91c-88221100ffaa",
  "slug": "2026-toyota-hilux-buying-guide",
  "title": "2026 Toyota Hilux Buying Guide",
  "excerpt": "Everything South African buyers need to check before buying a used Hilux.",
  "body": [
    { "type": "heading", "text": "Why the Hilux Holds Its Value", "level": 2 },
    { "type": "paragraph", "text": "South Africa's best-selling bakkie combines durability with strong dealer support." },
    { "type": "image", "src": "/images/blogs/content/hilux-interior.jpg", "alt": "Hilux cabin" },
    { "type": "list", "items": ["Check full service history", "Inspect underbody for off-road wear"] },
    { "type": "quote", "text": "Always request a diagnostic report before signing." },
    { "type": "link", "text": "Browse Hilux stock", "href": "/used-cars?make=toyota&model=toyota:hilux" },
    { "type": "video", "url": "https://www.youtube.com/watch?v=example" }
  ],
  "type": "GUIDE",
  "status": "PUBLISHED",
  "categoryId": "11223344-5566-7788-99aa-bbccddeeff00",
  "coverImageUrl": "/images/blogs/260928/hilux-guide.jpg",
  "authorId": "aa11bb22-cc33-dd44-ee55-ff6677889900",
  "featured": true,
  "tags": ["toyota", "hilux", "bakkie"],
  "metaTitle": "2026 Toyota Hilux Buying Guide | CHANGECARS",
  "metaDescription": "Everything South African buyers need to know.",
  "publishedAt": "2026-10-12T06:00:00.000Z",
  "createdAt": "2026-10-11T14:20:00.000Z",
  "updatedAt": "2026-10-12T06:00:00.000Z",
  "category": {
    "slug": "buying-advice",
    "name": "Buying Advice"
  },
  "author": {
    "firstName": "ChangeCars",
    "lastName": "Editorial"
  }
}
```

#### Structured `body` Block Schema

Articles never store raw HTML (for XSS safety). Render each item in `body` based on `block.type`:

| `type` | Fields | Notes |
|---|---|---|
| `paragraph` | `text: string` | Normal body paragraph |
| `heading` | `text: string`, `level?: 2 \| 3 \| 4` | Section heading |
| `image` | `src: string`, `alt?: string` | Inline image (`https://` or `/...`) |
| `list` | `items: string[]` | Bullet list |
| `quote` | `text: string` | Highlighted pull quote |
| `link` | `text: string`, `href: string` | Callout / inline link |
| `video` | `url: string` | HTTPS video link (YouTube, etc.) |

---

### 2.3 List Article Categories

```http
GET /api/v1/content/article-categories
```

```json
[
  {
    "id": "11223344-5566-7788-99aa-bbccddeeff00",
    "name": "Buying Advice",
    "slug": "buying-advice",
    "createdAt": "2026-10-06T17:30:00.000Z"
  },
  {
    "id": "22334455-6677-8899-aabb-ccddeeff0011",
    "name": "Car Reviews",
    "slug": "car-reviews",
    "createdAt": "2026-10-06T17:30:00.000Z"
  }
]
```

---

### 2.4 Alternative: Website Adapter Blog Endpoints

If you prefer the simplified web format (`slug`, `title`, `publishedAt: "YYYY-MM-DD"`, `category: string`, `image: string`, `excerpt`, `featured`, `body`):

| Endpoint | Response |
|---|---|
| `GET /api/v1/web/articles?q=&category=&page=1` | `{ "articles": [...], "total": 48, "page": 1, "pageCount": 2 }` (`24` per page) |
| `GET /api/v1/web/articles/featured` | `{ "article": { ... } \| null }` |
| `GET /api/v1/web/articles/latest?limit=4` | `WebArticle[]` (latest non-featured articles, max `24`) |
| `GET /api/v1/web/articles/:slug` | `WebArticle` |
| `GET /api/v1/web/article-categories` | `[{ "slug": "buying-advice", "name": "Buying Advice" }]` |

---

### 2.5 Videos & Podcasts (Companion Media API)

```http
GET /api/v1/content/media?type=VIDEO&page=1&pageSize=20
GET /api/v1/content/media/:slug
```

- `type`: optional `VIDEO` or `PODCAST`.
- Returns `{ data: MediaItem[], meta: {...} }` with `id`, `type`, `title`, `slug`, `description`, `url`, `embedUrl`, `thumbnailUrl`, `durationSec`, `publishedAt`.

---

## 3. Specials & Promotions Section

The Specials section includes **Vehicles On Special** (`isSpecial = true`), **Promotional Campaigns**, and **Ad Banners**.

### 3.1 Get Vehicles On Special

Returns paginated vehicles flagged as on special (`isSpecial = true`). Supports all search filters and sorting.

```http
GET /api/v1/vehicles/specials?page=1&pageSize=20&sort=price-asc
```

> Equivalent filters: `GET /api/v1/vehicles?collection=specials` or `GET /api/v1/vehicles?onSpecial=true`

```bash
curl "https://changecarapi.wowcar.co.th/api/v1/vehicles/specials?page=1&pageSize=10"
```

#### Response `200 OK`

Returns `{ data: Vehicle[], meta: { page, pageSize, total, pageCount } }` using the same vehicle schema as section 1.1, with special pricing fields populated:

```json
{
  "price": 549900,
  "specialPrice": 499900,
  "effectivePrice": 499900,
  "monthlyPrice": 9904,
  "formattedMonthlyPrice": "R 9 904 pm",
  "discount": 50000,
  "isSpecial": true,
  "promotion": {
    "id": "e1234567-89ab-4cde-8012-3456789abcde",
    "title": "Spring Bakkie Clearance",
    "slug": "spring-bakkie-clearance",
    "endsAt": "2026-11-30T21:59:59.000Z"
  }
}
```

#### Key Pricing Fields for Specials UI

| Field | Type | Description |
|---|---|---|
| `price` | integer | Original asking price (strike-through price when `discount > 0`) |
| `specialPrice` | integer \| null | Promotional price when set |
| `effectivePrice` | integer | Active price (`specialPrice` when on special and set, else `price`) |
| `discount` | integer \| null | Savings in ZAR (`price - specialPrice`) when `specialPrice < price`, else `null` |
| `monthlyPrice` | integer | Calculated installment based on `effectivePrice` (72 months, 12.5% rate) |
| `formattedMonthlyPrice` | string | Pre-formatted display string (e.g. `"R 9 904 pm"`) |
| `promotion` | object \| null | Linked campaign summary (`id`, `title`, `slug`, `endsAt`) |

---

### 3.2 List Active Promotions / Campaigns

Returns all currently active campaigns (`isActive = true`, `startsAt <= now`, and `endsAt` is `null` or `> now`), ordered by `startsAt DESC`.

```http
GET /api/v1/promotions
```

```bash
curl "https://changecarapi.wowcar.co.th/api/v1/promotions"
```

#### Response `200 OK`

```json
[
  {
    "id": "e1234567-89ab-4cde-8012-3456789abcde",
    "title": "Spring Bakkie Clearance",
    "slug": "spring-bakkie-clearance",
    "description": "Save up to R 50,000 on selected demo and used bakkies this month.",
    "bannerUrl": "/images/specials/spring-bakkie-clearance.jpg",
    "discountType": "AMOUNT",
    "discountValue": 50000,
    "dealerId": null,
    "startsAt": "2026-10-01T00:00:00.000Z",
    "endsAt": "2026-11-30T21:59:59.000Z",
    "isActive": true,
    "createdAt": "2026-09-29T08:00:00.000Z",
    "updatedAt": "2026-10-01T00:00:00.000Z",
    "dealer": null,
    "_count": {
      "vehicles": 18
    }
  }
]
```

#### Response Fields

| Field | Type | Nullable | Description |
|---|---|---|---|
| `id` | string (UUID) | No | Promotion ID |
| `title` | string | No | Campaign title |
| `slug` | string | No | Campaign slug for `/promotions/:slug` |
| `description` | string | Yes | Campaign description |
| `bannerUrl` | string | Yes | Banner image URL or site path |
| `discountType` | string | No | `"PERCENT"`, `"AMOUNT"`, or `"NONE"` |
| `discountValue` | integer | Yes | Discount percentage or rand amount |
| `dealerId` | string | Yes | Set when campaign is for a single dealer |
| `dealer` | object | Yes | `{ id, name, slug }` if `dealerId` is set |
| `startsAt` | ISO string | No | Campaign start timestamp |
| `endsAt` | ISO string | Yes | Campaign end timestamp (`null` = ongoing) |
| `_count.vehicles` | integer | No | Count of currently published/reserved vehicles in this campaign |

---

### 3.3 Get Promotion Detail & Its Vehicles

Fetches one active promotion by `slug` along with paginated vehicles attached to that promotion.

```http
GET /api/v1/promotions/:slug?page=1&pageSize=20
```

- `page`: optional integer (default `1`)
- `pageSize`: optional integer (`1–50`, default `20`)

```bash
curl "https://changecarapi.wowcar.co.th/api/v1/promotions/spring-bakkie-clearance?page=1&pageSize=20"
```

#### Response `200 OK`

```json
{
  "promotion": {
    "id": "e1234567-89ab-4cde-8012-3456789abcde",
    "title": "Spring Bakkie Clearance",
    "slug": "spring-bakkie-clearance",
    "description": "Save up to R 50,000 on selected demo and used bakkies this month.",
    "bannerUrl": "/images/specials/spring-bakkie-clearance.jpg",
    "discountType": "AMOUNT",
    "discountValue": 50000,
    "dealerId": null,
    "startsAt": "2026-10-01T00:00:00.000Z",
    "endsAt": "2026-11-30T21:59:59.000Z",
    "isActive": true,
    "createdAt": "2026-09-29T08:00:00.000Z",
    "updatedAt": "2026-10-01T00:00:00.000Z"
  },
  "vehicles": {
    "data": [
      {
        "id": "...",
        "title": "2024 FORD RANGER 2.0 SiT XL A/T D/C",
        "price": 549900,
        "specialPrice": 499900,
        "effectivePrice": 499900,
        "monthlyPrice": 9904,
        "formattedMonthlyPrice": "R 9 904 pm",
        "discount": 50000,
        "isSpecial": true,
        "...": "..."
      }
    ],
    "meta": {
      "page": 1,
      "pageSize": 20,
      "total": 18,
      "pageCount": 1
    }
  }
}
```

---

### 3.4 Get Active Advert Banners (Optional Promo Banners)

Returns currently running advert banners ordered by `placement ASC, sortOrder ASC, createdAt ASC`.
Valid `placement` values: `HOME_HERO`, `HOME_DEALERS`, `HOME_BOTTOM`.

```http
GET /api/v1/content/ad-banners
```

```json
[
  {
    "id": "c4567890-1234-4abc-9def-0123456789ab",
    "title": "Standard Bank Vehicle Finance",
    "placement": "HOME_HERO",
    "imageUrl": "/images/banners/finance-promo.jpg",
    "linkUrl": "https://www.changecars.co.za/buying-finance",
    "altText": "Apply for pre-approved vehicle finance",
    "sortOrder": 0,
    "isActive": true,
    "startsAt": null,
    "endsAt": null,
    "createdAt": "2026-10-08T10:00:00.000Z",
    "updatedAt": "2026-10-08T10:00:00.000Z"
  }
]
```

---

## 4. Testimonials Section

### 4.1 Get Customer Testimonials

Returns active customer testimonials ordered by `sortOrder ASC, createdAt ASC`.

```http
GET /api/v1/content/testimonials
```

```bash
curl "https://changecarapi.wowcar.co.th/api/v1/content/testimonials"
```

#### Response `200 OK`

```json
[
  {
    "id": "d7890123-4567-4bcd-8ef0-123456789abc",
    "name": "Thabo Mokoena",
    "text": "Found my Toyota Fortuner in minutes and the dealer contacted me the same morning. Smooth experience from start to finish.",
    "photoUrl": "/images/testimonials/thabo.jpg",
    "rating": 5,
    "sortOrder": 0,
    "isActive": true,
    "createdAt": "2026-10-07T09:15:00.000Z",
    "updatedAt": "2026-10-07T09:15:00.000Z"
  }
]
```

#### Response Fields

| Field | Type | Nullable | Description |
|---|---|---|---|
| `id` | string (UUID) | No | Unique testimonial ID |
| `name` | string | No | Customer name |
| `text` | string | No | Testimonial quote/review body |
| `photoUrl` | string | Yes | Optional avatar image URL or path (render initials badge when `null`) |
| `rating` | integer | No | Star rating from `1` to `5` (default `5`) |
| `sortOrder` | integer | No | Display order (`0` first) |
| `isActive` | boolean | No | Always `true` on public endpoint |
| `createdAt` | ISO string | No | Creation timestamp |
| `updatedAt` | ISO string | No | Last update timestamp |

---

## 5. Error Format

All errors return a consistent JSON envelope:

```json
{
  "statusCode": 404,
  "code": "ARTICLE_NOT_FOUND",
  "message": "Article not found",
  "requestId": "2f243185-f4f2-4589-97dc-67de473b295b",
  "timestamp": "2026-11-10T13:20:00.000Z",
  "path": "/api/v1/content/articles/missing-slug"
}
```

| Status | Meaning |
|---|---|
| `400` | Invalid query parameter or validation failure (`VALIDATION_FAILED`) |
| `404` | Resource missing or unpublished/inactive (`ARTICLE_NOT_FOUND`, `PROMOTION_NOT_FOUND`, `FEATURED_DEALER_NOT_FOUND`) |
| `429` | Rate limit exceeded |

---

## 6. Mobile App Integration Tips

1. **Image URL Resolution:** Build a single helper `resolveMediaUrl(url)` in your app:
   - If `url == null` or empty → use vehicle/dealer fallback image.
   - If `url.startsWith("http://")` or `url.startsWith("https://")` → use directly.
   - If `url.startsWith("/")` → prefix with `https://changecars.co.za` (for `/img/...` & `/images/...`) or `https://changecarapi.wowcar.co.th` (for `/media/...`).
2. **Article Detail Rendering:** Always switch on `block.type` (`heading`, `paragraph`, `image`, `list`, `quote`, `link`, `video`) and treat an unknown `type` gracefully as plain text/ignore so future block types never crash the app.
3. **Specials Discount Badge:** Show a discount badge only when `discount != null && discount > 0` (comparing `price` strike-through vs `effectivePrice`).
4. **Pagination:** Use `meta.page < meta.pageCount` to control "Load more" / infinite scroll for `/vehicles?featured=true`, `/vehicles/specials`, `/content/articles`, and `/promotions/:slug`.
