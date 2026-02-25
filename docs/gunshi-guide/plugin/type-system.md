[Skip to content](https://gunshi.dev/guide/plugin/type-system#VPContent)
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
  * [Introduction](https://gunshi.dev/guide/plugin/type-system#introduction "Introduction")
  * [Basic Type Definitions](https://gunshi.dev/guide/plugin/type-system#basic-type-definitions "Basic Type Definitions")
  * [The plugin Function Type Parameters](https://gunshi.dev/guide/plugin/type-system#the-plugin-function-type-parameters "The plugin Function Type Parameters")
  * [Progressive Type Safety Examples](https://gunshi.dev/guide/plugin/type-system#progressive-type-safety-examples "Progressive Type Safety Examples")
  * [Complete Example](https://gunshi.dev/guide/plugin/type-system#complete-example "Complete Example")
  * [Next Steps](https://gunshi.dev/guide/plugin/type-system#next-steps "Next Steps")


Are you an LLM? You can read better optimized documentation at /guide/plugin/type-system.md for this page in Markdown format
# Plugin Type System [​](https://gunshi.dev/guide/plugin/type-system#plugin-type-system)
Gunshi's plugin system leverages TypeScript's advanced type system to provide complete type safety.
This guide explains how to create type-safe plugins with proper type definitions.
## Introduction [​](https://gunshi.dev/guide/plugin/type-system#introduction)
Gunshi is designed with a **TypeScript-first** philosophy, providing:
  * **Type inference** for plugin extensions and dependencies
  * **Compile-time validation** of plugin interactions
  * **IntelliSense support** throughout development
  * **Type-safe plugin communication** between plugins


This guide focuses on TypeScript's type system for plugin development.
## Basic Type Definitions [​](https://gunshi.dev/guide/plugin/type-system#basic-type-definitions)
Every type-safe plugin starts with two fundamental type definitions:
### Plugin ID and Extension Interface [​](https://gunshi.dev/guide/plugin/type-system#plugin-id-and-extension-interface)
The following code shows how to define and export a plugin's ID and extension interface in a separate types file:
types.ts
ts```
// Define and export your plugin's types
export const pluginId = 'mycompany:logger' as const
export type PluginId = typeof pluginId

export interface LoggerExtension {
  log: (message: string) => void
  error: (message: string) => void
  warn: (message: string) => void
  debug: (message: string) => void
}
```

**Key principles:**
  * Literal types (`as const`) enable TypeScript to track specific plugin IDs 
    * Without `as const`, TypeScript widens the type to `string`, losing the specific ID value
    * Literal types allow TypeScript to infer the exact key when accessing `ctx.extensions['mycompany:logger']`
    * This enables autocomplete for available extensions and compile-time validation of plugin ID references
  * Exported types allow other plugins and commands to reference your plugin
  * Well-defined interfaces provide IntelliSense and compile-time validation


TIP
Plugin consumers can use these exported interfaces to type their command context's extensions, enabling type-safe access to plugin functionality in their command runners. For detailed usage patterns of type-safe command definitions with plugin extensions, see [Advanced Type System](https://gunshi.dev/guide/advanced/type-system).
## The `plugin` Function Type Parameters [​](https://gunshi.dev/guide/plugin/type-system#the-plugin-function-type-parameters)
The `plugin` function uses TypeScript's generics to ensure complete type safety through four type parameters:
ts```
plugin<
  DependencyExtensions, // Extensions from dependencies
  PluginId, // Literal plugin ID
  Dependencies, // Dependency array type
  Extension // This plugin's extension type
>(options)
```

Each parameter serves a specific purpose:
  * **DependencyExtensions** : Types of extensions this plugin depends on
  * **PluginId** : The literal type of this plugin's ID
  * **Dependencies** : The literal type of the dependencies array
  * **Extension** : The type of extension this plugin provides


### Why These Type Parameters Are Necessary [​](https://gunshi.dev/guide/plugin/type-system#why-these-type-parameters-are-necessary)
While TypeScript can infer some types automatically, explicitly specifying all four type parameters provides several critical benefits:
  1. **Complete Type Safety** : Ensures that dependency access in your extension is fully typed
  2. **Compile-time Validation** : Catches plugin ID mismatches and missing dependencies before runtime
  3. **Better IntelliSense** : Provides accurate autocompletion for `ctx.extensions` access
  4. **Clear API Contracts** : Makes plugin dependencies and provided extensions explicit


### What Happens When Type Parameters Are Omitted [​](https://gunshi.dev/guide/plugin/type-system#what-happens-when-type-parameters-are-omitted)
If you omit type parameters, TypeScript falls back to default or inferred types:
ts```
import { plugin } from 'gunshi/plugin'

// Without type parameters - loses type safety
const plugin1 = plugin({
  id: 'my-plugin',
  dependencies: ['other-plugin'],
  extension: ctx => ({
    method: () => {
      // ctx.extensions['other-plugin'] is typed as 'any'
      const other = ctx.extensions['other-plugin'] // No type checking!
      return other.someMethod() // No IntelliSense, no error if method doesn't exist
    }
  })
})

// With type parameters - full type safety
const plugin2 = plugin<
  { 'other-plugin': OtherExtension },
  'my-plugin',
  ['other-plugin'],
  MyExtension
>({
  id: 'my-plugin',
  dependencies: ['other-plugin'],
  extension: ctx => ({
    method: () => {
      // ctx.extensions['other-plugin'] is typed as OtherExtension
      const other = ctx.extensions['other-plugin'] // Fully typed!
      return other.someMethod() // IntelliSense works, compile error if method doesn't exist
    }
  })
})
```

Without explicit type parameters:
  * Dependencies are not type-checked against actual usage
  * Extension access returns `any` type, losing all type safety
  * Plugin IDs are treated as generic strings rather than literal types
  * No compile-time validation of plugin interactions


## Progressive Type Safety Examples [​](https://gunshi.dev/guide/plugin/type-system#progressive-type-safety-examples)
Let's explore these type parameters through increasingly complex examples:
### 1. Simple Plugin (No Dependencies) [​](https://gunshi.dev/guide/plugin/type-system#_1-simple-plugin-no-dependencies)
This example demonstrates a basic plugin without any dependencies, using only the essential type parameters:
ts```
import { plugin } from 'gunshi/plugin'
import { pluginId } from './types.ts'

import type { PluginId, LoggerExtension } from './types.ts'

export default function logger() {
  return plugin<{}, PluginId, [], LoggerExtension>({
    id: pluginId,
    name: 'Logger Plugin',

    extension: (): LoggerExtension => ({
      log: msg => console.log(`[LOG] ${msg}`),
      error: msg => console.error(`[ERROR] ${msg}`),
      warn: msg => console.warn(`[WARN] ${msg}`),
      debug: msg => console.debug(`[DEBUG] ${msg}`)
    })
  })
}
```

### 2. Plugin with Dependencies [​](https://gunshi.dev/guide/plugin/type-system#_2-plugin-with-dependencies)
This example shows how to declare and use dependencies with proper type definitions:
api.ts
ts```
import { plugin } from 'gunshi/plugin'
import { pluginId as loggerId } from '@mycompany/plugin-logger'
import { pluginId as authId } from '@mycompany/plugin-auth'

import type { LoggerExtension } from '@mycompany/plugin-logger'
import type { AuthExtension } from '@mycompany/plugin-auth'

export const pluginId = 'mycompany:api' as const
export type PluginId = typeof pluginId

export interface ApiExtension {
  get: <T = unknown>(endpoint: string) => Promise<T>
  post: <T = unknown>(endpoint: string, data: unknown) => Promise<T>
}

// Define dependency types using object notation
type DependencyExtensions = {
  [loggerId]: LoggerExtension
  [authId]: AuthExtension
}

// Define dependencies array
const dependencies = [loggerId, authId] as const
type Dependencies = typeof dependencies

export default function api() {
  return plugin<DependencyExtensions, PluginId, Dependencies, ApiExtension>({
    id: pluginId,
    dependencies,

    extension: ctx => {
      const logger = ctx.extensions[loggerId] // Fully typed!
      const auth = ctx.extensions[authId] // Fully typed!

      return {
        get: async endpoint => {
          logger.log(`GET ${endpoint}`)
          const token = auth.getToken()
          // Implementation...
        },
        post: async (endpoint, data) => {
          logger.log(`POST ${endpoint}`)
          // Implementation...
        }
      }
    }
  })
}
```

### 3. Plugin with Optional Dependencies [​](https://gunshi.dev/guide/plugin/type-system#_3-plugin-with-optional-dependencies)
Gunshi supports both required and optional plugin dependencies with full type safety.
The following example shows how to define both required and optional dependencies with their corresponding TypeScript types:
metrics.ts
ts```
import { plugin } from 'gunshi/plugin'
import { pluginId as loggerId } from './logger.ts'
import { pluginId as cacheId } from './cache.ts'

import type { LoggerExtension } from './logger.ts'
import type { CacheExtension } from './cache.ts'

// Type definition: cache is optional
type DependencyExtensions = {
  [loggerId]: LoggerExtension
  [cacheId]?: CacheExtension // Optional with ?
}

// Runtime declaration: must match types
const dependencies = [
  loggerId, // Required
  { id: cacheId, optional: true } // Optional
] as const

export const pluginId = 'mycompany:metrics' as const
export type PluginId = typeof pluginId

export interface MetricsExtension {
  // ...
}

export default function metrics() {
  return plugin<DependencyExtensions, typeof pluginId, typeof dependencies, MetricsExtension>({
    id: pluginId,
    dependencies,

    extension: ctx => {
      const logger = ctx.extensions[loggerId] // Always defined
      const cache = ctx.extensions[cacheId] // Possibly undefined

      return {
        track: (event: string) => {
          logger.log(`Event: ${event}`)

          // Safe optional access
          if (cache) {
            cache.set(`event:${event}`, Date.now())
          }
        }
      }
    }
  })
}
```

### 4. Dependency Chain [​](https://gunshi.dev/guide/plugin/type-system#_4-dependency-chain)
Plugins can depend on other plugins that have their own dependencies.
This example demonstrates a three-level dependency chain where each plugin builds on the previous ones:
base.ts
ts```
// No dependencies
export const baseId = 'base' as const
export interface BaseExtension {
  getConfig: () => Config
}
```

logger.ts
ts```
import { plugin } from 'gunshi/plugin'
import { baseId } from './base.ts'

import type { BaseExtension } from './base.ts'

// Depends on base
export const loggerId = 'logger' as const
export interface LoggerExtension {
  log: (msg: string) => void
}

const loggerDeps = [baseId] as const

export default plugin<
  { [baseId]: BaseExtension },
  typeof loggerId,
  typeof loggerDeps,
  LoggerExtension
>({
  id: loggerId,
  dependencies: loggerDeps,
  extension: ctx => {
    const config = ctx.extensions[baseId].getConfig()
    return {
      log: msg => {
        if (config.verbose) console.log(msg)
      }
    }
  }
})
```

api.ts
ts```
import { plugin } from 'gunshi/plugin'
import { baseId } from './base.ts'
import { loggerId } from './logger.ts'

import type { BaseExtension } from './base.ts'
import type { LoggerExtension } from './logger.ts'

export const apiId = 'api' as const

export interface ApiExtension {
  request: (url: string) => Promise<void> | void
}

// Depends on both
const apiDeps = [baseId, loggerId] as const

export default plugin<
  {
    [baseId]: BaseExtension
    [loggerId]: LoggerExtension
  },
  typeof apiId,
  typeof apiDeps,
  ApiExtension
>({
  id: apiId,
  dependencies: apiDeps,
  extension: ctx => {
    const logger = ctx.extensions[loggerId]
    const config = ctx.extensions[baseId].getConfig()

    return {
      request: async (url: string) => {
        logger.log(`API Request: ${url}`)
        // Implementation...
      }
    }
  }
})
```

## Complete Example [​](https://gunshi.dev/guide/plugin/type-system#complete-example)
This example demonstrates all concepts together: type definitions, all four type parameters, and dependency management.
The following code shows a production-ready API plugin with proper type exports, dependency handling, and complete implementation:
types.ts
ts```
// Type definitions for the API plugin
export const pluginId = 'mycompany:api' as const
export type PluginId = typeof pluginId

export interface ApiExtension {
  get: <T = unknown>(endpoint: string) => Promise<T>
  post: <T = unknown>(endpoint: string, data: unknown) => Promise<T>
  delete: (endpoint: string) => Promise<void>
}
```

api.ts
ts```
import { plugin } from 'gunshi/plugin'
import { pluginId } from './types.ts'
import { pluginId as loggerId } from './logger.ts'
import { pluginId as authId } from './auth.ts'

import type { PluginId, ApiExtension } from './types.ts'
import type { LoggerExtension } from './logger.ts'
import type { AuthExtension } from './auth.ts'

// Re-export for consumers
export * from './types.ts'

// Define dependency types
type DependencyExtensions = {
  [loggerId]: LoggerExtension // Required
  [authId]: AuthExtension // Required
}

// Define dependencies array
const dependencies = [loggerId, authId] as const
type Dependencies = typeof dependencies

// Export the plugin factory
export default function api(baseUrl: string) {
  return plugin<DependencyExtensions, PluginId, Dependencies, ApiExtension>({
    id: pluginId,
    name: 'API Plugin',
    dependencies,

    extension: ctx => {
      const logger = ctx.extensions[loggerId]
      const auth = ctx.extensions[authId]

      async function request<T = unknown>(
        method: string,
        endpoint: string,
        data?: Record<string, unknown>
      ) {
        const url = `${baseUrl}${endpoint}`

        // Make request
        logger.log(`${method} ${url}`)
        const token = auth.getToken()

        // Simulate API call (replace with actual fetch in production)
        const result = await simulateApiCall(method, endpoint, data || {}, token)

        return result as T
      }

      return {
        get: endpoint => request('GET', endpoint),
        post: (endpoint, data) => request('POST', endpoint, data),
        delete: async endpoint => {
          await request('DELETE', endpoint)
        }
      }
    }
  })
}
```

Usage in your CLI application:
cli.ts
ts```
import { cli, define } from 'gunshi'
import api, { pluginId as apiId } from './api.ts'
import auth from './auth.ts'
import logger from './logger.ts'

import type { Args, GunshiParams } from 'gunshi'
import type { ApiExtension } from './api.ts'

const fetchArgs = {
  endpoint: {
    type: 'string',
    required: true,
    description: 'API endpoint to fetch'
  }
} as const satisfies Args

// Define a command that uses the API plugin
const fetchCommand = define<
  GunshiParams<{
    args: typeof fetchArgs
    extensions: { [apiId]: ApiExtension }
  }>
>({
  name: 'fetch',
  description: 'Fetch data from API',
  args: fetchArgs,
  run: async ctx => {
    const api = ctx.extensions[apiId]
    const data = await api.get(ctx.values.endpoint)
    console.log(JSON.stringify(data, null, 2))
  }
})

// Configure and run CLI
await cli(process.argv.slice(2), fetchCommand, {
  name: 'my-cli',
  version: '1.0.0',
  plugins: [
    // Dependencies must be registered first
    logger(),
    auth({ token: process.env.API_TOKEN }),
    api('https://api.example.com')
  ]
})
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/plugins/type-system).
When executed, the plugins work together seamlessly:
sh```
API_TOKEN=xxx npx tsx cli.ts fetch --endpoint /users
my-cli (my-cli v1.0.0)

[LOG] GET https://api.example.com/users
[
  {
    "id": 1,
    "name": "Alice"
  },
  {
    "id": 2,
    "name": "Bob"
  }
]

API_TOKEN=xxx npx tsx cli.ts fetch --endpoint /users/1
my-cli (my-cli v1.0.0)

[LOG] GET https://api.example.com/users/1
{
  "id": 1,
  "name": "Alice"
}
```

## Next Steps [​](https://gunshi.dev/guide/plugin/type-system#next-steps)
With a strong foundation in type-safe plugin development, you've learned how to create plugins that provide compile-time guarantees and excellent developer experience through TypeScript's type system.
Before sharing your plugins with others, it's crucial to ensure they work correctly. The next chapter, [Plugin Testing](https://gunshi.dev/guide/plugin/testing), will guide you through comprehensive testing strategies for plugins, including unit tests, integration tests, and testing plugin interactions.
Last updated: 21.02.26, 15:06
Pager
[Previous pagePlugin Extensions](https://gunshi.dev/guide/plugin/extensions)
[Next pagePlugin Testing](https://gunshi.dev/guide/plugin/testing)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
