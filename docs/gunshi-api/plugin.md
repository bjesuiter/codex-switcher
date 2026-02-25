[Skip to content](https://gunshi.dev/api/plugin/#VPContent)
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
  * [Example](https://gunshi.dev/api/plugin/#example "Example")
  * [Variables](https://gunshi.dev/api/plugin/#variables "Variables")
  * [References](https://gunshi.dev/api/plugin/#references "References")


Are you an LLM? You can read better optimized documentation at /api/plugin.md for this page in Markdown format
[gunshi](https://gunshi.dev/api/) / plugin
# plugin [​](https://gunshi.dev/api/plugin/#plugin)
The entry point for Gunshi plugin module.
## Example [​](https://gunshi.dev/api/plugin/#example)
js```
import { plugin } from 'gunshi/plugin'

export default yourPlugin() {
  return plugin({
    id: 'your-plugin-id',
    setup: (ctx) => {
      // your plugin setup logic here
    },
  })
}
```

## Variables [​](https://gunshi.dev/api/plugin/#variables)
Variable | Description  
---|---  
[CLI_OPTIONS_DEFAULT](https://gunshi.dev/api/plugin/variables/CLI_OPTIONS_DEFAULT) | -  
## References [​](https://gunshi.dev/api/plugin/#references)
### ANONYMOUS_COMMAND_NAME [​](https://gunshi.dev/api/plugin/#anonymous-command-name)
Re-exports [ANONYMOUS_COMMAND_NAME](https://gunshi.dev/api/default/variables/ANONYMOUS_COMMAND_NAME)
* * *
### Args [​](https://gunshi.dev/api/plugin/#args)
Re-exports [Args](https://gunshi.dev/api/default/interfaces/Args)
* * *
### ArgSchema [​](https://gunshi.dev/api/plugin/#argschema)
Re-exports [ArgSchema](https://gunshi.dev/api/default/interfaces/ArgSchema)
* * *
### ArgToken [​](https://gunshi.dev/api/plugin/#argtoken)
Re-exports [ArgToken](https://gunshi.dev/api/default/interfaces/ArgToken)
* * *
### ArgValues [​](https://gunshi.dev/api/plugin/#argvalues)
Re-exports [ArgValues](https://gunshi.dev/api/default/type-aliases/ArgValues)
* * *
### Awaitable [​](https://gunshi.dev/api/plugin/#awaitable)
Re-exports [Awaitable](https://gunshi.dev/api/default/type-aliases/Awaitable)
* * *
### Command [​](https://gunshi.dev/api/plugin/#command)
Re-exports [Command](https://gunshi.dev/api/default/interfaces/Command)
* * *
### CommandContext [​](https://gunshi.dev/api/plugin/#commandcontext)
Re-exports [CommandContext](https://gunshi.dev/api/default/interfaces/CommandContext)
* * *
### CommandContextCore [​](https://gunshi.dev/api/plugin/#commandcontextcore)
Re-exports [CommandContextCore](https://gunshi.dev/api/default/type-aliases/CommandContextCore)
* * *
### CommandContextExtension [​](https://gunshi.dev/api/plugin/#commandcontextextension)
Re-exports [CommandContextExtension](https://gunshi.dev/api/default/interfaces/CommandContextExtension)
* * *
### CommandContextParams [​](https://gunshi.dev/api/plugin/#commandcontextparams)
Re-exports [CommandContextParams](https://gunshi.dev/api/context/interfaces/CommandContextParams)
* * *
### CommandDecorator [​](https://gunshi.dev/api/plugin/#commanddecorator)
Re-exports [CommandDecorator](https://gunshi.dev/api/default/type-aliases/CommandDecorator)
* * *
### CommandExamplesFetcher [​](https://gunshi.dev/api/plugin/#commandexamplesfetcher)
Re-exports [CommandExamplesFetcher](https://gunshi.dev/api/default/type-aliases/CommandExamplesFetcher)
* * *
### CommandRunner [​](https://gunshi.dev/api/plugin/#commandrunner)
Re-exports [CommandRunner](https://gunshi.dev/api/default/type-aliases/CommandRunner)
* * *
### createCommandContext [​](https://gunshi.dev/api/plugin/#createcommandcontext)
Re-exports [createCommandContext](https://gunshi.dev/api/context/functions/createCommandContext)
* * *
### DefaultGunshiParams [​](https://gunshi.dev/api/plugin/#defaultgunshiparams)
Re-exports [DefaultGunshiParams](https://gunshi.dev/api/default/type-aliases/DefaultGunshiParams)
* * *
### ExtendContext [​](https://gunshi.dev/api/plugin/#extendcontext)
Re-exports [ExtendContext](https://gunshi.dev/api/default/type-aliases/ExtendContext)
* * *
### GunshiParams [​](https://gunshi.dev/api/plugin/#gunshiparams)
Re-exports [GunshiParams](https://gunshi.dev/api/default/interfaces/GunshiParams)
* * *
### GunshiParamsConstraint [​](https://gunshi.dev/api/plugin/#gunshiparamsconstraint)
Re-exports [GunshiParamsConstraint](https://gunshi.dev/api/default/type-aliases/GunshiParamsConstraint)
* * *
### LazyCommand [​](https://gunshi.dev/api/plugin/#lazycommand)
Re-exports [LazyCommand](https://gunshi.dev/api/default/type-aliases/LazyCommand)
* * *
### OnPluginExtension [​](https://gunshi.dev/api/plugin/#onpluginextension)
Re-exports [OnPluginExtension](https://gunshi.dev/api/default/type-aliases/OnPluginExtension)
* * *
### plugin [​](https://gunshi.dev/api/plugin/#plugin-1)
Re-exports [plugin](https://gunshi.dev/api/default/functions/plugin)
* * *
### Plugin [​](https://gunshi.dev/api/plugin/#plugin-2)
Re-exports [Plugin](https://gunshi.dev/api/default/type-aliases/Plugin)
* * *
### PluginContext [​](https://gunshi.dev/api/plugin/#plugincontext)
Re-exports [PluginContext](https://gunshi.dev/api/default/interfaces/PluginContext)
* * *
### PluginDependency [​](https://gunshi.dev/api/plugin/#plugindependency)
Re-exports [PluginDependency](https://gunshi.dev/api/default/interfaces/PluginDependency)
* * *
### PluginExtension [​](https://gunshi.dev/api/plugin/#pluginextension)
Re-exports [PluginExtension](https://gunshi.dev/api/default/type-aliases/PluginExtension)
* * *
### PluginFunction [​](https://gunshi.dev/api/plugin/#pluginfunction)
Re-exports [PluginFunction](https://gunshi.dev/api/default/type-aliases/PluginFunction)
* * *
### PluginOptions [​](https://gunshi.dev/api/plugin/#pluginoptions)
Re-exports [PluginOptions](https://gunshi.dev/api/default/interfaces/PluginOptions)
* * *
### PluginWithExtension [​](https://gunshi.dev/api/plugin/#pluginwithextension)
Re-exports [PluginWithExtension](https://gunshi.dev/api/default/interfaces/PluginWithExtension)
* * *
### PluginWithoutExtension [​](https://gunshi.dev/api/plugin/#pluginwithoutextension)
Re-exports [PluginWithoutExtension](https://gunshi.dev/api/default/interfaces/PluginWithoutExtension)
* * *
### Prettify [​](https://gunshi.dev/api/plugin/#prettify)
Re-exports [Prettify](https://gunshi.dev/api/default/type-aliases/Prettify)
* * *
### RendererDecorator [​](https://gunshi.dev/api/plugin/#rendererdecorator)
Re-exports [RendererDecorator](https://gunshi.dev/api/default/type-aliases/RendererDecorator)
* * *
### ValidationErrorsDecorator [​](https://gunshi.dev/api/plugin/#validationerrorsdecorator)
Re-exports [ValidationErrorsDecorator](https://gunshi.dev/api/default/type-aliases/ValidationErrorsDecorator)
Pager
[Previous pageGenerateOptions](https://gunshi.dev/api/generator/type-aliases/GenerateOptions)
[Next pageCLI_OPTIONS_DEFAULT](https://gunshi.dev/api/plugin/variables/CLI_OPTIONS_DEFAULT)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
