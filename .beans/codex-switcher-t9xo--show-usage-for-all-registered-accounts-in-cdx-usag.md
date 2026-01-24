---
# codex-switcher-t9xo
title: Show usage for all registered accounts in cdx usage
status: todo
type: feature
created_at: 2026-01-24T13:28:07Z
updated_at: 2026-01-24T13:28:07Z
---

Currently `cdx usage` shows usage for a single account (current or specified). Enhance it to show a usage overview for ALL registered accounts when invoked without arguments, displaying each account's plan type and primary window usage percentage side by side.

## Checklist
- [ ] When `cdx usage` is called without arguments, iterate all accounts from config
- [ ] Fetch usage for each account in parallel (Promise.allSettled)
- [ ] Display a table/list showing each account's label/ID, plan, and primary window usage
- [ ] Gracefully handle per-account fetch failures (show error inline, don't abort)
- [ ] Keep existing behavior: `cdx usage <account>` still shows detailed single-account view
- [ ] Update tests for multi-account output
- [ ] Update README usage section if needed