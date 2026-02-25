[Skip to content](https://gunshi.dev/guide/plugin/dependencies#VPContent)
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
  * [Understanding Plugin Dependencies](https://gunshi.dev/guide/plugin/dependencies#understanding-plugin-dependencies "Understanding Plugin Dependencies")
  * [Why Declare Dependencies?](https://gunshi.dev/guide/plugin/dependencies#why-declare-dependencies "Why Declare Dependencies?")
  * [Dependency Resolution Process](https://gunshi.dev/guide/plugin/dependencies#dependency-resolution-process "Dependency Resolution Process")
  * [Declaring Dependencies](https://gunshi.dev/guide/plugin/dependencies#declaring-dependencies "Declaring Dependencies")
  * [Circular Dependencies](https://gunshi.dev/guide/plugin/dependencies#circular-dependencies "Circular Dependencies")
  * [Complete Dependency Resolution Example](https://gunshi.dev/guide/plugin/dependencies#complete-dependency-resolution-example "Complete Dependency Resolution Example")
  * [Next Steps](https://gunshi.dev/guide/plugin/dependencies#next-steps "Next Steps")


Are you an LLM? You can read better optimized documentation at /guide/plugin/dependencies.md for this page in Markdown format
# Plugin Dependencies [​](https://gunshi.dev/guide/plugin/dependencies#plugin-dependencies)
Gunshi's plugin system includes a sophisticated dependency management system that ensures plugins load in the correct order and can safely interact with each other.
This guide covers everything you need to know about plugin dependencies.
## Understanding Plugin Dependencies [​](https://gunshi.dev/guide/plugin/dependencies#understanding-plugin-dependencies)
Plugin dependencies allow you to:
  * Ensure required plugins are loaded before your plugin
  * Access functionality from other plugins
  * Build composable plugin ecosystems
  * Handle optional features gracefully


## Why Declare Dependencies? [​](https://gunshi.dev/guide/plugin/dependencies#why-declare-dependencies)
Declaring dependencies explicitly provides several benefits:
  1. **Load Order Guarantee** : Ensures your plugin's dependencies are initialized before your plugin runs
  2. **Runtime Safety** : Prevents runtime errors from missing required functionality
  3. **Clear Documentation** : Makes plugin relationships explicit and discoverable
  4. **Type Safety** : Enables TypeScript to validate extension availability at compile time (see [Type-Safe Dependencies](https://gunshi.dev/guide/plugin/type-system#plugin-with-dependencies))
  5. **Error Prevention** : Gunshi can detect missing dependencies and provide helpful error messages


## Dependency Resolution Process [​](https://gunshi.dev/guide/plugin/dependencies#dependency-resolution-process)
Gunshi uses **topological sorting** to resolve plugin dependencies, ensuring that:
  1. Plugins with no dependencies load first
  2. Dependent plugins load after their dependencies
  3. Circular dependencies are detected and prevented


### Example Dependency Graph [​](https://gunshi.dev/guide/plugin/dependencies#example-dependency-graph)
Consider the following plugin dependency relationships:
Syntax error in textmermaid version 11.12.0
In this dependency graph:
  * **Logger Plugin** has no dependencies (it's a base plugin)
  * **Cache Plugin** depends on Logger Plugin (needs logging functionality)
  * **Auth Plugin** depends on both Logger Plugin and Cache Plugin (needs logging and caching)
  * **API Plugin** depends on Auth Plugin (requires authenticated users)


### Resolution Order [​](https://gunshi.dev/guide/plugin/dependencies#resolution-order)
Based on the dependency graph above, Gunshi's topological sorting algorithm determines the following loading order:
**Loading order: Logger → Cache → Auth → API**
This ensures that:
  1. **Logger** loads first (no dependencies)
  2. **Cache** loads after Logger (its dependency is satisfied)
  3. **Auth** loads after both Logger and Cache (both dependencies are satisfied)
  4. **API** loads last after Auth (its dependency is satisfied)


Note that Logger and Cache must both be loaded before Auth can initialize, as Auth depends on both of them.
## Declaring Dependencies [​](https://gunshi.dev/guide/plugin/dependencies#declaring-dependencies)
Plugin dependencies are declared in the plugin configuration using the `dependencies` property.
This property accepts an array of dependency specifications that tell Gunshi which other plugins must be loaded before your plugin can function correctly.
### Dependency Declaration Syntax [​](https://gunshi.dev/guide/plugin/dependencies#dependency-declaration-syntax)
Dependencies can be declared in two ways:
js```
// Simple string format for required dependencies
dependencies: ['logger', 'auth']

// Object format for optional dependencies
dependencies: [
  'logger', // Required dependency
  { id: 'cache', optional: true } // Optional dependency
]
```

### Required Dependencies [​](https://gunshi.dev/guide/plugin/dependencies#required-dependencies)
Required dependencies must be present for your plugin to load. If a required dependency is missing, Gunshi will throw an error during initialization.
WARNING
If you register multiple plugins with the same ID, Gunshi will emit a warning: `Duplicate plugin id detected`. While the plugins will still load, having duplicate IDs can lead to unexpected behavior when accessing extensions or resolving dependencies. Always ensure each plugin has a unique ID.
Declare required dependencies using the `dependencies` array:
js```
import { plugin } from 'gunshi/plugin'

// Simple string dependency
const auth = plugin({
  id: 'auth',
  dependencies: ['logger'], // Requires 'logger' plugin
  setup: ctx => {
    // Logger plugin is guaranteed to be loaded
  }
})

// Multiple dependencies
const api = plugin({
  id: 'api',
  dependencies: ['auth', 'cache', 'logger'],
  setup: ctx => {
    // All three plugins are loaded
  }
})
```

### Optional Dependencies [​](https://gunshi.dev/guide/plugin/dependencies#optional-dependencies)
Optional dependencies allow your plugin to enhance its functionality when certain plugins are available, while still functioning correctly when they're not.
This enables graceful degradation and flexible plugin ecosystems.
#### When to Use Optional Dependencies [​](https://gunshi.dev/guide/plugin/dependencies#when-to-use-optional-dependencies)
Use optional dependencies when:
  * Your plugin can provide additional features with another plugin, but doesn't require it
  * You want to support multiple plugin configurations
  * You're building plugins that adapt to different environments
  * You need to maintain backward compatibility


#### Declaring Optional Dependencies [​](https://gunshi.dev/guide/plugin/dependencies#declaring-optional-dependencies)
Mark dependencies as optional using the object format:
js```
import { plugin } from 'gunshi/plugin'

const enhanced = plugin({
  id: 'enhanced',
  dependencies: [
    'core', // Required
    { id: 'cache', optional: true }, // Optional
    { id: 'metrics', optional: true } // Optional
  ],
  setup: ctx => {
    // 'core' is guaranteed
    // 'cache' and 'metrics' might not be present
  }
})
```

## Circular Dependencies [​](https://gunshi.dev/guide/plugin/dependencies#circular-dependencies)
A circular dependency occurs when two or more plugins depend on each other, creating a dependency loop that cannot be resolved.
Gunshi's dependency resolution system detects these cycles and prevents them to ensure a stable plugin initialization order.
### Understanding Circular Dependencies [​](https://gunshi.dev/guide/plugin/dependencies#understanding-circular-dependencies)
Circular dependencies create logical paradoxes in the loading order:
  * Plugin A requires Plugin B to be loaded first
  * Plugin B requires Plugin A to be loaded first
  * Neither can be loaded before the other


This situation makes it impossible to determine a valid initialization sequence and indicates architectural issues such as tight coupling and reduced reusability.
### Detection and Prevention [​](https://gunshi.dev/guide/plugin/dependencies#detection-and-prevention)
Gunshi automatically detects circular dependencies during the resolution phase and will throw an error:
js```
import { plugin } from 'gunshi/plugin'

// This will fail!
const pluginA = plugin({
  id: 'A',
  dependencies: ['B'],
  setup: ctx => {}
})

const pluginB = plugin({
  id: 'B',
  dependencies: ['A'], // Circular!
  setup: ctx => {}
})

// Circular dependency detected: `a -> b -> a`
```

Circular dependencies can also occur in longer chains:
js```
import { plugin } from 'gunshi/plugin'

// Three-way circular dependency
const pluginX = plugin({
  id: 'X',
  dependencies: ['Y'],
  setup: ctx => {}
})

const pluginY = plugin({
  id: 'Y',
  dependencies: ['Z'],
  setup: ctx => {}
})

const pluginZ = plugin({
  id: 'Z',
  dependencies: ['X'], // Creates cycle: X → Y → Z → X
  setup: ctx => {}
})

// Circular dependency detected: `x -> y -> z -> x`
```

### Resolving Circular Dependencies [​](https://gunshi.dev/guide/plugin/dependencies#resolving-circular-dependencies)
The most practical and recommended approach to resolve circular dependencies is to extract common functionality into a separate plugin.
This creates a clean architecture where both plugins can depend on the shared functionality without depending on each other.
When two plugins need to share functionality, extract that functionality into a base plugin that both can depend on:
**Problem: Circular dependency between two plugins**
js```
import { plugin } from 'gunshi/plugin'

// ❌ Circular dependency - This will fail!
const pluginA = plugin({
  id: 'plugin-a',
  dependencies: ['plugin-b'], // A needs B
  extension: ctx => ({
    methodA: () => {
      // Uses B's functionality
      return ctx.extensions['plugin-b'].methodB() + ' from A'
    }
  })
})

const pluginB = plugin({
  id: 'plugin-b',
  dependencies: ['plugin-a'], // B needs A
  extension: ctx => ({
    methodB: () => {
      // Uses A's functionality
      return ctx.extensions['plugin-a'].methodA() + ' from B'
    }
  })
})
// Circular dependency detected: `plugin-a -> plugin-b -> plugin-a`
```

**Solution: Extract shared functionality into a common plugin**
js```
import { plugin, cli } from 'gunshi/plugin'

// ✅ Create a common base plugin with shared functionality
const shared = plugin({
  id: 'shared',
  extension: () => ({
    // Shared state and functionality
    data: { value: 0 },
    increment: function () {
      this.data.value++
    },
    getValue: function () {
      return this.data.value
    }
  })
})

// Plugin A now depends only on shared
const pluginA = plugin({
  id: 'plugin-a',
  dependencies: ['shared'],
  extension: ctx => ({
    methodA: () => {
      ctx.extensions.shared.increment()
      return `A: value is ${ctx.extensions.shared.getValue()}`
    }
  })
})

// Plugin B also depends only on shared
const pluginB = plugin({
  id: 'plugin-b',
  dependencies: ['shared'],
  extension: ctx => ({
    methodB: () => {
      const value = ctx.extensions.shared.getValue()
      return `B: current value is ${value}`
    }
  })
})

// Usage - no circular dependency!
await cli(args, command, {
  plugins: [
    shared, // Loads first
    pluginA, // Loads second (depends on shared)
    pluginB // Loads third (depends on shared)
  ]
})
```

This approach offers several benefits:
  1. **Clear dependency hierarchy** : shared → pluginA/pluginB (no cycles)
  2. **Single responsibility** : Each plugin has a focused purpose
  3. **Reusability** : The shared plugin can be used by other plugins
  4. **Testability** : Each plugin can be tested independently
  5. **Maintainability** : Changes to shared logic are centralized


## Complete Dependency Resolution Example [​](https://gunshi.dev/guide/plugin/dependencies#complete-dependency-resolution-example)
Here's a complete example demonstrating dependency resolution order with complex dependencies:
logger plugin:
logger.js
js```
import { plugin } from 'gunshi/plugin'

// Base plugin with no dependencies
export default plugin({
  id: 'logger',
  setup: ctx => {
    console.log('1. Logger plugin loaded')
  },
  extension: () => ({
    log: msg => console.log(`[LOG] ${msg}`)
  })
})
```

cache plugin:
cache.js
js```
import { plugin } from 'gunshi/plugin'

// Plugin with one required dependency
export default plugin({
  id: 'cache',
  dependencies: ['logger'],
  setup: ctx => {
    console.log('2. Cache plugin loaded (depends on logger)')
  },
  extension: ctx => ({
    get: key => {
      ctx.extensions.logger.log(`Cache get: ${key}`)
      return null
    }
  })
})
```

auth plugin:
auth.js
js```
import { plugin } from 'gunshi/plugin'

// Plugin with multiple dependencies
export default plugin({
  id: 'auth',
  dependencies: ['logger', 'cache'],
  setup: ctx => {
    console.log('3. Auth plugin loaded (depends on logger, cache)')
  },
  extension: ctx => ({
    isAuthenticated: () => {
      ctx.extensions.logger.log('Checking authentication')
      ctx.extensions.cache.get('auth-token')
      return true
    }
  })
})
```

metrics plugin:
metrics.js
js```
import { plugin } from 'gunshi/plugin'

// Plugin with optional dependency
export default plugin({
  id: 'metrics',
  dependencies: ['logger', { id: 'cache', optional: true }],
  setup: ctx => {
    console.log('4. Metrics plugin loaded (depends on logger, optionally cache)')
  },
  extension: ctx => ({
    track: event => {
      ctx.extensions.logger.log(`Tracking: ${event}`)
      // Use cache if available
      if (ctx.extensions.cache) {
        ctx.extensions.cache.get(`metrics:${event}`)
      }
    }
  })
})
```

api plugin:
api.js
js```
import { plugin } from 'gunshi/plugin'

// Plugin that depends on other dependent plugins
export default plugin({
  id: 'api',
  dependencies: ['auth', 'metrics'],
  setup: ctx => {
    console.log('5. API plugin loaded (depends on auth, metrics)')
  },
  extension: ctx => ({
    request: endpoint => {
      if (ctx.extensions.auth.isAuthenticated()) {
        ctx.extensions.metrics.track(`api:${endpoint}`)
        return { success: true }
      }
      return { success: false }
    }
  })
})
```

Last, install all plugins on CLI application:
cli.js
js```
import { cli, define } from 'gunshi'
import logger from './logger.js'
import cache from './cache.js'
import auth from './auth.js'
import metrics from './metrics.js'
import api from './api.js'

// Command to demonstrate plugin loading
const command = define({
  name: 'demo',
  run: ctx => {
    console.log('\n=== Command execution starts ===')

    // Use various plugin extensions
    ctx.extensions.logger.log('Command running')
    ctx.extensions.api.request('/users')

    console.log('=== Command execution ends ===')
  }
})

// Run with plugins in random order - Gunshi will resolve correct order
await cli(process.argv.slice(2), command, {
  plugins: [
    // Intentionally provide in wrong order
    api, // Depends on auth, metrics
    auth, // Depends on logger, cache
    metrics, // Depends on logger, optionally cache
    logger, // No dependencies
    cache // Depends on logger
  ]
})
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/plugins/dependencies).
Run your application with plugin:
sh```
node cli.js
1. Logger plugin loaded
2. Cache plugin loaded (depends on logger)
3. Auth plugin loaded (depends on logger, cache)
4. Metrics plugin loaded (depends on logger, optionally cache)
5. API plugin loaded (depends on auth, metrics)

=== Command execution starts ===
[LOG] Command running
[LOG] Checking authentication
[LOG] Cache get: auth-token
[LOG] Tracking: api:/users
[LOG] Cache get: metrics:api:/users
=== Command execution ends ===
```

This example demonstrates:
  1. **Topological sorting** : Despite plugins being provided in wrong order, Gunshi resolves them correctly
  2. **Dependency chain** : `api` → `auth` → `cache` → `logger` shows multi-level dependencies
  3. **Optional dependencies** : `metrics` plugin works with or without `cache`
  4. **Load order verification** : Setup messages show the actual resolution order
  5. **Runtime interaction** : Extensions can access their dependencies safely


## Next Steps [​](https://gunshi.dev/guide/plugin/dependencies#next-steps)
You've learned how to manage plugin dependencies, including topological sorting, optional dependencies, and runtime interaction patterns. This knowledge enables you to build sophisticated plugin ecosystems where plugins collaborate effectively.
Next, dive into [Plugin Decorators](https://gunshi.dev/guide/plugin/decorators) to learn how plugins can wrap and enhance existing functionality, adding behaviors like authentication, logging, and caching to commands without modifying their core implementation.
Last updated: 21.02.26, 15:06
Pager
[Previous pagePlugin Lifecycle](https://gunshi.dev/guide/plugin/lifecycle)
[Next pagePlugin Decorators](https://gunshi.dev/guide/plugin/decorators)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
