---
# codex-switcher-3fyn
title: Add Codex CLI auth switching
status: completed
type: feature
priority: normal
created_at: 2026-01-24T12:39:36Z
updated_at: 2026-01-24T12:41:47Z
---

When switching accounts, also write ~/.codex/auth.json for the Codex CLI. Always write both auth files on every switch. The id_token field (required by Codex CLI) must be captured during login - existing accounts without it will get a warning to re-login.

## Design
- Add `idToken` field to `OAuthPayload` (optional for backwards compat)
- Capture `id_token` from OAuth token exchange response
- Add `codexAuthPath` to paths config
- Add `writeCodexAuthFile()` function in auth.ts
- On switch: write opencode auth always, write codex auth if id_token available, warn if missing
- Update tests

## Checklist
- [x] Update OAuthPayload type with optional idToken field
- [x] Update exchangeAuthorizationCode to capture id_token
- [x] Update refreshAccessToken to capture id_token
- [x] Update performLogin to store idToken in payload
- [x] Add codexAuthPath to PathConfig and paths.ts
- [x] Add writeCodexAuthFile() in auth.ts
- [x] Update all switch callsites to write both auth files
- [x] Handle missing id_token with warning message
- [x] Update createTestPaths for codex path
- [x] Add/update tests