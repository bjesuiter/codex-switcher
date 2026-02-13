import { runSecuritySafe, runSecuritySafeAsync } from "./keychain";

export type KeychainDecryptAccessMode = "explicit-list" | "all-apps" | "missing";

export type KeychainDecryptAccessInfo = {
  service: string;
  mode: KeychainDecryptAccessMode;
  applications: string[];
};

const getDefaultMap = (
  services: string[],
): Map<string, KeychainDecryptAccessInfo> => {
  const map = new Map<string, KeychainDecryptAccessInfo>();
  for (const service of services) {
    map.set(service, {
      service,
      mode: "missing",
      applications: [],
    });
  }
  return map;
};

const parseItemEntries = (block: string): string[] => {
  const entries: string[] = [];
  const entryRegex = /entry\s+\d+:\n([\s\S]*?)(?=\n\s*entry\s+\d+:|$)/g;

  let match: RegExpExecArray | null;
  while ((match = entryRegex.exec(block)) !== null) {
    if (match[1]) {
      entries.push(match[1]);
    }
  }

  return entries;
};

const parseApplicationsFromEntry = (entry: string): string[] => {
  const applications: string[] = [];
  const appRegex = /^\s*\d+:\s+(.+?)(?:\s+\([^\n]*\))?\s*$/gm;

  let match: RegExpExecArray | null;
  while ((match = appRegex.exec(entry)) !== null) {
    const app = match[1]?.trim();
    if (app) {
      applications.push(app);
    }
  }

  return applications;
};

export const parseKeychainDecryptAccessFromDump = (
  dumpOutput: string,
  services: string[],
): Map<string, KeychainDecryptAccessInfo> => {
  const dedupedServices = [...new Set(services.filter((service) => service.length > 0))];
  const result = getDefaultMap(dedupedServices);

  if (dedupedServices.length === 0 || !dumpOutput.trim()) {
    return result;
  }

  const targetServices = new Set(dedupedServices);
  const blocks = dumpOutput.split(/\n(?=keychain:\s+")/g);

  for (const block of blocks) {
    if (!block.startsWith("keychain:")) {
      continue;
    }

    const serviceMatch = block.match(/"svce"<blob>="([^"]+)"/);
    const service = serviceMatch?.[1];
    if (!service || !targetServices.has(service)) {
      continue;
    }

    const entries = parseItemEntries(block);
    let mode: KeychainDecryptAccessMode = "missing";
    const applications: string[] = [];

    for (const entry of entries) {
      const authorizationsLine = entry.match(/authorizations\s*\(\d+\):\s*([^\n]+)/)?.[1] ?? "";
      if (!/\bdecrypt\b/.test(authorizationsLine)) {
        continue;
      }

      if (/applications:\s*<null>/.test(entry)) {
        mode = "all-apps";
        applications.length = 0;
        break;
      }

      const entryApplications = parseApplicationsFromEntry(entry);
      if (entryApplications.length > 0) {
        mode = "explicit-list";
        for (const app of entryApplications) {
          if (!applications.includes(app)) {
            applications.push(app);
          }
        }
      }
    }

    result.set(service, {
      service,
      mode,
      applications,
    });
  }

  return result;
};

export const getKeychainDecryptAccessByService = (
  services: string[],
): Map<string, KeychainDecryptAccessInfo> => {
  const dedupedServices = [...new Set(services.filter((service) => service.length > 0))];
  const defaultResult = getDefaultMap(dedupedServices);

  if (process.platform !== "darwin" || dedupedServices.length === 0) {
    return defaultResult;
  }

  const dumpResult = runSecuritySafe(["dump-keychain", "-a"]);
  if (!dumpResult.success) {
    return defaultResult;
  }

  return parseKeychainDecryptAccessFromDump(dumpResult.output, dedupedServices);
};

export const getKeychainDecryptAccessByServiceAsync = async (
  services: string[],
): Promise<Map<string, KeychainDecryptAccessInfo>> => {
  const dedupedServices = [...new Set(services.filter((service) => service.length > 0))];
  const defaultResult = getDefaultMap(dedupedServices);

  if (process.platform !== "darwin" || dedupedServices.length === 0) {
    return defaultResult;
  }

  const dumpResult = await runSecuritySafeAsync(["dump-keychain", "-a"]);
  if (!dumpResult.success) {
    return defaultResult;
  }

  return parseKeychainDecryptAccessFromDump(dumpResult.output, dedupedServices);
};
