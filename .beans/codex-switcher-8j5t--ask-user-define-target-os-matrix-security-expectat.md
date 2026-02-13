---
# codex-switcher-8j5t
title: 'Ask user: define target OS matrix + security expectations'
status: completed
type: task
priority: critical
created_at: 2026-02-13T12:59:25Z
updated_at: 2026-02-13T13:25:51Z
parent: codex-switcher-zky5
---

Clarify product expectations before implementation.

Open questions:
- Windows scope: Windows 10/11 only? PowerShell/CMD/Git Bash support?
- Linux scope: Ubuntu-only vs broad distro support? WSL in/out of scope?
- Secret storage policy: strict OS keyring only, or encrypted file fallback allowed?
- Non-GUI/headless behavior: required or optional?
- Packaging expectations per platform (npm global, standalone binary, both)?

## User Answers

### 2026-02-13
- Windows: target both Windows 10 and Windows 11.
- Concern acknowledged: potential differences in secret APIs vs macOS; still wants cross-platform support with proper path handling.


- User requirement: implement a secrets adapter interface pattern so additional stores can be added later (e.g. fnox, 1Password, Bitwarden).


- Windows shell support decision: **official** support for PowerShell; **best-effort** support for CMD and Git Bash.
- Constraint: development happens on macOS, so Windows test execution should run in CI (GitHub Actions suggested).


- Linux scope decision: support Linux desktop environments with available keyring/Secret Service; broad distro support is acceptable when compatible keyring is present.
- WSL/headless are out of scope for now; require future fnox-backed secret adapter support.


- Secret storage policy (v1): **OS-native keyring only**; no encrypted-file fallback in current scope.
- Distribution policy (v1): **npm is sufficient for now**; standalone distribution (brew/apt/scoop/chocolatey) deferred to later.


## Summary of Changes

Captured and finalized cross-platform scope decisions:
- Windows target: Win10 + Win11
- Windows shell policy: official PowerShell; best-effort CMD + Git Bash
- Linux target: desktop environments with keyring/Secret Service
- Explicitly out of scope for v1: WSL/headless (follow-up via fnox adapter)
- Security policy for v1: OS-native keyring only (no encrypted-file fallback)
- Distribution policy for v1: npm is enough; standalone channels deferred
- Added follow-up beans for Windows CI strategy, fnox adapter, and standalone distribution channels.
