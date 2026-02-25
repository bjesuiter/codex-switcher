[Skip to content](https://gunshi.dev/guide/advanced/command-hooks#VPContent)
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
  * [Understanding Command Lifecycle](https://gunshi.dev/guide/advanced/command-hooks#understanding-command-lifecycle "Understanding Command Lifecycle")
  * [Available Hooks](https://gunshi.dev/guide/advanced/command-hooks#available-hooks "Available Hooks")
  * [Basic Hook Usage](https://gunshi.dev/guide/advanced/command-hooks#basic-hook-usage "Basic Hook Usage")
  * [Hooks vs Decorators](https://gunshi.dev/guide/advanced/command-hooks#hooks-vs-decorators "Hooks vs Decorators")
  * [Practical Use Cases](https://gunshi.dev/guide/advanced/command-hooks#practical-use-cases "Practical Use Cases")
  * [Hook Execution Order](https://gunshi.dev/guide/advanced/command-hooks#hook-execution-order "Hook Execution Order")


Are you an LLM? You can read better optimized documentation at /guide/advanced/command-hooks.md for this page in Markdown format
# Command Hooks [​](https://gunshi.dev/guide/advanced/command-hooks#command-hooks)
Gunshi provides powerful lifecycle hooks that allow you to intercept and control command execution at various stages.
These hooks enable advanced scenarios like logging, monitoring, validation, and error handling.
## Understanding Command Lifecycle [​](https://gunshi.dev/guide/advanced/command-hooks#understanding-command-lifecycle)
The command execution lifecycle in Gunshi follows these stages:
Syntax error in textmermaid version 11.12.0
## Available Hooks [​](https://gunshi.dev/guide/advanced/command-hooks#available-hooks)
Gunshi provides three main lifecycle hooks:
  * **`onBeforeCommand`**: Executes before the command runs
  * **`onAfterCommand`**: Executes after successful command completion
  * **`onErrorCommand`**: Executes when a command throws an error


## Basic Hook Usage [​](https://gunshi.dev/guide/advanced/command-hooks#basic-hook-usage)
### Setting Up Hooks [​](https://gunshi.dev/guide/advanced/command-hooks#setting-up-hooks)
The following example demonstrates how to configure lifecycle hooks when initializing your CLI application.
In this setup, we define three hooks that will execute at different stages of the command lifecycle:
cli.ts
ts```
import { cli, define } from 'gunshi'

const command = define({
  name: 'server',
  run: () => {
    console.log('Starting server...')
  }
})

await cli(process.argv.slice(2), command, {
  name: 'my-app',
  version: '1.0.0',

  // Define lifecycle hooks
  onBeforeCommand: ctx => {
    console.log(`About to run: ${ctx.name}`)
  },

  onAfterCommand: (ctx, result) => {
    console.log(`Command ${ctx.name} completed successfully`)
  },

  onErrorCommand: (ctx, error) => {
    console.error(`Command ${ctx.name} failed:`, error)
  }
})
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/advanced/command-hooks).
### Hook Parameters [​](https://gunshi.dev/guide/advanced/command-hooks#hook-parameters)
Each lifecycle hook receives specific parameters that provide context about the command execution.
The `CommandContext` parameter is read-only and contains all command metadata, while `onAfterCommand` also receives the command result and `onErrorCommand` receives the thrown error:
ts```
{
  // Before command execution
  onBeforeCommand?: (ctx: Readonly<CommandContext>) => Awaitable<void>

  // After successful execution
  onAfterCommand?: (ctx: Readonly<CommandContext>, result: string | undefined) => Awaitable<void>

  // On command error
  onErrorCommand?: (ctx: Readonly<CommandContext>, error: Error) => Awaitable<void>
}
```

NOTE
The `CommandContext` object provides comprehensive information about command execution. For the complete CommandContext API reference including all properties and types, see the [CommandContext interface documentation](https://gunshi.dev/api/default/interfaces/CommandContext).
With an understanding of how hooks work and their parameters, let's explore how they differ from and interact with plugin decorators.
## Hooks vs Decorators [​](https://gunshi.dev/guide/advanced/command-hooks#hooks-vs-decorators)
Gunshi provides two distinct mechanisms for controlling command execution:
  1. **CLI-level Hooks** : Lifecycle hooks that run **before and after** command execution
     * `onBeforeCommand`: Pre-execution processing (logging, validation, initialization)
     * `onAfterCommand`: Post-success processing (cleanup, metrics recording)
     * `onErrorCommand`: Error handling (error logging, rollback)
  2. **Plugin Decorators** : **Wrap** the command itself to modify its behavior
     * `decorateCommand`: Wraps command runner to add or modify functionality
     * Multiple plugins can chain decorators (decorator pattern)


TIP
The `decorateCommand` method is a powerful plugin API that allows wrapping command execution to add or modify functionality. It enables plugins to implement cross-cutting concerns like authentication, logging, and transaction management. For comprehensive information about how to use decorators in plugins, see the [Plugin Decorators documentation](https://gunshi.dev/guide/plugin/decorators).
### Execution Flow [​](https://gunshi.dev/guide/advanced/command-hooks#execution-flow)
The following diagram illustrates how hooks and decorators interact during command execution:
Syntax error in textmermaid version 11.12.0
### Detailed Execution Sequence [​](https://gunshi.dev/guide/advanced/command-hooks#detailed-execution-sequence)
  1. **`onBeforeCommand`Hook** - Pre-execution setup and validation
  2. **Plugin Decorator Chain** - Command wrapping by plugins 
     * Applied in reverse order (LIFO - last registered, first executed)
     * Each decorator wraps the next runner in the chain
  3. **Command Runner** - Actual command execution
  4. **`onAfterCommand`Hook** - Post-success processing
  5. **`onErrorCommand`Hook** - Error handling when exceptions occur


### Plugin Decorator Example [​](https://gunshi.dev/guide/advanced/command-hooks#plugin-decorator-example)
The following example demonstrates how to use the `decorateCommand` method in a plugin to measure command execution time:
ts```
import { plugin } from 'gunshi/plugin'

// Using decorateCommand in a plugin
export default plugin({
  id: 'timing-plugin',
  setup: ctx => {
    // Wrap command execution to measure execution time
    ctx.decorateCommand(baseRunner => {
      return async commandCtx => {
        const start = Date.now()
        try {
          const result = await baseRunner(commandCtx)
          console.log(`Execution time: ${Date.now() - start}ms`)
          return result
        } catch (error) {
          console.log(`Failed after: ${Date.now() - start}ms`)
          throw error
        }
      }
    })
  }
})
```

NOTE
Plugins don't have CLI-level hooks (`onBeforeCommand`, etc.). Instead, they use the `decorateCommand` method to wrap command execution and add custom logic. This allows plugins to extend and modify command behavior through the decorator pattern.
## Practical Use Cases [​](https://gunshi.dev/guide/advanced/command-hooks#practical-use-cases)
TIP
The following examples use plugin extensions through `ctx.extensions`. Extensions are how plugins add functionality to the command context, allowing you to access plugin-provided features like logging, metrics, authentication, and database connections. For comprehensive information about working with extensions, including type-safe patterns and best practices, see the [Context Extensions documentation](https://gunshi.dev/guide/advanced/context-extensions).
### Logging and Monitoring [​](https://gunshi.dev/guide/advanced/command-hooks#logging-and-monitoring)
Implement comprehensive logging across all commands:
ts```
import { cli } from 'gunshi'
import logger, { pluginId as loggerId } from '@my/plugin-logger'

await cli(process.argv.slice(2), commands, {
  name: 'my-app',

  // Install logger plugin
  plugins: [logger()],

  onBeforeCommand: ctx => {
    const logger = ctx.extensions[loggerId]
    // Log command start with arguments
    logger?.info('Command started', {
      command: ctx.name,
      args: ctx.values,
      timestamp: new Date().toISOString()
    })
  },

  onAfterCommand: (ctx, result) => {
    const logger = ctx.extensions[loggerId]
    // Log successful completion
    logger?.info('Command completed', {
      command: ctx.name,
      duration: Date.now() - logger?.startTime,
      result: typeof result
    })
  },

  onErrorCommand: (ctx, error) => {
    const logger = ctx.extensions[loggerId]
    // Log errors with full context
    logger?.error('Command failed', {
      command: ctx.name,
      error: error.message,
      stack: error.stack,
      args: ctx.values
    })
  }
})
```

### Performance Monitoring [​](https://gunshi.dev/guide/advanced/command-hooks#performance-monitoring)
Track command execution times and performance metrics:
ts```
import { cli } from 'gunshi'
import metrics, { pluginId as metricsId } from '@my/plugin-metrics'

await cli(process.argv.slice(2), commands, {
  name: 'my-app',

  // Install metrics plugin
  plugins: [metrics()],

  onBeforeCommand: ctx => {
    const metrics = ctx.extensions[metricsId]
    // Start tracking command execution
    metrics?.startTracking({
      command: ctx.name,
      args: ctx.values,
      environment: process.env.NODE_ENV
    })
  },

  onAfterCommand: async (ctx, result) => {
    const metrics = ctx.extensions[metricsId]
    // Record successful completion
    const duration = metrics?.endTracking()

    // Send metrics to monitoring service
    await metrics?.send({
      command: ctx.name,
      status: 'success',
      duration,
      memoryUsage: process.memoryUsage(),
      resultSize: result?.length || 0
    })
  },

  onErrorCommand: async (ctx, error) => {
    const metrics = ctx.extensions[metricsId]
    // Record failure metrics
    const duration = metrics?.endTracking()

    // Send error metrics with additional context
    await metrics?.send({
      command: ctx.name,
      status: 'failed',
      duration,
      error: error.message,
      errorType: error.constructor.name,
      stackTrace: error.stack
    })
  }
})
```

### Validation and Guards [​](https://gunshi.dev/guide/advanced/command-hooks#validation-and-guards)
Use hooks to implement global validation or access control:
ts```
import { cli } from 'gunshi'
import auth, { pluginId as authId } from '@my/plugin-auth'

await cli(process.argv.slice(2), commands, {
  name: 'my-app',

  // Install auth plugin
  plugins: [
    auth({
      publicCommands: ['help', 'version', 'login'],
      tokenSource: ['env:AUTH_TOKEN', 'args:token']
    })
  ],

  onBeforeCommand: async ctx => {
    const auth = ctx.extensions[authId]

    // Skip auth for public commands
    if (auth?.isPublicCommand(ctx.name)) {
      return
    }

    // Verify authentication
    const token = auth?.getToken()
    if (!token) {
      throw new Error('Authentication required. Please run "login" first.')
    }

    const user = await auth?.verifyToken(token)
    if (!user) {
      throw new Error('Invalid or expired token. Please login again.')
    }

    // Store user info for command use
    await auth?.setCurrentUser(user)
  },

  onAfterCommand: async ctx => {
    const auth = ctx.extensions[authId]
    // Clean up sensitive data after command execution
    await auth?.clearSession()
  },

  onErrorCommand: async (ctx, error) => {
    const auth = ctx.extensions[authId]
    // Log security-related errors
    if (error.message.includes('Authentication') || error.message.includes('token')) {
      await auth?.logSecurityEvent({
        type: 'auth_failure',
        command: ctx.name,
        timestamp: new Date().toISOString()
      })
    }
  }
})
```

### Transaction Management [​](https://gunshi.dev/guide/advanced/command-hooks#transaction-management)
Implement database transactions or rollback mechanisms:
ts```
import { cli } from 'gunshi'
import database, { pluginId as dbId } from '@my/plugin-database'

await cli(process.argv.slice(2), commands, {
  name: 'my-app',

  // Install database plugin with transaction support
  plugins: [
    database({
      connectionString: process.env.DATABASE_URL,
      transactionalCommands: ['create', 'update', 'delete', 'migrate']
    })
  ],

  onBeforeCommand: async ctx => {
    const db = ctx.extensions[dbId]

    // Start transaction for data-modifying commands
    if (db?.isTransactionalCommand(ctx.name)) {
      const transaction = await db.beginTransaction()

      // Store transaction ID for tracking
      await db?.setCurrentTransaction(transaction.id)

      console.log(`Transaction ${transaction.id} started for command: ${ctx.name}`)
    }
  },

  onAfterCommand: async (ctx, result) => {
    const db = ctx.extensions[dbId]
    const transaction = db?.getCurrentTransaction()

    if (transaction) {
      // Commit on success
      await db.commit(transaction.id)
      console.log(`Transaction ${transaction.id} committed successfully`)

      // Clean up transaction reference
      await db.clearCurrentTransaction()
    }
  },

  onErrorCommand: async (ctx, error) => {
    const db = ctx.extensions[dbId]
    const transaction = db?.getCurrentTransaction()

    if (transaction) {
      // Rollback on error
      await db?.rollback(transaction.id)
      console.error(`Transaction ${transaction.id} rolled back due to error:`, error.message)

      // Log the failed transaction for audit
      await db?.logTransactionFailure({
        id: transaction.id,
        command: ctx.name,
        error: error.message,
        timestamp: new Date().toISOString()
      })

      // Clean up transaction reference
      await db?.clearCurrentTransaction()
    }
  }
})
```

## Hook Execution Order [​](https://gunshi.dev/guide/advanced/command-hooks#hook-execution-order)
When multiple hooks and decorators are present, they execute in a specific sequence as shown in the Hooks vs Decorators section above.
Understanding this order is crucial for implementing complex behaviors like transaction management or error recovery.
For detailed execution flow, refer to the execution diagram in the [Hooks vs Decorators](https://gunshi.dev/guide/advanced/command-hooks#hooks-vs-decorators) section.
Last updated: 21.02.26, 15:06
Pager
[Previous pageType System](https://gunshi.dev/guide/advanced/type-system)
[Next pageContext Extensions](https://gunshi.dev/guide/advanced/context-extensions)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
