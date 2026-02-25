[Skip to content](https://gunshi.dev/guide/advanced/advanced-lazy-loading#VPContent)
[![](https://gunshi.dev/symbol.png)Gunshi](https://gunshi.dev/)
Search
Main Navigation [Home](https://gunshi.dev/)[Guide](https://gunshi.dev/guide/introduction/what-is-gunshi)[API](https://gunshi.dev/api)[Showcase](https://gunshi.dev/showcase)
v0.29.2
[v0.27 Release Notes](https://gunshi.dev/release/v0.27)
[Changelog](https://github.com/kazupon/gunshi/blob/main/CHANGELOG.md)
[Contributing](https://github.com/kazupon/gunshi/blob/main/CONTRIBUTING.md)
[GitHub](https://github.com/kazupon/gunshi)
[](https://github.com/kazupon/gunshi)
Appearance
[](https://github.com/kazupon/gunshi)
Menu
On this page
Sidebar Navigation 
## Introduction
[What's Gunshi? ](https://gunshi.dev/guide/introduction/what-is-gunshi)
[Setup ](https://gunshi.dev/guide/introduction/setup)
## Essentials
[Getting Started ](https://gunshi.dev/guide/essentials/getting-started)
[Declarative Configuration ](https://gunshi.dev/guide/essentials/declarative)
[Type Safe ](https://gunshi.dev/guide/essentials/type-safe)
[Composable ](https://gunshi.dev/guide/essentials/composable)
[Lazy & Async ](https://gunshi.dev/guide/essentials/lazy-async)
[Auto Usage Generation ](https://gunshi.dev/guide/essentials/auto-usage)
[Plugin System ](https://gunshi.dev/guide/essentials/plugin-system)
## Advanced
[Type System ](https://gunshi.dev/guide/advanced/type-system)
[Command Hooks ](https://gunshi.dev/guide/advanced/command-hooks)
[Context Extensions ](https://gunshi.dev/guide/advanced/context-extensions)
[Custom Rendering ](https://gunshi.dev/guide/advanced/custom-rendering)
[Internationalization ](https://gunshi.dev/guide/advanced/internationalization)
[Documentation Generation ](https://gunshi.dev/guide/advanced/docs-gen)
[Advanced Lazy Loading and Sub-Commands ](https://gunshi.dev/guide/advanced/advanced-lazy-loading)
[Nested Sub-Commands ](https://gunshi.dev/guide/advanced/nested-sub-commands)
## Experimentals
[Parser Combinators ](https://gunshi.dev/guide/experimentals/parser-combinators)
## Plugin
[Plugin System Introduction ](https://gunshi.dev/guide/plugin/introduction)
[Getting Started with Plugin Development ](https://gunshi.dev/guide/plugin/getting-started)
[Plugin Lifecycle ](https://gunshi.dev/guide/plugin/lifecycle)
[Plugin Dependencies ](https://gunshi.dev/guide/plugin/dependencies)
[Plugin Decorators ](https://gunshi.dev/guide/plugin/decorators)
[Plugin Extensions ](https://gunshi.dev/guide/plugin/extensions)
[Plugin Type System ](https://gunshi.dev/guide/plugin/type-system)
[Plugin Testing ](https://gunshi.dev/guide/plugin/testing)
[Plugin Development Guidelines ](https://gunshi.dev/guide/plugin/guidelines)
[Plugin List ](https://gunshi.dev/guide/plugin/list)
## API References
### [combinators ](https://gunshi.dev/api/combinators/)
#### Functions
[args ](https://gunshi.dev/api/combinators/functions/args)
[boolean ](https://gunshi.dev/api/combinators/functions/boolean)
[choice ](https://gunshi.dev/api/combinators/functions/choice)
[combinator ](https://gunshi.dev/api/combinators/functions/combinator)
[describe ](https://gunshi.dev/api/combinators/functions/describe)
[extend ](https://gunshi.dev/api/combinators/functions/extend)
[float ](https://gunshi.dev/api/combinators/functions/float)
[integer ](https://gunshi.dev/api/combinators/functions/integer)
[map ](https://gunshi.dev/api/combinators/functions/map)
[merge ](https://gunshi.dev/api/combinators/functions/merge)
[multiple ](https://gunshi.dev/api/combinators/functions/multiple)
[number ](https://gunshi.dev/api/combinators/functions/number)
[positional ](https://gunshi.dev/api/combinators/functions/positional)
[required ](https://gunshi.dev/api/combinators/functions/required)
[short ](https://gunshi.dev/api/combinators/functions/short)
[string ](https://gunshi.dev/api/combinators/functions/string)
[unrequired ](https://gunshi.dev/api/combinators/functions/unrequired)
[withDefault ](https://gunshi.dev/api/combinators/functions/withDefault)
#### Interfaces
[BaseOptions ](https://gunshi.dev/api/combinators/interfaces/BaseOptions)
[BooleanOptions ](https://gunshi.dev/api/combinators/interfaces/BooleanOptions)
[CombinatorOptions ](https://gunshi.dev/api/combinators/interfaces/CombinatorOptions)
[FloatOptions ](https://gunshi.dev/api/combinators/interfaces/FloatOptions)
[IntegerOptions ](https://gunshi.dev/api/combinators/interfaces/IntegerOptions)
[NumberOptions ](https://gunshi.dev/api/combinators/interfaces/NumberOptions)
[StringOptions ](https://gunshi.dev/api/combinators/interfaces/StringOptions)
#### Type Aliases
[Combinator ](https://gunshi.dev/api/combinators/type-aliases/Combinator)
[CombinatorSchema ](https://gunshi.dev/api/combinators/type-aliases/CombinatorSchema)
### [context ](https://gunshi.dev/api/context/)
#### Functions
[createCommandContext ](https://gunshi.dev/api/context/functions/createCommandContext)
#### Interfaces
[CommandContextParams ](https://gunshi.dev/api/context/interfaces/CommandContextParams)
### [default ](https://gunshi.dev/api/default/)
#### Variables
[ANONYMOUS_COMMAND_NAME ](https://gunshi.dev/api/default/variables/ANONYMOUS_COMMAND_NAME)
#### Functions
[cli ](https://gunshi.dev/api/default/functions/cli)
[parseArgs ](https://gunshi.dev/api/default/functions/parseArgs)
[plugin ](https://gunshi.dev/api/default/functions/plugin)
[resolveArgs ](https://gunshi.dev/api/default/functions/resolveArgs)
#### Classes
[DefaultTranslation ](https://gunshi.dev/api/default/classes/DefaultTranslation)
#### Interfaces
[Args ](https://gunshi.dev/api/default/interfaces/Args)
[ArgSchema ](https://gunshi.dev/api/default/interfaces/ArgSchema)
[ArgToken ](https://gunshi.dev/api/default/interfaces/ArgToken)
[CliOptions ](https://gunshi.dev/api/default/interfaces/CliOptions)
[Command ](https://gunshi.dev/api/default/interfaces/Command)
[CommandContext ](https://gunshi.dev/api/default/interfaces/CommandContext)
[CommandContextExtension ](https://gunshi.dev/api/default/interfaces/CommandContextExtension)
[CommandEnvironment ](https://gunshi.dev/api/default/interfaces/CommandEnvironment)
[GunshiParams ](https://gunshi.dev/api/default/interfaces/GunshiParams)
[PluginContext ](https://gunshi.dev/api/default/interfaces/PluginContext)
[PluginDependency ](https://gunshi.dev/api/default/interfaces/PluginDependency)
[PluginOptions ](https://gunshi.dev/api/default/interfaces/PluginOptions)
[PluginWithExtension ](https://gunshi.dev/api/default/interfaces/PluginWithExtension)
[PluginWithoutExtension ](https://gunshi.dev/api/default/interfaces/PluginWithoutExtension)
[RenderingOptions ](https://gunshi.dev/api/default/interfaces/RenderingOptions)
[SubCommandable ](https://gunshi.dev/api/default/interfaces/SubCommandable)
#### Type Aliases
[ArgValues ](https://gunshi.dev/api/default/type-aliases/ArgValues)
[Awaitable ](https://gunshi.dev/api/default/type-aliases/Awaitable)
[Commandable ](https://gunshi.dev/api/default/type-aliases/Commandable)
[CommandCallMode ](https://gunshi.dev/api/default/type-aliases/CommandCallMode)
[CommandContextCore ](https://gunshi.dev/api/default/type-aliases/CommandContextCore)
[CommandDecorator ](https://gunshi.dev/api/default/type-aliases/CommandDecorator)
[CommandExamplesFetcher ](https://gunshi.dev/api/default/type-aliases/CommandExamplesFetcher)
[CommandLoader ](https://gunshi.dev/api/default/type-aliases/CommandLoader)
[CommandRunner ](https://gunshi.dev/api/default/type-aliases/CommandRunner)
[DefaultGunshiParams ](https://gunshi.dev/api/default/type-aliases/DefaultGunshiParams)
[ExtendContext ](https://gunshi.dev/api/default/type-aliases/ExtendContext)
[GunshiParamsConstraint ](https://gunshi.dev/api/default/type-aliases/GunshiParamsConstraint)
[LazyCommand ](https://gunshi.dev/api/default/type-aliases/LazyCommand)
[OnPluginExtension ](https://gunshi.dev/api/default/type-aliases/OnPluginExtension)
[Plugin ](https://gunshi.dev/api/default/type-aliases/Plugin)
[PluginExtension ](https://gunshi.dev/api/default/type-aliases/PluginExtension)
[PluginFunction ](https://gunshi.dev/api/default/type-aliases/PluginFunction)
[Prettify ](https://gunshi.dev/api/default/type-aliases/Prettify)
[RendererDecorator ](https://gunshi.dev/api/default/type-aliases/RendererDecorator)
[ValidationErrorsDecorator ](https://gunshi.dev/api/default/type-aliases/ValidationErrorsDecorator)
### [definition ](https://gunshi.dev/api/definition/)
#### Functions
[define ](https://gunshi.dev/api/definition/functions/define)
[defineWithTypes ](https://gunshi.dev/api/definition/functions/defineWithTypes)
[lazy ](https://gunshi.dev/api/definition/functions/lazy)
[lazyWithTypes ](https://gunshi.dev/api/definition/functions/lazyWithTypes)
### [generator ](https://gunshi.dev/api/generator/)
#### Functions
[generate ](https://gunshi.dev/api/generator/functions/generate)
#### Type Aliases
[GenerateOptions ](https://gunshi.dev/api/generator/type-aliases/GenerateOptions)
### [plugin ](https://gunshi.dev/api/plugin/)
#### Variables
[CLI_OPTIONS_DEFAULT ](https://gunshi.dev/api/plugin/variables/CLI_OPTIONS_DEFAULT)
### [renderer ](https://gunshi.dev/api/renderer/)
#### Functions
[renderHeader ](https://gunshi.dev/api/renderer/functions/renderHeader)
[renderUsage ](https://gunshi.dev/api/renderer/functions/renderUsage)
[renderValidationErrors ](https://gunshi.dev/api/renderer/functions/renderValidationErrors)
## Extra Topics
[Showcase ](https://gunshi.dev/showcase)
## Release Notes
[Gunshi v0.27 Release Notes ](https://gunshi.dev/release/v0.27)
On this page
  * [Why Use Advanced Lazy Loading?](https://gunshi.dev/guide/advanced/advanced-lazy-loading#why-use-advanced-lazy-loading "Why Use Advanced Lazy Loading?")
  * [Real-World Example: pnpmc Pattern](https://gunshi.dev/guide/advanced/advanced-lazy-loading#real-world-example-pnpmc-pattern "Real-World Example: pnpmc Pattern")
  * [Implementation Pattern](https://gunshi.dev/guide/advanced/advanced-lazy-loading#implementation-pattern "Implementation Pattern")
  * [Advanced Techniques](https://gunshi.dev/guide/advanced/advanced-lazy-loading#advanced-techniques "Advanced Techniques")
  * [Performance Considerations](https://gunshi.dev/guide/advanced/advanced-lazy-loading#performance-considerations "Performance Considerations")
  * [Type Safety](https://gunshi.dev/guide/advanced/advanced-lazy-loading#type-safety "Type Safety")
  * [Conclusion](https://gunshi.dev/guide/advanced/advanced-lazy-loading#conclusion "Conclusion")


Are you an LLM? You can read better optimized documentation at /guide/advanced/advanced-lazy-loading.md for this page in Markdown format
# Advanced Lazy Loading and Sub-Commands [​](https://gunshi.dev/guide/advanced/advanced-lazy-loading#advanced-lazy-loading-and-sub-commands)
This guide explores advanced patterns for implementing lazy loading with sub-commands in Gunshi, based on real-world implementations like [pnpmc](https://github.com/kazupon/pnpmc).
## Why Use Advanced Lazy Loading? [​](https://gunshi.dev/guide/advanced/advanced-lazy-loading#why-use-advanced-lazy-loading)
While Gunshi's basic lazy loading (covered in [Lazy & Async](https://gunshi.dev/guide/essentials/lazy-async)) is powerful, large CLI applications with many sub-commands can benefit from more advanced patterns:
  * **Modular Organization** : Separate commands into independent packages or modules
  * **On-Demand Loading** : Load command implementations only when explicitly invoked
  * **Reduced Memory Footprint** : Minimize memory usage by loading only what's needed
  * **Faster Startup** : Improve CLI startup time by deferring command loading
  * **Better Maintainability** : Isolate command implementations for easier maintenance


## Real-World Example: pnpmc Pattern [​](https://gunshi.dev/guide/advanced/advanced-lazy-loading#real-world-example-pnpmc-pattern)
The [pnpmc](https://github.com/kazupon/pnpmc) project (PNPM Catalogs Tooling) demonstrates an effective pattern for organizing a CLI with lazy-loaded sub-commands:
  1. **Bundled Metadata, Lazy-Loaded Implementations** :
     * Command metadata (name, description, arguments) is imported directly and bundled with the main CLI package
     * Only the command runners (implementations) are lazy-loaded when executed
     * This allows displaying help information for all commands without loading implementations
  2. **Modular Package Structure** :
     * Command metadata is exposed from separate packages via `meta.js` files and imported directly
     * Command implementations are in separate packages and loaded on-demand
     * This separation enables showing usage via `--help` without loading all command code
  3. **Custom Loader Implementation** :
     * A custom loader dynamically imports only the command runners when needed
     * Error handling for module resolution failures


Let's explore how to implement this pattern in your own CLI applications.
## Implementation Pattern [​](https://gunshi.dev/guide/advanced/advanced-lazy-loading#implementation-pattern)
### 1. Project Structure [​](https://gunshi.dev/guide/advanced/advanced-lazy-loading#_1-project-structure)
For a CLI with multiple sub-commands, consider organizing your code like this:
sh```
my-cli/
├── packages/
│   ├── cli/                 # Main CLI package
│   │   ├── src/
│   │   │   ├── commands.ts  # Command definitions
│   │   │   ├── loader.ts    # Custom loader
│   │   │   └── cli.ts       # CLI entry point
│   ├── command-a/           # Command A package
│   │   ├── src/
│   │   │   ├── meta.ts      # Command metadata
│   │   │   └── runner.ts    # Command implementation
│   └── command-b/           # Command B package
│       ├── src/
│       │   ├── meta.ts      # Command metadata
│       │   └── runner.ts    # Command implementation
```

### 2. Command Metadata [​](https://gunshi.dev/guide/advanced/advanced-lazy-loading#_2-command-metadata)
Define command metadata in a separate file (e.g., `meta.ts`):
packages/command-a/src/meta.ts
ts```
import { define } from 'gunshi'

export default define({
  name: 'command-a',
  description: 'Performs action A',
  args: {
    input: {
      type: 'string',
      short: 'i',
      description: 'Input file'
    },
    output: {
      type: 'string',
      short: 'o',
      description: 'Output file'
    }
  }
})
```

### 3. Command Implementation [​](https://gunshi.dev/guide/advanced/advanced-lazy-loading#_3-command-implementation)
Implement the command in a separate file (e.g., `runner.ts`):
packages/command-a/src/ruuner.ts
ts```
import meta from './meta.ts'
import type { CommandRunner } from 'gunshi'

export const run: CommandRunner<{ args: typeof meta.args }> = async ctx => {
  const { input, output } = ctx.values
  console.log(`Processing ${input} to ${output}`)
  // Command implementation...
}
```

### 4. Custom Loader [​](https://gunshi.dev/guide/advanced/advanced-lazy-loading#_4-custom-loader)
Create a custom loader to dynamically import command implementations:
packages/cli/src/loader.ts
ts```
import type { CommandRunner, GunshiParamsConstraint } from 'gunshi'

export async function load<G extends GunshiParamsConstraint>(
  pkg: string
): Promise<CommandRunner<G> | null> {
  let mod: Promise<CommandRunner<G> | null> | undefined
  // Dynamic import of the command package
  try {
    mod = await import(pkg).then(m => m.default || m)
  } catch (error: unknown) {
    // Handle module not found errors
    if (isErrorModuleNotFound(error)) {
      mod = Promise.resolve(null)
    }
  }
  if (mod === undefined) {
    throw new Error(`Fatal Error: '${pkg}' Command Runner loading failed`)
  }
  return mod
}

function isErrorModuleNotFound(e: unknown): e is NodeJS.ErrnoException {
  return (
    e instanceof Error &&
    'code' in e &&
    typeof e.code === 'string' &&
    e.code === 'ERR_MODULE_NOT_FOUND'
  )
}
```

### 5. Command Definitions [​](https://gunshi.dev/guide/advanced/advanced-lazy-loading#_5-command-definitions)
Define your commands using Gunshi's `lazy` function and your custom loader:
packages/cli/src/commands.ts
ts```
import { lazy } from 'gunshi'
import { load } from './loader.ts'

// Import command metadata directly - these are bundled with your CLI
import metaCommandA from 'command-a/meta'
import metaCommandB from 'command-b/meta'

// Create lazy-loaded commands
// Note: Only the implementation (runner) is lazy-loaded, not the metadata
export const commandALazy = lazy(
  // This function is only called when the command is executed
  async () => await load('command-a'),
  // Metadata is provided directly and available immediately
  metaCommandA
)

export const commandBLazy = lazy(async () => await load('command-b'), metaCommandB)
```

This approach ensures that:
  1. Command metadata is immediately available for generating help text
  2. Command implementations are only loaded when the command is actually executed


### 6. CLI Entry Point [​](https://gunshi.dev/guide/advanced/advanced-lazy-loading#_6-cli-entry-point)
Set up your CLI entry point to use the lazy-loaded commands:
packages/cli/src/cli.ts
ts```
import { cli } from 'gunshi'
import { commandALazy, commandBLazy } from './commands.ts'

async function main() {
  // Load package.json for version info
  const { default: pkgJsonModule } = await import('./package.json', { with: { type: 'json' } })

  // Run the CLI with lazy-loaded commands
  await cli(process.argv.slice(2), commandALazy, {
    name: 'my-cli',
    version: pkgJson.version,
    description: 'My CLI application',
    subCommands: {
      [commandALazy.commandName]: commandALazy,
      [commandBLazy.commandName]: commandBLazy
    }
  })
}

await main()
```

## Advanced Techniques [​](https://gunshi.dev/guide/advanced/advanced-lazy-loading#advanced-techniques)
### On-Demand Sub-Command Loading [​](https://gunshi.dev/guide/advanced/advanced-lazy-loading#on-demand-sub-command-loading)
For CLIs with many sub-commands, you can implement on-demand sub-command loading:
packages/cli/src/commands.ts
ts```
import { lazy } from 'gunshi/definition'
import { load } from './loader.ts'

// Function to create a lazy command
function createLazyCommand(name: string) {
  return lazy(
    async () => {
      // Dynamically import metadata and implementation
      const meta = await import(`${name}/meta`).then(m => m.default || m)
      return await load(name)
    },
    { name } // Minimal metadata, rest will be loaded on demand
  )
}

// Create commands map with factory function
export const commands = new Map([
  ['command-a', createLazyCommand('command-a')],
  ['command-b', createLazyCommand('command-b')]
  // Add more commands as needed
])
```

### Package Manager Integration [​](https://gunshi.dev/guide/advanced/advanced-lazy-loading#package-manager-integration)
For CLI tools that integrate with package managers (like pnpmc does with pnpm), you can enhance your loader:
packages/cli/src/loader.ts
ts```
import { detect, resolveCommand } from 'package-manager-detector'
import { x } from 'tinyexec'
import type { CommandContext, CommandRunner, GunshiParamsConstraint } from 'gunshi'

export async function load<G extends GunshiParamsConstraint>(
  pkg: string
): Promise<CommandRunner<G>> {
  // Detect package manager (npm, yarn, pnpm, etc.)
  const pm = await detect()
  if (pm === null) {
    throw new Error('Fatal Error: Cannot detect package manager')
  }

  // Return a command runner function
  async function runner<G extends GunshiParamsConstraint>(ctx: CommandContext<G>): Promise<void> {
    // Construct the sub-command
    const subCommand = ctx.env.version ? `${pkg}@${ctx.env.version}` : pkg

    // Resolve the command using the package manager
    const resolvedCommand = resolveCommand(pm.agent, 'execute', [subCommand, ...ctx._.slice(1)])
    if (resolvedCommand === null) {
      throw new Error(`Fatal Error: Cannot resolve command '${ctx._[0]}'`)
    }

    // Execute the command
    await x(resolvedCommand.command, resolvedCommand.args, {
      nodeOptions: {
        cwd: ctx.env.cwd,
        stdio: 'inherit',
        env: Object.assign({}, process.env, { CLI_LOADER: 'true' })
      }
    })
  }

  return runner
}
```

## Performance Considerations [​](https://gunshi.dev/guide/advanced/advanced-lazy-loading#performance-considerations)
When implementing advanced lazy loading, consider these performance optimizations:
  1. **Metadata Size** : Keep command metadata small since it's bundled with your CLI
  2. **Metadata/Implementation Separation** : Clearly separate what's needed for help text vs. execution
  3. **Dependency Management** : Keep implementation dependencies isolated to each command package
  4. **Caching** : Cache loaded command implementations to avoid repeated imports
  5. **Error Handling** : Implement robust error handling for implementation loading failures
  6. **Startup Time** : Measure and optimize CLI startup time by minimizing what's loaded initially


## Type Safety [​](https://gunshi.dev/guide/advanced/advanced-lazy-loading#type-safety)
Maintain type safety with TypeScript when implementing advanced lazy loading:
packages/cli/src/commands.ts
ts```
import { define, lazyWithTypes } from 'gunshi/definition'
import { load } from './loader.ts'
import type { CommandRunner } from 'gunshi'

// Define command metadata with type safety
const metaCommandA = define({
  name: 'command-a',
  description: 'Performs action A',
  args: {
    input: {
      type: 'string',
      short: 'i',
      description: 'Input file'
    }
  }
})

// Create type-safe lazy command
const commandALazy = lazyWithTypes<{ args: typeof metaCommandA.args }>()(
  async () => await load('command-a'),
  metaCommandA
)
```

## Conclusion [​](https://gunshi.dev/guide/advanced/advanced-lazy-loading#conclusion)
Advanced lazy loading with sub-commands allows you to build scalable, maintainable CLI applications with optimal performance. By bundling command metadata with your main CLI while lazy-loading command implementations, you can create complex CLIs that:
  1. Start up quickly with minimal initial loading
  2. Display comprehensive help information for all commands
  3. Only load command implementations when they're actually executed


The pattern demonstrated by pnpmc provides a solid foundation for organizing your CLI code, which you can adapt and extend to meet your specific requirements.
Last updated: 21.02.26, 15:06
Pager
[Previous pageDocumentation Generation](https://gunshi.dev/guide/advanced/docs-gen)
[Next pageNested Sub-Commands](https://gunshi.dev/guide/advanced/nested-sub-commands)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
