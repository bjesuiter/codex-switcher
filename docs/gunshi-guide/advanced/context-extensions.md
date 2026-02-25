[Skip to content](https://gunshi.dev/guide/advanced/context-extensions#VPContent)
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
  * [Understanding Context Extensions](https://gunshi.dev/guide/advanced/context-extensions#understanding-context-extensions "Understanding Context Extensions")
  * [How Extensions Work](https://gunshi.dev/guide/advanced/context-extensions#how-extensions-work "How Extensions Work")
  * [Working with Built-in Plugin Extensions](https://gunshi.dev/guide/advanced/context-extensions#working-with-built-in-plugin-extensions "Working with Built-in Plugin Extensions")
  * [Using Optional Plugin Extensions](https://gunshi.dev/guide/advanced/context-extensions#using-optional-plugin-extensions "Using Optional Plugin Extensions")
  * [Extension Techniques](https://gunshi.dev/guide/advanced/context-extensions#extension-techniques "Extension Techniques")
  * [Type-Safe Extensions](https://gunshi.dev/guide/advanced/context-extensions#type-safe-extensions "Type-Safe Extensions")
  * [Custom Extension Techniques](https://gunshi.dev/guide/advanced/context-extensions#custom-extension-techniques "Custom Extension Techniques")
  * [Guidelines for Plugin Usage](https://gunshi.dev/guide/advanced/context-extensions#guidelines-for-plugin-usage "Guidelines for Plugin Usage")
  * [Troubleshooting](https://gunshi.dev/guide/advanced/context-extensions#troubleshooting "Troubleshooting")


Are you an LLM? You can read better optimized documentation at /guide/advanced/context-extensions.md for this page in Markdown format
# Context Extensions [​](https://gunshi.dev/guide/advanced/context-extensions#context-extensions)
Plugins in Gunshi extend the command context with additional functionality through the extension system.
This guide explains how to leverage these extensions to build more powerful CLI applications.
TIP
This guide assumes familiarity with the basic concepts explained in the [Plugin System](https://gunshi.dev/guide/essentials/plugin-system). Context extensions are a core feature of the plugin system, providing the mechanism through which plugins deliver functionality to commands.
## Understanding Context Extensions [​](https://gunshi.dev/guide/advanced/context-extensions#understanding-context-extensions)
The command context (`ctx`) is the central object passed to every command runner.
Plugins enhance this context by adding new capabilities through the extensions property, allowing your commands to access additional functionality like logging, internationalization, or custom services.
Each plugin contributes its own extension under a unique namespace, ensuring clean separation of concerns and preventing conflicts between different plugins.
ts```
import { define } from 'gunshi'

// Basic command context
const command = define({
  run: ctx => {
    // Default context properties
    ctx.name // Command name
    ctx.version // CLI version
    ctx.values // Parsed argument values
    ctx.args // Raw arguments

    // Plugin extensions
    ctx.extensions // Object containing all plugin extensions
  }
})
```

## How Extensions Work [​](https://gunshi.dev/guide/advanced/context-extensions#how-extensions-work)
Each plugin registers its extension under a unique identifier (plugin ID) within the `ctx.extensions` object.
This namespacing approach prevents collisions between plugins and makes dependencies explicit.
When a plugin is added to your CLI configuration, its extension becomes available to all commands through this standardized interface:
TIP
For details on how plugin extensions work, see the [Plugin Extensions](https://gunshi.dev/guide/plugin/extensions) guide.
ts```
import { define } from 'gunshi'
import { pluginId as globalId } from '@gunshi/plugin-global'

const command = define({
  run: ctx => {
    // Access global plugin extension
    const globalExtension = ctx.extensions[globalId]

    // Use extension methods
    globalExtension.showVersion()
    globalExtension.showHeader()
  }
})
```

## Working with Built-in Plugin Extensions [​](https://gunshi.dev/guide/advanced/context-extensions#working-with-built-in-plugin-extensions)
Gunshi provides several official plugins with pre-built extensions that cover common CLI needs.
Understanding how to use these extensions effectively will accelerate your CLI development.
### Global Plugin Extension [​](https://gunshi.dev/guide/advanced/context-extensions#global-plugin-extension)
The global plugin (`@gunshi/plugin-global`) provides methods for displaying CLI information:
ts```
import { define } from 'gunshi'
import { pluginId as globalId } from '@gunshi/plugin-global'

const command = define({
  run: ctx => {
    const global = ctx.extensions[globalId]

    // Show version information
    global.showVersion()

    // Show command header
    global.showHeader()

    // Show usage information
    global.showUsage()

    // Show validation errors
    if (ctx.validationError) {
      global.showValidationErrors(ctx.validationError)
    }
  }
})
```

NOTE
For a complete list of official plugins and their features, see the [Plugin List](https://gunshi.dev/guide/plugin/list) guide.
### Renderer Plugin Extension [​](https://gunshi.dev/guide/advanced/context-extensions#renderer-plugin-extension)
The renderer plugin (`@gunshi/plugin-renderer`) provides text rendering capabilities:
ts```
import { define } from 'gunshi'
import { pluginId as rendererId } from '@gunshi/plugin-renderer'

const command = define({
  run: async ctx => {
    // Check if renderer extension is available
    const renderer = ctx.extensions[rendererId]

    if (renderer) {
      // Get translated text
      const helpText = await renderer.text('HELP')

      // Load subcommands for display
      const commands = await renderer.loadCommands()
    }
  }
})
```

NOTE
The renderer plugin is typically added by the global plugin when used together. For detailed information about the renderer plugin API, see the [Renderer Plugin documentation](https://github.com/kazupon/gunshi/tree/main/packages/plugin-renderer)
## Using Optional Plugin Extensions [​](https://gunshi.dev/guide/advanced/context-extensions#using-optional-plugin-extensions)
Beyond the core plugins, Gunshi's ecosystem includes optional plugins for specialized functionality.
These extensions follow the same patterns but may not be present in all CLI configurations.
### I18n Plugin Extension [​](https://gunshi.dev/guide/advanced/context-extensions#i18n-plugin-extension)
The i18n plugin provides translation capabilities through context extensions:
ts```
import { define } from 'gunshi'
import { pluginId as i18nId } from '@gunshi/plugin-i18n'

const command = define({
  run: ctx => {
    const i18n = ctx.extensions[i18nId]

    if (i18n) {
      // Access current locale
      console.log(`Running in ${i18n.locale} locale`)

      // Use translation function
      const message = i18n.translate('welcome')
      console.log(message)
    }
  }
})
```

NOTE
For comprehensive i18n usage including `resolveKey`, `defineI18n`, resource management, and working with subcommands, see the [Internationalization guide](https://gunshi.dev/guide/advanced/internationalization)
## Extension Techniques [​](https://gunshi.dev/guide/advanced/context-extensions#extension-techniques)
The following techniques demonstrate code for working effectively with extensions in various scenarios.
These approaches ensure your commands remain flexible, maintainable, and resilient.
### Safe Extension Access [​](https://gunshi.dev/guide/advanced/context-extensions#safe-extension-access)
Extensions may not always be available depending on your CLI configuration and which plugins are installed.
Commands should defensively check for extension existence to prevent runtime errors and provide graceful fallbacks.
This defensive programming approach ensures your CLI remains robust even when optional plugins are not configured:
ts```
import { define } from 'gunshi'
import { pluginId as globalId } from '@gunshi/plugin-global'

const command = define({
  run: ctx => {
    // Safe access technique
    const global = ctx.extensions[globalId]

    if (global) {
      // Extension is available
      global.showUsage()
    } else {
      // Fallback behavior
      console.log('Usage information not available')
    }
  }
})
```

### Extension Composition [​](https://gunshi.dev/guide/advanced/context-extensions#extension-composition)
Commands often benefit from combining multiple plugin extensions to create richer functionality.
Extensions are designed to work together harmoniously, allowing you to compose complex behaviors from simple building blocks.
The following example demonstrates how global display features can be enhanced with dynamic content loading from the renderer extension:
ts```
import { define } from 'gunshi'
import { pluginId as globalId } from '@gunshi/plugin-global'
import { pluginId as rendererId } from '@gunshi/plugin-renderer'

const command = define({
  run: async ctx => {
    const global = ctx.extensions[globalId]
    const renderer = ctx.extensions[rendererId]

    // Combine extensions for rich functionality
    if (global && renderer) {
      // Show header using global extension
      global.showHeader()

      // Load and display commands if renderer is available
      const commands = await renderer.loadCommands()
      console.log('Available commands:', commands)
    }
  }
})
```

### Dynamic Extension Usage [​](https://gunshi.dev/guide/advanced/context-extensions#dynamic-extension-usage)
Extensions can be conditionally utilized based on command arguments, environment variables, or other runtime conditions.
This dynamic approach allows your CLI to adapt its behavior to different contexts and user preferences.
The following code shows how to selectively engage extensions based on command flags:
ts```
import { define } from 'gunshi'
import { pluginId as globalId } from '@gunshi/plugin-global'
import { pluginId as loggerId } from '@my/plugin-logger'

const command = define({
  args: {
    verbose: { type: 'boolean' },
    debug: { type: 'boolean' },
    help: { type: 'boolean' }
  },
  run: ctx => {
    // Use extensions based on command flags
    if (ctx.values.help) {
      ctx.extensions[globalId]?.showUsage()
      return
    }

    // Conditional extension usage for verbose mode
    if (ctx.values.verbose) {
      const global = ctx.extensions[globalId]
      global?.showHeader()
      console.log('Running in verbose mode...')
    }

    // Enable debug features if available
    // Check if a hypothetical logger extension exists
    if (ctx.values.debug && ctx.extensions[loggerId]) {
      ctx.extensions[loggerId].setLevel('debug')
    }

    // Your command logic here
    console.log('Command executed')
  }
})
```

## Type-Safe Extensions [​](https://gunshi.dev/guide/advanced/context-extensions#type-safe-extensions)
Use TypeScript for compile-time safety with extensions:
ts```
import { define } from 'gunshi'
import { pluginId as globalId } from '@gunshi/plugin-global'
import type { GlobalExtension, PluginId as GlobalId } from '@gunshi/plugin-global'

// Define command with typed extensions
const command = define<Record<GlobalId, GlobalExtension>>({
  name: 'app',
  run: ctx => {
    // TypeScript knows about the global extension
    ctx.extensions[globalId].showVersion()
    ctx.extensions[globalId].showUsage()

    // Type errors for unknown extensions
    // ctx.extensions['unknown'].method() // Compile-time error!
  }
})
```

NOTE
For comprehensive type parameter usage including `GunshiParams`, combining multiple plugin types with the intersection (`&`), and advanced type safety techniques, see the [Type System guide](https://gunshi.dev/guide/advanced/type-system)
## Custom Extension Techniques [​](https://gunshi.dev/guide/advanced/context-extensions#custom-extension-techniques)
Extensions can serve as a foundation for building sophisticated CLI architectures.
The following advanced patterns showcase how to leverage extensions for service layers and architectural concerns.
### Extension as Service Layer [​](https://gunshi.dev/guide/advanced/context-extensions#extension-as-service-layer)
Extensions can act as a service abstraction layer, providing consistent interfaces to external systems like databases, caches, or APIs.
This pattern decouples your command logic from infrastructure concerns and simplifies testing through mockable extensions:
ts```
// Note: These are hypothetical example plugins for illustration purposes
// You would need to create or install actual plugins with these capabilities
import { define } from 'gunshi'
import { pluginId as dbId } from '@my/plugin-db' // Example custom plugin
import { pluginId as cacheId } from '@my/plugin-cache' // Example custom plugin

// With hypothetical database and cache plugins
const command = define({
  run: async ctx => {
    const db = ctx.extensions[dbId]
    const cache = ctx.extensions[cacheId]

    // Check cache first
    const cached = await cache?.get('users')
    if (cached) {
      return cached
    }

    // Fetch from database
    const users = await db?.query('SELECT * FROM users')

    // Cache the result
    await cache?.set('users', users, { ttl: 3600 })

    return users
  }
})
```

### Extension for Cross-Cutting Concerns [​](https://gunshi.dev/guide/advanced/context-extensions#extension-for-cross-cutting-concerns)
Cross-cutting concerns are aspects of your application that affect multiple commands, such as logging, authentication, monitoring, or error tracking.
Extensions provide an ideal mechanism for implementing these concerns consistently across your entire CLI.
By centralizing these capabilities in plugin extensions, you ensure uniform behavior and simplify maintenance.
The following example demonstrates a comprehensive approach to handling logging, authentication, and metrics collection:
ts```
// Note: These are hypothetical example plugins for illustration purposes
import { define } from 'gunshi'
import { pluginId as loggerId } from '@my/plugin-logger'
import { pluginId as authId } from '@my/plugin-auth'
import { pluginId as metricsId } from '@my/plugin-metrics'

const command = define({
  run: async ctx => {
    const logger = ctx.extensions[loggerId]
    const auth = ctx.extensions[authId]
    const metrics = ctx.extensions[metricsId]

    const startTime = Date.now()
    logger?.info('Command started', { command: ctx.name })

    // Check authentication
    if (!auth?.isAuthenticated()) {
      logger?.error('Authentication required')
      throw new Error('Please login first')
    }

    try {
      // Your actual command logic
      // processData is a placeholder for your data processing logic
      const result = await processData(ctx.values)

      // Track success metrics
      metrics?.track('command.success', {
        command: ctx.name,
        duration: Date.now() - startTime
      })

      logger?.info('Command completed successfully')
      return result
    } catch (error) {
      logger?.error('Command failed', { error: error.message })
      metrics?.track('command.failure', {
        command: ctx.name,
        error: error.message
      })
      throw error
    }
  }
})
```

TIP
Learn how to create your own plugins with custom extensions in the [Plugin Development](https://gunshi.dev/guide/plugin/introduction) guide.
## Guidelines for Plugin Usage [​](https://gunshi.dev/guide/advanced/context-extensions#guidelines-for-plugin-usage)
### 1. Always Import Plugin IDs [​](https://gunshi.dev/guide/advanced/context-extensions#_1-always-import-plugin-ids)
Never hardcode plugin ID strings. Always import and use the exported constants to avoid typos and ensure type safety:
js```
// ✅ Good: Import and use plugin ID constants
import i18n, { pluginId as i18nId } from '@gunshi/plugin-i18n'
import global, { pluginId as globalId } from '@gunshi/plugin-global'

// Use the imported IDs
const i18nExt = ctx.extensions[i18nId]
const globalExt = ctx.extensions[globalId]

// ❌ Bad: Hardcoded strings are fragile and error-prone
const i18nExt = ctx.extensions['g:i18n'] // Don't do this!
```

### 2. Handle Optional Plugin Extensions Gracefully [​](https://gunshi.dev/guide/advanced/context-extensions#_2-handle-optional-plugin-extensions-gracefully)
When plugins might not be available, always check for extension existence to avoid runtime errors:
js```
import { pluginId as globalId } from '@gunshi/plugin-global'

run: ctx => {
  // Safe access with optional chaining
  const version = ctx.extensions[globalId]?.showVersion() || 'Version unknown'

  // Or explicit checking for complex logic
  const globalExt = ctx.extensions[globalId]
  if (globalExt) {
    // Plugin is available - use full features
    globalExt.showHeader()
    globalExt.showUsage()
  } else {
    // Graceful fallback
    console.log('Help not available')
  }
}
```

### 3. Use TypeScript for Safety [​](https://gunshi.dev/guide/advanced/context-extensions#_3-use-typescript-for-safety)
When using TypeScript, leverage type definitions for compile-time safety:
ts```
import { define } from 'gunshi'
import { pluginId as globalId } from '@gunshi/plugin-global'
import type { GlobalExtension, PluginId as GlobalId } from '@gunshi/plugin-global'

// Type-safe command with extension
const command = define<Record<GlobalId, GlobalExtension>>({
  name: 'deploy',
  run: ctx => {
    // TypeScript ensures type safety
    ctx.extensions[globalId].showVersion()
  }
})
```

NOTE
For advanced TypeScript techniques including combining multiple plugin types and using `GunshiParams`, see the [Type System guide](https://gunshi.dev/guide/advanced/type-system).
## Troubleshooting [​](https://gunshi.dev/guide/advanced/context-extensions#troubleshooting)
### Extension Not Found [​](https://gunshi.dev/guide/advanced/context-extensions#extension-not-found)
If an extension is not available:
js```
// Debug which extensions are available
console.log('Available extensions:', Object.keys(ctx.extensions))

// Check if plugin was added
if (!ctx.extensions[pluginId]) {
  console.error(`Plugin ${pluginId} not installed`)
  console.error('Add it to your CLI plugins:')
  console.error('plugins: [yourPlugin()]')
}
```

### Type Errors with Extensions [​](https://gunshi.dev/guide/advanced/context-extensions#type-errors-with-extensions)
For TypeScript users, ensure proper type definitions:
ts```
// Import types
import type { YourExtension, PluginId } from 'your-plugin'

// Define with proper types
const command = define<Record<PluginId, YourExtension>>({
  // Command definition
})
```

### Extension Method Not Working [​](https://gunshi.dev/guide/advanced/context-extensions#extension-method-not-working)
Check the plugin documentation for correct usage:
js```
import { pluginId as globalId } from '@gunshi/plugin-global'

// Wrong: Direct method call without checking
ctx.extensions[globalId].showVersion() // May fail if plugin not available

// Right: Store reference and check existence first
const global = ctx.extensions[globalId]
if (global) {
  global.showVersion()
}
```

Last updated: 21.02.26, 15:06
Pager
[Previous pageCommand Hooks](https://gunshi.dev/guide/advanced/command-hooks)
[Next pageCustom Rendering](https://gunshi.dev/guide/advanced/custom-rendering)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
