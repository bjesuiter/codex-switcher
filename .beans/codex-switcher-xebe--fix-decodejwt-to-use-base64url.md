---
# codex-switcher-xebe
title: Fix decodeJWT to use base64url
status: completed
type: bug
priority: low
created_at: 2026-01-23T14:15:53Z
updated_at: 2026-01-23T14:17:34Z
---

lib/oauth/auth.ts line 148 uses Buffer.from(payload, 'base64') but JWTs use base64url encoding. Replace padding and url-safe character handling, or use Node's base64url encoding option.