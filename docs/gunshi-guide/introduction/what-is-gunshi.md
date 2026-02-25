[Skip to content](https://gunshi.dev/guide/introduction/what-is-gunshi#VPContent)
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
  * [Origin of the Name](https://gunshi.dev/guide/introduction/what-is-gunshi#origin-of-the-name "Origin of the Name")
  * [Key Features](https://gunshi.dev/guide/introduction/what-is-gunshi#key-features "Key Features")
  * [Why Gunshi?](https://gunshi.dev/guide/introduction/what-is-gunshi#why-gunshi "Why Gunshi?")
  * [Next Steps](https://gunshi.dev/guide/introduction/what-is-gunshi#next-steps "Next Steps")
  * [Credits](https://gunshi.dev/guide/introduction/what-is-gunshi#credits "Credits")


Are you an LLM? You can read better optimized documentation at /guide/introduction/what-is-gunshi.md for this page in Markdown format
# What's Gunshi? [​](https://gunshi.dev/guide/introduction/what-is-gunshi#what-s-gunshi)
Gunshi is a modern JavaScript command-line library designed to simplify the creation of command-line interfaces (CLIs).
## Origin of the Name [​](https://gunshi.dev/guide/introduction/what-is-gunshi#origin-of-the-name)
The name "gunshi" (軍師) refers to a position in ancient Japanese samurai battles where samurai devised strategies and gave orders. This name is inspired by the word "command", reflecting the library's purpose of handling command-line commands.
## Key Features [​](https://gunshi.dev/guide/introduction/what-is-gunshi#key-features)
Gunshi is designed with several powerful features to make CLI development easier and more maintainable:
  * 📏 **Simple & Universal**: Run commands with simple API and support for universal runtime (Node.js, Deno, Bun).
  * ⚙️ **Declarative & Type Safe**: Configure commands declaratively with full TypeScript support and type-safe argument parsing by [args-tokens](https://github.com/kazupon/args-tokens)
  * 🧩 **Composable & Lazy**: Create modular sub-commands with context sharing and lazy loading for better performance.
  * 🎨 **Flexible Rendering** : Customize usage generation, validation errors, and help messages with pluggable renderers.
  * 🌍 **Internationalization** : Built with global users in mind, featuring locale-aware design, resource management, and multi-language support.
  * 🔌 **Pluggable** : Extensible plugin system with dependency management and lifecycle hooks for modular CLI development.


## Why Gunshi? [​](https://gunshi.dev/guide/introduction/what-is-gunshi#why-gunshi)
Gunshi provides a modern approach to building command-line interfaces in JavaScript and TypeScript. It's designed to be:
  * **Developer-friendly** : Simple API with TypeScript support
  * **Flexible** : Compose commands and customize behavior as needed
  * **Maintainable** : Declarative configuration makes code easier to understand and maintain
  * **Performant** : Lazy loading ensures resources are only loaded when needed


Whether you're building a simple CLI tool or a complex command-line application with multiple sub-commands, Gunshi provides the features you need to create a great user experience.
## Next Steps [​](https://gunshi.dev/guide/introduction/what-is-gunshi#next-steps)
Now that you understand what Gunshi is and its key features, here's how to proceed with the documentation:
### Documentation Structure [​](https://gunshi.dev/guide/introduction/what-is-gunshi#documentation-structure)
The Gunshi documentation is organized into three main sections:
  * **Essentials** : Learn the fundamental concepts of Gunshi through a step-by-step tutorial format. This section covers everything from basic usage to composable commands and lazy loading.
  * **Advanced** : Explore specialized features organized by topic. Each chapter focuses on a specific advanced capability like internationalization, custom rendering, or type system extensions.
  * **Plugin** : Understand the plugin system through a tutorial approach. Learn how to create, configure, and distribute plugins for extending Gunshi's functionality.


### Where to Go Next [​](https://gunshi.dev/guide/introduction/what-is-gunshi#where-to-go-next)
TIP
Start with the **Setup** guide to install Gunshi in your project, then proceed through the **Essentials** section in order. Each chapter builds upon previous concepts.
  1. **[Setup](https://gunshi.dev/guide/introduction/setup)** - Install and configure Gunshi in your project
  2. **[Getting Started](https://gunshi.dev/guide/essentials/getting-started)** - Create your first CLI application
  3. Continue through the **Essentials** section to learn core concepts


After completing the essentials, you can explore the **Advanced** section based on your specific needs. The chapters there are independent and can be read in any order.
If you're interested in extending Gunshi with plugins, the **Plugin** section provides comprehensive guidance on creating and using plugins.
## Credits [​](https://gunshi.dev/guide/introduction/what-is-gunshi#credits)
Gunshi project is made possible by the open-source community and the many innovative tools in the JavaScript and TypeScript ecosystem. We extend our gratitude to all contributors and maintainers whose work has laid the foundation for this project.
  * [`citty`](https://github.com/unjs/citty), Provided the original inspiration for modern JavaScript command-line library.
  * [`ordana`](https://github.com/sapphi-red/ordana), Inspired documentation generation in Gunshi
  * [`@bomb.sh/tab`](https://github.com/bombshell-dev/tab), Powered by shell auto-completion for the JavaScript ecosystem


Last updated: 21.02.26, 15:06
Pager
[Next pageSetup](https://gunshi.dev/guide/introduction/setup)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
