# cdx

Switch the coding-agents [pi](https://pi.dev/), [codex](https://developers.openai.com/codex/cli/) and [opencode](https://opencode.ai/) auth between multiple openAI Plus and Pro accounts.

---

## Latest Changes

### 1.3.0

#### Features

- Rename `cdx refresh` command to `cdx relogin`

#### Fixes

- Fix `cdx relogin` selector flow exiting early after account selection (now continues into OAuth browser login)

#### Internal

- Modularize CLI command wiring by moving command handlers into per-command modules under `lib/commands/`, keeping `cdx.ts` as a thin composition entrypoint
- Update package dependencies and lockfile (`@clack/prompts`, `commander`, `tsdown`, `@types/bun`, `@types/node`)

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

- macOS (uses Keychain via the `security` command) **or** Windows (uses Windows Credential Manager via PowerShell)
- [Bun](https://bun.sh) runtime

## Install

```bash
bun add -g @bjesuiter/codex-switch
```

This exposes the `cdx` binary globally.

## Usage

### Add your first account

```bash
cdx login
```

Opens your browser to authenticate with OpenAI. After successful login, your credentials are stored securely in the OS secure store (macOS Keychain or Windows Credential Manager).

### Switch between accounts

```bash
cdx switch
```

Interactive picker to select an account. Writes credentials to:
- `~/.local/share/opencode/auth.json` (OpenCode)
- `~/.pi/agent/auth.json` (Pi agent, or `$PI_CODING_AGENT_DIR/auth.json` when `PI_CODING_AGENT_DIR` is set)
- `~/.codex/auth.json` (Codex CLI; requires `id_token`)

```bash
cdx switch --next
```

Cycles to the next configured account without prompting.

```bash
cdx switch <account-id-or-label>
```

Switch directly to a specific account by ID or label.

### Label accounts

```bash
cdx label
```

Interactive prompt to assign a friendly name to an account.

```bash
cdx label <account> <new-label>
```

Assign a label directly.

### Interactive mode

```bash
cdx
```

Running `cdx` without arguments opens an interactive menu to:
- List all configured accounts
- Switch to a different account
- Add a new account (OAuth login)
- Remove an account

## Commands

| Command | Description |
|---------|-------------|
| `cdx` | Interactive mode |
| `cdx login` | Add a new OpenAI account via OAuth |
| `cdx relogin` | Re-authenticate an existing account via OAuth |
| `cdx relogin <account>` | Re-authenticate a specific account by ID or label |
| `cdx switch` | Switch account (interactive picker) |
| `cdx switch --next` | Cycle to next account |
| `cdx switch <id>` | Switch to specific account |
| `cdx label` | Label an account (interactive) |
| `cdx label <account> <label>` | Assign label directly |
| `cdx status` | Show account status, token expiry, usage, and auth file state |
| `cdx usage` | Show usage overview for all accounts |
| `cdx usage <account>` | Show detailed usage for a specific account |
| `cdx help [command]` | Show help for all commands or one command |
| `cdx version` | Show CLI version |
| `cdx --help` | Show help |
| `cdx --version` | Show version |

## How It Works

- OAuth credentials are stored securely in macOS Keychain (macOS) or Windows Credential Manager (Windows)
- Account list is stored in:
  - macOS/Linux: `~/.config/cdx/accounts.json`
  - Windows: `%APPDATA%\\cdx\\accounts.json`
- Active account credentials are written to:
  - `~/.local/share/opencode/auth.json`
  - `~/.pi/agent/auth.json` (or `$PI_CODING_AGENT_DIR/auth.json`)
  - `~/.codex/auth.json` (when `id_token` exists)

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
  "accounts": [
    { "accountId": "ACCOUNT_ID", "keychainService": "cdx-openai-ACCOUNT_ID" }
  ]
}
```

Save to `~/.config/cdx/accounts.json`.
