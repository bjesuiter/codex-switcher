---
# codex-switcher-tqs0
title: 'Windows: saving credentials fails when password UTF-16 length exceeds platform limit'
status: todo
type: bug
priority: high
created_at: 2026-02-13T23:29:53Z
updated_at: 2026-02-13T23:29:53Z
parent: codex-switcher-i5g5
---

## Report

On Windows, credential saving fails with the following native credential manager error:

`Saving credentials...Native credential manager error: Attribute 'password encoded as UTF-16' is longer than platform limit of 2560 chars`

## Expected behavior

Credentials should save successfully for supported OpenAI auth payloads/tokens.

## Actual behavior

Credential persistence fails due to a platform length limit in the Windows credential backend, preventing successful save.

## Notes

- Error indicates UTF-16 encoded password/value exceeds Windows platform attribute limit (2560 chars).
- Likely requires storing a shorter reference/value, splitting payload strategy, or alternate secure storage mapping on Windows.
