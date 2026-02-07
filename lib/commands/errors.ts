export const exitWithCommandError = (error: unknown): never => {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`${message}\n`);
  process.exit(1);
};
