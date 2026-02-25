[Skip to content](https://gunshi.dev/guide/essentials/plugin-system#VPContent)
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
  * [What's a Plugin?](https://gunshi.dev/guide/essentials/plugin-system#what-s-a-plugin "What's a Plugin?")
  * [Built-in Plugins](https://gunshi.dev/guide/essentials/plugin-system#built-in-plugins "Built-in Plugins")
  * [Using Optional Plugins](https://gunshi.dev/guide/essentials/plugin-system#using-optional-plugins "Using Optional Plugins")
  * [Combining Plugins](https://gunshi.dev/guide/essentials/plugin-system#combining-plugins "Combining Plugins")
  * [Plugin Configuration](https://gunshi.dev/guide/essentials/plugin-system#plugin-configuration "Plugin Configuration")
  * [Minimal Setup](https://gunshi.dev/guide/essentials/plugin-system#minimal-setup "Minimal Setup")
  * [Next Steps](https://gunshi.dev/guide/essentials/plugin-system#next-steps "Next Steps")


Are you an LLM? You can read better optimized documentation at /guide/essentials/plugin-system.md for this page in Markdown format
# Plugin System [​](https://gunshi.dev/guide/essentials/plugin-system#plugin-system)
## What's a Plugin? [​](https://gunshi.dev/guide/essentials/plugin-system#what-s-a-plugin)
A plugin in Gunshi is a modular extension that adds functionality to your CLI application without modifying its core code.
Think of plugins as building blocks that you can snap together to create powerful command-line tools.
### Why Use Plugins? [​](https://gunshi.dev/guide/essentials/plugin-system#why-use-plugins)
Plugins solve common CLI development challenges:
  * **Separation of Concerns** : Plugins keep your command logic clean by handling cross-cutting functionality like logging, authentication, or database connections separately. Your commands focus on their primary task while plugins handle the supporting infrastructure.
  * **Reusability** : Write functionality once, use it everywhere. A plugin created for one command can be reused across your entire CLI or even in different projects, saving development time and ensuring consistency.
  * **Composability** : Plugins work together seamlessly. You can combine multiple plugins—an authentication plugin with a logging plugin and a database plugin—and they'll integrate naturally into your CLI's lifecycle.


### How Plugins Work [​](https://gunshi.dev/guide/essentials/plugin-system#how-plugins-work)
Plugins integrate at specific points in your CLI's execution:
  1. **Registration** : When your CLI starts, plugins are registered and their dependencies are resolved
  2. **Setup** : Plugins initialize and configure themselves, adding any global options (like `--debug`)
  3. **Extension** : Plugins extend your command context with new functionality (like translation methods or API clients)
  4. **Decoration** : Plugins can modify how commands execute or how help text is displayed
  5. **Execution** : Your commands run with all plugin enhancements seamlessly integrated


This lifecycle integration means plugins can:
  * Add global options available to all commands (like `--debug` or `--verbose`)
  * Provide utilities accessible in any command (like API clients or database connections)
  * Modify how your CLI displays help text or handles errors
  * Intercept command execution for logging or validation


The beauty of Gunshi's plugin system is that it handles all the complexity behind the scenes.
You simply declare which plugins you want to use, and they automatically become part of your CLI's capabilities.
Now that you understand how plugins work, let's explore the plugins that come with Gunshi.
These built-in plugins provide essential CLI functionality out of the box.
## Built-in Plugins [​](https://gunshi.dev/guide/essentials/plugin-system#built-in-plugins)
Gunshi provides a standard `cli()` function that comes pre-configured with two essential plugins.
These built-in plugins give your CLI the familiar behavior users expect from command-line tools.
Let's explore what each plugin provides:
### @gunshi/plugin-global [​](https://gunshi.dev/guide/essentials/plugin-system#gunshi-plugin-global)
This plugin adds `--help` and `--version` options to all your commands automatically.
When either option is used, the plugin intercepts command execution to display the appropriate information.
The following example demonstrates how the cli() function automatically includes the global plugin:
js```
import { cli, define } from 'gunshi'

const command = define({
  name: 'app',
  description: 'My CLI application',
  run: ctx => {
    console.log('Running application')
  }
})

await cli(process.argv.slice(2), command, {
  name: 'my-app',
  version: '1.0.0'
})
```

Now your CLI automatically supports:
  * `my-app --help` displays usage information rendered by the renderer plugin
  * `my-app --version` displays the version number
  * The plugin decorates command execution to handle these options before your command runs


### @gunshi/plugin-renderer [​](https://gunshi.dev/guide/essentials/plugin-system#gunshi-plugin-renderer)
The renderer plugin automatically formats help text, usage information, and validation errors.
It works behind the scenes to ensure consistent, readable output across your entire CLI.
## Using Optional Plugins [​](https://gunshi.dev/guide/essentials/plugin-system#using-optional-plugins)
Optional plugins add specialized features to your CLI.
Install them separately and configure them based on your needs.
### Internationalization [​](https://gunshi.dev/guide/essentials/plugin-system#internationalization)
Add multi-language support with the i18n plugin:
npmpnpmyarndenobun
sh```
npm install --save @gunshi/plugin-i18n
```

sh```
pnpm add @gunshi/plugin-i18n
```

sh```
yarn add @gunshi/plugin-i18n
```

sh```
# For Deno projects, you can add Gunshi from JSR:
deno add jsr:@gunshi/plugin-i18n
```

sh```
bun add @gunshi/plugin-i18n
```

Here's a simple example using the `defineI18n` helper:
js```
import { cli } from 'gunshi'
import i18n, { defineI18n, resolveKey } from '@gunshi/plugin-i18n'

// Define resources inline for each locale
const resources = {
  'en-US': {
    greeting: 'Hello, {$name}!',
    farewell: 'Goodbye!'
  },
  'ja-JP': {
    greeting: 'こんにちは、{$name}さん！',
    farewell: 'さようなら！'
  },
  'es-ES': {
    greeting: '¡Hola, {$name}!',
    farewell: '¡Adiós!'
  }
}

const command = defineI18n({
  name: 'greet',
  description: 'Greet someone in their language',
  // Resource function receives locale and returns translations
  resource: locale => {
    return resources[locale.toString()] || resources['en-US']
  },
  args: {
    name: {
      type: 'string',
      required: true,
      description: 'Name to greet'
    }
  },
  run: ctx => {
    // Access the i18n plugin extension via its namespaced ID 'g:i18n'
    // (All Gunshi plugins use the 'g:' prefix to prevent naming conflicts)
    const t = ctx.extensions['g:i18n'].translate
    console.log(t(resolveKey('greeting', ctx), { name: ctx.values.name }))
    console.log(t(resolveKey('farewell', ctx)))
  }
})

await cli(process.argv.slice(2), command, {
  name: 'greet-cli',
  version: '1.0.0',
  plugins: [
    i18n({
      locale: process.env.LANG || 'en-US'
    })
  ]
})
```

NOTE
Plugin IDs use namespacing to prevent conflicts and identify ownership. Official Gunshi plugins use the `g:` prefix (e.g., `g:i18n`, `g:completion`). When developing your own plugins, use your organization's namespace (e.g., `myorg:logger`) or scoped package format (e.g., `@company/auth`). For detailed naming conventions and guidelines, see the [Plugin ID Guidelines](https://gunshi.dev/guide/plugin/guidelines#plugin-ids).
Key benefits:
  * The `defineI18n` helper simplifies i18n setup for commands
  * Automatic locale detection from system settings
  * Simple interpolation syntax for dynamic values
  * Fallback to default locale when translation is missing
  * Plugin functionality is accessible via `ctx.extensions` in your command runners


NOTE
The `ctx.extensions` object is how plugins extend your command context with additional functionality. The i18n plugin adds translation capabilities through `ctx.extensions['g:i18n']`. To learn more about working with plugin extensions and best practices for accessing them, see the [Context Extensions guide](https://gunshi.dev/guide/advanced/context-extensions).
TIP
This example demonstrates basic internationalization setup. For comprehensive coverage including external resource files, TypeScript support, dynamic locale switching, and production deployment strategies, see the [Advanced Internationalization Guide](https://gunshi.dev/guide/advanced/internationalization).
### Shell Completion [​](https://gunshi.dev/guide/essentials/plugin-system#shell-completion)
Enable tab completion across different shells:
npmpnpmyarn
sh```
npm install --save @gunshi/plugin-completion
```

sh```
pnpm add @gunshi/plugin-completion
```

sh```
yarn add @gunshi/plugin-completion
```

IMPORTANT
Shell completion currently requires Node.js. The completion feature is not available when running your CLI with Deno or Bun runtimes.
Here's how to add completion support:
js```
import { cli, define } from 'gunshi'
import completion from '@gunshi/plugin-completion'

const command = define({
  name: 'deploy',
  args: {
    environment: {
      type: 'string',
      required: true,
      description: 'Target environment'
    }
  },
  run: ctx => {
    console.log(`Deploying to ${ctx.values.environment}`)
  }
})

await cli(process.argv.slice(2), command, {
  name: 'deploy-cli',
  version: '1.0.0',
  plugins: [
    completion({
      config: {
        entry: {
          args: {
            environment: {
              handler: () => [
                { value: 'production', description: 'Production' },
                { value: 'staging', description: 'Staging' },
                { value: 'development', description: 'Development' }
              ]
            }
          }
        }
      }
    })
  ]
})
```

The completion plugin adds a special `complete` command to your CLI that generates shell-specific completion scripts.
### Installing Completion for End Users [​](https://gunshi.dev/guide/essentials/plugin-system#installing-completion-for-end-users)
Once you've added the completion plugin to your CLI, your users need to perform a one-time setup to enable tab completion on their system.
#### Basic Setup Example (Bash) [​](https://gunshi.dev/guide/essentials/plugin-system#basic-setup-example-bash)
Users generate a completion script for their shell and add it to their shell configuration:
sh```
# Generate completion script and save it
deploy-cli complete bash > ~/.local/share/bash-completion/completions/deploy-cli

# Reload your shell configuration
source ~/.bashrc

# Now tab completion works!
deploy-cli dep<TAB>  # Completes to: deploy-cli deploy
```

TIP
For detailed setup instructions for all supported shells (Bash, Zsh, Fish, PowerShell), including directory creation and configuration steps, see the [@gunshi/plugin-completion README](https://github.com/kazupon/gunshi/tree/main/packages/plugin-completion#shell-completion-setup).
#### How It Works [​](https://gunshi.dev/guide/essentials/plugin-system#how-it-works)
The completion plugin adds a special `complete` command to your CLI that generates shell-specific completion scripts.
Users run this command once to generate the script for their shell, then source it in their shell configuration to enable tab completion.
## Combining Plugins [​](https://gunshi.dev/guide/essentials/plugin-system#combining-plugins)
Plugins work seamlessly together. Here's an example using both i18n and completion:
js```
import { cli } from 'gunshi'
import i18n, { defineI18n, resolveKey } from '@gunshi/plugin-i18n'
import completion from '@gunshi/plugin-completion'

// Define your resources
const resources = {
  'en-US': {
    start: 'Starting build for {$mode} mode...',
    success: 'Build completed successfully!'
  },
  'ja-JP': {
    start: '{$mode}モードでビルドを開始しています...',
    success: 'ビルドが正常に完了しました！'
  }
}

const buildCommand = defineI18n({
  name: 'build',
  description: 'Build the project',
  resource: locale => {
    return resources[locale.toString()] || resources['en-US']
  },
  args: {
    mode: {
      type: 'string',
      default: 'development',
      description: 'Build mode'
    }
  },
  run: ctx => {
    const t = ctx.extensions['g:i18n'].translate
    console.log(t(resolveKey('start', ctx), { mode: ctx.values.mode }))
    // Build logic here
    console.log(t(resolveKey('success', ctx)))
  }
})

await cli(process.argv.slice(2), buildCommand, {
  name: 'build-tool',
  version: '2.0.0',
  plugins: [
    i18n({
      locale: process.env.LANG || 'en-US'
    }),
    completion({
      config: {
        entry: {
          args: {
            mode: {
              handler: () => [
                { value: 'development', description: 'Development build' },
                { value: 'production', description: 'Production build' }
              ]
            }
          }
        }
      }
    })
  ]
})
```

Both plugins enhance your CLI without interfering with each other - i18n handles translations while completion provides tab suggestions.
## Plugin Configuration [​](https://gunshi.dev/guide/essentials/plugin-system#plugin-configuration)
Configure plugins based on your environment or user preferences.
### Environment-based Configuration [​](https://gunshi.dev/guide/essentials/plugin-system#environment-based-configuration)
Load plugins conditionally:
js```
import { cli } from 'gunshi'

const plugins = []

// Add completion in development only
if (process.env.NODE_ENV === 'development') {
  const completion = await import('@gunshi/plugin-completion')
  plugins.push(completion.default())
}

// Add i18n if locale is set
if (process.env.LANG) {
  const i18n = await import('@gunshi/plugin-i18n')
  plugins.push(i18n.default({ locale: process.env.LANG }))
}

await cli(process.argv.slice(2), command, {
  name: 'my-cli',
  plugins
})
```

This approach keeps your production builds lean while providing developer features during development.
## Minimal Setup [​](https://gunshi.dev/guide/essentials/plugin-system#minimal-setup)
If you need precise control over your CLI's functionality and bundle size, you can use `@gunshi/bone` - Gunshi's bare-bones foundation package.
Unlike the standard `cli()` function which includes plugins automatically, `@gunshi/bone` starts with zero plugins, letting you add only what you need:
npmpnpmyarn
sh```
npm install --save @gunshi/bone @gunshi/plugin-global @gunshi/plugin-renderer
```

sh```
pnpm add @gunshi/bone @gunshi/plugin-global @gunshi/plugin-renderer
```

sh```
yarn add @gunshi/bone @gunshi/plugin-global @gunshi/plugin-renderer
```

js```
import { cli } from '@gunshi/bone'
import global from '@gunshi/plugin-global'
import renderer from '@gunshi/plugin-renderer'

// Only includes plugins you explicitly add
await cli(process.argv.slice(2), command, {
  name: 'minimal-cli',
  plugins: [
    global(), // Adds --help and --version options
    renderer() // Adds help text formatting
  ]
})
```

This approach gives you explicit control over every aspect of your CLI, making it ideal for applications where bundle size or specific feature control is critical.
Common use cases for `@gunshi/bone`:
  * Embedded CLIs with size constraints
  * Custom implementations of help or version handling
  * Testing plugin interactions in isolation
  * Applications requiring precise control over all CLI behavior


## Next Steps [​](https://gunshi.dev/guide/essentials/plugin-system#next-steps)
Now that you understand the plugin system basics, you can explore more advanced topics and start building with Gunshi's plugin ecosystem.
To deepen your understanding of the plugin system:
  * **TypeScript Support** : Explore type-safe plugin usage in the [Type System Guide](https://gunshi.dev/guide/advanced/type-system)
  * **Context Extensions** : Learn how plugins extend functionality through [Context Extensions](https://gunshi.dev/guide/advanced/context-extensions)


Ready to create your own plugins?
  * **Plugin Development** : Build custom plugins with the [Plugin Development Guide](https://gunshi.dev/guide/plugin/introduction)


Last updated: 21.02.26, 15:06
Pager
[Previous pageAuto Usage Generation](https://gunshi.dev/guide/essentials/auto-usage)
[Next pageType System](https://gunshi.dev/guide/advanced/type-system)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
