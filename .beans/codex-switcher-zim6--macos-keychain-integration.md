---
# codex-switcher-zim6
title: macOS Keychain Integration
status: completed
type: feature
priority: normal
created_at: 2026-01-22T08:49:05Z
updated_at: 2026-01-22T11:50:07Z
parent: codex-switcher-a5mb
blocking:
    - codex-switcher-nva9
    - codex-switcher-uefs
---

Implement secure storage of OAuth secrets in macOS Keychain.

## Requirements
- OAuth secrets must NOT be stored in plaintext files
- Each account needs a stable identifier
- Support storing/retrieving refresh_token, access_token, expires, accountId

## Checklist
- [x] Research Bun/Node APIs for macOS Keychain access (security CLI or native bindings)
- [x] Implement keychain write function for OAuth credentials
- [x] Implement keychain read function for OAuth credentials
- [x] Implement keychain list function to enumerate stored accounts
- [x] Implement keychain delete function for account removal
- [x] Define account identifier format/schema
- [x] Write tests using bun:test to validate Keychain integration behavior