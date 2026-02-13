# Windows shell support policy

This project validates Windows behavior in GitHub Actions via `.github/workflows/ci.yml`.

## Trigger policy

- Runs on `pull_request`
- Manually triggerable via `workflow_dispatch`
- Invoked automatically as a **pre-publish gate** from `.github/workflows/publish.yml`
- Does **not** run on direct `push` events

## Shell policy

- **PowerShell (`pwsh`)** is the official Windows shell for CI and release confidence.
- **CMD** and **Git Bash** are treated as **best-effort smoke environments**.

## What is validated

On `windows-latest`, CI runs:

1. Full test/build job (`bun test`, `bun run build`)
2. Shell smoke checks for:
   - `pwsh` (required)
   - `cmd` (best-effort)
   - `bash` / Git Bash (best-effort)

Smoke checks execute:

- `bun run cdx.ts --help`
- `bun run cdx.ts --version`
- `bun run cdx.ts doctor`

## Known limitations

- CMD and Git Bash checks are non-blocking by design (`continue-on-error`) to keep CI focused on PowerShell as the official shell.
- Interactive command flows are not covered by shell smoke checks.
- Shell-specific quoting/path behavior can still differ in edge cases even when smoke checks pass.
