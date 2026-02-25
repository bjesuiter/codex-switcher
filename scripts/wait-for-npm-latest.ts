import { readFile } from "node:fs/promises";
import { join } from "node:path";

type Options = {
  packageName: string;
  targetVersion: string;
  intervalSeconds: number;
  timeoutSeconds: number;
};

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const printUsage = (): void => {
  process.stdout.write(`Usage: bun run scripts/wait-for-npm-latest.ts [options]\n\n`);
  process.stdout.write(`Wait until npm dist-tag 'latest' matches a target version.\n\n`);
  process.stdout.write(`Options:\n`);
  process.stdout.write(`  --package <name>      npm package name (default: package.json name)\n`);
  process.stdout.write(`  --version <version>   target version (default: package.json version)\n`);
  process.stdout.write(`  --interval <seconds>  poll interval (default: 10)\n`);
  process.stdout.write(`  --timeout <seconds>   timeout (default: 600)\n`);
  process.stdout.write(`  --help                show this help\n`);
};

const parsePositiveNumber = (value: string, flag: string): number => {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`Invalid value for ${flag}: ${value}`);
  }
  return parsed;
};

const getArgValue = (args: string[], index: number, flag: string): string => {
  const value = args[index + 1];
  if (!value || value.startsWith("--")) {
    throw new Error(`Missing value for ${flag}`);
  }
  return value;
};

const loadRootPackageJson = async (): Promise<{ name: string; version: string }> => {
  const repoRoot = join(import.meta.dirname, "..");
  const pkgRaw = await readFile(join(repoRoot, "package.json"), "utf8");
  const pkg = JSON.parse(pkgRaw) as { name?: unknown; version?: unknown };

  if (typeof pkg.name !== "string" || !pkg.name) {
    throw new Error("Could not read package name from package.json");
  }

  if (typeof pkg.version !== "string" || !pkg.version) {
    throw new Error("Could not read package version from package.json");
  }

  return { name: pkg.name, version: pkg.version };
};

const parseOptions = async (): Promise<Options> => {
  const defaults = await loadRootPackageJson();

  const options: Options = {
    packageName: defaults.name,
    targetVersion: defaults.version,
    intervalSeconds: 10,
    timeoutSeconds: 600,
  };

  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];

    if (arg === "--help" || arg === "-h") {
      printUsage();
      process.exit(0);
    }

    if (arg === "--package") {
      options.packageName = getArgValue(args, i, arg);
      i += 1;
      continue;
    }

    if (arg === "--version") {
      options.targetVersion = getArgValue(args, i, arg);
      i += 1;
      continue;
    }

    if (arg === "--interval") {
      options.intervalSeconds = parsePositiveNumber(getArgValue(args, i, arg), arg);
      i += 1;
      continue;
    }

    if (arg === "--timeout") {
      options.timeoutSeconds = parsePositiveNumber(getArgValue(args, i, arg), arg);
      i += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
};

type NpmRegistryResponse = {
  "dist-tags"?: {
    latest?: string;
  };
  versions?: Record<string, unknown>;
};

const fetchNpmLatest = async (
  packageName: string,
): Promise<{ latest: string | null; versions: string[] }> => {
  const encodedPackage = encodeURIComponent(packageName);
  const url = `https://registry.npmjs.org/${encodedPackage}`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Cache-Control": "no-cache",
    },
  });

  if (!response.ok) {
    throw new Error(`npm registry request failed (${response.status} ${response.statusText})`);
  }

  const json = (await response.json()) as NpmRegistryResponse;
  const latest = json["dist-tags"]?.latest ?? null;
  const versions = json.versions ? Object.keys(json.versions) : [];

  return { latest, versions };
};

const waitForNpmLatest = async (options: Options): Promise<void> => {
  const startedAt = Date.now();
  const deadline = startedAt + options.timeoutSeconds * 1000;

  process.stdout.write(
    `Waiting for npm latest of ${options.packageName} to become ${options.targetVersion}...\n`,
  );
  process.stdout.write(
    `Polling every ${options.intervalSeconds}s, timeout ${options.timeoutSeconds}s\n\n`,
  );

  let attempt = 0;
  while (true) {
    attempt += 1;

    try {
      const { latest, versions } = await fetchNpmLatest(options.packageName);
      const hasTargetVersion = versions.includes(options.targetVersion);

      if (latest === options.targetVersion) {
        const elapsedSeconds = Math.round((Date.now() - startedAt) / 1000);
        process.stdout.write(
          `✅ latest is now ${options.targetVersion} (after ${elapsedSeconds}s, attempt ${attempt})\n`,
        );
        return;
      }

      process.stdout.write(
        `[${attempt}] latest=${latest ?? "<none>"}, target=${options.targetVersion}, targetPublished=${hasTargetVersion}\n`,
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      process.stdout.write(`[${attempt}] request failed: ${message}\n`);
    }

    if (Date.now() >= deadline) {
      throw new Error(
        `Timed out after ${options.timeoutSeconds}s waiting for latest=${options.targetVersion}`,
      );
    }

    await sleep(options.intervalSeconds * 1000);
  }
};

const main = async (): Promise<void> => {
  const options = await parseOptions();
  await waitForNpmLatest(options);
};

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`Error: ${message}\n`);
  process.exit(1);
});
