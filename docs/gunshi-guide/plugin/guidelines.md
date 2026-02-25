[Skip to content](https://gunshi.dev/guide/plugin/guidelines#VPContent)
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
  * [Design Principles](https://gunshi.dev/guide/plugin/guidelines#design-principles "Design Principles")
  * [Naming Conventions](https://gunshi.dev/guide/plugin/guidelines#naming-conventions "Naming Conventions")
  * [Plugin Structure](https://gunshi.dev/guide/plugin/guidelines#plugin-structure "Plugin Structure")
  * [Error Handling](https://gunshi.dev/guide/plugin/guidelines#error-handling "Error Handling")
  * [Resource Management](https://gunshi.dev/guide/plugin/guidelines#resource-management "Resource Management")
  * [Performance Considerations](https://gunshi.dev/guide/plugin/guidelines#performance-considerations "Performance Considerations")
  * [Security Considerations](https://gunshi.dev/guide/plugin/guidelines#security-considerations "Security Considerations")
  * [Testing Strategies](https://gunshi.dev/guide/plugin/guidelines#testing-strategies "Testing Strategies")
  * [Documentation](https://gunshi.dev/guide/plugin/guidelines#documentation "Documentation")
  * [Next Steps](https://gunshi.dev/guide/plugin/guidelines#next-steps "Next Steps")


Are you an LLM? You can read better optimized documentation at /guide/plugin/guidelines.md for this page in Markdown format
# Plugin Development Guidelines [​](https://gunshi.dev/guide/plugin/guidelines#plugin-development-guidelines)
This guide provides practical guidelines for developing reliable, maintainable, and performant Gunshi plugins.
While other sections cover implementation details and APIs, this guide focuses on recommended approaches and techniques for production-ready plugins.
TIP
We recommend developing Gunshi plugins with TypeScript for enhanced type safety, better IDE support, and compile-time error detection. All examples and code snippets in this guide are written in TypeScript. While JavaScript plugins are supported, TypeScript helps prevent runtime errors and provides a superior developer experience through auto-completion and type checking.
NOTE
Some code examples in this guide include TypeScript file extensions (`.ts`) in `import`/`export` statements. If you use this pattern in your plugin, you'll need to enable `allowImportingTsExtensions` in your `tsconfig.json`.
## Design Principles [​](https://gunshi.dev/guide/plugin/guidelines#design-principles)
When developing Gunshi plugins, follow these core principles:
  * **Single Responsibility** : Each plugin should have one clear purpose
  * **Fail Fast** : Validate configuration early and provide clear error messages
  * **Graceful Degradation** : Handle optional dependencies and features gracefully
  * **Type Safety** : Export type definitions for all public interfaces
  * **Performance Conscious** : Use lazy initialization and avoid blocking operations


These principles work together to create a robust plugin ecosystem. Single responsibility prevents conflicts and simplifies debugging.
Early validation saves time by catching errors at initialization. Graceful degradation ensures compatibility across environments.
Type safety prevents runtime errors and improves developer experience. Performance consciousness ensures responsive CLIs with instant feedback.
## Naming Conventions [​](https://gunshi.dev/guide/plugin/guidelines#naming-conventions)
### Plugin IDs [​](https://gunshi.dev/guide/plugin/guidelines#plugin-ids)
Use namespaced IDs to prevent conflicts and clearly identify plugin ownership.
Namespacing prevents ID collisions in large applications where multiple teams might develop plugins independently.
It enables plugin discovery and filtering by namespace, making it easy to identify official plugins versus third-party extensions.
Additionally, this convention clarifies ownership and responsibility, helping users understand a plugin's source, maintenance status, and trustworthiness at a glance.
The following examples demonstrate different namespacing conventions for plugin IDs:
ts```
// Organization namespace
export const pluginId = 'myorg:logger' as const

// Scoped package format
export const pluginId = '@company/auth' as const

// Official Gunshi plugins
export const pluginId = 'g:i18n' as const
```

### Package Names [​](https://gunshi.dev/guide/plugin/guidelines#package-names)
Follow consistent naming for plugin packages:
  * Standalone packages: `gunshi-plugin-{feature}`
  * Scoped packages: `@{org}/gunshi-plugin-{feature}` or `@{org}/gunshi-plugin`
  * Example: `gunshi-plugin-logger`, `@mycompany/gunshi-plugin-auth`, `@feature/gunshi/plugin`


NOTE
Packages following the pattern `@gunshi/plugin-{feature}` (e.g., `@gunshi/plugin-i18n`) are official plugins maintained by the Gunshi team. These are not third-party plugins but are part of the official Gunshi ecosystem. Third-party developers should use their own organization scope or standalone naming as described above.
## Plugin Structure [​](https://gunshi.dev/guide/plugin/guidelines#plugin-structure)
###  `gunshi/plugin` vs `@gunshi/plugin` [​](https://gunshi.dev/guide/plugin/guidelines#gunshi-plugin-vs-gunshi-plugin)
When developing Gunshi plugins, you need to import the `plugin` function and related types.
Plugin developers can import from either `gunshi/plugin` or `@gunshi/plugin`. Both provide identical APIs and type definitions.
Use `@gunshi/plugin` when you want to minimize your plugin's dependencies and reduce `node_modules` size, as it's a smaller package that only includes plugin-related functionality.
For plugin development, we recommend using `@gunshi/plugin` to keep your plugin package lightweight.
Here are the two equivalent import options available to plugin developers:
ts```
// Option 1: Import from main gunshi package
import { plugin } from 'gunshi/plugin'

// Option 2: Import from dedicated plugin package
import { plugin } from '@gunshi/plugin'
```

### Factory Function Approach [​](https://gunshi.dev/guide/plugin/guidelines#factory-function-approach)
Create plugins as factory functions to allow configuration at initialization.
This approach enables configuration flexibility by accepting options at plugin creation time, allowing each instance to be configured independently without relying on global state or environment variables.
The factory function should be named after the plugin's primary functionality to make its purpose immediately clear.
**Good naming examples:**
  * `logger()` for a logging plugin
  * `auth()` for an authentication plugin
  * `database()` for a database connection plugin


**Avoid generic names:**
  * `createPlugin()` - Too generic
  * `setup()` - Unclear purpose
  * `init()` - Non-descriptive


Here's a complete factory function implementation:
ts```
export interface LoggerOptions {
  level?: 'debug' | 'info' | 'warn' | 'error'
  format?: 'json' | 'text'
}

export default function logger(options: LoggerOptions = {}) {
  const { level = 'info', format = 'text' } = options

  return plugin({
    id: 'logger',
    extension: () => ({
      log: (message: string) => {
        // Use options to configure behavior
        if (format === 'json') {
          console.log(JSON.stringify({ level, message }))
        } else {
          console.log(`[${level}] ${message}`)
        }
      }
    })
  })
}
```

### Export Types and Constants [​](https://gunshi.dev/guide/plugin/guidelines#export-types-and-constants)
Exporting types enables TypeScript consumers to properly type their code, preventing runtime type mismatches in production.
This practice improves IDE autocomplete and IntelliSense, allowing developers to discover your plugin's API more easily.
It also enables compile-time verification of correct plugin usage, catching integration errors during development rather than after deployment.
The following example shows how to properly export types and constants from your plugin:
types.ts
ts```
export const pluginId = 'myorg:feature' as const
export type PluginId = typeof pluginId

export interface FeatureExtension {
  process: (data: Data) => Promise<Result>
}
```

index.ts
ts```
export * from './types.ts'
export { default } from './plugin.ts'
```

For detailed type system usage, see [Plugin Type System](https://gunshi.dev/guide/plugin/type-system).
## Error Handling [​](https://gunshi.dev/guide/plugin/guidelines#error-handling)
### Validate Early, Fail Fast [​](https://gunshi.dev/guide/plugin/guidelines#validate-early-fail-fast)
Early validation helps avoid runtime issues that could occur deep in execution, potentially after performing partial operations or consuming computational resources.
By validating in the factory function, you can provide clearer error messages with full context about invalid configuration and specific steps to fix it.
This approach helps with debugging by catching errors at initialization rather than during command execution, when the source of the problem may be less clear.
The following example demonstrates early validation in the factory function:
ts```
export default function api(endpoint: string) {
  // Validate immediately
  if (!endpoint || !endpoint.startsWith('http')) {
    throw new Error('API plugin requires valid HTTP(S) endpoint URL')
  }

  return plugin({
    id: 'api',
    extension: () => ({
      fetch: async (path: string) => {
        // Endpoint is already validated
        return await fetch(`${endpoint}${path}`)
      }
    })
  })
}
```

### Provide Actionable Error Messages [​](https://gunshi.dev/guide/plugin/guidelines#provide-actionable-error-messages)
Clear, actionable error messages reduce debugging time by pointing developers to the root cause and solution.
When errors provide specific context, possible causes, and concrete next steps, developers can more easily diagnose and fix issues independently.
This example shows how to provide helpful error messages with context and solutions:
ts```
extension: ctx => ({
  connect: async (url: string) => {
    try {
      return await establishConnection(url)
    } catch (error) {
      // Provide context and solution
      throw new Error(
        `Failed to connect to ${url}.\n` +
          `Possible causes:\n` +
          `  - Network connectivity issues\n` +
          `  - Invalid URL format\n` +
          `  - Server is not responding\n` +
          `Try: Verify the URL and your network connection`
      )
    }
  }
})
```

### Handle Optional Dependencies Gracefully [​](https://gunshi.dev/guide/plugin/guidelines#handle-optional-dependencies-gracefully)
Check for optional dependencies before using them.
Graceful dependency handling ensures your plugin works across different environments and configurations, preventing cascading failures when optional plugins are not available.
Choose the appropriate approach based on your needs.
The following example demonstrates different patterns for handling optional dependencies:
ts```
extension: ctx => {
  // Optional dependencies from other plugins
  const logger = ctx.extensions.logger
  const cache = ctx.extensions.cache

  return {
    processData: async (data: Data) => {
      // Use optional chaining (?.) for single operations
      logger?.info(`Processing data: ${data.id}`)

      // Use if statements for complex logic or multiple operations
      if (cache) {
        const cached = await cache.get(data.id)
        if (cached) {
          logger?.info('Cache hit') // Mix patterns when appropriate
          return cached
        }
      }

      // Process the data
      try {
        const result = await doProcessing(data)

        // Conditional block for related operations
        if (cache && result) {
          await cache.set(data.id, result)
          await cache.setExpiry(data.id, 3600)
        }

        logger?.info('Processing completed')
        return result
      } catch (error) {
        logger?.error(`Failed: ${error.message}`)
        throw error
      }
    }
  }
}
```

## Resource Management [​](https://gunshi.dev/guide/plugin/guidelines#resource-management)
After establishing proper error handling, the next important aspect is managing resources effectively.
Proper resource management prevents memory leaks and ensures your plugin releases system resources correctly, especially important when errors occur during execution.
### Clean Up Resources [​](https://gunshi.dev/guide/plugin/guidelines#clean-up-resources)
Proper resource cleanup helps prevent memory leaks in long-running CLI tools.
System resources have practical limits - file handles (typically 1024 per process) and database connections (often 100-200 per server) can be exhausted without proper cleanup.
The following example demonstrates how to implement cleanup mechanisms for managing multiple database connections.
The plugin tracks all created connections in an array and provides a cleanup method that closes them all when the process exits:
ts```
extension: () => {
  const connections: Connection[] = []

  return {
    connect: async () => {
      const conn = await createConnection()
      connections.push(conn)
      return conn
    },

    cleanup: async () => {
      await Promise.all(connections.map(c => c.close()))
      connections.length = 0
    }
  }
}

// Use in `onExtension` or command hooks
onExtension: ctx => {
  process.once('exit', () => ctx.extensions.myPlugin.cleanup())
}
```

### Handle Process Signals [​](https://gunshi.dev/guide/plugin/guidelines#handle-process-signals)
Your plugin should respond to system signals for graceful shutdown. The following code shows how to register cleanup handlers that disconnect from a database when the process receives termination signals (SIGINT from Ctrl+C or SIGTERM from system shutdown):
ts```
onExtension: ctx => {
  const cleanup = async () => {
    await ctx.extensions.database.disconnect()
    process.exit(0)
  }

  process.once('SIGINT', cleanup)
  process.once('SIGTERM', cleanup)
}
```

## Performance Considerations [​](https://gunshi.dev/guide/plugin/guidelines#performance-considerations)
With proper resource management in place, you can focus on optimizing when and how resources are created and accessed.
The following techniques improve CLI startup time and responsiveness while maintaining the resource cleanup patterns discussed earlier.
### Use Lazy Initialization [​](https://gunshi.dev/guide/plugin/guidelines#use-lazy-initialization)
Lazy initialization improves CLI startup time by deferring expensive operations until actually needed.
This ensures quick response times for simple commands.
The following example demonstrates how to defer database connection initialization until the first query is executed:
ts```
extension: () => {
  let connection: Database | null = null

  const getConnection = async () => {
    // Only create the connection on first access
    if (!connection) {
      // Expensive operation deferred until actually needed
      connection = await createConnection()
    }
    return connection
  }

  return {
    query: async (sql: string) => {
      // Lazily initialize connection when query is first called
      const conn = await getConnection()
      return conn.execute(sql)
    }
  }
}
```

### Avoid Blocking Operations [​](https://gunshi.dev/guide/plugin/guidelines#avoid-blocking-operations)
Blocking operations freeze the CLI interface and degrade user experience. Use asynchronous operations to maintain interactivity, especially during initialization and command execution.
The following examples contrast blocking and non-blocking approaches to file operations and data processing:
ts```
extension: () => ({
  // Bad: Blocks the entire CLI during initialization
  loadConfig: () => {
    const data = fs.readFileSync('./config.json', 'utf8') // Blocks!
    return JSON.parse(data)
  },

  // Good: Non-blocking async operation
  loadConfig: async () => {
    const data = await fs.promises.readFile('./config.json', 'utf8')
    return JSON.parse(data)
  },

  // Better: Non-blocking with progress feedback
  processLargeDataset: async files => {
    const results = []
    for (const [index, file] of files.entries()) {
      // Process file asynchronously
      const data = await processFile(file)
      results.push(data)
      console.log(`Processing: ${index + 1}/${files.length}`)
    }
    console.log() // New line after progress
    return results
  }
})
```

### Optimize Module Loading [​](https://gunshi.dev/guide/plugin/guidelines#optimize-module-loading)
Loading heavy dependencies at startup increases CLI initialization time and memory usage. Use dynamic imports to load heavy dependencies only when needed, keeping the initial load minimal for fast command response.
These examples demonstrate how to use dynamic imports to defer loading heavy dependencies:
ts```
// Bad: Module-level import loads dependency at startup
import ExcelJS from 'exceljs' // 4MB loaded at startup!

extension: () => ({
  generateReport: async data => {
    const workbook = new ExcelJS.Workbook()
    // Generate report...
  }
  // Other methods that don't use ExcelJS...
})

// Good: Dynamic import loads dependency only when needed
extension: () => ({
  generateReport: async data => {
    // Load 4MB dependency only when report is actually generated
    const { Workbook } = await import('exceljs')
    const workbook = new Workbook()
    // Generate report...
  },

  // Better: Combine with user feedback for perceived performance
  exportData: async (format, data) => {
    if (format === 'excel') {
      console.log('Loading Excel export module...')
      const { exportToExcel } = await import('./exporters/excel.js')
      return exportToExcel(data)
    } else if (format === 'pdf') {
      console.log('Loading PDF export module...')
      const { exportToPDF } = await import('./exporters/pdf.js')
      return exportToPDF(data)
    }
    // Default lightweight JSON export
    return JSON.stringify(data)
  }
})
```

For more `extension` lifecycle details, see [Plugin Extensions](https://gunshi.dev/guide/plugin/extensions).
## Security Considerations [​](https://gunshi.dev/guide/plugin/guidelines#security-considerations)
### Validate All Inputs [​](https://gunshi.dev/guide/plugin/guidelines#validate-all-inputs)
User input should be validated and sanitized before use.
The following example demonstrates how to validate file paths and extensions to prevent directory traversal attacks and restrict file types:
ts```
extension: () => ({
  readFile: async (path: string) => {
    // Prevent path traversal
    if (path.includes('..') || path.startsWith('/')) {
      throw new Error('Invalid file path')
    }

    // Validate file extension
    const allowed = ['.json', '.yaml', '.yml']
    if (!allowed.some(ext => path.endsWith(ext))) {
      throw new Error('Unsupported file type')
    }

    return await fs.readFile(path, 'utf8')
  }
})
```

### Protect Sensitive Data [​](https://gunshi.dev/guide/plugin/guidelines#protect-sensitive-data)
Avoid exposing sensitive information in logs or error messages.
This example shows how to handle API keys securely in a plugin, validating them without logging sensitive data:
ts```
export default function auth(apiKey: string) {
  // Validate but don't log the key
  if (!apiKey || apiKey.length < 32) {
    throw new Error('Invalid API key format')
  }

  return plugin({
    id: 'auth',
    extension: () => ({
      request: async (url: string) => {
        try {
          return await fetch(url, {
            headers: { Authorization: `Bearer ${apiKey}` }
          })
        } catch (error) {
          // Don't include the API key in errors
          throw new Error(`Request failed: ${error.message}`)
        }
      }
    })
  })
}
```

### Prevent Prototype Pollution [​](https://gunshi.dev/guide/plugin/guidelines#prevent-prototype-pollution)
Prototype pollution occurs when user-controlled data modifies `Object.prototype`, potentially injecting properties that affect all objects in your application.
This vulnerability is particularly dangerous in CLI tools that process configuration files or user-provided options, as attackers can manipulate command behavior through crafted inputs.
Use `Object.create(null)` to create objects without a prototype chain when handling user input:
ts```
extension: () => {
  // Vulnerable: Regular object inherits from Object.prototype
  const userOptions = {} // Can be polluted via __proto__ or constructor

  // Safe: Object without prototype chain
  const safeOptions = Object.create(null)

  return {
    parseConfig: config => {
      // Safe storage for user-provided data
      const settings = Object.create(null)

      // Safely merge user config with defaults
      for (const key in config) {
        // Only copy own properties, not inherited ones
        if (Object.prototype.hasOwnProperty.call(config, key)) {
          // Prevent __proto__ and constructor pollution
          if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
            continue
          }
          settings[key] = config[key]
        }
      }

      return settings
    },

    // Safe command registry without prototype chain
    createCommandMap: commands => {
      const commandMap = Object.create(null)

      for (const cmd of commands) {
        commandMap[cmd] = true
      }

      // Safe to check user input against this map
      return commandMap
    }
  }
}
```

Use `Object.create(null)` specifically when:
  * Storing user-provided configuration or options
  * Creating lookup maps from external input
  * Building registries from dynamic data
  * Merging multiple configuration sources


Regular object literals are safe for:
  * Internal plugin state
  * Hardcoded configurations
  * Type-checked interfaces


## Testing Strategies [​](https://gunshi.dev/guide/plugin/guidelines#testing-strategies)
Focus testing on your plugin's extension factory and how it interacts with the command context.
This ensures your plugin properly integrates with Gunshi's lifecycle and handles command metadata correctly.
The following example demonstrates how to test your plugin's extension factory and its interaction with the command context:
ts```
import { describe, test, expect, vi } from 'vitest'
import myPlugin from './plugin.ts'

describe('Plugin Extension', () => {
  test('extension factory creates correct methods', async () => {
    const plugin = myPlugin({ debug: true })

    // Mock a command context to simulate Gunshi's runtime environment
    const mockContext = {
      name: 'test-command',
      values: { verbose: true },
      log: vi.fn(),
      extensions: {}
    }

    const mockCommand = { name: 'test', run: vi.fn() }

    // Verify the extension factory returns all required plugin methods
    const extension = await plugin.extension(mockContext, mockCommand)
    expect(extension.process).toBeDefined()
    expect(typeof extension.process).toBe('function')

    // Verify the plugin correctly uses context.log when debug is enabled
    extension.process('data')
    expect(mockContext.log).toHaveBeenCalledWith('[DEBUG]', 'data')
  })
})
```

For test helpers, lifecycle testing, and integration testing strategies, see [Plugin Testing](https://gunshi.dev/guide/plugin/testing).
## Documentation [​](https://gunshi.dev/guide/plugin/guidelines#documentation)
Comprehensive documentation is crucial for plugin adoption and maintenance.
This section provides guidelines and real examples from official Gunshi plugins to help you create effective documentation.
### Module-Level Documentation [​](https://gunshi.dev/guide/plugin/guidelines#module-level-documentation)
Start your main plugin file with module-level JSDoc that explains the plugin's purpose and provides a complete usage example.
The following example from `@gunshi/plugin-global` demonstrates this approach:
ts```
/**
 * The entry point of global options plugin
 *
 * @example
 * ```js
 * import global from '@gunshi/plugin-global'
 * import { cli } from 'gunshi'
 *
 * const entry = (ctx) => {
 *   // ...
 * }
 *
 * await cli(process.argv.slice(2), entry, {
 *   // ...
 *
 *   plugins: [
 *     global()
 *   ],
 *
 *   // ...
 * })
 * ```
 *
 * @module
 */
```

### Factory Function Documentation [​](https://gunshi.dev/guide/plugin/guidelines#factory-function-documentation)
Document your factory function comprehensively, including all parameters and return types. Here's an example from `@gunshi/plugin-i18n`:
ts```
/**
 * i18n plugin
 *
 * @param options - I18n plugin options
 * @returns A defined plugin as i18n
 */
export default function i18n(
  options: I18nPluginOptions = {}
): PluginWithExtension<I18nExtension<DefaultGunshiParams>> {
  // Implementation
}
```

For plugins with required parameters, include validation guidance:
ts```
/**
 * completion plugin
 *
 * @param options - Completion options
 * @returns A defined plugin as completion
 */
export default function completion(options: CompletionOptions = {}): PluginWithoutExtension {
  const config = options.config || {}
  // Validate and use options
}
```

### Extension Interface Documentation [​](https://gunshi.dev/guide/plugin/guidelines#extension-interface-documentation)
Document all methods and properties exposed through your plugin's extension.
Here's a concise example:
ts```
/**
 * Extended command context utilities available via `CommandContext.extensions['g:i18n']`.
 */
export interface I18nExtension<G extends GunshiParams<any> = DefaultGunshiParams> {
  /** Command locale */
  locale: Intl.Locale

  /** Translate a message with optional interpolation */
  translate: <K>(key: K, values?: Record<string, unknown>) => string

  /** Load command resources for the specified locale */
  loadResource: (
    locale: string | Intl.Locale,
    ctx: CommandContext,
    command: Command
  ) => Promise<boolean>

  // Additional methods follow similar documentation patterns
}
```

For complete examples, see the official plugins' source code.
### Configuration Options Documentation [​](https://gunshi.dev/guide/plugin/guidelines#configuration-options-documentation)
Document all configuration options with their types, defaults, and purpose:
ts```
/**
 * i18n plugin options
 */
export interface I18nPluginOptions {
  /** Locale to use for translations */
  locale?: string | Intl.Locale

  /** Translation adapter factory */
  translationAdapterFactory?: TranslationAdapterFactory

  /** Built-in localizable resources */
  builtinResources?: Record<string, Record<BuiltinResourceKeys, string>>
}
```

Nested interfaces follow the same documentation pattern with JSDoc comments for each property.
### Type Documentation Guidelines [​](https://gunshi.dev/guide/plugin/guidelines#type-documentation-guidelines)
Export all public types with clear documentation:
ts```
/** The unique identifier for the i18n plugin */
export const pluginId = namespacedId('i18n')
export type PluginId = typeof pluginId

/** Command resource type with dynamic argument keys */
export type CommandResource<G extends GunshiParamsConstraint = DefaultGunshiParams> = {
  description: string
  // Dynamic properties based on command arguments
} & { [key: string]: string }

/** Async function to fetch command resources */
export type CommandResourceFetcher<G extends GunshiParamsConstraint> = (
  ctx: Readonly<CommandContext<G>>
) => Awaitable<CommandResource<G>>
```

For more complex generic types, see official plugin implementations.
### Plugin Dependencies Documentation [​](https://gunshi.dev/guide/plugin/guidelines#plugin-dependencies-documentation)
Document plugin dependencies clearly:
ts```
return plugin<...>({
  id: pluginId,
  name: 'completion',
  dependencies: [{ id: namespacedId('i18n'), optional: true }] as const
  // ...
})
```

In your README, explain:
  * Dependency ID and whether it's optional/required
  * Purpose and effect when present
  * Any automatic behaviors or integration points


### README Template Structure [​](https://gunshi.dev/guide/plugin/guidelines#readme-template-structure)
NOTE
Gunshi plans to provide official tooling for plugin authors to automatically generate README templates in future releases. This tooling will help scaffold standard README files with the correct structure, sections, and formatting. Until then, the following template demonstrates the recommended structure for plugin README files.
A comprehensive README should follow this structure:
README.md
md```
# @yourorg/gunshi-plugin-{name}

> Brief description of what your plugin does.

## Installation

\`\`\`sh

### npm

npm install --save @yourorg/gunshi-plugin-{name}
\`\`\`

For other package managers, see [installation guide](./docs/install.md).

## Usage

<!-- eslint-disable markdown/no-missing-label-refs, markdown/no-space-in-emphasis -->

\`\`\`ts
import { cli, define } from 'gunshi'
import myPlugin from '@yourorg/gunshi-plugin-{name}'

const command = define({
name: 'example',
run: ctx => {
ctx.extensions['yourorg:{name}'].someMethod()
}
})

await cli(process.argv.slice(2), command, {
plugins: [myPlugin({ /* options */ })]
})
\`\`\`

<!-- eslint-enable markdown/no-missing-label-refs, markdown/no-space-in-emphasis -->

## Plugin Options

See [API documentation](./docs/api.md) for complete options.

## Examples

See the [examples directory](./examples) for usage examples.

## License

[MIT](http://opensource.org/licenses/MIT)
```

### API Documentation Generation [​](https://gunshi.dev/guide/plugin/guidelines#api-documentation-generation)
Generate API documentation directly from your JSDoc comments to maintain a single source of truth.
This approach ensures your documentation stays synchronized with your code, as updates to JSDoc comments automatically reflect in generated documentation.
Various tools can generate documentation from JSDoc comments:
  * **[TypeDoc](https://typedoc.org/)** - Recommended for TypeScript projects, generates documentation from TypeScript declarations and JSDoc
  * **[API Extractor](https://api-extractor.com/)** - Microsoft's tool focusing on API review and documentation for TypeScript libraries


The following example demonstrates configuring `TypeDoc`, a popular choice for TypeScript plugin projects. Create a `typedoc.config.mjs` file:
typedoc.config.mjs
js```
// @ts-check

export default {
  /**
   * typedoc options
   * ref: https://typedoc.org/documents/Options.html
   */
  entryPoints: ['./src/index.ts'],
  out: 'docs',
  plugin: ['typedoc-plugin-markdown'],
  readme: 'none',
  groupOrder: ['Variables', 'Functions', 'Classes', 'Interfaces', 'Type Aliases'],

  /**
   * typedoc-plugin-markdown options
   * ref: https://typedoc-plugin-markdown.org/docs/options
   */
  entryFileName: 'index',
  hidePageTitle: false,
  useCodeBlocks: true,
  disableSources: true,
  indexFormat: 'table',
  parametersFormat: 'table',
  interfacePropertiesFormat: 'table',
  classPropertiesFormat: 'table',
  propertyMembersFormat: 'table',
  typeAliasPropertiesFormat: 'table',
  enumMembersFormat: 'table'
}
```

Add documentation scripts to your `package.json`:
package.json
json```
{
  "scripts": {
    "docs": "typedoc",
    "docs:watch": "typedoc --watch",
    "docs:clean": "rm -rf docs"
  },
  "devDependencies": {
    "typedoc": "^0.26.0",
    "typedoc-plugin-markdown": "^4.0.0"
  }
}
```

This configuration extracts documentation from your JSDoc comments and TypeScript types, generating comprehensive API documentation without manual maintenance.
The generated documentation includes all exported functions, interfaces, types, and their associated JSDoc descriptions, ensuring consistency between code and documentation.
## Next Steps [​](https://gunshi.dev/guide/plugin/guidelines#next-steps)
Following these guidelines ensures your plugins are production-ready, maintainable, and provide excellent developer experience. You've learned naming conventions, error handling patterns, performance considerations, and documentation strategies.
Now that you understand how to build high-quality plugins, explore the existing ecosystem to see these principles in action and find plugins that can enhance your CLI.
The next chapter on [Plugin List](https://gunshi.dev/guide/plugin/list) showcases official plugins maintained by the Gunshi team and community contributions.
Last updated: 21.02.26, 15:06
Pager
[Previous pagePlugin Testing](https://gunshi.dev/guide/plugin/testing)
[Next pagePlugin List](https://gunshi.dev/guide/plugin/list)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
