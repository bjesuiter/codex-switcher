import type { OAuthPayload } from "./types";

const SERVICE_PREFIX = "cdx-openai-";
const FIELD_SEPARATOR = "::";

const REQUIRED_FIELDS = ["refresh", "access", "expires"] as const;
const ALL_FIELDS = [...REQUIRED_FIELDS, "idToken"] as const;

type WindowsCredentialField = (typeof ALL_FIELDS)[number];

type CredentialReadResult =
  | { found: false }
  | { found: true; username: string; value: string };

export type WindowsCredentialBackend = {
  write(target: string, username: string, value: string): void;
  read(target: string): CredentialReadResult;
  delete(target: string): void;
  list(prefix: string): string[];
};

const CREDENTIAL_MANAGER_TYPE_DEFINITION = String.raw`
using System;
using System.Runtime.InteropServices;

namespace Cdx {
  public static class WindowsCredentialManager {
    [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
    public struct CREDENTIAL {
      public UInt32 Flags;
      public UInt32 Type;
      public string TargetName;
      public string Comment;
      public System.Runtime.InteropServices.ComTypes.FILETIME LastWritten;
      public UInt32 CredentialBlobSize;
      public IntPtr CredentialBlob;
      public UInt32 Persist;
      public UInt32 AttributeCount;
      public IntPtr Attributes;
      public string TargetAlias;
      public string UserName;
    }

    [DllImport("advapi32.dll", CharSet = CharSet.Unicode, SetLastError = true, EntryPoint = "CredReadW")]
    public static extern bool CredRead(string target, uint type, uint reservedFlag, out IntPtr credentialPtr);

    [DllImport("advapi32.dll", CharSet = CharSet.Unicode, SetLastError = true, EntryPoint = "CredWriteW")]
    public static extern bool CredWrite([In] ref CREDENTIAL userCredential, uint flags);

    [DllImport("advapi32.dll", CharSet = CharSet.Unicode, SetLastError = true, EntryPoint = "CredDeleteW")]
    public static extern bool CredDelete(string target, uint type, uint flags);

    [DllImport("advapi32.dll", CharSet = CharSet.Unicode, SetLastError = true, EntryPoint = "CredEnumerateW")]
    public static extern bool CredEnumerate(string filter, uint flag, out uint count, out IntPtr credentials);

    [DllImport("advapi32.dll", SetLastError = false)]
    public static extern void CredFree(IntPtr buffer);
  }
}
`;

const escapePowerShellLiteral = (value: string): string => value.replaceAll("'", "''");

const toPowerShellLiteral = (value: string): string => `'${escapePowerShellLiteral(value)}'`;

const wrapPowerShellScript = (body: string): string => `
$ErrorActionPreference = 'Stop'
if (-not ('Cdx.WindowsCredentialManager' -as [type])) {
  Add-Type -TypeDefinition @'
${CREDENTIAL_MANAGER_TYPE_DEFINITION}
'@
}
${body}
`;

const runPowerShellScript = (script: string): string => {
  let result: Bun.SpawnSyncReturns<"pipe", "pipe">;

  try {
    result = Bun.spawnSync({
      cmd: [
        "powershell.exe",
        "-NoProfile",
        "-NonInteractive",
        "-ExecutionPolicy",
        "Bypass",
        "-Command",
        script,
      ],
      stdout: "pipe",
      stderr: "pipe",
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to run PowerShell for Windows Credential Manager: ${msg}`);
  }

  if (result.exitCode !== 0) {
    const stderr = result.stderr.toString().trim();
    const stdout = result.stdout.toString().trim();
    const message = stderr || stdout || "PowerShell command failed";
    throw new Error(message);
  }

  return result.stdout.toString().trim();
};

const parseJsonOutput = <T>(json: string, context: string): T => {
  if (!json) {
    throw new Error(`Missing JSON output from PowerShell while ${context}.`);
  }

  try {
    return JSON.parse(json) as T;
  } catch {
    throw new Error(`Invalid JSON output from PowerShell while ${context}.`);
  }
};

const WINDOWS_CREDENTIAL_NOT_FOUND = 1168;

const windowsCredentialBackend: WindowsCredentialBackend = {
  write(target: string, username: string, value: string): void {
    const blobBase64 = Buffer.from(value, "utf8").toString("base64");

    const script = wrapPowerShellScript(`
$target = ${toPowerShellLiteral(target)}
$username = ${toPowerShellLiteral(username)}
$blobBase64 = ${toPowerShellLiteral(blobBase64)}
$bytes = [Convert]::FromBase64String($blobBase64)

$credential = New-Object Cdx.WindowsCredentialManager+CREDENTIAL
$credential.Type = 1
$credential.TargetName = $target
$credential.UserName = $username
$credential.Persist = 2
$credential.CredentialBlobSize = [uint32]$bytes.Length
$credential.CredentialBlob = [Runtime.InteropServices.Marshal]::AllocCoTaskMem($bytes.Length)
[Runtime.InteropServices.Marshal]::Copy($bytes, 0, $credential.CredentialBlob, $bytes.Length)

try {
  $ok = [Cdx.WindowsCredentialManager]::CredWrite([ref]$credential, 0)
  if (-not $ok) {
    $code = [Runtime.InteropServices.Marshal]::GetLastWin32Error()
    throw "CredWrite failed with Win32 error $code for target '$target'."
  }
} finally {
  if ($credential.CredentialBlob -ne [IntPtr]::Zero) {
    for ($i = 0; $i -lt $bytes.Length; $i++) {
      [Runtime.InteropServices.Marshal]::WriteByte($credential.CredentialBlob, $i, 0)
    }
    [Runtime.InteropServices.Marshal]::FreeCoTaskMem($credential.CredentialBlob)
  }
}
`);

    runPowerShellScript(script);
  },

  read(target: string): CredentialReadResult {
    const script = wrapPowerShellScript(`
$target = ${toPowerShellLiteral(target)}
$ptr = [IntPtr]::Zero
$ok = [Cdx.WindowsCredentialManager]::CredRead($target, 1, 0, [ref]$ptr)

if (-not $ok) {
  $code = [Runtime.InteropServices.Marshal]::GetLastWin32Error()
  if ($code -eq ${WINDOWS_CREDENTIAL_NOT_FOUND}) {
    '{"found":false}'
    exit 0
  }
  throw "CredRead failed with Win32 error $code for target '$target'."
}

try {
  $credential = [Runtime.InteropServices.Marshal]::PtrToStructure(
    $ptr,
    [type][Cdx.WindowsCredentialManager+CREDENTIAL]
  )

  $value = ''
  if ($credential.CredentialBlobSize -gt 0) {
    $bytes = New-Object byte[] $credential.CredentialBlobSize
    [Runtime.InteropServices.Marshal]::Copy(
      $credential.CredentialBlob,
      $bytes,
      0,
      $credential.CredentialBlobSize
    )
    $value = [System.Text.Encoding]::UTF8.GetString($bytes)
  }

  $result = [pscustomobject]@{
    found = $true
    username = $credential.UserName
    value = $value
  }

  $result | ConvertTo-Json -Compress
} finally {
  [Cdx.WindowsCredentialManager]::CredFree($ptr)
}
`);

    const raw = runPowerShellScript(script);
    return parseJsonOutput<CredentialReadResult>(raw, `reading credential '${target}'`);
  },

  delete(target: string): void {
    const script = wrapPowerShellScript(`
$target = ${toPowerShellLiteral(target)}
$ok = [Cdx.WindowsCredentialManager]::CredDelete($target, 1, 0)
if (-not $ok) {
  $code = [Runtime.InteropServices.Marshal]::GetLastWin32Error()
  if ($code -eq ${WINDOWS_CREDENTIAL_NOT_FOUND}) {
    exit 0
  }
  throw "CredDelete failed with Win32 error $code for target '$target'."
}
`);

    runPowerShellScript(script);
  },

  list(prefix: string): string[] {
    const script = wrapPowerShellScript(`
$filter = ${toPowerShellLiteral(`${prefix}*`)}
$count = [uint32]0
$ptr = [IntPtr]::Zero
$ok = [Cdx.WindowsCredentialManager]::CredEnumerate($filter, 0, [ref]$count, [ref]$ptr)

if (-not $ok) {
  $code = [Runtime.InteropServices.Marshal]::GetLastWin32Error()
  if ($code -eq ${WINDOWS_CREDENTIAL_NOT_FOUND}) {
    '[]'
    exit 0
  }
  throw "CredEnumerate failed with Win32 error $code for filter '$filter'."
}

$targets = New-Object System.Collections.Generic.List[string]

try {
  for ($i = 0; $i -lt $count; $i++) {
    $credentialPtr = [Runtime.InteropServices.Marshal]::ReadIntPtr($ptr, [IntPtr]::Size * $i)
    $credential = [Runtime.InteropServices.Marshal]::PtrToStructure(
      $credentialPtr,
      [type][Cdx.WindowsCredentialManager+CREDENTIAL]
    )

    if ($credential.TargetName) {
      [void]$targets.Add($credential.TargetName)
    }
  }

  @($targets.ToArray()) | ConvertTo-Json -Compress
} finally {
  [Cdx.WindowsCredentialManager]::CredFree($ptr)
}
`);

    const raw = runPowerShellScript(script);
    const parsed = parseJsonOutput<string[] | string>(raw, "listing Windows credentials");

    if (Array.isArray(parsed)) {
      return parsed.filter((target) => typeof target === "string");
    }

    return typeof parsed === "string" ? [parsed] : [];
  },
};

export const getWindowsCredentialService = (accountId: string): string => {
  return `${SERVICE_PREFIX}${accountId}`;
};

export const getWindowsCredentialTarget = (
  accountId: string,
  field: WindowsCredentialField,
): string => {
  return `${getWindowsCredentialService(accountId)}${FIELD_SEPARATOR}${field}`;
};

export const saveWindowsCredentialPayload = (
  accountId: string,
  payload: OAuthPayload,
  backend: WindowsCredentialBackend = windowsCredentialBackend,
): void => {
  backend.write(getWindowsCredentialTarget(accountId, "refresh"), accountId, payload.refresh);
  backend.write(getWindowsCredentialTarget(accountId, "access"), accountId, payload.access);
  backend.write(getWindowsCredentialTarget(accountId, "expires"), accountId, String(payload.expires));

  if (payload.idToken) {
    backend.write(getWindowsCredentialTarget(accountId, "idToken"), accountId, payload.idToken);
  } else {
    backend.delete(getWindowsCredentialTarget(accountId, "idToken"));
  }
};

const readRequiredField = (
  accountId: string,
  field: (typeof REQUIRED_FIELDS)[number],
  backend: WindowsCredentialBackend,
): string => {
  const entry = backend.read(getWindowsCredentialTarget(accountId, field));

  if (!entry.found) {
    throw new Error(`Credential field '${field}' missing for account ${accountId}.`);
  }

  return entry.value;
};

export const loadWindowsCredentialPayload = (
  accountId: string,
  backend: WindowsCredentialBackend = windowsCredentialBackend,
): OAuthPayload => {
  const refresh = readRequiredField(accountId, "refresh", backend);
  const access = readRequiredField(accountId, "access", backend);
  const expiresRaw = readRequiredField(accountId, "expires", backend);

  const expires = Number.parseInt(expiresRaw, 10);
  if (!Number.isFinite(expires)) {
    throw new Error(`Credential field 'expires' is invalid for account ${accountId}.`);
  }

  const idTokenEntry = backend.read(getWindowsCredentialTarget(accountId, "idToken"));

  return {
    refresh,
    access,
    expires,
    accountId,
    ...(idTokenEntry.found && idTokenEntry.value
      ? { idToken: idTokenEntry.value }
      : {}),
  };
};

export const deleteWindowsCredentialPayload = (
  accountId: string,
  backend: WindowsCredentialBackend = windowsCredentialBackend,
): void => {
  for (const field of ALL_FIELDS) {
    backend.delete(getWindowsCredentialTarget(accountId, field));
  }
};

export const windowsCredentialPayloadExists = (
  accountId: string,
  backend: WindowsCredentialBackend = windowsCredentialBackend,
): boolean => {
  return backend.read(getWindowsCredentialTarget(accountId, "refresh")).found;
};

export const listWindowsCredentialAccounts = (
  backend: WindowsCredentialBackend = windowsCredentialBackend,
): string[] => {
  const targets = backend.list(SERVICE_PREFIX);
  const fieldPattern = new RegExp(
    `^${SERVICE_PREFIX.replaceAll("-", "\\-")}(.+)${FIELD_SEPARATOR}(refresh|access|expires|idToken)$`,
  );

  const accounts = new Map<string, Set<WindowsCredentialField>>();

  for (const target of targets) {
    const match = fieldPattern.exec(target);
    if (!match || !match[1] || !match[2]) continue;

    const accountId = match[1];
    const field = match[2] as WindowsCredentialField;

    const fields = accounts.get(accountId) ?? new Set<WindowsCredentialField>();
    fields.add(field);
    accounts.set(accountId, fields);
  }

  return [...accounts.entries()]
    .filter(([, fields]) => fields.has("refresh"))
    .map(([accountId]) => accountId)
    .sort();
};
