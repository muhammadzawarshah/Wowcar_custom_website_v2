# Dealer GPS comparison — 26 October 2026

Compared the unchanged `dealers_cc_gps (5).xlsx` against the fresh DealerTrade dealer list and current local PostgreSQL database. This check made no database changes.

| Check | Count |
|---|---:|
| Valid Excel dealer GPS entries | 864 |
| Fresh DealerTrade dealers | 962 |
| Local DB dealers | 926 |
| Excel dealers matched in local DB | 827 |
| Matched branch coordinate differences | 0 |
| Matched vehicles checked against Excel | 34520 |
| Matched vehicles with missing/different coordinates | 0 |
| Fresh dealers missing an Excel GPS entry | 128 |
| Of those, existing local dealers with blank GPS | 99 |
| Vehicles on those local dealers with blank GPS | 3408 |
| Fresh dealers with Excel GPS available but absent from local DB | 8 |
| Excel dealer IDs absent from the fresh dealer list | 30 |

## Missing GPS coverage

[dealer-coordinates-missing.csv](dealer-coordinates-missing.csv) contains all 128 fresh dealer IDs absent from Excel. Of these, 99 exist locally and have blank branch coordinates; their 3,408 vehicles also have blank coordinates. The remaining 29 dealer IDs are absent from the local database.

## Coordinates available, dealer not imported

[dealer-coordinates-available-not-imported.csv](dealer-coordinates-available-not-imported.csv) contains eight dealer IDs present in the fresh feed and Excel but not in the local database. Their coordinates can be applied when those dealer records are imported. No missing dealer records were created during this comparison.

## Shared-address candidates

[dealer-coordinate-address-candidates.csv](dealer-coordinate-address-candidates.csv) lists 14 missing dealer IDs whose normalized street address matches another dealer in Excel. These are candidates for verification, not automatically approved coordinate substitutions. Coordinates were not copied between different dealer IDs.

## Interpretation

DealerTrade dealer/stock responses do not provide latitude/longitude fields, so GPS accuracy was verified using Excel as the reference and dealer IDs for identity matching. The 827 already updated dealer branches and 34,520 vehicles still match Excel, with no missing coordinate values or mismatches.

Thirty Excel dealer IDs are absent from the fetched live dealer list; 29 of them are also absent locally, while one still exists locally. They were not deleted. The live stock capture is non-atomic, so CSV `observedVehicles` counts are capture counts, not guaranteed current inventory totals. Local DB counts above were queried directly.

Detailed audit: [.local/dealer-gps/excel-fresh-db-comparison.json](.local/dealer-gps/excel-fresh-db-comparison.json).
