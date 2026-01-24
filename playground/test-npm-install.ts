#!/usr/bin/env bun
import { $ } from "bun";
import { join } from "node:path";

const playgroundDir = import.meta.dirname;
const cdxBin = join(playgroundDir, "node_modules", ".bin", "cdx");

console.log("=== Installing @bjesuiter/codex-switch from npm ===\n");
await $`npm install`.cwd(playgroundDir);

console.log("\n=== Testing cdx --version ===");
const version = await $`${cdxBin} --version`.cwd(playgroundDir).text();
console.log(`Version: ${version.trim()}`);

console.log("\n=== Testing cdx -v ===");
const vFlag = await $`${cdxBin} -v`.cwd(playgroundDir).text();
console.log(`Version: ${vFlag.trim()}`);

console.log("\n=== Testing cdx version ===");
const versionCmd = await $`${cdxBin} version`.cwd(playgroundDir).text();
console.log(`Version: ${versionCmd.trim()}`);

console.log("\n=== Testing cdx --help ===");
const help = await $`${cdxBin} --help`.cwd(playgroundDir).text();
console.log(help);

console.log("\n=== All checks passed ===");
