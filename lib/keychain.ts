import type { OAuthPayload } from "./types";

const SERVICE_PREFIX = "cdx-openai-";

export const getKeychainService = (accountId: string): string => {
  return `${SERVICE_PREFIX}${accountId}`;
};

export const runSecurity = (args: string[]): string => {
  const result = Bun.spawnSync({
    cmd: ["security", ...args],
    stderr: "pipe",
    stdout: "pipe",
  });

  if (result.exitCode !== 0) {
    const message = result.stderr.toString().trim();
    throw new Error(message || "Keychain command failed");
  }

  return result.stdout.toString();
};

export const runSecuritySafe = (args: string[]): { success: boolean; output: string } => {
  const result = Bun.spawnSync({
    cmd: ["security", ...args],
    stderr: "pipe",
    stdout: "pipe",
  });

  return {
    success: result.exitCode === 0,
    output: result.exitCode === 0 ? result.stdout.toString() : result.stderr.toString(),
  };
};

export const runSecuritySafeAsync = async (
  args: string[],
): Promise<{ success: boolean; output: string }> => {
  const childProcess = Bun.spawn(["security", ...args], {
    stderr: "pipe",
    stdout: "pipe",
  });

  const stdoutPromise = childProcess.stdout
    ? new Response(childProcess.stdout).text()
    : Promise.resolve("");
  const stderrPromise = childProcess.stderr
    ? new Response(childProcess.stderr).text()
    : Promise.resolve("");

  const [exitCode, stdout, stderr] = await Promise.all([
    childProcess.exited,
    stdoutPromise,
    stderrPromise,
  ]);

  return {
    success: exitCode === 0,
    output: exitCode === 0 ? stdout : stderr,
  };
};

export const saveKeychainPayload = (accountId: string, payload: OAuthPayload): void => {
  const service = getKeychainService(accountId);
  const payloadJson = JSON.stringify(payload);

  runSecurity([
    "add-generic-password",
    "-a",
    accountId,
    "-s",
    service,
    "-w",
    payloadJson,
    "-U",
  ]);
};

export const loadKeychainPayload = (accountId: string): OAuthPayload => {
  const service = getKeychainService(accountId);
  const raw = runSecurity(["find-generic-password", "-s", service, "-w"]).trim();

  if (!raw) {
    throw new Error(`No Keychain payload found for account ${accountId}.`);
  }

  const parsed = JSON.parse(raw) as OAuthPayload;

  if (!parsed.refresh || !parsed.access || !parsed.expires || !parsed.accountId) {
    throw new Error(`Keychain payload for account ${accountId} is missing required fields.`);
  }

  return parsed;
};

export const deleteKeychainPayload = (accountId: string): void => {
  const service = getKeychainService(accountId);
  runSecurity(["delete-generic-password", "-s", service]);
};

export const keychainPayloadExists = (accountId: string): boolean => {
  const service = getKeychainService(accountId);
  const result = runSecuritySafe(["find-generic-password", "-s", service]);
  return result.success;
};

export const listKeychainAccounts = (): string[] => {
  const result = Bun.spawnSync({
    cmd: ["security", "dump-keychain"],
    stderr: "pipe",
    stdout: "pipe",
  });

  if (result.exitCode !== 0) {
    return [];
  }

  const output = result.stdout.toString();
  const accounts: string[] = [];
  const serviceRegex = new RegExp(`"svce"<blob>="${SERVICE_PREFIX}([^"]+)"`, "g");

  let match: RegExpExecArray | null;
  while ((match = serviceRegex.exec(output)) !== null) {
    if (match[1]) {
      accounts.push(match[1]);
    }
  }

  return [...new Set(accounts)];
};
