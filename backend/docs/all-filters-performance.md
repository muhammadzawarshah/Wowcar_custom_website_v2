# All-filters response cache

`GET /api/v1/vehicles/filters/all` keeps its existing complete JSON contract.
The API caches its gzip representation in Redis and keeps up to eight compressed
scope/version entries in process memory. Cache hits avoid decoding cached JSON,
public-ID/province presentation, serialization and compression on every request.
Clients that request identity encoding receive the same JSON, decompressed by
the server. Both representations support ETag revalidation and vary on
`Accept-Encoding`; authenticated requests remain private and non-cacheable.

Cache keys include the dealer scope and vehicle namespace version. Inventory
invalidation therefore cannot return an earlier version or another dealer's
data. Concurrent builds for one key share a promise. Ordinary 120-second TTL
refreshes return the previous same-version response while rebuilding in the
background. Namespace changes wait for the new representation rather than
serving inventory from an earlier version.

The main marketplace response and public-ID map warm before the server starts
listening. An empty cache can therefore increase startup time. A missing entry
after inventory invalidation, or the first request for a previously uncached
dealer scope, still needs a build and is not guaranteed to finish within a second.
Redis failures retain the existing database/memory fallback.

## Local verification, 6 November 2026

Using project-local Redis on port 6379, database 15, five full gzip requests
completed in **236, 162, 140, 182 and 145 ms**, including transfer and client-side
decompression. Each decoded response was 37,426,562 bytes and contained all
39,391 vehicles. The earlier warm responses took 1,581–1,720 ms. Uncompressed
JSON matched byte for byte; conditional requests returned 304 without a body.
These are local measurements, not production or internet-download guarantees.

Typecheck and 44 targeted tests passed, covering response encoding, scope
isolation, namespace invalidation, concurrent builds, TTL refresh, public field
presentation and existing dealer HTTP compatibility. Private raw measurements
are in `.local/all-filters-optimized.json`.
