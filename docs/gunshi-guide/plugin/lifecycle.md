[Skip to content](https://gunshi.dev/guide/plugin/lifecycle#VPContent)
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
  * [CLI Execution Lifecycle](https://gunshi.dev/guide/plugin/lifecycle#cli-execution-lifecycle "CLI Execution Lifecycle")
  * [Plugin-Specific Lifecycle Steps](https://gunshi.dev/guide/plugin/lifecycle#plugin-specific-lifecycle-steps "Plugin-Specific Lifecycle Steps")
  * [Extension Lifecycle in Detail](https://gunshi.dev/guide/plugin/lifecycle#extension-lifecycle-in-detail "Extension Lifecycle in Detail")
  * [Lifecycle with Command Hooks](https://gunshi.dev/guide/plugin/lifecycle#lifecycle-with-command-hooks "Lifecycle with Command Hooks")
  * [Complete Lifecycle Example](https://gunshi.dev/guide/plugin/lifecycle#complete-lifecycle-example "Complete Lifecycle Example")
  * [Next Steps](https://gunshi.dev/guide/plugin/lifecycle#next-steps "Next Steps")


Are you an LLM? You can read better optimized documentation at /guide/plugin/lifecycle.md for this page in Markdown format
# Plugin Lifecycle [​](https://gunshi.dev/guide/plugin/lifecycle#plugin-lifecycle)
Understanding the Gunshi lifecycle is crucial for effective plugin development.
This guide explains how plugins integrate with the CLI execution flow and when different plugin features are activated.
## CLI Execution Lifecycle [​](https://gunshi.dev/guide/plugin/lifecycle#cli-execution-lifecycle)
When a Gunshi CLI application runs, it follows a specific sequence of steps from startup to completion.
The diagram below shows the complete execution flow, with plugin-related steps highlighted in green:
Syntax error in textmermaid version 11.12.0
The lifecycle consists of 10 steps (A through J), where plugins are primarily involved in:
  * **Steps B-D** : Plugin initialization and setup
  * **Step H** : Plugin extension creation and activation during CommandContext creation
  * **Step I** : Command execution with plugin decorators applied


## Plugin-Specific Lifecycle Steps [​](https://gunshi.dev/guide/plugin/lifecycle#plugin-specific-lifecycle-steps)
Plugins are primarily involved in specific steps of the CLI lifecycle.
This section focuses on the steps where plugins actively participate.
### Setup Phase (Steps B-D) [​](https://gunshi.dev/guide/plugin/lifecycle#setup-phase-steps-b-d)
During the setup phase, plugins are loaded, dependencies are resolved, and plugin setup functions are executed.
This phase occurs once at CLI initialization.
**What happens in this phase:**
  * Plugins configure the CLI by adding options, commands, and decorators
  * All modifications are registered but not yet executed
  * The `setup()` function runs for each plugin


#### Step B: Load Plugins [​](https://gunshi.dev/guide/plugin/lifecycle#step-b-load-plugins)
Plugins are collected from CLI options and prepared for initialization.
The following code shows how plugins are passed to the CLI function:
js```
import { cli } from 'gunshi'

await cli(args, command, {
  plugins: [
    plugin1(), // Collected
    plugin2(), // Collected
    plugin3() // Collected
  ]
})
```

#### Step C: Resolve Dependencies [​](https://gunshi.dev/guide/plugin/lifecycle#step-c-resolve-dependencies)
Gunshi uses **topological sorting** to resolve plugin dependencies.
The following example demonstrates how plugins with dependencies are resolved in the correct order:
js```
import { plugin } from 'gunshi/plugin'

// Given these plugins:
const pluginA = plugin({
  id: 'a',
  dependencies: ['b', 'c']
})

const pluginB = plugin({
  id: 'b',
  dependencies: ['d']
})

const pluginC = plugin({
  id: 'c'
})

const pluginD = plugin({
  id: 'd'
})

// Resolution order: d → b → c → a
```

TIP
For details on plugin dependency resolution, including circular dependency detection, optional dependencies, see [Plugin Dependencies](https://gunshi.dev/guide/plugin/dependencies).
#### Step D: Execute Plugin Setup [​](https://gunshi.dev/guide/plugin/lifecycle#step-d-execute-plugin-setup)
The `setup` function of each plugin is called in dependency order.
This example shows what actions a plugin can perform during setup:
js```
import { plugin } from 'gunshi/plugin'

const myPlugin = plugin({
  id: 'my-plugin',
  setup: ctx => {
    // This runs during Setup Phase
    console.log('Plugin setting up')

    // Add global options
    ctx.addGlobalOption('verbose', {
      type: 'boolean',
      description: 'Verbose output'
    })

    // Register sub-commands
    ctx.addCommand('plugin-cmd', {
      name: 'plugin-cmd',
      run: ctx => console.log('Plugin command')
    })

    // Add decorators (they stack in LIFO order)
    ctx.decorateCommand(baseRunner => async ctx => {
      console.log('Before command (from plugin)')
      const result = await baseRunner(ctx)
      console.log('After command (from plugin)')
      return result
    })
  }
})
```

### Command Processing (Steps E-H) [​](https://gunshi.dev/guide/plugin/lifecycle#command-processing-steps-e-h)
Between the setup phase and execution phase, Gunshi processes the command-line arguments and prepares the execution context:
  * **Step E** : Parse command-line arguments into structured tokens
  * **Step F** : Resolve which command to execute
  * **Step G** : Validate arguments against the command's schema
  * **Step H** : Create the CommandContext object


NOTE
These internal processing steps are handled automatically by Gunshi. Plugin developers don't need to interact with these steps directly.
### Execution Phase (Steps H-I) [​](https://gunshi.dev/guide/plugin/lifecycle#execution-phase-steps-h-i)
During the execution phase, the CommandContext is created with plugin extensions, and then the command is executed with all decorators applied.
### Step H: Create CommandContext & Process Plugins [​](https://gunshi.dev/guide/plugin/lifecycle#step-h-create-commandcontext-process-plugins)
The CommandContext is created and each plugin's extension is initialized:
  1. Initialize CommandContext with parsed arguments and values
  2. For each plugin (in dependency order): 
     * Call the plugin's `extension()` function to create an extension
     * Store the extension in `context.extensions[pluginId]`
     * Immediately call the plugin's `onExtension()` callback if present


This sequential processing ensures extensions from dependencies are available to dependent plugins.
NOTE
For detailed information about the extension lifecycle, including execution order guarantees, the relationship between `extension` and `onExtension`, and code examples, see the [Extension Lifecycle](https://gunshi.dev/guide/plugin/extensions#extension-lifecycle) section in the Plugin Extensions guide.
### Step I: Execute Command [​](https://gunshi.dev/guide/plugin/lifecycle#step-i-execute-command)
The command runner executes with:
  * All decorators applied in LIFO (Last In, First Out) order
  * Full access to all plugin extensions via `ctx.extensions`
  * Complete CommandContext with validated arguments


This example illustrates the command execution with decorator wrapping and extension usage:
js```
import { define } from 'gunshi'

// If plugins A, B, C add decorators in that order:
// Execution order: C → B → A → original command → A → B → C

const command = define({
  name: 'build',
  run: ctx => {
    // This is the original command
    ctx.extensions.logger.log('Building project...')
    // Build logic here
  }
})
```

## Extension Lifecycle in Detail [​](https://gunshi.dev/guide/plugin/lifecycle#extension-lifecycle-in-detail)
Understanding the relationship between `extension` and `onExtension` is crucial for effective plugin development.
During Step H (Create CommandContext):
  * Each plugin is processed sequentially in dependency order
  * For each plugin: the `extension` factory is called, then immediately its `onExtension` callback
  * This sequential approach ensures that when a plugin's `onExtension` runs, all previous plugins' extensions are already available through `ctx.extensions`


TIP
For a detailed visual representation of the extension lifecycle and execution order guarantees, see [Extension Lifecycle](https://gunshi.dev/guide/plugin/extensions#extension-lifecycle) in the Plugin Extensions guide.
## Lifecycle with Command Hooks [​](https://gunshi.dev/guide/plugin/lifecycle#lifecycle-with-command-hooks)
Gunshi provides Command hooks (`onBeforeCommand`, `onAfterCommand`, `onErrorCommand`) that integrate with the plugin lifecycle.
The following sequence diagram illustrates how these command hooks interact with plugins during command execution:
TIP
For details on Command Hooks, including advanced use cases like logging, performance monitoring, validation guards, and transaction management, see [Command Hooks](https://gunshi.dev/guide/advanced/command-hooks).
Syntax error in textmermaid version 11.12.0
This sequence shows:
  1. **Setup Phase** : Plugins register their decorators during initialization
  2. **Extension Creation** : Plugin extensions are created and returned to the CLI
  3. **Command Hooks** : The `onBeforeCommand` hook runs before decorators and command execution
  4. **Decorated Execution** : Plugin decorators wrap the command execution
  5. **Post-Execution** : The `onAfterCommand` hook runs after successful completion
  6. **Error Handling** : The `onErrorCommand` hook catches any errors during execution


## Complete Lifecycle Example [​](https://gunshi.dev/guide/plugin/lifecycle#complete-lifecycle-example)
Here's a complete example showing all lifecycle phases including Command Hooks.
Plugin Codes:
lifecycle.js
js```
import { plugin } from 'gunshi/plugin'

export default plugin({
  id: 'lifecycle',
  dependencies: ['logger'], // Step C: Dependency resolution

  // Step D: Setup execution
  setup: ctx => {
    console.log('1. lifecycle plugin setup phase started')

    // Register global option
    ctx.addGlobalOption('verbose', {
      type: 'boolean',
      alias: 'v',
      description: 'Verbose output'
    })

    // Add sub-command
    ctx.addCommand('status', {
      name: 'status',
      run: ctx => console.log('Status: OK')
    })

    // Register decorators (LIFO order)
    ctx.decorateCommand(runner => async ctx => {
      console.log('5. Command decorator (before)')
      const result = await runner(ctx)
      console.log('7. Command decorator (after)')
      return result
    })

    console.log('2. Setup phase completed')
  },

  // Step H: Extension creation (during CommandContext creation)
  extension: (ctx, cmd) => {
    console.log('3. Extension created for:', cmd.name)

    return {
      demo: () => 'Hello from extension',
      cleanup: () => console.log('9. Extension cleanup')
    }
  },

  // Step H: Post-extension callback (immediately after extension creation)
  onExtension: (ctx, cmd) => {
    console.log('4. All extensions ready')
  }
})
```

Application Codes:
cli.js
js```
import { cli, define } from 'gunshi'
import logger from './logger.js'
import lifecycle from './lifecycle.js'

// Command definition
const command = define({
  name: 'build',
  args: {
    fail: {
      type: 'boolean'
    }
  },
  run: ctx => {
    console.log('6. Actual command execution')
    console.log('Extension says:', ctx.extensions['lifecycle'].demo())

    // Simulate an error for demonstration
    if (ctx.values.fail) {
      throw new Error('Build failed!')
    }
  }
})

// Running the CLI with Command Hooks
await cli(process.argv.slice(2), command, {
  // Plugin installation
  plugins: [logger, lifecycle],

  // Command Hooks are defined at CLI level
  onBeforeCommand: ctx => {
    console.log('4.5. onBeforeCommand hook')
  },

  onAfterCommand: ctx => {
    console.log('8. onAfterCommand hook')
    // Cleanup can be done here
    ctx.extensions['lifecycle'].cleanup()
  },

  onErrorCommand: (ctx, error) => {
    console.log('8. onErrorCommand hook:', error.message)
    // Error recovery or cleanup
    ctx.extensions['lifecycle'].cleanup()
  }
})
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/plugins/lifecycle).
Run your application with plugin:
sh```
node cli.js

logger plugin setup phase started
1. lifecycle plugin setup phase started
2. Setup phase completed
3. Extension created for: build
4. All extensions ready
4.5. onBeforeCommand hook
5. Command decorator (before)
6. Actual command execution
Extension says: Hello from extension
7. Command decorator (after)
8. onAfterCommand hook
9. Extension cleanup

node index.js --fail
logger plugin setup phase started
1. lifecycle plugin setup phase started
2. Setup phase completed
3. Extension created for: build
4. All extensions ready
4.5. onBeforeCommand hook
5. Command decorator (before)
6. Actual command execution
Extension says: Hello from extension
8. onErrorCommand hook: Build failed!
9. Extension cleanup
file:///path/to/projects/gunshi/playground/plugins/lifecycle/index.js:19
      throw new Error('Build failed!')
```

## Next Steps [​](https://gunshi.dev/guide/plugin/lifecycle#next-steps)
Now that you understand how plugins integrate with the CLI lifecycle—from setup through command execution to cleanup—you're ready to explore how plugins can work together.
The next chapter, [Plugin Dependencies](https://gunshi.dev/guide/plugin/dependencies), will teach you how to build plugin ecosystems where plugins can depend on and interact with each other, enabling composition patterns for complex CLI applications.
Last updated: 21.02.26, 15:06
Pager
[Previous pageGetting Started with Plugin Development](https://gunshi.dev/guide/plugin/getting-started)
[Next pagePlugin Dependencies](https://gunshi.dev/guide/plugin/dependencies)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
