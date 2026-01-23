---
# codex-switcher-it9p
title: Add timeout to OAuth callback server
status: completed
type: bug
priority: normal
created_at: 2026-01-23T14:15:52Z
updated_at: 2026-01-23T14:17:33Z
---

startOAuthServer in lib/oauth/server.ts creates an HTTP server with no timeout. If the user never completes browser auth, the CLI hangs indefinitely. Add a configurable timeout (e.g. 5 minutes) that rejects the promise and shuts down the server.