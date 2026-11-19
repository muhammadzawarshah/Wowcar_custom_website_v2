# Live My Documents upload check

Date: 1 November 2026 (Asia/Karachi). App: Group1.

Result: FAILED before sending file bytes.

- Temporary test customer registration: HTTP 201.
- Document upload URL: HTTP 201.
- Returned storage origin: `http://localhost:9000`.
- Storage PUT was not attempted: localhost refers to the client device, not a reachable production storage service.
- Document DELETE cleanup returned HTTP 500. A PENDING document row remains; no storage object was uploaded.
- Account cleanup: HTTP 204; temporary account anonymised.

## Required server configuration

The live server is signing upload URLs for local MinIO. Configure the intended production storage provider. For Firebase, set `STORAGE_DRIVER=firebase`, `FIREBASE_STORAGE_BUCKET` and `FIREBASE_SERVICE_ACCOUNT` on the server, then restart. For S3-compatible storage, use the actual publicly reachable HTTPS storage endpoint and valid bucket/credentials. Do not replace the host inside a signed URL in the mobile app; this can invalidate its signature.

After correcting storage, repeat upload-url → raw file PUT with returned headers → complete → view/download and byte comparison. This run did not verify file transfer, completion or download.

Evidence: [my-documents-upload.json](my-documents-upload.json).
