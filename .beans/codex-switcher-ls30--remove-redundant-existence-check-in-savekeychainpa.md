---
# codex-switcher-ls30
title: Remove redundant existence check in saveKeychainPayload
status: completed
type: task
priority: low
created_at: 2026-01-23T14:15:56Z
updated_at: 2026-01-23T14:17:34Z
---

lib/keychain.ts lines 41-64: The function checks if the entry exists before deciding whether to use -U flag. Since add-generic-password -U handles both create and update cases, the existence check is unnecessary. Simplify to always use -U.