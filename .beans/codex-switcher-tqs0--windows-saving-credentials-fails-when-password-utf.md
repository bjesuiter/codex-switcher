---
# codex-switcher-tqs0
title: 'Windows: saving credentials fails when password UTF-16 length exceeds platform limit'
status: todo
type: bug
priority: high
created_at: 2026-02-13T23:29:53Z
updated_at: 2026-02-13T23:38:41Z
parent: codex-switcher-i5g5
---

## Report

On Windows, credential saving fails with the following native credential manager error:

`Saving credentials...Native credential manager error: Attribute 'password encoded as UTF-16' is longer than platform limit of 2560 chars`

## Expected behavior

Credentials should save successfully for supported OpenAI auth payloads/tokens.

## Actual behavior

Credential persistence fails due to a platform length limit in the Windows credential backend, preventing successful save.

## Notes

- Error indicates UTF-16 encoded password/value exceeds Windows platform attribute limit (2560 chars).
- Likely requires storing a shorter reference/value, splitting payload strategy, or alternate secure storage mapping on Windows.

## Triage notes (2026-02-14)

- Confirmed save path on Windows writes full payload as one JSON string via `lib/secrets/windows-cross-keychain.ts` (`setPassword(service, accountId, JSON.stringify(payload))`).
- OAuth payload currently includes `refresh`, `access`, `expires`, `accountId`, and often `idToken` (`lib/oauth/login.ts`).
- Windows Credential Manager enforces a per-secret size cap (error reports UTF-16 limit 2560 chars), so larger token bundles fail during save.
- This is consistent with the observed runtime message and explains why login fails at "Saving credentials..." on Windows.

## Candidate fixes

1. Store payload in multiple credential entries on Windows (chunked or field-split) and reassemble on load.
2. Store `idToken` separately from `refresh`/`access` payload to reduce main secret size.
3. Add explicit preflight size check + actionable error message when payload exceeds Windows limits.
