import { readFile, writeFile, copyFile } from "node:fs/promises";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const rootPkg = JSON.parse(await readFile(join(root, "package.json"), "utf-8"));

const distPkg = {
  name: rootPkg.name,
  version: rootPkg.version,
  type: rootPkg.type,
  description: rootPkg.description,
  bin: { cdx: "cdx.mjs" },
  keywords: rootPkg.keywords,
  repository: rootPkg.repository,
  license: rootPkg.license,
  author: rootPkg.author,
  dependencies: rootPkg.dependencies,
};

await writeFile(
  join(root, "dist", "package.json"),
  JSON.stringify(distPkg, null, 2) + "\n",
);

await copyFile(join(root, "LICENSE"), join(root, "dist", "LICENSE"));
await copyFile(join(root, "README.md"), join(root, "dist", "README.md"));

console.log("dist/package.json generated");
