[Skip to content](https://gunshi.dev/guide/plugin/extensions#VPContent)
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
  * [What are Extensions?](https://gunshi.dev/guide/plugin/extensions#what-are-extensions "What are Extensions?")
  * [Extension Lifecycle](https://gunshi.dev/guide/plugin/extensions#extension-lifecycle "Extension Lifecycle")
  * [Creating Extensions](https://gunshi.dev/guide/plugin/extensions#creating-extensions "Creating Extensions")
  * [Next Steps](https://gunshi.dev/guide/plugin/extensions#next-steps "Next Steps")


Are you an LLM? You can read better optimized documentation at /guide/plugin/extensions.md for this page in Markdown format
# Plugin Extensions [​](https://gunshi.dev/guide/plugin/extensions#plugin-extensions)
Extensions are the primary mechanism for plugins to add functionality to the command context.
This guide explains how to create and use plugin extensions for type-safe inter-plugin communication.
## What are Extensions? [​](https://gunshi.dev/guide/plugin/extensions#what-are-extensions)
Extensions allow plugins to inject custom functionality into the `CommandContext` that becomes available to all commands and other plugins.
Each extension is namespaced by the plugin ID to prevent conflicts.
Here's a simple example showing the concept:
js```
import { plugin } from 'gunshi/plugin'
import { define } from 'gunshi'

// Plugin provides an extension
const loggerPlugin = plugin({
  id: 'logger',
  extension: () => ({
    log: msg => console.log(msg),
    error: msg => console.error(msg)
  })
})

// Commands can use the extension
const command = define({
  name: 'deploy',
  run: ctx => {
    // Access extension via plugin ID
    ctx.extensions.logger.log('Starting deployment...')
  }
})
```

Extensions enable:
  * **Shared Functionality** : Provide common utilities (logging, caching, database access)
  * **Plugin Composition** : Build plugins that work together
  * **Type Safety** : Define clear contracts between plugins
  * **State Management** : Maintain state across command execution


NOTE
For advanced type safety patterns and type-safe plugin communication, see the [Plugin Type System](https://gunshi.dev/guide/plugin/type-system) guide.
## Extension Lifecycle [​](https://gunshi.dev/guide/plugin/extensions#extension-lifecycle)
Understanding when and how extensions are created is crucial for effective plugin development.
### Lifecycle Phases [​](https://gunshi.dev/guide/plugin/extensions#lifecycle-phases)
NOTE
The steps mentioned below (H, I) refer to the complete CLI execution lifecycle documented in the [Plugin Lifecycle](https://gunshi.dev/guide/plugin/lifecycle) guide. Extensions are involved in the Execution Phase, which occurs after plugins are loaded and configured during the Setup Phase.
During command execution, extensions go through three distinct phases:
  1. **Extension Creation (Step H)** : The `extension` factory function is called to create each plugin's extension
  2. **Post-Extension Hook (Step H)** : The `onExtension` callback is executed after all extensions are created
  3. **Command Execution (Step I)** : The actual command runs with all extensions available


The following diagram illustrates the relationship between `extension` and `onExtension`:
##### Plugin Processing (in dependency order)
Syntax error in textmermaid version 11.12.0
### Execution Order Guarantees [​](https://gunshi.dev/guide/plugin/extensions#execution-order-guarantees)
Gunshi processes plugins sequentially in dependency order, ensuring dependencies are always resolved before dependents:
  1. **Plugins are sorted by dependencies** - Dependencies are processed before plugins that depend on them
  2. **For each plugin in order** : a. The plugin's `extension` factory is called b. The extension result is immediately attached to `ctx.extensions[pluginId]` c. The plugin's `onExtension` callback runs (if defined) with access to its own extension and all dependency extensions
  3. **Command execution** - The command executes only after all plugins have been processed


This ensures that:
  * When a plugin's `onExtension` runs, it has access to: 
    * Its own extension (just created)
    * All dependency extensions (already processed)
  * Dependencies are always initialized before dependents
  * The execution order respects the dependency graph
  * Commands have a fully initialized context with all extensions


IMPORTANT
A plugin's `onExtension` callback does NOT have access to extensions from plugins that depend on it, as those are processed later in the sequence.
## Creating Extensions [​](https://gunshi.dev/guide/plugin/extensions#creating-extensions)
TIP
**It's strongly recommended to define your extension interfaces using TypeScript.** This benefits all users: end users get IDE autocompletion and compile-time error detection when using your extension, plugin users receive type safety guarantees, and other plugin developers can build on top of your plugin with confidence.
### The `extension` Factory [​](https://gunshi.dev/guide/plugin/extensions#the-extension-factory)
The `extension` factory function is called during Step H to create an extension object that becomes available through `ctx.extensions`. This is where you can:
  * Create fresh instances for each command execution
  * Access parsed arguments and command information
  * Access extensions from dependent plugins
  * Initialize resources synchronously or asynchronously
  * Return methods and properties for other plugins and commands to use


metrics.ts
ts```
import { plugin } from 'gunshi/plugin'

export default plugin({
  id: 'metrics',

  extension: (ctx, cmd) => {
    // Called during Step H: Create Extensions
    // Fresh instance for each command execution

    const startTime = Date.now()
    const commandName = cmd.name || 'root'

    // Access parsed command-line arguments
    const verbose = ctx.values.verbose === true

    // Return the extension object (can be sync or async)
    return {
      recordMetric: (name: string, value: number) => {
        if (verbose) {
          console.log(`[${commandName}] ${name}: ${value}`)
        }
      },
      getElapsedTime: () => Date.now() - startTime
    }
  }
})
```

### The `onExtension` Hook [​](https://gunshi.dev/guide/plugin/extensions#the-onextension-hook)
The `onExtension` callback runs after all extensions are created and attached to the context. This is where you can:
  * Access your own extension via `ctx.extensions`
  * Interact with other plugin extensions
  * Perform initialization that depends on the complete context
  * Set up resources needed before command execution


database.ts
ts```
import { plugin } from 'gunshi/plugin'

export default plugin({
  id: 'database',
  dependencies: [
    { id: 'logger', optional: true } // Optional dependency
  ],

  extension: () => {
    // Create the extension object
    const pool = createPool()

    return {
      query: (sql: string) => pool.query(sql),
      connect: () => pool.connect(),
      disconnect: () => pool.disconnect()
    }
  },

  onExtension: async (ctx, cmd) => {
    // Called during Step H: Execute onExtension
    // All extensions are now available

    // Access your own extension
    const db = ctx.extensions.database

    // Interact with other extensions if available
    // Note: ctx.extensions.logger is only available here if the logger plugin
    // was processed before this plugin (as a dependency or earlier in registration)
    if (ctx.extensions.logger) {
      ctx.extensions.logger.log('Database plugin initialized')
    }

    // Perform command-specific initialization
    if (cmd.name === 'migrate' || cmd.name === 'seed') {
      await db.connect()

      if (ctx.extensions.logger) {
        ctx.extensions.logger.log('Database connected')
      }
    }
  }
})
```

### Basic Extension [​](https://gunshi.dev/guide/plugin/extensions#basic-extension)
Start with a simple extension that provides basic functionality:
logger.ts
ts```
import { plugin } from 'gunshi/plugin'

// Define the extension interface
export interface LoggerExtension {
  log: (message: string) => void
  error: (message: string) => void
  warn: (message: string) => void
  debug: (message: string) => void
}

// Export for other plugins to use
export const pluginId = 'logger' as const
export type PluginId = typeof pluginId

// Implement the extension
export default plugin({
  id: pluginId,
  extension: (): LoggerExtension => ({
    log: msg => console.log(msg),
    error: msg => console.error(msg),
    warn: msg => console.warn(msg),
    debug: msg => console.debug(msg)
  })
})
```

### Using Command Context and Parameters [​](https://gunshi.dev/guide/plugin/extensions#using-command-context-and-parameters)
Extensions can access the `ctx` and `cmd` parameters to adapt their behavior based on command-line arguments and command configuration:
cache.ts
ts```
import { plugin } from 'gunshi/plugin'

export interface CacheExtension {
  get: <T>(key: string) => T | undefined
  set: <T>(key: string, value: T) => void
  clear: () => void
  size: () => number
}

export default plugin({
  id: 'cache',

  extension: (ctx, cmd) => {
    // Create command-specific cache
    const cache = new Map<string, unknown>()
    const commandName = cmd.name || 'global'
    const debug = ctx.values.debug === true

    return {
      get: <T>(key: string): T | undefined => {
        const value = cache.get(key) as T | undefined
        if (debug && value !== undefined) {
          console.log(`[${commandName}] Cache hit: ${key}`)
        }
        return value
      },

      set: <T>(key: string, value: T) => {
        cache.set(key, value)
        if (debug) {
          console.log(`[${commandName}] Cache set: ${key}`)
        }
      },

      clear: () => cache.clear(),
      size: () => cache.size
    }
  }
})
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/plugins/extensions).
## Next Steps [​](https://gunshi.dev/guide/plugin/extensions#next-steps)
You've mastered extensions—the powerful mechanism for sharing functionality between plugins and commands. With extensions, your plugins can provide APIs, services, and utilities that enhance the entire CLI ecosystem.
Now it's time to ensure your plugins are type-safe. The next chapter, [Plugin Type System](https://gunshi.dev/guide/plugin/type-system), will show you how to leverage TypeScript's type system to create plugins with compile-time safety and excellent IDE support.
Last updated: 21.02.26, 15:06
Pager
[Previous pagePlugin Decorators](https://gunshi.dev/guide/plugin/decorators)
[Next pagePlugin Type System](https://gunshi.dev/guide/plugin/type-system)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
