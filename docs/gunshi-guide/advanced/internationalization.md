[Skip to content](https://gunshi.dev/guide/advanced/internationalization#VPContent)
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
  * [Why Use Internationalization?](https://gunshi.dev/guide/advanced/internationalization#why-use-internationalization "Why Use Internationalization?")
  * [Getting Started with i18n Plugin](https://gunshi.dev/guide/advanced/internationalization#getting-started-with-i18n-plugin "Getting Started with i18n Plugin")
  * [Basic Internationalization](https://gunshi.dev/guide/advanced/internationalization#basic-internationalization "Basic Internationalization")
  * [Using Built-in Resources](https://gunshi.dev/guide/advanced/internationalization#using-built-in-resources "Using Built-in Resources")
  * [Loading Translations from Files](https://gunshi.dev/guide/advanced/internationalization#loading-translations-from-files "Loading Translations from Files")
  * [Translation with Interpolation](https://gunshi.dev/guide/advanced/internationalization#translation-with-interpolation "Translation with Interpolation")
  * [Internationalization with Sub-commands](https://gunshi.dev/guide/advanced/internationalization#internationalization-with-sub-commands "Internationalization with Sub-commands")
  * [Helper Functions](https://gunshi.dev/guide/advanced/internationalization#helper-functions "Helper Functions")
  * [Resource Key Naming Conventions](https://gunshi.dev/guide/advanced/internationalization#resource-key-naming-conventions "Resource Key Naming Conventions")
  * [Detecting User Locale](https://gunshi.dev/guide/advanced/internationalization#detecting-user-locale "Detecting User Locale")
  * [Custom Translation Adapters](https://gunshi.dev/guide/advanced/internationalization#custom-translation-adapters "Custom Translation Adapters")
  * [Translating Help Messages](https://gunshi.dev/guide/advanced/internationalization#translating-help-messages "Translating Help Messages")
  * [Important Notes on Custom Keys](https://gunshi.dev/guide/advanced/internationalization#important-notes-on-custom-keys "Important Notes on Custom Keys")
  * [Migration from v0.26](https://gunshi.dev/guide/advanced/internationalization#migration-from-v0-26 "Migration from v0.26")


Are you an LLM? You can read better optimized documentation at /guide/advanced/internationalization.md for this page in Markdown format
# Internationalization [​](https://gunshi.dev/guide/advanced/internationalization#internationalization)
Gunshi provides comprehensive internationalization (i18n) support through the official `@gunshi/plugin-i18n` plugin, allowing you to create command-line interfaces that can be used in multiple languages.
## Why Use Internationalization? [​](https://gunshi.dev/guide/advanced/internationalization#why-use-internationalization)
Internationalization offers several benefits:
  * **Broader audience** : Make your CLI accessible to users who speak different languages
  * **Better user experience** : Users can interact with your CLI in their preferred language
  * **Consistency** : Maintain a consistent approach to translations across your application
  * **Type safety** : Full TypeScript support for translation keys and interpolation


## Getting Started with i18n Plugin [​](https://gunshi.dev/guide/advanced/internationalization#getting-started-with-i18n-plugin)
First, install the i18n plugin and optional resource packages:
sh```
npm install @gunshi/plugin-i18n @gunshi/resources
```

## Basic Internationalization [​](https://gunshi.dev/guide/advanced/internationalization#basic-internationalization)
Here's how to implement basic internationalization using the i18n plugin:
cli.ts
ts```
import { cli } from 'gunshi'
import resources from '@gunshi/resources'
import i18n, { defineI18nWithTypes, pluginId as i18nId, resolveKey } from '@gunshi/plugin-i18n'

import type { I18nExtension } from '@gunshi/plugin-i18n'

// Define a command with i18n support
const command = defineI18nWithTypes<{ extensions: { [i18nId]: I18nExtension } }>()({
  name: 'greeter',
  args: {
    name: {
      type: 'string',
      short: 'n',
      description: 'Name to greet'
    },
    formal: {
      type: 'boolean',
      short: 'f',
      description: 'Use formal greeting'
    }
  },

  // Define translation resources for the command
  resource: locale => {
    if (locale.toString() === 'ja-JP') {
      return {
        description: '挨拶アプリケーション',
        'arg:name': '挨拶する相手の名前',
        'arg:formal': '丁寧な挨拶を使用する',
        informal_greeting: 'こんにちは',
        formal_greeting: 'はじめまして'
      }
    }

    // Default to English
    return {
      description: 'Greeting application',
      'arg:name': 'Name to greet',
      'arg:formal': 'Use formal greeting',
      informal_greeting: 'Hello',
      formal_greeting: 'Good day'
    }
  },

  // Command execution function
  run: ctx => {
    const { name = 'World', formal } = ctx.values
    const t = ctx.extensions[i18nId].translate

    // Use resolveKey for custom keys with proper namespacing
    const greetingKey = formal
      ? resolveKey('formal_greeting', ctx.name)
      : resolveKey('informal_greeting', ctx.name)

    const greeting = t(greetingKey)
    console.log(`${greeting}, ${name}!`)

    // Show translation information
    const locale = ctx.extensions[i18nId].locale
    console.log(`\nCurrent locale: ${locale}`)

    // Use resolveKey for description as well
    const descKey = resolveKey('description', ctx.name)
    console.log(`Command Description: ${t(descKey)}`)
  }
})

// Run the command with i18n plugin
await cli(process.argv.slice(2), command, {
  name: 'i18n-example',
  version: '1.0.0',
  plugins: [
    i18n({
      // Set locale from environment or default to en-US
      locale: process.env.MY_LANG || 'en-US',
      // Provide built-in translations for common terms.
      // See the support locales: https://github.com/kazupon/gunshi/tree/main/packages/resources#-supported-locales
      builtinResources: resources
    })
  ]
})
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/advanced/internationalization/basic).
TIP
**About the helper functions used in this example:**
  * `defineI18nWithTypes`: A type-safe helper for creating commands with i18n support. It ensures proper TypeScript inference for translation keys. [Learn more](https://gunshi.dev/guide/advanced/internationalization#definei18nwithtypes)
  * `resolveKey`: A utility that handles namespace resolution for custom translation keys in commands and subcommands. Always use this for custom keys to ensure proper namespacing. [Learn more](https://gunshi.dev/guide/advanced/internationalization#resolvekey)


To run this example with different locales:
sh```
# English (default)
node cli.ts --name John

# i18n-example (i18n-example v1.0.0)
#
# Hello, John!
#
# Current locale: en-US
# Command Description: Greeting application

# Japanese
MY_LANG=ja-JP node cli.ts --name 田中 --formal

# i18n-example (i18n-example v1.0.0)
#
# はじめまして, 田中!
#
# Current locale: ja-JP
# Command Description: 挨拶アプリケーション
```

## Using Built-in Resources [​](https://gunshi.dev/guide/advanced/internationalization#using-built-in-resources)
The `@gunshi/resources` package provides pre-translated resources for common CLI terms:
ts```
import { cli, define } from 'gunshi'
import i18n from '@gunshi/plugin-i18n'
import resources from '@gunshi/resources'

const command = define({
  name: 'app',
  run: ctx => {
    console.log('Application running')
  }
})

await cli(process.argv.slice(2), command, {
  name: 'my-app',
  version: '1.0.0',
  plugins: [
    i18n({
      locale: 'en-US',
      // Provide built-in translations for common terms.
      // See the support locales: https://github.com/kazupon/gunshi/tree/main/packages/resources#-supported-locales
      builtinResources: resources
    })
  ]
})

// This automatically translates built-in messages like:
// - USAGE, OPTIONS, COMMANDS
// - Help and version descriptions
// - Error messages
```

## Loading Translations from Files [​](https://gunshi.dev/guide/advanced/internationalization#loading-translations-from-files)
For better organization, load translations from separate files:
cli.ts
ts```
import i18n, { defineI18nWithTypes, pluginId as i18nId, resolveKey } from '@gunshi/plugin-i18n'
import resources from '@gunshi/resources'
import { cli } from 'gunshi'

import type { I18nExtension } from '@gunshi/plugin-i18n'

const command = defineI18nWithTypes<{ extensions: { [i18nId]: I18nExtension } }>()({
  name: 'greeter',
  args: {
    name: { type: 'string', short: 'n' },
    formal: { type: 'boolean', short: 'f' }
  },

  // Load translations from files
  resource: locale => {
    if (locale.toString() === 'ja-JP') {
      // Dynamic import for lazy loading
      const jaJP = await import('./locales/ja-JP.json', {
        with: { type: 'json' }
      })
      return jaJP.default
    }

    // Default to English
    const enUS = await import('./locales/en-US.json', {
      with: { type: 'json' }
    })
    return enUS.default
  },

  run: ctx => {
    const { name = 'World', formal } = ctx.values
    const t = ctx.extensions[i18nId].translate

    // Always use resolveKey for custom keys
    const greetingKey = formal
      ? resolveKey('formal_greeting', ctx.name)
      : resolveKey('informal_greeting', ctx.name)

    const greeting = t(greetingKey)
    console.log(`${greeting}, ${name}!`)
  }
})

await cli(process.argv.slice(2), command, {
  name: 'i18n-example',
  version: '1.0.0',
  plugins: [
    i18n({
      locale: process.env.MY_LANG || 'en-US',
      builtinResources: resources
    })
  ]
})
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/advanced/internationalization/loading).
Example locale files:
locales/en-US.json
json```
{
  "description": "Greeting application",
  "arg:name": "Name to greet",
  "arg:formal": "Use formal greeting",
  "informal_greeting": "Hello",
  "formal_greeting": "Good day"
}
```

locales/ja-JP.json
json```
{
  "description": "挨拶アプリケーション",
  "arg:name": "挨拶する相手の名前",
  "arg:formal": "丁寧な挨拶を使用する",
  "informal_greeting": "こんにちは",
  "formal_greeting": "はじめまして"
}
```

## Translation with Interpolation [​](https://gunshi.dev/guide/advanced/internationalization#translation-with-interpolation)
The i18n plugin supports message interpolation for dynamic content:
ts```
import i18n, { defineI18nWithTypes, pluginId as i18nId, resolveKey } from '@gunshi/plugin-i18n'

import type { I18nExtension } from '@gunshi/plugin-i18n'

const command = defineI18nWithTypes<{ extensions: { [i18nId]: I18nExtension } }>()({
  name: 'deploy',
  args: {
    app: { type: 'string', required: true },
    environment: { type: 'string', required: true }
  },
  resource: () => ({
    deploying: 'Deploying {$app} to {$environment}...',
    success: 'Successfully deployed {$app} to {$environment}!',
    error: 'Failed to deploy: {$message}'
  }),
  run: ctx => {
    const t = ctx.extensions[i18nId].translate
    const { app, environment } = ctx.values

    // Use resolveKey for all custom keys
    const deployingKey = resolveKey('deploying', ctx.name)
    const successKey = resolveKey('success', ctx.name)
    const errorKey = resolveKey('error', ctx.name)

    console.log(t(deployingKey, { app, environment }))

    try {
      // Deployment logic
      console.log(t(successKey, { app, environment }))
    } catch (error) {
      console.error(t(errorKey, { message: error.message }))
    }
  }
})
```

Note: Interpolation placeholders use the format `{$variableName}` in the i18n plugin.
## Internationalization with Sub-commands [​](https://gunshi.dev/guide/advanced/internationalization#internationalization-with-sub-commands)
When working with sub-commands, each command has its own namespace for translations:
cli.ts
ts```
import i18n, { defineI18nWithTypes, pluginId as i18nId, resolveKey } from '@gunshi/plugin-i18n'
import resources from '@gunshi/resources'
import { cli } from 'gunshi'

import type { I18nExtension } from '@gunshi/plugin-i18n'

// Sub-command with its own translations
const createCommand = defineI18nWithTypes<{ extensions: { [i18nId]: I18nExtension } }>()({
  name: 'create',
  args: {
    name: { type: 'string', required: true }
  },
  resource: locale => {
    return locale.toString() === 'ja-JP'
      ? {
          description: 'リソースを作成',
          'arg:name': 'リソース名',
          creating: '作成中: {$name}',
          success: '作成完了！'
        }
      : {
          description: 'Create a resource',
          'arg:name': 'Resource name',
          creating: 'Creating: {$name}',
          success: 'Created successfully!'
        }
  },
  run: ctx => {
    const t = ctx.extensions[i18nId].translate
    const { name } = ctx.values

    // For custom keys in subcommands, always use resolveKey helper
    const creatingKey = resolveKey('creating', ctx.name)
    const successKey = resolveKey('success', ctx.name)

    console.log(t(creatingKey, { name }))
    console.log(t(successKey))
  }
})

// Main command
const mainCommand = defineI18nWithTypes<{ extensions: { [i18nId]: I18nExtension } }>()({
  name: 'resource-manager',
  resource: () => ({
    description: 'Resource management tool',
    usage_hint: 'Use a sub-command to manage resources'
  }),
  run: ctx => {
    const t = ctx.extensions[i18nId].translate

    // Use resolveKey for main command's custom keys too
    const hintKey = resolveKey('usage_hint', ctx.name)
    console.log(t(hintKey))
  }
})

// Run with i18n plugin
await cli(process.argv.slice(2), mainCommand, {
  name: 'resource-cli',
  version: '1.0.0',
  subCommands: {
    create: createCommand
  },
  plugins: [
    i18n({
      locale: process.env.MY_LANG || 'en-US',
      builtinResources: resources
    })
  ]
})
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/advanced/internationalization/sub-command).
## Helper Functions [​](https://gunshi.dev/guide/advanced/internationalization#helper-functions)
The i18n plugin provides helpful utilities for working with translations:
###  `defineI18n` [​](https://gunshi.dev/guide/advanced/internationalization#definei18n)
Define an i18n-aware command.
ts```
import { defineI18n } from '@gunshi/plugin-i18n'

const greetCommand = defineI18n({
  name: 'greet',
  description: 'Greet someone',
  args: {
    name: {
      type: 'string',
      description: 'Name to greet'
    }
  },
  resource: locale => {
    switch (locale.toString()) {
      case 'ja-JP': {
        return {
          description: '誰かにあいさつ',
          'arg:name': 'あいさつするための名前'
        }
      }
      // other locales ...
    }
  },
  run: ctx => {
    console.log(`Hello, ${ctx.values.name}!`)
  }
})
```

The difference from the `define` function is that you can define a `resource` option that can load a locale.
###  `defineI18nWithTypes` [​](https://gunshi.dev/guide/advanced/internationalization#definei18nwithtypes)
Define an i18n-aware command with types
This helper function allows specifying the type parameter of `GunshiParams` while inferring the `Args` type, `ExtendContext` type from the definition.
ts```
import { defineI18nWithTypes } from '@gunshi/plugin-i18n'

// Define a command with specific extensions type
type MyExtensions = { logger: { log: (message: string) => void } }

const greetCommand = defineI18nWithTypes<{ extensions: MyExtensions }>()({
  name: 'greet',
  args: {
    name: { type: 'string', description: 'Name to greet' }
  },
  resource: locale => {
    switch (locale.toString()) {
      case 'ja-JP': {
        return {
          description: '誰かにあいさつ',
          'arg:name': 'あいさつするための名前'
        }
      }
      // other locales ...
    }
  },
  run: ctx => {
    // ctx.values is inferred as { name?: string }
    // ctx.extensions is MyExtensions
  }
})
```

###  `withI18nResource` [​](https://gunshi.dev/guide/advanced/internationalization#withi18nresource)
Add i18n resources to existing commands:
ts```
import { define } from 'gunshi'
import { withI18nResource, resolveKey, pluginId as i18nId } from '@gunshi/plugin-i18n'

const existingCommand = define({
  name: 'app',
  run: ctx => {
    const t = ctx.extensions[i18nId]?.translate
    if (t) {
      const messageKey = resolveKey('message', ctx.name)
      console.log(t(messageKey))
    }
  }
})

const existingLocalizableCommand = withI18nResource(existingCommand, locale => ({
  message: 'Hello from i18n!'
}))
```

###  `resolveKey` [​](https://gunshi.dev/guide/advanced/internationalization#resolvekey)
The `resolveKey` helper ensures proper command namespace handling for custom translation keys:
ts```
import { resolveKey } from '@gunshi/plugin-i18n'

// For a command named 'build'
const key = resolveKey('starting', ctx.name)
// Returns: 'build:starting'
```

## Resource Key Naming Conventions [​](https://gunshi.dev/guide/advanced/internationalization#resource-key-naming-conventions)
When defining translation resources, follow these conventions:
  * **Command Description** : Use the key `description`
  * **Examples** : Use the key `examples`
  * **Argument Descriptions** : Prefix with `arg:` (e.g., `arg:name`)
  * **Negatable Arguments** : Use `arg:no-<option>` for custom negation descriptions
  * **Built-in Keys** : Keys like `_:USAGE`, `_:OPTIONS` are handled by built-in resources
  * **Custom Keys** : Free naming for your application-specific messages, but always use `resolveKey()` when accessing them


Example:
js```
{
  // Command metadata (accessed with resolveKey)
  "description": "File processor",
  "examples": "$ process --input file.txt",

  // Argument descriptions (must use arg: prefix)
  "arg:input": "Input file path",
  "arg:verbose": "Enable verbose output",
  "arg:no-verbose": "Disable verbose output",

  // Custom application messages (accessed with resolveKey)
  "processing": "Processing file...",
  "complete": "Processing complete!",
  "error_not_found": "File not found: {$path}"
}
```

IMPORTANT
The resource object returned by the `resource` function (or loaded from external files like JSON) **must** be a flat key-value structure. Nested objects are not supported for translations using `translate()`. Keep your translation keys simple and at the top level.
Good Flat structure:
json```
{
  "greeting": "Hello",
  "farewell": "Goodbye"
}
```

Bad Nested structure (won't work with `translate('messages.greeting')`):
json```
{
  "messages": {
    "greeting": "Hello",
    "farewell": "Goodbye"
  }
}
```

## Detecting User Locale [​](https://gunshi.dev/guide/advanced/internationalization#detecting-user-locale)
The i18n plugin can automatically detect the user's locale:
js```
import i18n from '@gunshi/plugin-i18n'

// Use various detection methods
await cli(process.argv.slice(2), command, {
  plugins: [
    i18n({
      // From environment variable
      locale: process.env.MY_LANG || 'en-US'
      // Or using Intl.Locale for advanced locale handling
      // locale: new Intl.Locale(process.env.MY_LANG || 'en-US')
    })
  ]
})
```

In Node.js v21 and later, you can also detect locale using the navigator API:
ts```
// In browser or Node.js v21.2.0+ (experimental global navigator), use navigator.language
// Otherwise, fall back to environment- or Intl-based detection
const locale = (() => {
  // Experimental global navigator in Node 21.2.0+
  if (typeof globalThis.navigator !== 'undefined' && navigator.language) {
    return navigator.language
  }
  // Fallback: read locale from environment variables
  const env = process.env.LC_ALL || process.env.LC_MESSAGES || process.env.LANG || 'en-US'
  const base = env.split('.')[0].replace('_', '-')
  try {
    // Normalize and validate with Intl.Locale
    return new Intl.Locale(base).toString()
  } catch {
    return 'en-US'
  }
})()
```

## Custom Translation Adapters [​](https://gunshi.dev/guide/advanced/internationalization#custom-translation-adapters)
For advanced scenarios requiring custom interpolation syntax or translation logic, you can create custom translation adapters by implementing the TranslationAdapter interface.
This allows full control over how translations are stored, retrieved, and interpolated.
For detailed implementation guidance and examples, see the [Custom Translation Adapter documentation](https://github.com/kazupon/gunshi/tree/main/packages/plugin-i18n#-custom-translation-adapter) in the `@gunshi/plugin-i18n` package.
## Translating Help Messages [​](https://gunshi.dev/guide/advanced/internationalization#translating-help-messages)
The i18n plugin automatically uses your translations for help messages.
When users run `--help` with different locales, they'll see help messages in their language:
English:
sh```
USAGE:
  COMMAND <OPTIONS>

OPTIONS:
  -n, --name <name>      Name to greet
  -f, --formal           Use formal greeting
  -h, --help             Display this help message
  -v, --version          Display version
```

Japanese (with proper locale):
sh```
使用法:
  COMMAND <オプション>

オプション:
  -n, --name <name>     挨拶する相手の名前
  -f, --formal          丁寧な挨拶を使用する
  -h, --help            このヘルプメッセージを表示
  -v, --version         バージョンを表示
```

## Important Notes on Custom Keys [​](https://gunshi.dev/guide/advanced/internationalization#important-notes-on-custom-keys)
IMPORTANT
**Always use`resolveKey()` for custom translation keys!** This ensures proper namespace handling, especially in sub-commands. Without `resolveKey()`, your translations may not be found.
ts```
// ❌ Wrong - Don't access custom keys directly
const message = t('welcome')

// ✅ Correct - Always use resolveKey for custom keys
const welcomeKey = resolveKey('welcome', ctx.name)
const message = t(welcomeKey)
```

## Migration from v0.26 [​](https://gunshi.dev/guide/advanced/internationalization#migration-from-v0-26)
If you're migrating from Gunshi v0.26 where i18n was built into the CLI options, see the [v0.27 Release Notes](https://gunshi.dev/release/v0.27#internationalization-migration) for detailed migration instructions.
Last updated: 21.02.26, 15:06
Pager
[Previous pageCustom Rendering](https://gunshi.dev/guide/advanced/custom-rendering)
[Next pageDocumentation Generation](https://gunshi.dev/guide/advanced/docs-gen)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
