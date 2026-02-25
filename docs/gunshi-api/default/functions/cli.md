[Skip to content](https://gunshi.dev/api/default/functions/cli#VPContent)
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
  * [Type Param](https://gunshi.dev/api/default/functions/cli#type-param "Type Param")
  * [Param](https://gunshi.dev/api/default/functions/cli#param "Param")
  * [Param](https://gunshi.dev/api/default/functions/cli#param-1 "Param")
  * [Param](https://gunshi.dev/api/default/functions/cli#param-2 "Param")
  * [Call Signature](https://gunshi.dev/api/default/functions/cli#call-signature "Call Signature")
  * [Call Signature](https://gunshi.dev/api/default/functions/cli#call-signature-1 "Call Signature")
  * [Call Signature](https://gunshi.dev/api/default/functions/cli#call-signature-2 "Call Signature")
  * [Call Signature](https://gunshi.dev/api/default/functions/cli#call-signature-3 "Call Signature")
  * [Call Signature](https://gunshi.dev/api/default/functions/cli#call-signature-4 "Call Signature")


Are you an LLM? You can read better optimized documentation at /api/default/functions/cli.md for this page in Markdown format
[gunshi](https://gunshi.dev/api/) / [default](https://gunshi.dev/api/default/) / cli
# Function: cli() [​](https://gunshi.dev/api/default/functions/cli#function-cli)
Run the command.
## Type Param [​](https://gunshi.dev/api/default/functions/cli#type-param)
A type extending [`GunshiParams`](https://gunshi.dev/api/default/interfaces/GunshiParams) to specify the shape of command and cli options.
## Param [​](https://gunshi.dev/api/default/functions/cli#param)
Command line arguments
## Param [​](https://gunshi.dev/api/default/functions/cli#param-1)
A [entry command](https://gunshi.dev/api/default/interfaces/Command), an [inline command runner](https://gunshi.dev/api/default/type-aliases/CommandRunner), or a [lazily-loaded command](https://gunshi.dev/api/default/type-aliases/LazyCommand)
## Param [​](https://gunshi.dev/api/default/functions/cli#param-2)
A [CLI options](https://gunshi.dev/api/default/interfaces/CliOptions)
## Call Signature [​](https://gunshi.dev/api/default/functions/cli#call-signature)
ts```
function cli<G>(
   args, 
   entry, 
options?): Promise<string | undefined>;
```

Run the command.
### Type Parameters [​](https://gunshi.dev/api/default/functions/cli#type-parameters)
Type Parameter | Description  
---|---  
`G` _extends_ [`GunshiParamsConstraint`](https://gunshi.dev/api/default/type-aliases/GunshiParamsConstraint) | A type extending [`GunshiParams`](https://gunshi.dev/api/default/interfaces/GunshiParams) to specify the shape of command and cli options.  
### Parameters [​](https://gunshi.dev/api/default/functions/cli#parameters)
Parameter | Type | Description  
---|---|---  
`args` |  `string`[] | Command line arguments  
`entry` | | [`Command`](https://gunshi.dev/api/default/interfaces/Command)<`G`> | [`CommandRunner`](https://gunshi.dev/api/default/type-aliases/CommandRunner)<`G`> | [`LazyCommand`](https://gunshi.dev/api/default/type-aliases/LazyCommand)<`G`> | A [entry command](https://gunshi.dev/api/default/interfaces/Command), an [inline command runner](https://gunshi.dev/api/default/type-aliases/CommandRunner), or a [lazily-loaded command](https://gunshi.dev/api/default/type-aliases/LazyCommand)  
`options?` |  [`CliOptions`](https://gunshi.dev/api/default/interfaces/CliOptions)<`G`> | A [CLI options](https://gunshi.dev/api/default/interfaces/CliOptions)  
### Returns [​](https://gunshi.dev/api/default/functions/cli#returns)
`Promise`<`string` | `undefined`>
A rendered usage or undefined. if you will use [`CliOptions.usageSilent`](https://gunshi.dev/api/default/interfaces/CliOptions#usagesilent) option, it will return rendered usage string.
## Call Signature [​](https://gunshi.dev/api/default/functions/cli#call-signature-1)
ts```
function cli<A, G>(
   args, 
   entry, 
options?): Promise<string | undefined>;
```

Run the command.
### Type Parameters [​](https://gunshi.dev/api/default/functions/cli#type-parameters-1)
Type Parameter | Default type | Description  
---|---|---  
`A` _extends_ [`Args`](https://gunshi.dev/api/default/interfaces/Args) | [`Args`](https://gunshi.dev/api/default/interfaces/Args) | The type of [`arguments`](https://gunshi.dev/api/default/interfaces/Args) defined in the command and cli options.  
`G` _extends_ [`GunshiParams`](https://gunshi.dev/api/default/interfaces/GunshiParams)<{ `args`: [`Args`](https://gunshi.dev/api/default/interfaces/Args); `extensions`: { }; }> | `object` | -  
### Parameters [​](https://gunshi.dev/api/default/functions/cli#parameters-1)
Parameter | Type | Description  
---|---|---  
`args` |  `string`[] | Command line arguments  
`entry` | | [`Command`](https://gunshi.dev/api/default/interfaces/Command)<`G`> | [`CommandRunner`](https://gunshi.dev/api/default/type-aliases/CommandRunner)<`G`> | [`LazyCommand`](https://gunshi.dev/api/default/type-aliases/LazyCommand)<`G`> | A [entry command](https://gunshi.dev/api/default/interfaces/Command), an [inline command runner](https://gunshi.dev/api/default/type-aliases/CommandRunner), or a [lazily-loaded command](https://gunshi.dev/api/default/type-aliases/LazyCommand)  
`options?` |  [`CliOptions`](https://gunshi.dev/api/default/interfaces/CliOptions)<`G`> | A [CLI options](https://gunshi.dev/api/default/interfaces/CliOptions)  
### Returns [​](https://gunshi.dev/api/default/functions/cli#returns-1)
`Promise`<`string` | `undefined`>
A rendered usage or undefined. if you will use [`CliOptions.usageSilent`](https://gunshi.dev/api/default/interfaces/CliOptions#usagesilent) option, it will return rendered usage string.
## Call Signature [​](https://gunshi.dev/api/default/functions/cli#call-signature-2)
ts```
function cli<E, G>(
   args, 
   entry, 
options?): Promise<string | undefined>;
```

Run the command.
### Type Parameters [​](https://gunshi.dev/api/default/functions/cli#type-parameters-2)
Type Parameter | Default type | Description  
---|---|---  
`E` _extends_ [`ExtendContext`](https://gunshi.dev/api/default/type-aliases/ExtendContext) | [`ExtendContext`](https://gunshi.dev/api/default/type-aliases/ExtendContext) | An [`ExtendContext`](https://gunshi.dev/api/default/type-aliases/ExtendContext) type to specify the shape of command and cli options.  
`G` _extends_ [`GunshiParams`](https://gunshi.dev/api/default/interfaces/GunshiParams)<{ `args`: [`Args`](https://gunshi.dev/api/default/interfaces/Args); `extensions`: { }; }> | `object` | -  
### Parameters [​](https://gunshi.dev/api/default/functions/cli#parameters-2)
Parameter | Type | Description  
---|---|---  
`args` |  `string`[] | Command line arguments  
`entry` | | [`Command`](https://gunshi.dev/api/default/interfaces/Command)<`G`> | [`CommandRunner`](https://gunshi.dev/api/default/type-aliases/CommandRunner)<`G`> | [`LazyCommand`](https://gunshi.dev/api/default/type-aliases/LazyCommand)<`G`> | A [entry command](https://gunshi.dev/api/default/interfaces/Command), an [inline command runner](https://gunshi.dev/api/default/type-aliases/CommandRunner), or a [lazily-loaded command](https://gunshi.dev/api/default/type-aliases/LazyCommand)  
`options?` |  [`CliOptions`](https://gunshi.dev/api/default/interfaces/CliOptions)<`G`> | A [CLI options](https://gunshi.dev/api/default/interfaces/CliOptions)  
### Returns [​](https://gunshi.dev/api/default/functions/cli#returns-2)
`Promise`<`string` | `undefined`>
A rendered usage or undefined. if you will use [`CliOptions.usageSilent`](https://gunshi.dev/api/default/interfaces/CliOptions#usagesilent) option, it will return rendered usage string.
## Call Signature [​](https://gunshi.dev/api/default/functions/cli#call-signature-3)
ts```
function cli<G>(
   args, 
   entry, 
options?): Promise<string | undefined>;
```

Run the command.
### Type Parameters [​](https://gunshi.dev/api/default/functions/cli#type-parameters-3)
Type Parameter | Default type | Description  
---|---|---  
`G` _extends_ [`GunshiParams`](https://gunshi.dev/api/default/interfaces/GunshiParams)<{ `args`: [`Args`](https://gunshi.dev/api/default/interfaces/Args); `extensions`: { }; }> | [`DefaultGunshiParams`](https://gunshi.dev/api/default/type-aliases/DefaultGunshiParams) | A type extending [`GunshiParams`](https://gunshi.dev/api/default/interfaces/GunshiParams) to specify the shape of command and cli options.  
### Parameters [​](https://gunshi.dev/api/default/functions/cli#parameters-3)
Parameter | Type | Description  
---|---|---  
`args` |  `string`[] | Command line arguments  
`entry` | | [`Command`](https://gunshi.dev/api/default/interfaces/Command)<`G`> | [`CommandRunner`](https://gunshi.dev/api/default/type-aliases/CommandRunner)<`G`> | [`LazyCommand`](https://gunshi.dev/api/default/type-aliases/LazyCommand)<`G`> | A [entry command](https://gunshi.dev/api/default/interfaces/Command), an [inline command runner](https://gunshi.dev/api/default/type-aliases/CommandRunner), or a [lazily-loaded command](https://gunshi.dev/api/default/type-aliases/LazyCommand)  
`options?` |  [`CliOptions`](https://gunshi.dev/api/default/interfaces/CliOptions)<`G`> | A [CLI options](https://gunshi.dev/api/default/interfaces/CliOptions)  
### Returns [​](https://gunshi.dev/api/default/functions/cli#returns-3)
`Promise`<`string` | `undefined`>
A rendered usage or undefined. if you will use [`CliOptions.usageSilent`](https://gunshi.dev/api/default/interfaces/CliOptions#usagesilent) option, it will return rendered usage string.
## Call Signature [​](https://gunshi.dev/api/default/functions/cli#call-signature-4)
ts```
function cli(
   args, 
   entry, 
options?): Promise<string | undefined>;
```

Run the command.
This overload accepts any command-like object using a loose structural type. It bypasses TypeScript contravariance issues with callback properties.
Note: This overload MUST be last in the overload list. TypeScript checks overloads in declaration order and selects the first matching one. The SubCommandable type is intentionally loose and would match any command, so placing it first would prevent proper type inference for more specific command types.
### Parameters [​](https://gunshi.dev/api/default/functions/cli#parameters-4)
Parameter | Type | Description  
---|---|---  
`args` |  `string`[] | Command line arguments  
`entry` | [`SubCommandable`](https://gunshi.dev/api/default/interfaces/SubCommandable) | A command-like object (command, command runner, or lazy command)  
`options?` |  [`CliOptions`](https://gunshi.dev/api/default/interfaces/CliOptions)<[`DefaultGunshiParams`](https://gunshi.dev/api/default/type-aliases/DefaultGunshiParams)> | A [CLI options](https://gunshi.dev/api/default/interfaces/CliOptions)  
### Returns [​](https://gunshi.dev/api/default/functions/cli#returns-4)
`Promise`<`string` | `undefined`>
A rendered usage or undefined. if you will use [`CliOptions.usageSilent`](https://gunshi.dev/api/default/interfaces/CliOptions#usagesilent) option, it will return rendered usage string.
Pager
[Previous pageANONYMOUS_COMMAND_NAME](https://gunshi.dev/api/default/variables/ANONYMOUS_COMMAND_NAME)
[Next pageparseArgs](https://gunshi.dev/api/default/functions/parseArgs)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
