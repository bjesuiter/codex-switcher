import type { Command } from "commander";

export const registerHelpCommand = (program: Command): void => {
  program
    .command("help")
    .description("Show available commands and usage information")
    .argument("[command]", "Show help for a specific command")
    .action((commandName: string | undefined) => {
      if (commandName) {
        const command = program.commands.find(
          (entry) => entry.name() === commandName || entry.aliases().includes(commandName),
        );
        if (command) {
          command.outputHelp();
          return;
        }
        process.stderr.write(`Unknown command: ${commandName}\n`);
        program.outputHelp();
        process.exit(1);
      }

      program.outputHelp();
    });
};
