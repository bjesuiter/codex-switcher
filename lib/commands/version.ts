import type { Command } from "commander";

export const registerVersionCommand = (
  program: Command,
  version: string,
): void => {
  program
    .command("version")
    .description("Show CLI version")
    .action(() => {
      process.stdout.write(`${version}\n`);
    });
};
