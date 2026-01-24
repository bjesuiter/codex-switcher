import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["cdx.ts"],
  format: ["esm"],
  clean: true,
  treeshake: true,
  platform: "node",
  target: "es2022",
});
