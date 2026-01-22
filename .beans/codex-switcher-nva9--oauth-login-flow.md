---
# codex-switcher-nva9
title: OAuth Login Flow
status: todo
type: feature
priority: normal
created_at: 2026-01-22T08:49:08Z
updated_at: 2026-01-22T08:49:26Z
parent: codex-switcher-a5mb
blocking:
    - codex-switcher-lj4d
---

Implement OAuth login to add new OpenAI accounts.

## Requirements
- Support logging in to multiple OpenAI accounts via OAuth
- Store obtained credentials securely in Keychain
- Each account should have a user-friendly label/identifier

## Checklist
- [ ] Research OpenAI OAuth flow (endpoints, scopes, redirect handling)
- [ ] Implement local HTTP server for OAuth callback
- [ ] Implement OAuth authorization URL generation
- [ ] Handle OAuth callback and token exchange
- [ ] Store credentials in Keychain after successful login
- [ ] Add `cdx login` command to commander.js
- [ ] Write tests using bun:test to validate OAuth login flow behavior