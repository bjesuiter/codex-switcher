---
# codex-switcher-wltg
title: Handle OAuth callback port conflicts during login
status: todo
type: bug
priority: high
created_at: 2026-02-25T19:51:48Z
updated_at: 2026-02-25T19:51:48Z
---

On remote Debian servers, 'cdx login' can fail with 'Failed to start local server on port 1455' when that port is already in use.\n\nExpected behavior:\n- Do not hard-fail immediately when callback server bind fails.\n- Offer actionable recovery options:\n  1) Kill the existing process bound to port 1455 and retry browser flow.\n  2) Continue with OAuth device flow (no local callback server required).\n\nAcceptance criteria:\n- [ ] Detect callback server port-bind conflict separately from other startup errors.\n- [ ] Prompt user with options to kill listener / use device flow / cancel.\n- [ ] Implement safe kill flow (show PID/command, ask for confirmation, then retry).\n- [ ] Fallback to device flow works without local server.\n- [ ] Add tests for conflict handling and selected recovery paths.
