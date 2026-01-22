---
# codex-switcher-uefs
title: Switch Command Implementation
status: todo
type: feature
priority: normal
created_at: 2026-01-22T08:49:12Z
updated_at: 2026-01-22T08:49:27Z
parent: codex-switcher-a5mb
blocking:
    - codex-switcher-lj4d
---

Implement the `cdx switch` command to cycle through subscriptions.

## Requirements
- Command: `cdx switch`
- Cycles through all configured subscriptions
- Writes active subscription to ~/.local/share/opencode/auth.json
- auth.json format must match OpenCode's expected format

## auth.json format
```json
{
  "openai": {
    "type": "oauth",
    "refresh": "<refresh_token>",
    "access": "<access_token>",
    "expires": <timestamp>,
    "accountId": "<my account id string>"
  }
}
```

## Checklist
- [ ] Add `cdx switch` command to commander.js
- [ ] Implement reading all accounts from Keychain
- [ ] Implement tracking of current active account
- [ ] Implement cycle logic (next account in list, wrap around)
- [ ] Implement auth.json write function with correct format
- [ ] Ensure ~/.local/share/opencode/ directory exists
- [ ] Display which account is now active after switch
- [ ] Write tests using bun:test to validate switch command behavior