# cdx self-update specification

## Feature

Add a new command:

- `cdx update-self`

The command updates the globally installed `cdx` package to the latest published version using the most likely package manager (`bun`, `npm`, or `deno`).

---

## Goals

1. Provide a one-command self-update flow.
2. Auto-select the correct package manager when possible.
3. Be explicit and safe when detection is ambiguous.
4. Support dry-run output for transparency.

---

## Non-goals

1. Updating local/dev installs (e.g., `bun link`, git clone, workspace installs).
2. Managing OS package manager installs (Homebrew, apt, etc.).
3. Downgrades or pinning arbitrary versions in v1.

---

## CLI contract

### Command

- `cdx update-self`

### Options

- `--manager <auto|bun|npm|deno>`
  - default: `auto`
  - explicit override for manager selection
- `--dry-run`
  - print selected manager and exact command, do not execute
- `-y, --yes`
  - skip confirmation prompt before executing update

### Exit codes

- `0`: success (or dry-run success)
- `1`: failure (unsupported/unknown install context, command failed, cancelled, etc.)

---

## Detection model

Detection must produce **two signals**:

1. `runtime`: the currently executing runtime
2. `installManager`: best-effort guess of which manager installed the global binary

### Runtime detection (high confidence)

Order:

1. if `globalThis.Deno` exists → `deno`
2. else if `process.versions.bun` exists → `bun`
3. else if `process.versions.node` exists → `node`
4. else → `unknown`

### Install-manager detection (heuristic)

Use the resolved executable/script path (`process.argv[1]`, `import.meta.url`, realpath) and classify:

- path contains `.bun/install/global/node_modules` → `bun`
- path matches Node global module layouts (`.../lib/node_modules/...`, `%APPDATA%/npm/node_modules/...`) → `npm`
- path indicates Deno install layout (if present) → `deno`
- otherwise → `unknown`

If command option `--manager` is not `auto`, skip heuristic and use explicit choice.

### Final manager selection (auto mode)

1. Use `installManager` when known.
2. Else fallback by runtime:
   - runtime `bun` → manager `bun`
   - runtime `node` → manager `npm`
   - runtime `deno` → manager `deno`
3. Else fail with actionable error.

---

## Update commands

Package name: `@bjesuiter/codex-switcher`

- bun: `bun add -g @bjesuiter/codex-switcher@latest`
- npm: `npm i -g @bjesuiter/codex-switcher@latest`
- deno: `deno install -g -f -A -n cdx npm:@bjesuiter/codex-switcher@latest`

Execution requirements:

- Use spawned child process with inherited stdio.
- Bubble up non-zero exit code as command failure.

---

## UX/output requirements

Before execution, print:

1. detected runtime
2. detected install manager (or `unknown`)
3. selected manager (final)
4. exact command to run

If `--dry-run`, stop here with success.

If not `--yes`, prompt confirmation.

On success, print:

- update completed
- suggestion to run `cdx version`

On failure, print:

- concise reason
- fallback commands for manual update (bun/npm/deno)

---

## Edge cases

1. **Local/dev execution** (repo checkout, `bun link`, non-global path)
   - do not attempt update automatically
   - explain that self-update is only for global package installs
2. **Manager binary missing** (e.g., selected `npm` but not installed)
   - fail with clear message and alternatives
3. **Permission errors**
   - pass through stderr
   - suggest rerunning with proper permissions
4. **Current project is Bun-shebang based**
   - note in messaging that runtime may be Bun even if install manager differs

---

## Implementation plan (high level)

1. Add `registerUpdateSelfCommand(program)` in `lib/commands/update-self.ts`.
2. Export/register command in `lib/commands/index.ts` and `cdx.ts`.
3. Add helper module for detection + command construction:
   - `lib/runtime/install-manager.ts` (or similar)
4. Add tests:
   - runtime detection unit tests
   - path heuristic unit tests
   - manager selection priority tests
   - dry-run behavior tests
   - command construction tests

---

## Test cases (minimum)

1. Runtime bun + unknown install manager → bun selected.
2. Runtime bun + install manager npm → npm selected in auto mode.
3. Explicit `--manager npm` always selects npm.
4. Unknown runtime + unknown install manager → fail with guidance.
5. `--dry-run` prints command and does not execute child process.
6. Child process exits non-zero → command exits with error.

---

## Future enhancements

1. `--version <tag>` support (e.g., specific version or `next`).
2. Optional manager preference persistence in config.
3. Add `cdx doctor` section showing update-self detection info.
4. Add `cdx update-self --check` (compare current vs latest without installing).
