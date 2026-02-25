[Skip to content](https://gunshi.dev/guide/essentials/type-safe#VPContent)
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
  * [Benefits of Type Safety](https://gunshi.dev/guide/essentials/type-safe#benefits-of-type-safety "Benefits of Type Safety")
  * [Type Safety Levels in Gunshi](https://gunshi.dev/guide/essentials/type-safe#type-safety-levels-in-gunshi "Type Safety Levels in Gunshi")
  * [Using define for Type Safety](https://gunshi.dev/guide/essentials/type-safe#using-define-for-type-safety "Using define for Type Safety")
  * [When to Use define](https://gunshi.dev/guide/essentials/type-safe#when-to-use-define "When to Use define")
  * [Advanced Type Parameters](https://gunshi.dev/guide/essentials/type-safe#advanced-type-parameters "Advanced Type Parameters")
  * [Next Steps](https://gunshi.dev/guide/essentials/type-safe#next-steps "Next Steps")


Are you an LLM? You can read better optimized documentation at /guide/essentials/type-safe.md for this page in Markdown format
# Type Safe [​](https://gunshi.dev/guide/essentials/type-safe#type-safe)
In the previous chapter, we learned how to create commands using declarative configuration with plain JavaScript objects.
While this approach works well, TypeScript users can benefit from enhanced type safety and better development experience using Gunshi's `define` function.
The `define` function wraps your command configuration and provides automatic type inference, ensuring that your command handlers receive properly typed context objects without manual type annotations.
## Benefits of Type Safety [​](https://gunshi.dev/guide/essentials/type-safe#benefits-of-type-safety)
Using TypeScript with Gunshi's `define` function provides CLI-specific advantages:
  * **Autocompletion for command options** : IDE suggests available options when accessing `ctx.values`
  * **Prevent runtime errors** : Catch typos in option names before your CLI ships
  * **Self-documenting commands** : Types show exactly what arguments your command accepts
  * **Safe refactoring** : Rename options across your codebase with confidence


## Type Safety Levels in Gunshi [​](https://gunshi.dev/guide/essentials/type-safe#type-safety-levels-in-gunshi)
Gunshi provides different levels of type safety to match your needs:
  1. **Basic type inference** (covered in this chapter): Automatic typing of command arguments
  2. **Plugin extension typing** : Type-safe access to plugin functionality
  3. **Full type parameters** : Complete control over all types using `GunshiParams`


This chapter focuses on the first level, which covers most common use cases. Advanced patterns are available when you need them.
## Using `define` for Type Safety [​](https://gunshi.dev/guide/essentials/type-safe#using-define-for-type-safety)
The `define` function transforms your command configuration to provide:
  * **Automatic type inference** : No need to manually type `ctx` parameters
  * **IDE autocompletion** : Get suggestions for `ctx.values` properties
  * **Compile-time validation** : TypeScript catches typos and type mismatches before runtime
  * **Simplified imports** : No need to import type definitions like `Command` or `CommandContext`


Let's transform the greeting command from the previous chapter to use `define` for full type safety.
The `define` function is a simple wrapper that preserves your command's type information, enabling TypeScript to automatically infer types for your command options and provide IDE autocompletion:
cli.ts
ts```
import { cli, define } from 'gunshi'

// Define a command using the `define` function
const command = define({
  name: 'greet',
  args: {
    // Define a string option 'name' with a short alias 'n'
    name: {
      type: 'string',
      short: 'n',
      description: 'Your name'
    },
    // Define a number option 'age' with a default value
    age: {
      type: 'number',
      short: 'a',
      description: 'Your age',
      default: 30
    },
    // Define a boolean flag 'verbose'
    verbose: {
      type: 'boolean',
      short: 'V',
      description: 'Enable verbose output'
    }
  },
  // The 'ctx' parameter is automatically typed based on the args
  run: ctx => {
    // `ctx.values` is fully typed!
    const { name, age, verbose } = ctx.values

    // TypeScript knows the types:
    // - name: string | undefined (undefined if not provided)
    // - age: number (always a number due to the default)
    // - verbose: boolean | undefined (undefined if not provided, true if --verbose flag is used)

    let greeting = `Hello, ${name || 'stranger'}!`
    // age always has a value due to the default
    greeting += ` You are ${age} years old.`

    console.log(greeting)

    if (verbose) {
      console.log('Verbose mode enabled.')
      console.log('Parsed values:', ctx.values)
    }
  }
})

// Execute the command
await cli(process.argv.slice(2), command)
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/essentials/type-safe).
With `define`:
  * You don't need to import types like `Command` or `CommandContext`.
  * The `ctx` parameter in the `run` function automatically gets the correct type, derived from the `args` definition.
  * Accessing `ctx.values.optionName` provides type safety and autocompletion based on the option's `type` and whether it has a `default`. 
    * Options without a `default` (like `name`) are typed as `T | undefined`.
    * Options with a `default` (like `age`) are typed simply as `T`.
    * Boolean flags without a `default` (like `verbose`) are typed as `boolean | undefined`.


NOTE
For boolean options that need both positive and negative forms (e.g., `--verbose` and `--no-verbose`), see the [Negatable Boolean Options](https://gunshi.dev/guide/essentials/declarative#negatable-boolean-options) section in the declarative configuration guide.
This approach significantly simplifies creating type-safe CLIs with Gunshi.
TIP
For even stronger type inference with composable argument schemas, check out [Parser Combinators](https://gunshi.dev/guide/experimentals/parser-combinators). Parser combinators provide functional factory functions like `string()`, `integer()`, `withDefault()`, and `required()` that automatically infer precise types without manual annotations. Note that this feature is currently **experimental**.
## When to Use `define` [​](https://gunshi.dev/guide/essentials/type-safe#when-to-use-define)
Use the `define` function when:
  * You're writing TypeScript and want automatic type inference
  * You need IDE autocompletion for command context
  * You want to catch type-related errors at compile time


Use plain objects (as shown in the previous chapter) when:
  * You're writing plain JavaScript
  * You prefer explicit type annotations
  * You're integrating with existing type definitions


## Advanced Type Parameters [​](https://gunshi.dev/guide/essentials/type-safe#advanced-type-parameters)
While the examples above show the simplest form of the `define` function, Gunshi provides more advanced type parameter patterns for complex scenarios:
  * **Plugin extensions** : Type-safe access to plugin-provided functionality
  * **Explicit argument types** : Fine-grained control over type inference
  * **GunshiParams utility** : Combined typing of arguments and extensions


These advanced patterns are covered in detail in the [Advanced Type System](https://gunshi.dev/guide/advanced/type-system) documentation.
For most commands, the basic `define` usage shown above provides sufficient type safety.
## Next Steps [​](https://gunshi.dev/guide/essentials/type-safe#next-steps)
Now that you understand how to create type-safe commands with `define`, you're ready to explore more advanced features:
  * **Composable Sub-commands** : Learn how type safety extends to multi-command CLIs
  * **Plugin System** : Discover how plugins maintain type safety across extensions
  * **Advanced Type System** : For complex scenarios, Gunshi offers additional type parameters and patterns (covered in the [Advanced Type System](https://gunshi.dev/guide/advanced/type-system) documentation)


In the next chapter, we'll explore how to create [composable sub-commands](https://gunshi.dev/guide/essentials/composable) while maintaining the type safety we've established here.
Last updated: 21.02.26, 15:06
Pager
[Previous pageDeclarative Configuration](https://gunshi.dev/guide/essentials/declarative)
[Next pageComposable](https://gunshi.dev/guide/essentials/composable)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
