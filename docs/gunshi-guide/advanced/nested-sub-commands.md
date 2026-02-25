[Skip to content](https://gunshi.dev/guide/advanced/nested-sub-commands#VPContent)
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
  * [Why Use Nested Sub-Commands?](https://gunshi.dev/guide/advanced/nested-sub-commands#why-use-nested-sub-commands "Why Use Nested Sub-Commands?")
  * [Basic Nested Sub-Commands](https://gunshi.dev/guide/advanced/nested-sub-commands#basic-nested-sub-commands "Basic Nested Sub-Commands")
  * [Three or More Levels](https://gunshi.dev/guide/advanced/nested-sub-commands#three-or-more-levels "Three or More Levels")
  * [Using commandPath](https://gunshi.dev/guide/advanced/nested-sub-commands#using-commandpath "Using commandPath")
  * [Intermediate Commands](https://gunshi.dev/guide/advanced/nested-sub-commands#intermediate-commands "Intermediate Commands")
  * [Nested Sub-Commands with Lazy Loading](https://gunshi.dev/guide/advanced/nested-sub-commands#nested-sub-commands-with-lazy-loading "Nested Sub-Commands with Lazy Loading")
  * [Generating Documentation for Nested Commands](https://gunshi.dev/guide/advanced/nested-sub-commands#generating-documentation-for-nested-commands "Generating Documentation for Nested Commands")


Are you an LLM? You can read better optimized documentation at /guide/advanced/nested-sub-commands.md for this page in Markdown format
# Nested Sub-Commands [​](https://gunshi.dev/guide/advanced/nested-sub-commands#nested-sub-commands)
Gunshi supports nested sub-commands, allowing you to build hierarchical command trees similar to tools like Git (`git remote add`) or Docker (`docker container ls`).
## Why Use Nested Sub-Commands? [​](https://gunshi.dev/guide/advanced/nested-sub-commands#why-use-nested-sub-commands)
Nested sub-commands are useful when your CLI has command groups with related operations:
  * **Organization** : Group related operations under a parent command (e.g., `remote add`, `remote remove`)
  * **Discoverability** : Users can explore available operations at each level with `--help`
  * **Scalability** : Add new nested commands without cluttering the top-level command list


## Basic Nested Sub-Commands [​](https://gunshi.dev/guide/advanced/nested-sub-commands#basic-nested-sub-commands)
You can nest sub-commands by adding a `subCommands` property to any command definition:
cli.ts
ts```
import { cli, define } from 'gunshi'

// Define leaf commands
const addCommand = define({
  name: 'add',
  description: 'Add a remote',
  args: {
    url: { type: 'string', required: true, description: 'Remote URL' }
  },
  run: ctx => {
    console.log(`Adding remote: ${ctx.values.url}`)
  }
})

const removeCommand = define({
  name: 'remove',
  description: 'Remove a remote',
  args: {
    name: { type: 'positional', description: 'Remote name' }
  },
  run: ctx => {
    console.log(`Removing remote: ${ctx.values.name}`)
  }
})

// Define an intermediate command with nested sub-commands
const remoteCommand = define({
  name: 'remote',
  description: 'Manage remotes',
  subCommands: {
    add: addCommand,
    remove: removeCommand
  },
  run: () => {
    console.log('Use: git remote add|remove')
  }
})

// Define the entry command
const entry = define({
  name: 'main',
  description: 'Git-like CLI',
  run: () => {
    console.log('Run --help for available commands')
  }
})

await cli(process.argv.slice(2), entry, {
  name: 'git',
  version: '1.0.0',
  subCommands: {
    remote: remoteCommand
  }
})
```

TIP
The complete example code is [here](https://github.com/kazupon/gunshi/tree/main/playground/advanced/nested-sub-commands).
Now users can run:
sh```
# Execute nested sub-command
$ npx tsx cli.ts remote add --url https://example.com
Adding remote: https://example.com

# Show help for intermediate command
$ npx tsx cli.ts remote --help
Manage remotes

USAGE:
  git remote [COMMANDS] <OPTIONS>

COMMANDS:
  [remote] <OPTIONS>       Manage remotes
  add <OPTIONS>            Add a remote
  remove <OPTIONS>         Remove a remote

For more info, run any command with the `--help` flag:
  git remote --help
  git remote add --help
  git remote remove --help

# Show help for leaf command
$ npx tsx cli.ts remote add --help
Add a remote

USAGE:
  git remote add <OPTIONS>

OPTIONS:
  --url <url>          Remote URL
```

## Three or More Levels [​](https://gunshi.dev/guide/advanced/nested-sub-commands#three-or-more-levels)
You can nest commands to any depth:
ts```
const subSubCommand = define({
  name: 'sub-sub',
  description: 'A deeply nested command',
  run: ctx => {
    // ctx.commandPath will be ['level1', 'level2', 'sub-sub']
    console.log(`Command path: ${ctx.commandPath.join(' > ')}`)
  }
})

const level2Command = define({
  name: 'level2',
  description: 'Second level',
  subCommands: { 'sub-sub': subSubCommand },
  run: () => {}
})

const level1Command = define({
  name: 'level1',
  description: 'First level',
  subCommands: { level2: level2Command },
  run: () => {}
})
```

## Using `commandPath` [​](https://gunshi.dev/guide/advanced/nested-sub-commands#using-commandpath)
The `CommandContext` includes a `commandPath` property that tells you the full path of commands that were resolved:
ts```
const addCommand = define({
  name: 'add',
  description: 'Add a remote',
  run: ctx => {
    console.log(ctx.commandPath) // ['remote', 'add']
    console.log(ctx.callMode) // 'subCommand'
  }
})
```

Invocation | `commandPath` | `callMode`  
---|---|---  
`cli` | `[]` | `'entry'`  
`cli remote` | `['remote']` | `'subCommand'`  
`cli remote add` | `['remote', 'add']` | `'subCommand'`  
## Intermediate Commands [​](https://gunshi.dev/guide/advanced/nested-sub-commands#intermediate-commands)
When a user invokes an intermediate command (one that has nested sub-commands) without specifying a child, the intermediate command's `run` function is called with `omitted: true`. In this case, the built-in help system automatically shows a COMMANDS section listing the available nested sub-commands:
ts```
const remoteCommand = define({
  name: 'remote',
  description: 'Manage remotes',
  subCommands: { add: addCommand },
  run: ctx => {
    if (ctx.omitted) {
      // User ran `cli remote` without specifying a sub-command
      // Help is shown automatically with COMMANDS section
      console.log('Please specify a sub-command: add, remove')
    }
  }
})
```

## Nested Sub-Commands with Lazy Loading [​](https://gunshi.dev/guide/advanced/nested-sub-commands#nested-sub-commands-with-lazy-loading)
For large CLIs, you can combine nested sub-commands with lazy loading:
ts```
import { cli, define, lazy } from 'gunshi'

// Lazy-load the leaf command
const addCommand = lazy(() => import('./commands/remote-add.ts'), {
  name: 'add',
  description: 'Add a remote',
  args: {
    url: { type: 'string', required: true, description: 'Remote URL' }
  }
})

// The parent command can also be lazy-loaded
const remoteCommand = lazy(() => import('./commands/remote.ts'), {
  name: 'remote',
  description: 'Manage remotes',
  subCommands: {
    add: addCommand
  }
})

await cli(process.argv.slice(2), entry, {
  name: 'git',
  subCommands: { remote: remoteCommand }
})
```

IMPORTANT
When using `lazy()` with nested sub-commands, include `args` in the lazy definition (the second argument) if you want argument parsing to work before the command is loaded. The `subCommands` property is automatically carried over from the definition to the lazy command.
## Generating Documentation for Nested Commands [​](https://gunshi.dev/guide/advanced/nested-sub-commands#generating-documentation-for-nested-commands)
The `generate()` function supports nested command paths:
ts```
import { generate } from 'gunshi/generator'

// Generate help for a nested command using array or space-separated string
const help = await generate(['remote', 'add'], entry, {
  name: 'git',
  subCommands: { remote: remoteCommand }
})

// Or using space-separated string
const help2 = await generate('remote add', entry, { ... })
```

Last updated: 21.02.26, 15:06
Pager
[Previous pageAdvanced Lazy Loading and Sub-Commands](https://gunshi.dev/guide/advanced/advanced-lazy-loading)
[Next pageParser Combinators](https://gunshi.dev/guide/experimentals/parser-combinators)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
