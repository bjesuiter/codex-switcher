# Changelog

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
