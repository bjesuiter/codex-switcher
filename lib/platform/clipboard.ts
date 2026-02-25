import { spawnSync } from "node:child_process";

export type ClipboardMethod =
  | "pbcopy"
  | "clip"
  | "powershell"
  | "wl-copy"
  | "xclip"
  | "xsel"
  | "osc52"
  | "none";

export type ClipboardCommandTarget = {
  kind: "command";
  method: Exclude<ClipboardMethod, "osc52" | "none">;
  command: string;
  args: string[];
};

export type ClipboardOsc52Target = {
  kind: "osc52";
  method: "osc52";
};

export type ClipboardTarget = ClipboardCommandTarget | ClipboardOsc52Target;

export type ClipboardContext = {
  platform?: NodeJS.Platform;
  env?: NodeJS.ProcessEnv;
  isTTY?: boolean;
};

export type ClipboardCopyResult = {
  ok: boolean;
  method: ClipboardMethod;
  error?: string;
  warning?: string;
};

type CommandExistsFn = (command: string, platform: NodeJS.Platform) => boolean;
type RunCommandFn = (
  command: string,
  args: string[],
  input: string,
) => { ok: boolean; error?: string };
type StdoutWriteFn = (chunk: string) => void;

const isCommandAvailable = (
  command: string,
  platform: NodeJS.Platform = process.platform,
): boolean => {
  const probe = platform === "win32" ? "where" : "which";
  const result = Bun.spawnSync({
    cmd: [probe, command],
    stdout: "pipe",
    stderr: "pipe",
  });

  return result.exitCode === 0;
};

export const isLikelyMoshSession = (
  env: NodeJS.ProcessEnv = process.env,
): boolean => Boolean(env.MOSH_IP || env.MOSH_KEY || env.MOSH_PREDICTION_DISPLAY);

export const isLikelyRemoteSession = (
  env: NodeJS.ProcessEnv = process.env,
): boolean => {
  if (env.SSH_CONNECTION || env.SSH_CLIENT || env.SSH_TTY) {
    return true;
  }

  return isLikelyMoshSession(env);
};

const hasDisplayServer = (
  env: NodeJS.ProcessEnv,
): boolean => Boolean(env.WAYLAND_DISPLAY || env.DISPLAY);

const supportsOsc52 = (
  isTTY: boolean,
  env: NodeJS.ProcessEnv,
): boolean => {
  if (!isTTY) {
    return false;
  }

  const term = (env.TERM ?? "").toLowerCase();
  if (term === "dumb") {
    return false;
  }

  return true;
};

const getLocalClipboardTargets = (
  platform: NodeJS.Platform,
  env: NodeJS.ProcessEnv,
  commandExists: CommandExistsFn,
): ClipboardCommandTarget[] => {
  if (platform === "darwin") {
    return commandExists("pbcopy", platform)
      ? [{ kind: "command", method: "pbcopy", command: "pbcopy", args: [] }]
      : [];
  }

  if (platform === "win32") {
    const targets: ClipboardCommandTarget[] = [];

    if (commandExists("clip", platform)) {
      targets.push({ kind: "command", method: "clip", command: "cmd", args: ["/c", "clip"] });
    }

    if (commandExists("powershell", platform)) {
      targets.push({
        kind: "command",
        method: "powershell",
        command: "powershell",
        args: [
          "-NoProfile",
          "-Command",
          "$v=[Console]::In.ReadToEnd(); Set-Clipboard -Value $v",
        ],
      });
    }

    if (commandExists("pwsh", platform)) {
      targets.push({
        kind: "command",
        method: "powershell",
        command: "pwsh",
        args: [
          "-NoProfile",
          "-Command",
          "$v=[Console]::In.ReadToEnd(); Set-Clipboard -Value $v",
        ],
      });
    }

    return targets;
  }

  const targets: ClipboardCommandTarget[] = [];
  const wayland = Boolean(env.WAYLAND_DISPLAY);
  const x11 = Boolean(env.DISPLAY);
  const remote = isLikelyRemoteSession(env);

  if (remote && !hasDisplayServer(env)) {
    return targets;
  }

  if (wayland && commandExists("wl-copy", platform)) {
    targets.push({ kind: "command", method: "wl-copy", command: "wl-copy", args: [] });
  }

  if ((x11 || !wayland) && commandExists("xclip", platform)) {
    targets.push({
      kind: "command",
      method: "xclip",
      command: "xclip",
      args: ["-selection", "clipboard"],
    });
  }

  if ((x11 || !wayland) && commandExists("xsel", platform)) {
    targets.push({
      kind: "command",
      method: "xsel",
      command: "xsel",
      args: ["--clipboard", "--input"],
    });
  }

  if (!wayland && commandExists("wl-copy", platform)) {
    targets.push({ kind: "command", method: "wl-copy", command: "wl-copy", args: [] });
  }

  return targets;
};

export const resolveClipboardTargets = (
  context: ClipboardContext = {},
  commandExists: CommandExistsFn = isCommandAvailable,
): ClipboardTarget[] => {
  const platform = context.platform ?? process.platform;
  const env = context.env ?? process.env;
  const isTTY = context.isTTY ?? (Boolean(process.stdin.isTTY) && Boolean(process.stdout.isTTY));

  const localTargets = getLocalClipboardTargets(platform, env, commandExists);
  const remote = isLikelyRemoteSession(env);
  const allowOsc52 = supportsOsc52(isTTY, env);

  const result: ClipboardTarget[] = [];

  if (remote && allowOsc52) {
    result.push({ kind: "osc52", method: "osc52" });
  }

  result.push(...localTargets);

  if (!remote && allowOsc52) {
    result.push({ kind: "osc52", method: "osc52" });
  }

  return result;
};

export const buildOsc52Sequence = (
  text: string,
  env: NodeJS.ProcessEnv = process.env,
): string => {
  const payload = Buffer.from(text, "utf8").toString("base64");
  const osc = `\u001b]52;c;${payload}\u0007`;

  if (env.TMUX) {
    return `\u001bPtmux;\u001b${osc}\u001b\\`;
  }

  const term = (env.TERM ?? "").toLowerCase();
  if (env.STY || term.startsWith("screen")) {
    return `\u001bP${osc}\u001b\\`;
  }

  return osc;
};

const defaultRunCommand: RunCommandFn = (command, args, input) => {
  const result = spawnSync(command, args, {
    input,
    encoding: "utf8",
    windowsHide: true,
  });

  if (result.status === 0) {
    return { ok: true };
  }

  const stderr = typeof result.stderr === "string" ? result.stderr.trim() : "";
  const stdout = typeof result.stdout === "string" ? result.stdout.trim() : "";
  const fallback = stderr || stdout || `exit status ${result.status ?? "unknown"}`;

  return { ok: false, error: fallback };
};

export const tryCopyToClipboard = (
  text: string,
  options: ClipboardContext & {
    commandExistsImpl?: CommandExistsFn;
    runCommandImpl?: RunCommandFn;
    writeStdoutImpl?: StdoutWriteFn;
  } = {},
): ClipboardCopyResult => {
  const commandExists = options.commandExistsImpl ?? isCommandAvailable;
  const runCommand = options.runCommandImpl ?? defaultRunCommand;
  const writeStdout = options.writeStdoutImpl ?? ((chunk: string) => {
    process.stdout.write(chunk);
  });

  const targets = resolveClipboardTargets(options, commandExists);

  if (targets.length === 0) {
    return {
      ok: false,
      method: "none",
      error: "No clipboard method available in this environment",
    };
  }

  const errors: string[] = [];

  for (const target of targets) {
    if (target.kind === "osc52") {
      const env = options.env ?? process.env;
      try {
        writeStdout(buildOsc52Sequence(text, env));

        if (isLikelyMoshSession(env)) {
          return {
            ok: true,
            method: "osc52",
            warning:
              "Mosh session detected: OSC52 clipboard updates may not work reliably. If clipboard did not update, copy the URL manually from above.",
          };
        }

        return { ok: true, method: "osc52" };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        errors.push(`osc52: ${message}`);
        continue;
      }
    }

    const commandResult = runCommand(target.command, target.args, text);
    if (commandResult.ok) {
      return { ok: true, method: target.method };
    }

    errors.push(`${target.method}: ${commandResult.error ?? "unknown error"}`);
  }

  return {
    ok: false,
    method: "none",
    error: errors.join("; "),
  };
};

const escapePosixSingleQuoted = (value: string): string => `'${value.replace(/'/g, `'"'"'`)}'`;

export const buildClipboardHelperCommand = (
  text: string,
  context: ClipboardContext = {},
  commandExists: CommandExistsFn = isCommandAvailable,
): string | null => {
  const targets = resolveClipboardTargets(context, commandExists);
  const commandTarget = targets.find((target): target is ClipboardCommandTarget => target.kind === "command");

  if (!commandTarget) {
    return null;
  }

  if (commandTarget.method === "powershell") {
    const escaped = text.replace(/'/g, "''");
    return `${commandTarget.command} -NoProfile -Command "Set-Clipboard -Value '${escaped}'"`;
  }

  if (commandTarget.method === "clip") {
    // Prefer a portable helper in shells that can run cmd.exe.
    return `printf '%s' ${escapePosixSingleQuoted(text)} | cmd /c clip`;
  }

  return `printf '%s' ${escapePosixSingleQuoted(text)} | ${commandTarget.command} ${commandTarget.args.join(" ")}`.trim();
};
