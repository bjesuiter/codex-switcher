---
# codex-switcher-i2ow
title: Interactive login opens browser on wrong machine and OpenAI returns invalid URL error
status: todo
type: bug
priority: high
created_at: 2026-02-13T23:25:50Z
updated_at: 2026-02-13T23:25:50Z
---

## Report

When running `cdx` interactively and then starting the login process, the browser opens on a different computer (friend's Chrome) instead of the local machine.

OpenAI then shows an error page indicating the URL is not valid / missing required parameter.

## Error URL observed

`https://auth.openai.com/error?payload=eyJraW5kIjogIkF1dGhBcGlGYWlsdXJlIiwgImVycm9yQ29kZSI6ICJtaXNzaW5nX3JlcXVpcmVkX3BhcmFtZXRlciIsICJyZXF1ZXN0SWQiOiAiZTcyODQ5YTgtODQyZS00Yzg5LWEwZGMtYTQ4NzNhODBmMmYyIn0%3D&session_id=None&verifier_id=64773ced-31ae-43f8-816e-b6b6951c989a`

## Expected behavior

- Browser should open on the same machine where `cdx` is running.
- OAuth URL should be valid and complete.

## Actual behavior

- Browser opens remotely on a different machine profile.
- OpenAI shows `missing_required_parameter` style error.
- Manually clicking the login link shown in the CLI works and login can proceed.

## Suspected area

Interactive login URL/open command handling, machine/browser targeting, and callback parameter generation.
