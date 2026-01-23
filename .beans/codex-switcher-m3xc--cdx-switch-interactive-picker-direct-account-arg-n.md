---
# codex-switcher-m3xc
title: 'cdx switch: interactive picker, direct account arg, --next flag'
status: completed
type: feature
priority: normal
created_at: 2026-01-23T14:28:17Z
updated_at: 2026-01-23T14:29:41Z
---

Change 'cdx switch' behavior:
1. No args: show interactive account picker (reuse handleSwitchAccount logic from interactive.ts)
2. With <account-id> arg: switch directly to that account without picker
3. With --next flag: keep current round-robin cycling behavior

## Checklist
- [ ] Export handleSwitchAccount from lib/interactive.ts (or extract to shared module)
- [ ] Update switch command in cdx.ts to accept optional [account-id] argument
- [ ] Add --next flag that preserves current cycling behavior
- [ ] Update switchAccount() to handle all three modes
- [ ] Update tests in cdx.test.ts and lib/switch.test.ts
- [ ] Verify with lsp_diagnostics