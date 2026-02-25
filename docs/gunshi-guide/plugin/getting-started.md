[Skip to content](https://gunshi.dev/guide/plugin/getting-started#VPContent)
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
  * [Your First Minimal Plugin](https://gunshi.dev/guide/plugin/getting-started#your-first-minimal-plugin "Your First Minimal Plugin")
  * [Adding Global Options](https://gunshi.dev/guide/plugin/getting-started#adding-global-options "Adding Global Options")
  * [Adding Sub-Commands](https://gunshi.dev/guide/plugin/getting-started#adding-sub-commands "Adding Sub-Commands")
  * [Advanced Plugin Features](https://gunshi.dev/guide/plugin/getting-started#advanced-plugin-features "Advanced Plugin Features")
  * [Summary](https://gunshi.dev/guide/plugin/getting-started#summary "Summary")
  * [Next Steps](https://gunshi.dev/guide/plugin/getting-started#next-steps "Next Steps")


Are you an LLM? You can read better optimized documentation at /guide/plugin/getting-started.md for this page in Markdown format
# Getting Started with Plugin Development [​](https://gunshi.dev/guide/plugin/getting-started#getting-started-with-plugin-development)
This guide will walk you through creating your first Gunshi plugin, from the simplest possible plugin to more advanced patterns with extensions and decorators.
## Your First Minimal Plugin [​](https://gunshi.dev/guide/plugin/getting-started#your-first-minimal-plugin)
Let's start with the absolute minimum (no extension) - a plugin that simply logs when it's loaded:
plugin.js
js```
import { plugin } from 'gunshi/plugin'

// The simplest possible plugin
export default plugin({
  id: 'hello',
  name: 'Hello Plugin',
  setup: ctx => {
    console.log('Hello from plugin!')
  }
})
```

Use it in your CLI:
cli.js
js```
import { cli } from 'gunshi'
import hello from './plugin.js'

const entry = () => {}

await cli(process.argv.slice(2), entry, {
  plugins: [hello]
})
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/plugins/getting-started/first-minimal).
Run your application with plugin:
sh```
# Run the entry with plugin
node cli.js

Hello from plugin!
```

This plugin:
  * Has a unique `id` for identification
  * Has a human-readable `name`
  * Runs its `setup` function during plugin initialization
  * Doesn't extend the command context


## Adding Global Options [​](https://gunshi.dev/guide/plugin/getting-started#adding-global-options)
Let's create a plugin that adds a global `--debug` option to all commands:
plugin.js
js```
import { plugin } from 'gunshi/plugin'

export default plugin({
  id: 'debug',
  name: 'Debug Plugin',

  setup: ctx => {
    // Add a global option available to all commands
    ctx.addGlobalOption('debug', {
      type: 'boolean',
      short: 'd',
      description: 'Enable debug output'
    })
  }
})
```

Now all commands have access to `--debug`:
cli.js
js```
import { cli, define } from 'gunshi'
import debug from './plugin.js'

const command = define({
  name: 'build',
  run: ctx => {
    if (ctx.values.debug) {
      console.log('Debug mode enabled')
      console.log('Context:', ctx)
    }
    console.log('Building...')
  }
})

await cli(process.argv.slice(2), command, {
  plugins: [debug]
})
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/plugins/getting-started/adding-global).
Run your application with plugin:
sh```
# Run command with debug option
node cli.js --debug

Debug mode enabled
Context: ...
...
Building ...
```

## Adding Sub-Commands [​](https://gunshi.dev/guide/plugin/getting-started#adding-sub-commands)
Plugins can register sub-commands that become available to the CLI:
plugin.js
js```
import { plugin } from 'gunshi/plugin'

export default plugin({
  id: 'tools',
  name: 'Developer Tools Plugin',

  setup: ctx => {
    // Add a new sub-command
    ctx.addCommand('clean', {
      name: 'clean',
      description: 'Clean build artifacts',
      args: {
        cache: {
          type: 'boolean',
          description: 'Also clear cache',
          default: false
        }
      },
      run: ctx => {
        console.log('Cleaning build artifacts...')
        if (ctx.values.cache) {
          console.log('Clearing cache...')
        }
        console.log('Clean complete!')
      }
    })

    // Add another sub-command
    ctx.addCommand('lint', {
      name: 'lint',
      description: 'Run linter',
      run: ctx => {
        console.log('Running linter...')
        console.log('No issues found!')
      }
    })
  }
})
```

Now your CLI has additional commands:
cli.js
js```
import { cli, define } from 'gunshi'
import tools from './plugin.js'

// Main command
const command = define({
  name: 'build',
  run: ctx => console.log('Building project...')
})

await cli(process.argv.slice(2), command, {
  plugins: [tools]
})
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/plugins/getting-started/adding-sub-commands).
Run your application with the new sub-commands:
sh```
# Run main command
node cli.js
Building project...

# Run plugin's sub-command
node cli.js clean
Cleaning build artifacts...
Clean complete!

# With arguments
node cli.js clean --cache
Cleaning build artifacts...
Clearing cache...
Clean complete!

# Run another sub-command
node cli.js lint
Running linter...
No issues found!
```

## Advanced Plugin Features [​](https://gunshi.dev/guide/plugin/getting-started#advanced-plugin-features)
Beyond basic setup and global options, plugins can provide much more powerful functionality:
### Extensions [​](https://gunshi.dev/guide/plugin/getting-started#extensions)
Plugins can extend the command context with new functionality that all commands can use.
js```
// Simple example - adding logging functionality
export default plugin({
  id: 'logger',
  extension: () => ({
    log: msg => console.log(msg)
  })
})

// Commands can then use: ctx.extensions.logger.log('Hello')
```

TIP
Extensions are the core feature for sharing functionality between plugins and commands. Learn more in [Plugin Extensions](https://gunshi.dev/guide/plugin/extensions).
### Decorators [​](https://gunshi.dev/guide/plugin/getting-started#decorators)
Plugins can decorate (wrap) existing functionality to enhance behavior:
js```
// Customize how help text is displayed
ctx.decorateUsageRenderer(async (baseRenderer, ctx) => {
  const baseUsage = await baseRenderer(ctx)
  return `${baseUsage}\n\n📚 Documentation: https://example.com/docs`
})
```

TIP
Decorators allow you to wrap commands, renderers, and more. Learn about all decorator types in [Plugin Decorators](https://gunshi.dev/guide/plugin/decorators).
### Dependencies [​](https://gunshi.dev/guide/plugin/getting-started#dependencies)
Plugins can declare dependencies on other plugins:
js```
export default plugin({
  id: 'auth',
  dependencies: ['logger'], // Requires logger plugin
  setup: ctx => {
    // Logger plugin is guaranteed to be loaded
  }
})
```

TIP
Dependencies ensure plugins load in the correct order. Learn more in [Plugin Dependencies](https://gunshi.dev/guide/plugin/dependencies).
## Summary [​](https://gunshi.dev/guide/plugin/getting-started#summary)
You've now learned the basics of Gunshi plugin development:
  * Creating minimal plugins with setup functions
  * Adding global options available to all commands
  * Registering sub-commands through plugins
  * Understanding advanced features (extensions, decorators, dependencies)


These fundamentals provide a solid foundation for building more complex plugins.
## Next Steps [​](https://gunshi.dev/guide/plugin/getting-started#next-steps)
You've created your first Gunshi plugin and learned the fundamental concepts: setup functions, global options, sub-command registration, and basic plugin features.
With these foundations in place, you're ready to understand how plugins integrate with the CLI execution flow.
The next chapter, [Plugin Lifecycle](https://gunshi.dev/guide/plugin/lifecycle), will show you exactly when and how plugins execute during CLI runtime, giving you the knowledge to build more sophisticated plugins that interact with commands at the right moments.
Last updated: 21.02.26, 15:06
Pager
[Previous pagePlugin System Introduction](https://gunshi.dev/guide/plugin/introduction)
[Next pagePlugin Lifecycle](https://gunshi.dev/guide/plugin/lifecycle)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
