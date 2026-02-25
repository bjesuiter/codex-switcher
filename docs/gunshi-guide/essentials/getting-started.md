[Skip to content](https://gunshi.dev/guide/essentials/getting-started#VPContent)
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
  * [Hello World Example](https://gunshi.dev/guide/essentials/getting-started#hello-world-example "Hello World Example")
  * [Running Your CLI](https://gunshi.dev/guide/essentials/getting-started#running-your-cli "Running Your CLI")
  * [Adding Command-Line Arguments](https://gunshi.dev/guide/essentials/getting-started#adding-command-line-arguments "Adding Command-Line Arguments")
  * [Adding Command Options](https://gunshi.dev/guide/essentials/getting-started#adding-command-options "Adding Command Options")
  * [Built-in Help](https://gunshi.dev/guide/essentials/getting-started#built-in-help "Built-in Help")
  * [Using Gunshi with Different Runtimes](https://gunshi.dev/guide/essentials/getting-started#using-gunshi-with-different-runtimes "Using Gunshi with Different Runtimes")
  * [Next Steps](https://gunshi.dev/guide/essentials/getting-started#next-steps "Next Steps")


Are you an LLM? You can read better optimized documentation at /guide/essentials/getting-started.md for this page in Markdown format
# Getting Started [​](https://gunshi.dev/guide/essentials/getting-started#getting-started)
This guide will help you create your first command-line application with Gunshi.
We'll start with a simple "Hello World" example and gradually explore more features.
## Hello World Example [​](https://gunshi.dev/guide/essentials/getting-started#hello-world-example)
Let's create a simple CLI application that greets the user.
Create a new file (e.g., `cli.js` or `cli.ts`) and add the following code:
cli.js
js```
import { cli } from 'gunshi'

// Run a simple command
await cli(process.argv.slice(2), () => {
  console.log('Hello, World!')
})
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/essentials/getting-started/hello).
This minimal example demonstrates the core concept of Gunshi.
The `cli` function takes command-line arguments and a function to execute.
## Running Your CLI [​](https://gunshi.dev/guide/essentials/getting-started#running-your-cli)
You can run your CLI application with:
sh```
node cli.js
```

You should see the output:
sh```
Hello, World!
```

## Adding Command-Line Arguments [​](https://gunshi.dev/guide/essentials/getting-started#adding-command-line-arguments)
Let's enhance our example to accept a name as an argument.
The function receives a `CommandContext` object (abbreviated as `ctx`) as its parameter.
This context object contains parsed command-line arguments, options, and other execution information:
cli.js
js```
import { cli } from 'gunshi'

await cli(process.argv.slice(2), ctx => {
  // Access positional arguments
  const name = ctx.positionals[0] || 'World'
  console.log(`Hello, ${name}!`)
})
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/essentials/getting-started/context).
Now you can run:
sh```
node cli.js Alice
```

And you'll see:
sh```
Hello, Alice!
```

## Adding Command Options [​](https://gunshi.dev/guide/essentials/getting-started#adding-command-options)
Let's add some options to our command:
cli.js
js```
import { cli, define } from 'gunshi'

const command = define({
  name: 'greeter',
  description: 'A simple greeting CLI',
  args: {
    name: {
      type: 'string',
      short: 'n',
      description: 'Name to greet'
    },
    uppercase: {
      type: 'boolean',
      short: 'u',
      description: 'Convert greeting to uppercase'
    }
  },
  run: ctx => {
    const { name = 'World', uppercase } = ctx.values
    let greeting = `Hello, ${name}!`

    if (uppercase) {
      greeting = greeting.toUpperCase()
    }

    console.log(greeting)
  }
})

await cli(process.argv.slice(2), command)
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/essentials/getting-started/options).
Now you can run:
sh```
node cli.js --name Alice --uppercase
# or with short options
node cli.js -n Alice -u
```

And you'll see:
sh```
HELLO, ALICE!
```

## Built-in Help [​](https://gunshi.dev/guide/essentials/getting-started#built-in-help)
Gunshi automatically generates help information for your commands through its built-in plugin system.
Run:
sh```
node cli.js --help
```

You'll see a help message that includes:
Here's an example of the generated help output:
sh```
USAGE:
  COMMAND <OPTIONS>

OPTIONS:
  -h, --help                 Display this help message
  -v, --version              Display this version
  -n, --name <name>          Name to greet
  -u, --uppercase            Convert greeting to uppercase
```

The help message automatically includes:
  * Command description
  * Available options
  * Option descriptions


The standard `cli()` function automatically includes these built-in plugins:
  * `@gunshi/plugin-global` - Provides global options like `--help` and `--version`
  * `@gunshi/plugin-renderer` - Handles formatted output for help messages, error messages, and usage information


These plugins are included by default when you use `cli()` from the main `gunshi` package. If you use the lower-level `run()` function instead, you'll need to manually configure these plugins to get help and version functionality.
TIP
Want to learn more about Gunshi's plugin architecture? Check out the [Plugin System guide](https://gunshi.dev/guide/essentials/plugin-system) to understand how plugins work, explore the built-in plugins in detail, and learn how to create your own custom plugins to extend your CLI's functionality.
## Using Gunshi with Different Runtimes [​](https://gunshi.dev/guide/essentials/getting-started#using-gunshi-with-different-runtimes)
Gunshi is designed to work seamlessly across multiple JavaScript runtimes. Here's how to use it with each supported environment:
### Node.js [​](https://gunshi.dev/guide/essentials/getting-started#node-js)
For Node.js applications, use `process.argv.slice(2)` to pass command-line arguments:
cli.js
js```
import { cli } from 'gunshi'

function entry() {
  console.log('Hello, Gunshi!')
}

await cli(process.argv.slice(2), entry)
```

### Deno [​](https://gunshi.dev/guide/essentials/getting-started#deno)
In Deno, use `Deno.args` to access command-line arguments:
cli.ts
ts```
import { cli } from '@gunshi/gunshi'

function entry() {
  console.log('Hello, Gunshi with Deno!')
}

await cli(Deno.args, entry)
```

### Bun [​](https://gunshi.dev/guide/essentials/getting-started#bun)
Bun also provides `Bun.argv` similar to Node.js:
cli.ts
ts```
import { cli } from 'gunshi'

function entry() {
  console.log('Hello, Gunshi with Bun!')
}

await cli(Bun.argv.slice(2), entry) // or use process.argv.slice(2) in Bun
```

Note that while the argument passing differs slightly between runtimes, the Gunshi API remains consistent across all environments.
## Next Steps [​](https://gunshi.dev/guide/essentials/getting-started#next-steps)
You've successfully created your first Gunshi CLI application! You've learned the fundamentals: creating basic commands, handling arguments and options, using the built-in help system, and running your CLI across different JavaScript runtimes.
Now it's time to explore the essential features that will help you build powerful, production-ready CLI applications.
The following chapters will guide you through each topic:
  * **[Declarative Configuration](https://gunshi.dev/guide/essentials/declarative)** - Organize commands with clear, maintainable declarative structures
  * **[Type Safety](https://gunshi.dev/guide/essentials/type-safe)** - Leverage TypeScript for automatic type inference and compile-time checking
  * **[Composable Sub-commands](https://gunshi.dev/guide/essentials/composable)** - Build complex CLIs with modular sub-commands like `git commit` or `npm install`
  * **[Lazy& Async Command Loading](https://gunshi.dev/guide/essentials/lazy-async)** - Optimize startup performance by loading commands only when needed
  * **[Auto Usage Generation](https://gunshi.dev/guide/essentials/auto-usage)** - Create self-documenting CLIs with automatic help and usage information
  * **[Plugin System](https://gunshi.dev/guide/essentials/plugin-system)** - Extend your CLI with modular plugins for features like i18n and shell completion


Each chapter builds upon the previous ones, introducing more sophisticated patterns and techniques.
Start with [Declarative Configuration](https://gunshi.dev/guide/essentials/declarative) to learn how to structure your commands in a clean, maintainable way as your CLI grows in complexity.
Last updated: 21.02.26, 15:06
Pager
[Previous pageSetup](https://gunshi.dev/guide/introduction/setup)
[Next pageDeclarative Configuration](https://gunshi.dev/guide/essentials/declarative)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
