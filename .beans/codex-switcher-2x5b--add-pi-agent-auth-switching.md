---
# codex-switcher-2x5b
title: Add Pi agent auth switching
status: completed
type: feature
priority: high
created_at: 2026-02-07T23:17:38Z
updated_at: 2026-02-07T23:21:57Z
---

Extend account switching to include Pi agent credentials so switching accounts updates both Codex and Pi auth state consistently.

## Pi auth file structure

Observed structure to support while switching:

```json
{
  "openai-codex": {
    "type": "oauth",
    "access": "<access-token>",
    "refresh": "<refresh-token>",
    "expires": 1770000000000,
    "accountId": "<openai-account-id>"
  }
}
```

## Checklist
- [x] Inspect current switch pipeline and identify where auth files are read/written
- [x] Add Pi auth file path resolution (default and PI_CODING_AGENT_DIR override)
- [x] Integrate Pi auth switching into account switch command
- [x] Add/update tests for Pi switching behavior
- [x] Run test suite and mark bean completed
