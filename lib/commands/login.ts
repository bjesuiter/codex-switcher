import type { Command } from "commander";
import { performLogin } from "../oauth/login";
import { exitWithCommandError } from "./errors";

export type LoginDeps = {
  performLogin?: typeof performLogin;
};

export const registerLoginCommand = (
  program: Command,
  deps: LoginDeps = {},
): void => {
  const runLogin = deps.performLogin ?? performLogin;

  program
    .command("login")
    .description("Add a new OpenAI account via OAuth")
    .action(async () => {
      try {
        const result = await runLogin();
        if (!result) {
          process.stderr.write("Login failed.\n");
          process.exit(1);
        }
      } catch (error) {
        exitWithCommandError(error);
      }
    });
};
