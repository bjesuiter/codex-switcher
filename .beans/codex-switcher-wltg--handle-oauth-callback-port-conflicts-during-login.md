---
# codex-switcher-wltg
title: Handle OAuth callback port conflicts during login
status: completed
type: bug
priority: high
created_at: 2026-02-25T19:51:48Z
updated_at: 2026-02-25T20:05:12Z
---

On remote Debian servers, 'cdx login' can fail with 'Failed to start local server on port 1455' when that port is already in use.\n\nExpected behavior:\n- Do not hard-fail immediately when callback server bind fails.\n- Offer actionable recovery options:\n  1) Kill the existing process bound to port 1455 and retry browser flow.\n  2) Continue with OAuth device flow (no local callback server required).\n\nAcceptance criteria:\n- [x] Detect callback server port-bind conflict separately from other startup errors.\n- [x] Prompt user with options to kill listener / use device flow / cancel.\n- [x] Implement safe kill flow (show PID/command, ask for confirmation, then retry).\n- [x] Fallback to device flow works without local server.\n- [x] Add tests for conflict handling and selected recovery paths.

\n## Additional report\n\n- [x] Improve device-flow startup error diagnostics so `Device OAuth flow is not available right now` includes actionable technical details (HTTP status, OAuth error code/body, or network error).

## Summary of Changes

- Added explicit callback-server startup diagnostics from `startOAuthServer`, including `port_in_use` detection (`EADDRINUSE`).
- Added login/relogin recovery flow for port 1455 conflicts with user choices:
  - kill existing listener and retry browser OAuth
  - switch to OAuth device flow
  - cancel
- Added safe listener handling helpers in OAuth login code:
  - detect listening process on port 1455 (Linux/macOS via `lsof`, Windows via `netstat`/`tasklist`)
  - show PID/command to the user
  - confirm before sending `SIGTERM`
- Kept device flow path server-free and improved technical diagnostics for device flow startup/polling failures.
- Added/expanded tests:
  - OAuth server test for `port_in_use` startup reason
  - OAuth login parser tests for listener/PID parsing
  - device OAuth error-detail tests in auth tests.
