# Changelog

## Unreleased

## 1.6.0

### Features

- Add Windows-only secure-store validation in `cdx doctor` for all configured accounts, including per-account load results and a pass/fail summary.

### Fixes

- Fix Windows credential persistence for large OAuth payloads by moving account payload storage to an Age-encrypted vault file (`accounts.windows.age`) and storing only the vault passphrase in Windows Credential Manager.
- Keep backward compatibility on Windows by reading legacy per-account secure-store entries and cleaning them up on save/delete.

## 1.5.1

### Fixes

- Add a `cdx migrate-secrets` suggestion in `cdx doctor --check-keychain-acl` output when keychain ACL/runtime mismatches are detected.
- Clarify keychain ACL diagnostics wording to distinguish entries created by `cdx` (Bun runtime) vs the legacy Apple `security` CLI path, including the prompt-heavy mismatch behavior.

## 1.5.0

### Features

- Add shell completion support via `cdx complete <shell>` (with parse-completion handling for shell integrations).
- Add configurable secret-store selection with `--secret-store <mode>` (`auto` or `legacy-keychain`) plus persisted config support.
- Switch macOS `auto` secret storage to cross-keychain backend selection (prefers native backend, falls back when needed).
- Add `cdx migrate-secrets` to migrate legacy macOS keychain entries to cross-keychain and update config.
- Add optional macOS keychain ACL diagnostics in `cdx doctor --check-keychain-acl` to detect whether keychain items were created by `cdx` (Bun runtime) or by the legacy Apple `security` CLI path.
- Add doctor/runtime warnings for ACL/runtime mismatches that can cause frequent keychain password prompts, and suggest running `cdx migrate-secrets` when mismatches are found.
- Increase cross-keychain max password length handling (default `16384`) to support larger stored credential payloads.

### Fixes

- Keep `cdx doctor` fast by making keychain ACL checks opt-in and improving output with clearer guidance and progress feedback.
- Remove Windows credential payload chunking now that larger payloads are supported directly in the secure store backend.

### Internal

- Temporarily switch keyring dependency from `cross-keychain` to `@bjesuiter/cross-keychain@1.1.0-jb.0` until upstream support is available.
- Add Windows CI coverage including shell smoke checks and expanded secure-store integration tests (including Windows CRUD coverage).

## 1.4.0

### Features

- Add **beta Windows/Linux support** for account switching workflows, including platform-specific default paths for config/auth files.
- Add secure credential storage adapters for Windows Credential Manager and Linux Secret Service/keyring (via `cross-keychain`).
- Improve `cdx status` UX by rendering account/token info first, then loading usage for all accounts in parallel with a spinner and per-account failure reporting.
- Add `cdx doctor` command to show auth file state with explicit paths and runtime capability diagnostics.
- Require explicit one-time consent before using fallback secure-store backends, with non-interactive override via `CDX_ALLOW_SECURE_STORE_FALLBACK=1`.

### Fixes

- Improve cross-platform terminology in command output by using secure-store wording where macOS-specific keychain labels were misleading.

### Internal

- Introduce a shared platform abstraction layer (`lib/platform/*`) for path resolution, browser launching, and runtime capability detection.
- Add/expand automated tests for platform path resolution, browser launchers, and secret-store adapters.
- Update dependencies and lockfile to include `cross-keychain`.

## 1.3.0

### Features

- Rename `cdx refresh` command to `cdx relogin`

### Fixes

- Fix `cdx relogin` selector flow exiting early after account selection (now continues into OAuth browser login)

### Internal

- Modularize CLI command wiring by moving command handlers into per-command modules under `lib/commands/`, keeping `cdx.ts` as a thin composition entrypoint
- Update package dependencies and lockfile (`@clack/prompts`, `commander`, `tsdown`, `@types/bun`, `@types/node`)

## 1.2.0

### Features

- Add Pi Agent auth switching: write active credentials to `~/.pi/agent/auth.json` (or `$PI_CODING_AGENT_DIR/auth.json`)
- Extend `cdx status` output to include Pi Agent auth file/account state
- Show Pi Agent auth update status in switch and refresh flows (CLI and interactive mode)

### Fixes

- Recompute default paths on `resetPaths()` so `PI_CODING_AGENT_DIR` changes are applied correctly
- Add failure-path test coverage for invalid/unwritable `PI_CODING_AGENT_DIR` targets
- Add realistic Pi auth fixture coverage for `openai-codex` auth.json shape

## 1.1.0

### Features

- **cdx usage command**: Track OpenAI Plus/Pro usage across all accounts (`cdx usage`)
- **cdx refresh command**: Re-authenticate existing accounts without losing settings (`cdx refresh`)
- **cdx help command**: Explicit help subcommand (`cdx help`)
- **Progress bars**: Visual usage overview with column-aligned progress bars
- **Card-style status**: Redesigned status command with per-account card layout
- **Auth status feedback**: Show auth file update status in switch output
- **Account labels**: Display friendly labels instead of raw IDs in status

### Fixes

- Preserve existing fields in codex auth.json when switching accounts
- Preserve non-openai sections in auth.json when switching accounts
- Fix codex auth clearing when idToken missing
- Show auth target status on separate lines in switch output
- Fix account labels display in status auth file output

### Internal

- Added beans for status command card-style layout, usage display, and help command
- Extracted shared formatUsageBars helper for progress visualization
- Created refresh command bean for active auth JSON updates
- Clear stale codex auth when idToken missing

## 1.0.4

### Fixes

- Fix version output: inline version at build time instead of using `project-version` (which read from CWD's package.json)

## 1.0.3

### Fixes

- Fix CI: skip keychain-dependent tests when `CI=true`
- Fix CI: guard `main()` with `import.meta.main` to prevent execution during test imports
- Bundle CLI with tsdown, publish from `dist/` with separate package.json

## 1.0.0

Initial release.

### Features

- **OAuth login**: `cdx login` opens your browser to authenticate with OpenAI and stores credentials securely in macOS Keychain
- **Account switching**: `cdx switch` with interactive picker, `--next` for cycling, or pass an account ID/label directly
- **Account labels**: `cdx label` to assign friendly names to accounts for easier identification
- **Interactive mode**: Running `cdx` without arguments opens a menu to list, switch, add, or remove accounts
- **Secure storage**: All OAuth credentials stored in macOS Keychain, account metadata in `~/.config/cdx/accounts.json`
- **OpenCode integration**: Writes active credentials to `~/.local/share/opencode/auth.json`
- **Version output**: `cdx version`, `cdx -v`, or `cdx --version`
