# Changelog

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
