---
# codex-switcher-zy08
title: Fix account removal index corruption
status: completed
type: bug
priority: high
created_at: 2026-01-23T14:15:49Z
updated_at: 2026-01-23T14:17:32Z
---

When removing an account before the currently active one in handleRemoveAccount (lib/interactive.ts:138-142), the current index isn't adjusted, silently switching the user to a different account. Fix: after filtering, find the new index of the previously-current account, or reset to 0 if the removed account was the current one.