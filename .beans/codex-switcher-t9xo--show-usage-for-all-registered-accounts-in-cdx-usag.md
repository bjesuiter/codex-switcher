---
# codex-switcher-t9xo
title: Show usage for all registered accounts in cdx usage
status: completed
type: feature
priority: normal
created_at: 2026-01-24T13:28:07Z
updated_at: 2026-01-24T13:35:57Z
---

Currently `cdx usage` shows usage for a single account (current or specified). Enhance it to show a usage overview for ALL registered accounts when invoked without arguments, displaying each account's plan type and primary window usage percentage side by side.

## Checklist
- [x] When `cdx usage` is called without arguments, iterate all accounts from config
- [x] Fetch usage for each account in parallel (Promise.allSettled)
- [x] Display a table/list showing each account's label/ID, plan, and primary window usage
- [x] Gracefully handle per-account fetch failures (show error inline, don't abort)
- [x] Keep existing behavior: `cdx usage <account>` still shows detailed single-account view
- [x] Update tests for multi-account output
- [x] Update README usage section if needed