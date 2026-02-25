---
# codex-switcher-3rv3
title: 'Linux: differentiate native secret service errors after auth'
status: todo
type: bug
priority: high
created_at: 2026-02-25T20:18:51Z
updated_at: 2026-02-25T20:18:51Z
parent: codex-switcher-cip1
---

## Problem

After completing authentication on Linux, users can get:

`native secret service error: no matching entry found in secure storage`

## Questions to answer

1. Exactly when does this error happen in the auth/login flow?
2. Is this message only emitted when an entry is missing, or also when no secret store backend is available/unusable?

## Expected behavior

On first login there is no existing secret entry yet. This should be treated as normal and the entry should be created instead of surfacing an error.

## Acceptance criteria

- [ ] Reproduce and document the exact trigger point in Linux auth flow
- [ ] Distinguish "entry not found" from "secret store unavailable" conditions
- [ ] Show a specific actionable error when secret store is unavailable
- [ ] Treat missing entry during first login as non-error and create/write the new secret
- [ ] Add/update tests for both branches (missing entry vs unavailable store)
