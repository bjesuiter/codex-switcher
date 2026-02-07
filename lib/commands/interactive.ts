import type { Command } from "commander";
import { runInteractiveMode } from "../interactive";
import { exitWithCommandError } from "./errors";

export const registerDefaultInteractiveAction = (
  program: Command,
): void => {
  program.action(async () => {
    try {
      await runInteractiveMode();
    } catch (error) {
      exitWithCommandError(error);
    }
  });
};
