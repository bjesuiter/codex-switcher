# cdx

Switch the coding-agents [pi](https://pi.dev/), [codex](https://developers.openai.com/codex/cli/) and [opencode](https://opencode.ai/) auth between multiple openAI Plus and Pro accounts.

---

## Latest Changes

### 1.7.0

#### Features

- Add autocomplete integration powered by `@bomb.sh/tab` Commander support, including:
  - completion of `--secret-store` values (`auto`, `legacy-keychain`)
  - account ID/label completion for `switch`, `relogin`, `usage`, and `label`
  - command-name completion for `help <command>`
- Add explicit device OAuth flow flags for authentication commands:
  - `cdx login --device-flow`
  - `cdx relogin --device-flow`
  - `cdx relogin <account> --device-flow`
- Add interactive fallback when browser auto-open is unavailable, allowing users to choose between manual URL copy/paste completion and device OAuth flow.

#### Fixes

- Prevent login/relogin crashes when the platform browser launcher (for example `xdg-open`) is missing or fails to start.
- Improve non-interactive/headless auth behavior by automatically choosing a safe fallback path (manual on local terminals, device flow on likely remote Linux/SSH sessions).

see full changelog here: https://github.com/bjesuiter/codex-switcher/blob/main/CHANGELOG.md



---

## Why codex-switcher?

Anthropic has a $100/month plan, but OpenAI only offers $20 and $200 plans.
So: switching between two $20 plans is the poor man's $100 plan for OpenAI. ^^

## Supported Configurations

- **OpenAI Plus & Pro subscription accounts**: Log in to multiple OpenAI OAuth accounts and switch the active credentials.
- **OpenCode auth target**: Writes active credentials to `~/.local/share/opencode/auth.json`.
- **Pi Agent auth target**: Writes active credentials to `~/.pi/agent/auth.json` (or `$PI_CODING_AGENT_DIR/auth.json`).
- **Codex CLI auth target**: Writes active credentials to `~/.codex/auth.json` when `id_token` is available.

## Requirements

- macOS (uses Keychain), Windows (uses Windows Credential Manager), **or** Linux (uses Secret Service/keyring)
- [Bun](https://bun.sh) runtime

## Platform Support Status

- **macOS:** stable
- **Windows:** beta
- **Linux:** beta

## Install

```bash
bun add -g @bjesuiter/codex-switch
```

This exposes the `cdx` binary globally.

## Usage

### macOS (stable)

1. Install [Bun](https://bun.sh)
2. Install `cdx`
3. Run and verify:
   - `cdx login`
   - `cdx status`
   - `cdx switch`
   - `cdx relogin <account-id-or-label>`
4. Confirm auth files are written correctly after switching:
   - `~/.local/share/opencode/auth.json` (or `$XDG_DATA_HOME/opencode/auth.json`)
   - `~/.codex/auth.json`
   - `~/.pi/agent/auth.json` (or `$PI_CODING_AGENT_DIR/auth.json`)
5. Credentials are stored in macOS Keychain.

### Windows (beta)

Windows support is **test-ready** and suitable for friend/beta testing, but is not yet production-proven by broad real-world testing.

1. Install [Bun](https://bun.sh)
2. Install `cdx`
3. Run and verify:
   - `cdx login`
   - `cdx status`
   - `cdx switch`
   - `cdx relogin <account-id-or-label>`
4. Confirm auth files are written correctly after switching:
   - `%LOCALAPPDATA%\\opencode\\auth.json`
   - `%USERPROFILE%\\.codex\\auth.json`
   - `%USERPROFILE%\\.pi\\agent\\auth.json` (or `%PI_CODING_AGENT_DIR%\\auth.json`)
5. If prompted about secure-store fallback, explicitly choose whether to allow it for testing.
   - Non-interactive override (if you accept the risk): `CDX_ALLOW_SECURE_STORE_FALLBACK=1`

### Linux (beta)

Linux support is **test-ready** and suitable for friend/beta testing, but is not yet production-proven by broad real-world testing.

1. Install [Bun](https://bun.sh)
2. Ensure a Secret Service backend is available (for example GNOME Keyring with `secret-tool`)
3. Install `cdx`
4. Run and verify:
   - `cdx login`
   - `cdx status`
   - `cdx switch`
   - `cdx relogin <account-id-or-label>`
5. Confirm auth files are written correctly after switching:
   - `~/.local/share/opencode/auth.json` (or `$XDG_DATA_HOME/opencode/auth.json`)
   - `~/.codex/auth.json`
   - `~/.pi/agent/auth.json` (or `$PI_CODING_AGENT_DIR/auth.json`)
6. If prompted about secure-store fallback, explicitly choose whether to allow it for testing.
   - Non-interactive override (if you accept the risk): `CDX_ALLOW_SECURE_STORE_FALLBACK=1`

Please report the full command output and platform info (`cdx status`) for any failures.

### Common command examples (all platforms)

Add your first account:

```bash
cdx login
```

Switch between accounts:

```bash
cdx switch
cdx switch --next
cdx switch <account-id-or-label>
```

Label accounts:

```bash
cdx label
cdx label <account> <new-label>
```

Interactive mode:

```bash
cdx
```

Use the legacy macOS keychain implementation (if needed):

```bash
cdx --secret-store legacy-keychain switch
cdx --secret-store legacy-keychain status
```

Migrate legacy macOS keychain entries to cross-keychain (`auto`) and update config:

```bash
cdx migrate-secrets
```

## Commands

| Command | Description |
|---------|-------------|
| `cdx` | Interactive mode |
| `cdx login` | Add a new OpenAI account via OAuth |
| `cdx login --device-flow` | Add account using OAuth device flow (no local browser callback needed) |
| `cdx relogin` | Re-authenticate an existing account via OAuth |
| `cdx relogin --device-flow` | Re-authenticate interactively using OAuth device flow |
| `cdx relogin <account>` | Re-authenticate a specific account by ID or label |
| `cdx relogin <account> --device-flow` | Re-authenticate specific account using OAuth device flow |
| `cdx switch` | Switch account (interactive picker) |
| `cdx switch --next` | Cycle to next account |
| `cdx switch <id>` | Switch to specific account |
| `cdx label` | Label an account (interactive) |
| `cdx label <account> <label>` | Assign label directly |
| `cdx status` | Show account status, token expiry, and usage |
| `cdx migrate-secrets` | Migrate macOS legacy keychain entries to cross-keychain and switch config to `auto` |
| `cdx doctor` | Show auth file paths/state and runtime capabilities |
| `cdx doctor --check-keychain-acl` | Detect macOS keychain ACL/runtime mismatches (`cdx`/Bun vs legacy `security` CLI), warn about prompt-heavy setups, and suggest `cdx migrate-secrets` (slow) |
| `cdx usage` | Show usage overview for all accounts |
| `cdx usage <account>` | Show detailed usage for a specific account |
| `cdx help [command]` | Show help for all commands or one command |
| `cdx complete <shell>` | Generate shell completion script (`zsh`, `bash`, `fish`, `powershell`) |
| `cdx version` | Show CLI version |
| `cdx --help` | Show help |
| `cdx --version` | Show version |
| `cdx --secret-store legacy-keychain <command>` | Override configured backend for this run (macOS legacy keychain) |

### Shell completion

Generate and source completion scripts:

```bash
# zsh
source <(cdx complete zsh)

# bash
source <(cdx complete bash)
```

`cdx` also supports shell parse completion requests via `cdx complete -- ...`.
Completions include command names, options, `--secret-store` values, and account ID/label suggestions for commands like `switch`, `relogin`, `usage`, and `label`.

## How It Works

### Secure credential storage

- **macOS:** macOS Keychain
- **Windows:** Windows Credential Manager
- **Linux:** Secret Service/keyring
- Default backend selection is automatic (`auto`).
- You can persist a preferred backend in `accounts.json` via optional `"secretStore"` (`"auto"` or `"legacy-keychain"`).
- `--secret-store <mode>` always overrides config for the current run.
- If only a fallback secure-store backend is available on your platform, `cdx` asks for one-time explicit consent before the first credential write and explains the security trade-off.
  - Non-interactive override (if you accept the risk): set `CDX_ALLOW_SECURE_STORE_FALLBACK=1`
- On macOS, `cdx doctor --check-keychain-acl` checks whether configured secrets were created for the current `cdx`/Bun runtime or by the legacy Apple `security` CLI flow. Legacy ACL entries can trigger frequent keychain password prompts; when a mismatch is detected, `cdx` suggests `cdx migrate-secrets`. This check can be slow.
- Cross-keychain payload size policy:
  - Default max password length override is `16384`.
  - Optional override: set `CDX_CROSS_KEYCHAIN_MAX_PASSWORD_LENGTH=<integer-above-4096>`.
  - This currently relies on `@bjesuiter/cross-keychain@1.1.0-jb.0` until upstream support is released.

### Account list path

- **macOS/Linux:** `~/.config/cdx/accounts.json` (or `$XDG_CONFIG_HOME/cdx/accounts.json`)
- **Windows:** `%APPDATA%\\cdx\\accounts.json`

### Auth file paths

#### macOS / Linux

- **OpenCode:** `~/.local/share/opencode/auth.json` (or `$XDG_DATA_HOME/opencode/auth.json`)
- **Codex CLI:** `~/.codex/auth.json`
- **Pi Agent:** `~/.pi/agent/auth.json` (or `$PI_CODING_AGENT_DIR/auth.json`)

#### Windows

- **OpenCode:** `%LOCALAPPDATA%\\opencode\\auth.json`
- **Codex CLI:** `%USERPROFILE%\\.codex\\auth.json`
- **Pi Agent:** `%USERPROFILE%\\.pi\\agent\\auth.json` (or `%PI_CODING_AGENT_DIR%\\auth.json`)

`cdx` writes Codex CLI auth only when `id_token` exists.

## For Developers

### Install from source

```bash
git clone https://github.com/bjesuiter/codex-switcher.git
cd codex-switcher
bun install
bun link
```

### Releasing a new version

1. Increase version in `package.json`
2. Add changelog entry for the version in `CHANGELOG.md`
3. Commit the changes
4. Create a git tag with the version number (no prefix): `git tag X.Y.Z`
5. Push both the commit and the tag: `git push && git push --tags`

### Manual Configuration (Advanced)

You can also manually add accounts to Keychain (macOS only):

```bash
security add-generic-password -a "ACCOUNT_ID" -s "cdx-openai-ACCOUNT_ID" -w '{"refresh":"REFRESH","access":"ACCESS","expires":1234567890,"accountId":"ACCOUNT_ID"}' -U
```

And create the accounts list manually:

```json
{
  "current": 0,
  "secretStore": "auto",
  "accounts": [
    { "accountId": "ACCOUNT_ID", "keychainService": "cdx-openai-ACCOUNT_ID" }
  ]
}
```

Save to `~/.config/cdx/accounts.json`.
