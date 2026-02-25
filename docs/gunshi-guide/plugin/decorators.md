[Skip to content](https://gunshi.dev/guide/plugin/decorators#VPContent)
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
  * [Understanding Decorator Mechanism](https://gunshi.dev/guide/plugin/decorators#understanding-decorator-mechanism "Understanding Decorator Mechanism")
  * [Command Decorators](https://gunshi.dev/guide/plugin/decorators#command-decorators "Command Decorators")
  * [Renderer Decorators](https://gunshi.dev/guide/plugin/decorators#renderer-decorators "Renderer Decorators")
  * [Command vs Renderer Decorators](https://gunshi.dev/guide/plugin/decorators#command-vs-renderer-decorators "Command vs Renderer Decorators")
  * [Next Steps](https://gunshi.dev/guide/plugin/decorators#next-steps "Next Steps")


Are you an LLM? You can read better optimized documentation at /guide/plugin/decorators.md for this page in Markdown format
# Plugin Decorators [​](https://gunshi.dev/guide/plugin/decorators#plugin-decorators)
Decorators are a powerful mechanism in Gunshi's plugin system that allows you to wrap and enhance existing functionality.
This guide explains how to effectively use decorators in your plugins.
## Understanding Decorator Mechanism [​](https://gunshi.dev/guide/plugin/decorators#understanding-decorator-mechanism)
In Gunshi, decorators create a wrapping structure around the original functionality.
Gunshi implements two types of decorators with different processing methods:
  * **Command Decorators** : Processed using `reduceRight`, creating a nested wrapper structure
  * **Renderer Decorators** : Processed using a `for` loop, building a chain of transformations


## Command Decorators [​](https://gunshi.dev/guide/plugin/decorators#command-decorators)
Command decorators wrap command execution for cross-cutting concerns like logging, authentication, and error handling.
Unlike renderer decorators that only affect output formatting, command decorators can control the entire execution flow, including validation, authentication, logging, and error handling.
### How Command Decorators Work [​](https://gunshi.dev/guide/plugin/decorators#how-command-decorators-work)
Command decorators use the `decorateCommand()` method provided by the `PluginContext`.
Each decorator receives a runner function (the next decorator or original command) and returns a new function that wraps it:
js```
ctx.decorateCommand(runner => async ctx => {
  // Pre-execution logic
  console.log('Before command')

  // Call the next decorator or original command
  const result = await runner(ctx)

  // Post-execution logic
  console.log('After command')

  return result
})
```

### Command Decorator Execution Order [​](https://gunshi.dev/guide/plugin/decorators#command-decorator-execution-order)
Gunshi applies command decorators using the `reduceRight` method, which processes the decorator array from the last element to the first.
This approach creates a nested wrapper structure where the first registered decorator becomes the outermost layer.
The following diagram illustrates the wrapper structure:
Syntax error in textmermaid version 11.12.0
### Basic Command Decorator Example [​](https://gunshi.dev/guide/plugin/decorators#basic-command-decorator-example)
The following example demonstrates the execution order when using `reduceRight`:
plugin.js
js```
import { plugin } from 'gunshi/plugin'

export default plugin({
  id: 'my-plugin',
  setup(ctx) {
    // Registered first
    ctx.decorateCommand(runner => async ctx => {
      console.log('Decorator A: before')
      const result = await runner(ctx)
      console.log('Decorator A: after')
      return result
    })

    // Registered second
    ctx.decorateCommand(runner => async ctx => {
      console.log('Decorator B: before')
      const result = await runner(ctx)
      console.log('Decorator B: after')
      return result
    })

    // Registered third (executes first!)
    ctx.decorateCommand(runner => async ctx => {
      console.log('Decorator C: before')
      const result = await runner(ctx)
      console.log('Decorator C: after')
      return result
    })
  }
})
```

Application codes:
cli.js
js```
import { cli } from 'gunshi'
import lifo from './plugin.js'

await cli(
  process.argv.slice(2),
  () => {
    console.log('Original command execution')
  },
  {
    plugins: [lifo]
  }
)
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/plugins/decorators/lifo).
When executed, `reduceRight` creates a wrapper structure where Decorator A wraps B, B wraps C, and C wraps the original command:
sh```
node cli.js
Decorator A: before    # Outermost wrapper executes first
Decorator B: before    # Middle wrapper
Decorator C: before    # Innermost wrapper
Original command execution
Decorator C: after     # Innermost completes first
Decorator B: after     # Middle completes
Decorator A: after     # Outermost completes last
```

### Advanced Command Decorator Example [​](https://gunshi.dev/guide/plugin/decorators#advanced-command-decorator-example)
Here's a complete example demonstrating how multiple command decorators work together for different purposes:
plugin.js
js```
import { plugin } from 'gunshi/plugin'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default plugin({
  id: 'multi-decorator',
  setup(ctx) {
    // First decorator: Logging
    ctx.decorateCommand(runner => async ctx => {
      console.log('[LOG] Command started:', ctx.name)
      const result = await runner(ctx)
      console.log('[LOG] Command completed')
      return result
    })

    // Second decorator: Timing
    ctx.decorateCommand(runner => async ctx => {
      const start = Date.now()
      await sleep(10)
      const result = await runner(ctx)
      console.log(`[TIME] Execution: ${Date.now() - start}ms`)
      return result
    })

    // Third decorator: Error wrapper
    ctx.decorateCommand(runner => async ctx => {
      try {
        console.log('[ERROR] Monitoring enabled')
        return await runner(ctx)
      } catch (error) {
        console.error('[ERROR] Command failed:', error.message)
        throw error
      }
    })
  }
})
```

cli.js
js```
import { cli, define } from 'gunshi'
import multi from './plugin.js'

const command = define({
  name: 'process',
  run: ctx => {
    console.log('>>> Executing actual command <<<')
    return 'Command result'
  }
})

await cli(process.argv.slice(2), command, {
  plugins: [multi]
})
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/plugins/decorators/command).
Running `node cli.js` outputs:
sh```
[LOG] Command started: process
[ERROR] Monitoring enabled
>>> Executing actual command <<<
[TIME] Execution: 11ms
[LOG] Command completed
```

NOTE
The `@gunshi/plugin-global` plugin uses a command decorator to intercept `--help` and `--version` options, preventing normal command execution and triggering rendering instead.
## Renderer Decorators [​](https://gunshi.dev/guide/plugin/decorators#renderer-decorators)
Gunshi provides a powerful API for customizing how your CLI displays information through renderer decorators.
These decorators allow you to wrap and enhance the rendering of headers, usage/help messages, and validation errors, enabling consistent styling, branding, and enhanced user experience across your CLI application.
### How Renderer Decorators Work [​](https://gunshi.dev/guide/plugin/decorators#how-renderer-decorators-work)
Gunshi applies renderer decorators using a standard `for` loop that iterates through the decorator array from first to last.
Each iteration wraps the previous renderer function, building a chain of decorators.
This approach means that each decorator in the array wraps the accumulated result of all previous decorators, with each decorator receiving the previous renderer as its `baseRenderer` parameter.
### Available Renderer Decorator Methods [​](https://gunshi.dev/guide/plugin/decorators#available-renderer-decorator-methods)
Gunshi provides three renderer decorator methods via `PluginContext`:
  * **`decorateHeaderRenderer`**: Customizes command headers (title/branding)
  * **`decorateUsageRenderer`**: Enhances usage and help message display
  * **`decorateValidationErrorsRenderer`**: Formats validation error messages


Each decorator receives the base renderer function and must call it to maintain the decorator chain.
This ensures that multiple plugins can cooperatively enhance the output.
### Complete Rendering Customization Example [​](https://gunshi.dev/guide/plugin/decorators#complete-rendering-customization-example)
Here's a comprehensive example showing how to customize all three renderers in a single plugin.
This plugin adds branding to headers, appends metadata to usage messages, and enhances error formatting:
plugin.js
js```
import { plugin } from 'gunshi/plugin'

export default plugin({
  id: 'custom-renderer',
  setup(ctx) {
    // Add branding to header
    ctx.decorateHeaderRenderer(async (baseRenderer, ctx) => {
      const header = await baseRenderer(ctx)
      return `🚀 My CLI v${ctx.env.version}\n${header}`
    })

    // Append timestamp to usage
    ctx.decorateUsageRenderer(async (baseRenderer, ctx) => {
      const usage = await baseRenderer(ctx)
      return `${usage}\n\nGenerated: ${new Date().toISOString()}`
    })

    // Format validation errors with emoji
    ctx.decorateValidationErrorsRenderer(async (baseRenderer, ctx, error) => {
      const errors = await baseRenderer(ctx, error)
      return `❌ Validation Error:\n${errors}`
    })
  }
})
```

Application code:
cli.js
js```
import { cli, define } from 'gunshi'
import customRenderer from './plugin.js'

await cli(
  process.argv.slice(2),
  define({
    name: 'build',
    args: {
      output: { type: 'string', required: true }
    },
    run: ctx => console.log(`Building to ${ctx.values.output}`)
  }),
  {
    name: 'my-cli',
    version: '1.0.0',
    plugins: [customRenderer]
  }
)
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/plugins/decorators/renderers).
Run with `--help` to see customized output:
sh```
node cli.js --help
🚀 My CLI v1.0.0
my-cli (my-cli v1.0.0)

USAGE:
  my-cli <OPTIONS>

OPTIONS:
  -h, --help                 Display this help message
  -v, --version              Display this version
  --output <output>


Generated: 2025-08-15T14:26:43.121Z
```

### Multiple Plugin Decorator Execution Order [​](https://gunshi.dev/guide/plugin/decorators#multiple-plugin-decorator-execution-order)
When multiple plugins register renderer decorators, the order matters.
Gunshi uses two built-in plugins by default: `@gunshi/plugin-global` (adds `--help` and `--version` options) and `@gunshi/plugin-renderer` (provides default rendering).
When you add your own plugins, they interact with these default plugins in a specific order based on how the `for` loop processes the decorators.
#### Plugin Registration and Decorator Chain Building [​](https://gunshi.dev/guide/plugin/decorators#plugin-registration-and-decorator-chain-building)
The following diagram shows how plugins are registered and how the `for` loop builds the decorator chain:
##### Plugin Registration Order
Syntax error in textmermaid version 11.12.0
##### Renderer Decorator Chain (for loop builds)
Syntax error in textmermaid version 11.12.0
#### How Default and Custom Plugins Interact [​](https://gunshi.dev/guide/plugin/decorators#how-default-and-custom-plugins-interact)
Here's an example showing how the default Gunshi plugins work together with custom plugins:
custom-plugin-A:
plugin-a.js
js```
import { plugin } from 'gunshi/plugin'

export default plugin({
  id: 'custom-a',
  setup(ctx) {
    ctx.decorateUsageRenderer(async (baseRenderer, ctx) => {
      const usage = await baseRenderer(ctx) // Call next decorator first
      console.log('[custom-a] Decorating usage')
      return `${usage}\n📦 Enhanced by Plugin A`
    })
  }
})
```

custom-plugin-B:
plugin-b.js
js```
import { plugin } from 'gunshi/plugin'

export default plugin({
  id: 'custom-b',
  setup(ctx) {
    ctx.decorateUsageRenderer(async (baseRenderer, ctx) => {
      const usage = await baseRenderer(ctx) // Call next decorator first
      console.log('[custom-b] Decorating usage')
      return `${usage}\n🎨 Styled by Plugin B`
    })
  }
})
```

Last, install all plugins on CLI application:
cli.js
js```
import { cli, define } from 'gunshi' // Includes plugin-global and plugin-renderer by default
import pluginA from './plugin-a.js'
import pluginB from './plugin-b.js'

await cli(
  process.argv.slice(2),
  define({
    name: 'demo',
    run: () => console.log('Demo command')
  }),
  {
    name: 'my-cli',
    version: '1.0.0',
    renderHeader: null, // Disable default header rendering
    // Custom plugins are added after default plugins
    plugins: [pluginA, pluginB]
  }
)
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/plugins/decorators/multiple-order).
#### Execution Flow Breakdown [​](https://gunshi.dev/guide/plugin/decorators#execution-flow-breakdown)
When you run `node index.js --help`, two different types of decorators work together:
**1. Command Decorator (`@gunshi/plugin-global`):**
  * Intercepts the `--help` option
  * Calls the renderer functions to generate output


**2. Renderer Decorators (chain built by for loop):**
The `for` loop builds a chain where:
  * custom-plugin-B wraps custom-plugin-A
  * custom-plugin-A wraps plugin-renderer
  * plugin-renderer wraps the base renderer (empty string)


**Execution flow when each decorator calls`baseRenderer` first:**
  1. custom-plugin-B decorator starts → calls `baseRenderer`
  2. custom-plugin-A decorator starts → calls `baseRenderer`
  3. plugin-renderer decorator executes → returns full usage
  4. custom-plugin-A continues → logs and adds "📦 Enhanced by Plugin A"
  5. custom-plugin-B continues → logs and adds "🎨 Styled by Plugin B"


The console output in this example:
sh```
[custom-a] Decorating usage    // Logs after its baseRenderer returns
[custom-b] Decorating usage    // Logs after its baseRenderer returns
```

And the final rendered output:
sh```
USAGE:
  my-cli <OPTIONS>

OPTIONS:
  -h, --help             Display this help message
  -v, --version          Display this version

📦 Enhanced by Plugin A
🎨 Styled by Plugin B
```

#### Understanding the Chain [​](https://gunshi.dev/guide/plugin/decorators#understanding-the-chain)
The renderer decorator chain works differently than you might expect:
js```
// Actual execution flow for renderer decorators
const base = await baseRenderer(ctx) // Returns ""
const afterRenderer = await rendererDecorator(base, ctx) // Doesn't call base, returns full usage
const afterCustomA = await customADecorator(afterRenderer, ctx) // Adds "Enhanced by Plugin A"
const final = await customBDecorator(afterCustomA, ctx) // Adds "Styled by Plugin B"
```

NOTE
`@gunshi/plugin-global` uses a **command decorator** to handle `--help`/`--version` options, while `@gunshi/plugin-renderer` uses **renderer decorators** to format the output. The base renderer returns an empty string, and `@gunshi/plugin-renderer` provides the actual implementation.
IMPORTANT
Always call `baseRenderer` in your decorator to maintain the decorator chain. While `@gunshi/plugin-renderer` replaces the empty base renderer with full implementation, your custom decorators should enhance the output from previous decorators in the chain.
### Important Considerations [​](https://gunshi.dev/guide/plugin/decorators#important-considerations)
**Always call`baseRenderer` in your decorator to maintain the decorator chain. Skipping it will break other plugins that may depend on the output.**
NOTE
Renderer decorators have the lowest priority in Gunshi's rendering system. Command-level and CLI-level renderers will override plugin decorators. See [Rendering Customization](https://gunshi.dev/guide/advanced/custom-rendering) for details on renderer priority.
## Command vs Renderer Decorators [​](https://gunshi.dev/guide/plugin/decorators#command-vs-renderer-decorators)
Understanding the difference between these two decorator types is crucial:
Aspect | Command Decorator | Renderer Decorator  
---|---|---  
**Purpose** | Wraps command execution | Wraps output rendering  
**Method** | `ctx.decorateCommand()` |  `ctx.decorateUsageRenderer()`, etc.  
**Can modify** | Command behavior, flow control | Output formatting only  
**Can access** | Full CommandContext | CommandContext + render-specific params  
**Use cases** | Auth, logging, validation, caching | Styling, i18n, branding  
## Next Steps [​](https://gunshi.dev/guide/plugin/decorators#next-steps)
With decorators, you've learned how to wrap and enhance command behavior and rendering output. This mechanism enables cross-cutting concerns like authentication, logging, and custom formatting without modifying command implementations.
The next chapter, [Plugin Extensions](https://gunshi.dev/guide/plugin/extensions), will show you how plugins can share functionality with commands through context extensions, creating a communication channel between plugins and the rest of your CLI application.
Last updated: 21.02.26, 15:06
Pager
[Previous pagePlugin Dependencies](https://gunshi.dev/guide/plugin/dependencies)
[Next pagePlugin Extensions](https://gunshi.dev/guide/plugin/extensions)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
