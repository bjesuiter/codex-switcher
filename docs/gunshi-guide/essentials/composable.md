[Skip to content](https://gunshi.dev/guide/essentials/composable#VPContent)
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
  * [Why Use Sub-commands?](https://gunshi.dev/guide/essentials/composable#why-use-sub-commands "Why Use Sub-commands?")
  * [Basic Structure](https://gunshi.dev/guide/essentials/composable#basic-structure "Basic Structure")
  * [Creating Type-Safe Sub-commands](https://gunshi.dev/guide/essentials/composable#creating-type-safe-sub-commands "Creating Type-Safe Sub-commands")
  * [Automatic Help for Sub-commands](https://gunshi.dev/guide/essentials/composable#automatic-help-for-sub-commands "Automatic Help for Sub-commands")
  * [Organizing Your Commands](https://gunshi.dev/guide/essentials/composable#organizing-your-commands "Organizing Your Commands")
  * [Handling Unknown Sub-commands](https://gunshi.dev/guide/essentials/composable#handling-unknown-sub-commands "Handling Unknown Sub-commands")
  * [Nested Sub-Commands](https://gunshi.dev/guide/essentials/composable#nested-sub-commands "Nested Sub-Commands")
  * [Next Steps](https://gunshi.dev/guide/essentials/composable#next-steps "Next Steps")


Are you an LLM? You can read better optimized documentation at /guide/essentials/composable.md for this page in Markdown format
# Composable Sub-commands [​](https://gunshi.dev/guide/essentials/composable#composable-sub-commands)
In [the previous chapter](https://gunshi.dev/guide/essentials/type-safe), you learned how to create type-safe commands using the `define` function.
Now, let's extend that knowledge to build CLIs with multiple sub-commands while maintaining the same type safety benefits.
Gunshi's composable sub-command system allows you to create modular, organized CLIs similar to tools like Git (with commands like `git commit` and `git push`).
## Why Use Sub-commands? [​](https://gunshi.dev/guide/essentials/composable#why-use-sub-commands)
Sub-commands are useful when your CLI needs to perform different operations that warrant separate commands.
Benefits include:
  * **Organization** : Group related functionality logically
  * **Scalability** : Add new commands without modifying existing ones
  * **User experience** : Provide a consistent interface for different operations
  * **Help system** : Each sub-command can have its own help documentation
  * **Plugin integration** : Plugins are shared across all sub-commands for consistent functionality


## Basic Structure [​](https://gunshi.dev/guide/essentials/composable#basic-structure)
A CLI with sub-commands typically has this structure:
sh```
cli <command> [command options]
```

For example:
sh```
your-cli create --name my-resource
```

## Creating Type-Safe Sub-commands [​](https://gunshi.dev/guide/essentials/composable#creating-type-safe-sub-commands)
Building on the `define` function from the previous chapter, let's create a CLI with multiple sub-commands:
cli.ts
ts```
import { cli, define } from 'gunshi'

// Define type-safe sub-commands
const createCommand = define({
  name: 'create',
  description: 'Create a new resource',
  args: {
    name: { type: 'string', short: 'n', required: true }
  },
  run: ctx => {
    // ctx.values is fully typed
    console.log(`Creating resource: ${ctx.values.name}`)
  }
})

const listCommand = define({
  name: 'list',
  description: 'List all resources',
  run: () => {
    console.log('Listing all resources...')
  }
})

// Define the main command
const mainCommand = define({
  name: 'manage',
  description: 'Manage resources',
  run: ctx => {
    // This runs when no sub-command is provided
    console.log('Available commands: create, list')
    console.log('Run "manage --help" for more information')
  }
})

// Run the CLI with composable sub-commands
await cli(process.argv.slice(2), mainCommand, {
  name: 'my-app',
  version: '1.0.0',
  subCommands: {
    create: createCommand,
    list: listCommand
  }
})
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/essentials/composable/basic).
This structure provides:
  * Full type safety for all commands and sub-commands
  * Automatic help generation for each command level
  * Shared configuration across the command hierarchy


## Automatic Help for Sub-commands [​](https://gunshi.dev/guide/essentials/composable#automatic-help-for-sub-commands)
Gunshi automatically generates help documentation for your sub-commands.
Using the code from the previous section, you can see the help for each command level:
sh```
# Show main command help
$ npx tsx cli.ts --help

# Show sub-command help
$ npx tsx cli.ts create --help
```

TIP
[`tsx`](https://github.com/privatenumber/tsx) is a TypeScript execution tool that allows you to run TypeScript files directly without compilation. Use it directly with `npx tsx`.
NOTE
On Node.js v22.6.0, you can run TypeScript with `--experimental-strip-types`:
sh```
node --experimental-strip-types cli.ts --help
```

From Node.js v23.6.0 and newer, type stripping is enabled by default (no flag needed for erasable TS). Features requiring transformation (e.g., `enum`) still need `--experimental-transform-types`.
Each sub-command's help includes its description, available options, and usage examples.
## Organizing Your Commands [​](https://gunshi.dev/guide/essentials/composable#organizing-your-commands)
As your CLI grows, organizing commands in separate files improves maintainability.
Here's a recommended project structure:
sh```
my-cli/
├── src/
│   ├── commands/
│   │   ├── create.ts      # Create command implementation
│   │   └── list.ts        # List command implementation
│   ├── main.ts            # Main command definition
│   └── cli.ts             # CLI entry point
├── package.json
└── tsconfig.json
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/essentials/composable/organizing).
This structure provides:
  * Clear separation of concerns
  * Shared utilities across commands
  * Centralized type definitions
  * Easy testing of individual components


### Individual Command Files [​](https://gunshi.dev/guide/essentials/composable#individual-command-files)
commands/create.ts
ts```
import { define } from 'gunshi'

export default define({
  name: 'create',
  description: 'Create a new resource',
  args: {
    name: {
      type: 'string',
      short: 'n',
      required: true,
      description: 'Name of the resource'
    },
    type: {
      type: 'string',
      short: 't',
      default: 'default',
      description: 'Type of resource'
    }
  },
  run: ctx => {
    console.log(`Creating ${ctx.values.type} resource: ${ctx.values.name}`)
  }
})
```

commands/list.ts
ts```
import { define } from 'gunshi'

export default define({
  name: 'list',
  description: 'List all resources',
  args: {
    filter: {
      type: 'string',
      short: 'f',
      description: 'Filter resources'
    }
  },
  run: ctx => {
    const filter = ctx.values.filter || 'all'
    console.log(`Listing resources with filter: ${filter}`)
  }
})
```

### Main Command File [​](https://gunshi.dev/guide/essentials/composable#main-command-file)
main.ts
ts```
import { define } from 'gunshi'

export default define({
  name: 'manage',
  description: 'Manage resources',
  run: () => {
    console.log('Use a sub-command')
    console.log('Run "resource-manager --help" for available commands')
  }
})
```

### Entry Point [​](https://gunshi.dev/guide/essentials/composable#entry-point)
NOTE
Some code examples in this guide include TypeScript file extensions (`.ts`) in import/export statements. If you use this pattern in your application, you'll need to enable `allowImportingTsExtensions` in your `tsconfig.json`.
cli.ts
ts```
import { cli } from 'gunshi'
import main from './main.ts'
import create from './commands/create.ts'
import list from './commands/list.ts'

await cli(process.argv.slice(2), main, {
  name: 'resource-manager',
  version: '1.0.0',
  subCommands: {
    create,
    list
  }
})
```

## Handling Unknown Sub-commands [​](https://gunshi.dev/guide/essentials/composable#handling-unknown-sub-commands)
By default, Gunshi shows an error when users provide an unknown sub-command.
You can customize this behavior using the `fallbackToEntry` option:
cli.ts
ts```
await cli(process.argv.slice(2), main, {
  name: 'resource-manager',
  version: '1.0.0',
  fallbackToEntry: true,
  subCommands: {
    create,
    list
  }
})
```

This option enables flexible command handling:
sh```
# Runs the create sub-command
npx tsx src/cli.ts create --name resource
resource-manager (resource-manager v1.0.0)

Creating default resource: resource

# Runs the list sub-command
npx tsx src/cli.ts list --filter active
resource-manager (resource-manager v1.0.0)

Listing resources with filter: active

# Falls back to main command when "unknown" sub-command is not found
npx tsx src/cli.ts unknown --flag value
resource-manager (resource-manager v1.0.0)

Use a sub-command
Run "resource-manager --help" for available commands

# Runs the main command directly
npx tsx src/cli.ts --help
resource-manager (resource-manager v1.0.0)

USAGE:
  resource-manager [COMMANDS] <OPTIONS>

COMMANDS:
  [manage] <OPTIONS>       Manage resources
  create <OPTIONS>         Create a new resource
  list <OPTIONS>           List all resources

For more info, run any command with the `--help` flag:
  resource-manager --help
  resource-manager create --help
  resource-manager list --help

OPTIONS:
  -h, --help             Display this help message
  -v, --version          Display this version
```

This approach is particularly useful for CLIs that:
  * Need to handle file paths or patterns as direct arguments
  * Want to provide a default action when no sub-command matches
  * Implement dynamic command resolution based on context


## Nested Sub-Commands [​](https://gunshi.dev/guide/essentials/composable#nested-sub-commands)
Gunshi also supports nested sub-commands for building hierarchical command trees like `git remote add`. You can add a `subCommands` property to any command definition:
cli.ts
ts```
import { cli, define } from 'gunshi'

const addCommand = define({
  name: 'add',
  description: 'Add a remote',
  args: { url: { type: 'string', required: true } },
  run: ctx => console.log(`Adding: ${ctx.values.url}`)
})

const remoteCommand = define({
  name: 'remote',
  description: 'Manage remotes',
  subCommands: { add: addCommand },
  run: () => console.log('Use: remote add')
})

const entry = define({
  name: 'main',
  description: 'Git-like CLI',
  run: () => console.log('Run --help for available commands')
})

await cli(process.argv.slice(2), entry, {
  name: 'git',
  subCommands: { remote: remoteCommand }
})
```

For more details on nested sub-commands, including lazy loading, intermediate command handling, and `commandPath`, see the [Nested Sub-Commands](https://gunshi.dev/guide/advanced/nested-sub-commands) guide.
## Next Steps [​](https://gunshi.dev/guide/essentials/composable#next-steps)
Throughout this guide, you've learned how to build composable sub-commands that scale from simple to complex CLI applications.
You've seen how Gunshi maintains type safety across nested command structures, enables powerful routing patterns with default commands, and supports both synchronous and asynchronous command execution.
Now that you understand how to compose commands into well-organized hierarchies, you're ready to explore how to optimize their performance.
The next section on [Lazy & Async Command Loading](https://gunshi.dev/guide/essentials/lazy-async) will show you how to significantly improve your CLI's startup time by loading commands only when they're actually needed.
With composable sub-commands as your foundation, adding lazy loading will make your CLI applications both powerful and performant, especially as they grow to include many commands with varying resource requirements.
Last updated: 21.02.26, 15:06
Pager
[Previous pageType Safe](https://gunshi.dev/guide/essentials/type-safe)
[Next pageLazy & Async](https://gunshi.dev/guide/essentials/lazy-async)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
