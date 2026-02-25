[Skip to content](https://gunshi.dev/guide/plugin/introduction#VPContent)
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
  * [Why Plugins?](https://gunshi.dev/guide/plugin/introduction#why-plugins "Why Plugins?")
  * [Plugin System Concepts](https://gunshi.dev/guide/plugin/introduction#plugin-system-concepts "Plugin System Concepts")
  * [Package vs Entry Point](https://gunshi.dev/guide/plugin/introduction#package-vs-entry-point "Package vs Entry Point")
  * [Plugin Ecosystem Overview](https://gunshi.dev/guide/plugin/introduction#plugin-ecosystem-overview "Plugin Ecosystem Overview")
  * [Plugin Capabilities](https://gunshi.dev/guide/plugin/introduction#plugin-capabilities "Plugin Capabilities")
  * [Getting Started](https://gunshi.dev/guide/plugin/introduction#getting-started "Getting Started")
  * [Next Steps](https://gunshi.dev/guide/plugin/introduction#next-steps "Next Steps")


Are you an LLM? You can read better optimized documentation at /guide/plugin/introduction.md for this page in Markdown format
# Plugin System Introduction [​](https://gunshi.dev/guide/plugin/introduction#plugin-system-introduction)
Gunshi's plugin system is a powerful feature that enables you to extend your CLI applications with reusable functionality, type-safe interfaces, and composable behaviors.
This comprehensive system allows you to build modular, maintainable, and extensible command-line tools.
## Why Plugins? [​](https://gunshi.dev/guide/plugin/introduction#why-plugins)
The plugin system addresses several key challenges in CLI development:
### 1. Separation of Concerns [​](https://gunshi.dev/guide/plugin/introduction#_1-separation-of-concerns)
Plugins allow you to separate core command logic from cross-cutting concerns like logging, authentication, database connections, and rendering.
This separation makes your code more organized and easier to maintain.
### 2. Reusability [​](https://gunshi.dev/guide/plugin/introduction#_2-reusability)
Once you create a plugin, you can reuse it across multiple commands and even different CLI applications.
This reduces code duplication and development time.
### 3. Type Safety [​](https://gunshi.dev/guide/plugin/introduction#_3-type-safety)
Gunshi's plugin system is built with TypeScript-first design, providing full type safety for plugin extensions and their interactions.
You get compile-time validation and IntelliSense support throughout your development.
### 4. Ecosystem [​](https://gunshi.dev/guide/plugin/introduction#_4-ecosystem)
The plugin architecture enables a rich ecosystem where developers can share and compose plugins.
Official plugins provide common functionality, while you can create custom plugins for your specific needs.
## Plugin System Concepts [​](https://gunshi.dev/guide/plugin/introduction#plugin-system-concepts)
### Plugin Philosophy [​](https://gunshi.dev/guide/plugin/introduction#plugin-philosophy)
Gunshi plugins follow these core principles:
  * **Composability** : Plugins can be combined and work together seamlessly
  * **Type Safety** : Full TypeScript support with compile-time validation
  * **Lifecycle Awareness** : Plugins integrate at specific points in the CLI lifecycle
  * **Dependency Management** : Automatic resolution of plugin dependencies
  * **Extension Pattern** : Plugins extend command contexts with new capabilities


### Plugin Architecture [​](https://gunshi.dev/guide/plugin/introduction#plugin-architecture)
Syntax error in textmermaid version 11.12.0
This diagram illustrates the plugin system's execution flow.
When a CLI application starts, plugins are registered and their dependencies are resolved. During the setup phase, each plugin's initialization code runs.
Extensions are then created and made available to commands during execution.
Plugins can depend on each other (solid lines) or have optional dependencies (dotted lines).
## Package vs Entry Point [​](https://gunshi.dev/guide/plugin/introduction#package-vs-entry-point)
Gunshi provides two ways to work with plugins:
### Package: `@gunshi/plugin` [​](https://gunshi.dev/guide/plugin/introduction#package-gunshi-plugin)
The `@gunshi/plugin` package is a complete plugin development kit:
npmpnpmyarndenobun
sh```
npm install --save @gunshi/plugin
```

sh```
pnpm add @gunshi/plugin
```

sh```
yarn add @gunshi/plugin
```

sh```
deno add jsr:@gunshi/plugin
```

sh```
bun add @gunshi/plugin
```

Use this package when:
  * Building standalone plugin packages
  * Creating plugins with complex type definitions
  * Developing plugins for distribution
  * Need access to all plugin utilities and types


ts```
// Using the package for plugin development
import { plugin } from '@gunshi/plugin'
import type { PluginContext } from '@gunshi/plugin'

export default function myPlugin() {
  return plugin({
    id: 'my-plugin',
    setup: (ctx: PluginContext) => {
      // Plugin implementation
    }
  })
}
```

### Entry Point: `gunshi/plugin` [​](https://gunshi.dev/guide/plugin/introduction#entry-point-gunshi-plugin)
The `gunshi/plugin` entry point provides essential plugin functionality:
js```
// Using the entry point for simple plugins
import { plugin } from 'gunshi/plugin'

export default plugin({
  id: 'simple',
  setup: ctx => {
    // Simple plugin logic
  }
})
```

Use the entry point when:
  * Creating simple, application-specific plugins
  * Building inline plugins within your CLI
  * Want to minimize external dependencies


## Plugin Ecosystem Overview [​](https://gunshi.dev/guide/plugin/introduction#plugin-ecosystem-overview)
### Official Plugins [​](https://gunshi.dev/guide/plugin/introduction#official-plugins)
Gunshi provides several official plugins that cover common CLI needs:
#### Core Plugins (Built-in) [​](https://gunshi.dev/guide/plugin/introduction#core-plugins-built-in)
  * **`@gunshi/plugin-global`**: Adds`--help` , `--version` options, version, header, usage and validation errors rendering helpers
  * **`@gunshi/plugin-renderer`**: Provides usage and help core renderer


#### Optional Plugins [​](https://gunshi.dev/guide/plugin/introduction#optional-plugins)
  * **`@gunshi/plugin-i18n`**: Internationalization support
  * **`@gunshi/plugin-completion`**: Shell completion functionality


### Community Plugins [​](https://gunshi.dev/guide/plugin/introduction#community-plugins)
The plugin architecture enables the community to create and share plugins.
### Custom Plugins [​](https://gunshi.dev/guide/plugin/introduction#custom-plugins)
You can create custom plugins tailored to your specific needs:
ts```
// Domain-specific plugin for your application
export default plugin({
  id: 'api',
  extension: () => ({
    client: new ApiClient(),
    authenticate: async (token: string) => {
      // Custom authentication logic
    }
  })
})
```

## Plugin Capabilities [​](https://gunshi.dev/guide/plugin/introduction#plugin-capabilities)
### 1. Add Global Options [​](https://gunshi.dev/guide/plugin/introduction#_1-add-global-options)
Plugins can register global options that will be available to all commands:
js```
setup: ctx => {
  ctx.addGlobalOption('debug', {
    type: 'boolean',
    description: 'Enable debug mode'
  })
}
```

### 2. Register Sub-Commands [​](https://gunshi.dev/guide/plugin/introduction#_2-register-sub-commands)
Plugins can dynamically register new sub-commands during the setup phase:
js```
setup: ctx => {
  ctx.addCommand('plugin-command', {
    name: 'plugin-command',
    run: ctx => console.log('Plugin command executed')
  })
}
```

### 3. Decorate Renderers [​](https://gunshi.dev/guide/plugin/introduction#_3-decorate-renderers)
Plugins can enhance or modify the built-in renderers to customize output:
js```
setup: ctx => {
  ctx.decorateUsageRenderer(async (baseRenderer, ctx) => {
    const base = await baseRenderer(ctx)
    return `${base}\n\nEnhanced by plugin`
  })
}
```

### 4. Extend Command Context [​](https://gunshi.dev/guide/plugin/introduction#_4-extend-command-context)
Plugins can extend the `CommandContext` with additional functionality that commands can access:
js```
extension: () => ({
  database: new Database(),
  cache: new Cache(),
  logger: new Logger()
})
```

### 5. Intercept Command Execution [​](https://gunshi.dev/guide/plugin/introduction#_5-intercept-command-execution)
Plugins can intercept and modify command execution using decorators:
js```
setup: ctx => {
  ctx.decorateCommand(baseRunner => async ctx => {
    console.log('Before command')
    const result = await baseRunner(ctx)
    console.log('After command')
    return result
  })
}
```

## Getting Started [​](https://gunshi.dev/guide/plugin/introduction#getting-started)
To start using plugins in your Gunshi CLI:
  1. **Use Built-in Plugins** : The default `cli` function includes essential plugins
  2. **Add Official Plugins** : Install and configure official plugins as needed
  3. **Create Custom Plugins** : Build plugins specific to your application
  4. **Share Plugins** : Publish reusable plugins for the community


The following is an example of code for installing the official `@gunshi/plugin-i18n` and application-specific plugins:
js```
import { cli } from 'gunshi'
import i18n from '@gunshi/plugin-i18n'
import custom from './plugins/custom.js'

const entry = ctx => {}

await cli(args, entry, {
  plugins: [i18n({ locale: 'en-US' }), custom()]
})
```

## Next Steps [​](https://gunshi.dev/guide/plugin/introduction#next-steps)
Now that you understand what plugins are and how they enhance Gunshi CLIs, it's time to start building your own plugins.
The plugin development learning journey follows a progression:
  * **[Getting Started](https://gunshi.dev/guide/plugin/getting-started)** - Create your first plugin with simple examples and learn the basic plugin structure
  * **[Plugin Lifecycle](https://gunshi.dev/guide/plugin/lifecycle)** - Understand when and how plugins execute during CLI runtime
  * **[Plugin Dependencies](https://gunshi.dev/guide/plugin/dependencies)** - Build plugin ecosystems with proper dependency management
  * **[Plugin Decorators](https://gunshi.dev/guide/plugin/decorators)** - Wrap and enhance existing functionality with decorators
  * **[Plugin Extensions](https://gunshi.dev/guide/plugin/extensions)** - Share features across commands through context extensions
  * **[Plugin Type System](https://gunshi.dev/guide/plugin/type-system)** - Ensure type safety throughout your plugin implementation
  * **[Plugin Testing](https://gunshi.dev/guide/plugin/testing)** - Write comprehensive tests for your plugins
  * **[Plugin Development Guidelines](https://gunshi.dev/guide/plugin/guidelines)** - Follow production-ready patterns and conventions
  * **[Plugin List](https://gunshi.dev/guide/plugin/list)** - Explore official and community plugins


Start with [Getting Started](https://gunshi.dev/guide/plugin/getting-started) to create your first plugin and experience the plugin development workflow firsthand.
Last updated: 21.02.26, 15:06
Pager
[Previous pageParser Combinators](https://gunshi.dev/guide/experimentals/parser-combinators)
[Next pageGetting Started with Plugin Development](https://gunshi.dev/guide/plugin/getting-started)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
