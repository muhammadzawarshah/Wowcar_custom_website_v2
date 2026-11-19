# ChangeCars database backup — 27 October 2026

[Download full database backup](changecars-db-backup-2026-10-27-15-21-23-synced-colours-gps.dump) · [SHA-256 checksum](changecars-db-backup-2026-10-27-15-21-23-synced-colours-gps.dump.sha256) · [Verification metadata](changecars-db-backup-2026-10-27-15-21-23-synced-colours-gps.dump.json)

- PostgreSQL 17 custom archive, 135,865,765 bytes (about 129.6 MiB).
- 44,500 vehicles, 947 dealers, 947 branches.
- Includes synced DealerTrade inventory, stock metadata, standard colour mapping, title-case display text, all completed dealer/vehicle GPS coordinates, and coordinate source records.
- Missing branch and vehicle latitude/longitude: **0** after the GPS update.
- Restored into an isolated temporary database: all 57 table counts, vehicle display/source/GPS fingerprint and branch GPS fingerprint matched. The verification database was removed.
- Application code: `b0c04d96` or later.
- External images/documents are represented by their database records and URLs; their file contents are separate from this DB backup.

## Restore

Use PostgreSQL 17 or newer. Restore into a new empty database with your own destination credentials:

```sh
createdb --host=127.0.0.1 --port=5432 --username=YOUR_USER changecars_restored
pg_restore --host=127.0.0.1 --port=5432 --username=YOUR_USER --dbname=changecars_restored --no-owner --no-acl --exit-on-error --single-transaction "changecars-db-backup-2026-10-27-15-21-23-synced-colours-gps.dump"
```

Keep the dump and checksum in the same directory, then verify:

```sh
shasum -a 256 -c "changecars-db-backup-2026-10-27-15-21-23-synced-colours-gps.dump.sha256"
```

SHA-256: `3487015b13936685acfd664bf2c9dccedaf2a3e8aa050c7d11103b490d8da877`.

## GPS evidence

[Updated dealer GPS workbook](dealer-gps-updated-2026-10-27.xlsx) contains all 947 current branches, coordinates, evidence sources and precision. The original `dealers_cc_gps (5).xlsx` was read without modification. Coordinates were filled on 120 branches and 10,358 vehicles; complete existing coordinates were preserved. Jetour Table Bay uses a shopping-centre location rather than an individual shop entrance. Intersection addresses use intersection-level points.
