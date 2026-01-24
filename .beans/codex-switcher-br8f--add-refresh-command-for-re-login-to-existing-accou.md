---
# codex-switcher-br8f
title: Add refresh command for re-login to existing accounts
status: completed
type: feature
priority: normal
created_at: 2026-01-24T13:48:15Z
updated_at: 2026-01-24T13:49:36Z
---

Add a 'cdx refresh' command that allows interactively re-authenticating an existing account. This avoids the problem of creating duplicate account entries when running 'cdx login' again. The command should: 1) Show existing accounts via interactive picker, 2) Run the OAuth flow, 3) Update keychain tokens for that account without creating a new config entry, 4) Support direct usage: 'cdx refresh <account-id-or-label>'. Also add 'Refresh account' to the interactive menu.