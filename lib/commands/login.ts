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
    .option(
      "--device-flow",
      "Use OAuth device flow instead of browser callback flow (manual/browser flow is recommended; device flow may fail on some VPS due to Cloudflare)",
    )
    .action(async (options: { deviceFlow?: boolean }) => {
      try {
        const result = await runLogin({
          authFlow: options.deviceFlow ? "device" : "auto",
        });
        if (!result) {
          process.stderr.write("Login failed.\n");
          process.exit(1);
        }
      } catch (error) {
        exitWithCommandError(error);
      }
    });
};
