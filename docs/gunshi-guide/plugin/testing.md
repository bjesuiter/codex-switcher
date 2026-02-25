[Skip to content](https://gunshi.dev/guide/plugin/testing#VPContent)
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
  * [Plugin Testing Fundamentals](https://gunshi.dev/guide/plugin/testing#plugin-testing-fundamentals "Plugin Testing Fundamentals")
  * [Testing Plugin Configuration](https://gunshi.dev/guide/plugin/testing#testing-plugin-configuration "Testing Plugin Configuration")
  * [Testing Extensions](https://gunshi.dev/guide/plugin/testing#testing-extensions "Testing Extensions")
  * [Testing Lifecycle](https://gunshi.dev/guide/plugin/testing#testing-lifecycle "Testing Lifecycle")
  * [Testing Decorators](https://gunshi.dev/guide/plugin/testing#testing-decorators "Testing Decorators")
  * [Integration Testing](https://gunshi.dev/guide/plugin/testing#integration-testing "Integration Testing")
  * [Testing Techniques Reference](https://gunshi.dev/guide/plugin/testing#testing-techniques-reference "Testing Techniques Reference")
  * [Next Steps](https://gunshi.dev/guide/plugin/testing#next-steps "Next Steps")


Are you an LLM? You can read better optimized documentation at /guide/plugin/testing.md for this page in Markdown format
# Plugin Testing [​](https://gunshi.dev/guide/plugin/testing#plugin-testing)
Testing is crucial for ensuring plugin reliability and maintainability. This guide covers practical testing approaches for Gunshi plugins.
IMPORTANT
The code examples in this guide focus on demonstrating testing patterns and techniques. For clarity and brevity, some examples may not include extensive explanations that would normally be present in Gunshi's documentation. The emphasis is on showing practical testing approaches rather than following all documentation style guidelines.
NOTE
This guide uses [Vitest](https://vitest.dev/) as the testing framework. The concepts can be adapted to other testing frameworks.
NOTE
Some code examples include TypeScript file extensions (`.ts`) in `import`/`export` statements. If you use this pattern, enable `allowImportingTsExtensions` in your `tsconfig.json`.
## Plugin Testing Fundamentals [​](https://gunshi.dev/guide/plugin/testing#plugin-testing-fundamentals)
Every Gunshi plugin requires thorough testing to ensure it integrates correctly with the CLI framework and behaves reliably across different scenarios. This section covers the essential concepts and basic testing approaches that form the foundation of plugin testing. You'll learn how to structure tests for plugins, use the testing utilities provided by Gunshi, and establish a solid testing foundation that scales with your plugin's complexity.
### Basic Plugin Structure [​](https://gunshi.dev/guide/plugin/testing#basic-plugin-structure)
The following example demonstrates a minimal plugin structure that serves as our testing subject:
src/plugin.ts
ts```
import { plugin } from 'gunshi/plugin'

export function myPlugin(options = {}) {
  return plugin({
    id: 'my-plugin',
    name: 'My Plugin',
    extension: (ctx, cmd) => ({
      greet: (name: string) => `Hello, ${name}!`
    })
  })
}
```

### Writing Your First Test [​](https://gunshi.dev/guide/plugin/testing#writing-your-first-test)
The following test file demonstrates basic plugin testing, including initialization and extension factory verification:
src/plugin.test.ts
ts```
import { createCommandContext } from 'gunshi/plugin'
import { define } from 'gunshi'
import { describe, expect, test, vi } from 'vitest'
import { myPlugin } from './plugin.ts'

describe('plugin initialization', () => {
  test('create plugin with default options', () => {
    const plugin = myPlugin()

    expect(plugin.id).toBe('my-plugin')
    expect(plugin.name).toBe('My Plugin')
    expect(plugin.extension.factory).toBeDefined()
  })

  test('plugin extension factory creates correct methods', async () => {
    const plugin = myPlugin()
    const mockCommand = define({
      name: 'test',
      description: 'Test command',
      run: vi.fn()
    })

    const mockContext = await createCommandContext({
      command: mockCommand
    })

    const extension = await plugin.extension.factory(mockContext, mockCommand)

    expect(extension.greet).toBeDefined()
    expect(typeof extension.greet).toBe('function')
    expect(extension.greet('World')).toBe('Hello, World!')
  })
})
```

### Moving Beyond Basic Tests [​](https://gunshi.dev/guide/plugin/testing#moving-beyond-basic-tests)
The example above demonstrates fundamental plugin testing. As your plugins grow more complex, you'll need to test additional aspects to ensure reliability and maintainability. The following sections cover comprehensive testing approaches for:
  * Plugin configuration - Validating options and handling invalid inputs
  * Extension behaviors - Testing complex extension methods and async operations
  * Lifecycle management - Verifying setup functions and onExtension callbacks
  * Decorator patterns - Testing command and renderer decorators
  * Integration scenarios - Ensuring plugins work correctly with real CLI instances


Each section includes practical examples and testing techniques you can adapt to your plugins. To run your tests after implementing them, use:
sh```
# Run all tests
vitest run
```

Let's start by exploring how to test plugin configuration validation.
## Testing Plugin Configuration [​](https://gunshi.dev/guide/plugin/testing#testing-plugin-configuration)
Plugins often accept configuration options that modify their behavior, validate input, or declare dependencies on other plugins. Robust configuration testing ensures your plugin handles both valid and invalid inputs gracefully, properly validates options at creation time, and correctly declares its dependencies. This section demonstrates comprehensive approaches to testing all aspects of plugin configuration, from basic validation to complex dependency scenarios.
### Configuration Validation [​](https://gunshi.dev/guide/plugin/testing#configuration-validation)
Plugins should validate configuration during creation:
src/plugin.ts
ts```
import { plugin } from 'gunshi/plugin'

export function myValidatingPlugin(options: { locale: string; timeout?: number }) {
  if (options.locale && !/^[a-z]{2}-[A-Z]{2}$/.test(options.locale)) {
    throw new Error('Invalid locale format')
  }
  if (options.timeout !== undefined && options.timeout < 0) {
    throw new Error('Timeout must be positive')
  }

  return plugin({
    id: 'validating-plugin',
    name: 'Validating Plugin',
    extension: (ctx, cmd) => ({
      validate: () => true,
      config: options
    })
  })
}
```

### Testing Configuration Behavior [​](https://gunshi.dev/guide/plugin/testing#testing-configuration-behavior)
Test your configuration validation logic with these testing approaches:
src/plugin.test.ts
ts```
import { createCommandContext } from 'gunshi/plugin'
import { describe, expect, test, vi } from 'vitest'
import { myValidatingPlugin } from './plugin.ts'

describe('configuration validation', () => {
  test('validates configuration at creation time', () => {
    expect(() => myValidatingPlugin({ locale: 'invalid' })).toThrow('Invalid locale format')
    expect(() => myValidatingPlugin({ locale: 'en-US', timeout: -1 })).toThrow(
      'Timeout must be positive'
    )
  })

  test('plugin uses configuration in extension', async () => {
    const plugin = myValidatingPlugin({ locale: 'ja-JP', timeout: 5000 })
    const mockCommand = define({ name: 'test', description: 'Test', run: vi.fn() })

    const ctx = await createCommandContext({ command: mockCommand })
    const extension = await plugin.extension.factory(ctx, mockCommand)

    expect(extension.config.locale).toBe('ja-JP')
    expect(extension.config.timeout).toBe(5000)
  })
})
```

### Dependency Declaration [​](https://gunshi.dev/guide/plugin/testing#dependency-declaration)
Define a plugin with dependencies using the following structure:
src/plugin.ts
ts```
import { plugin } from 'gunshi/plugin'

export function myPluginWithDependencies() {
  return plugin({
    id: 'dependent-plugin',
    name: 'Dependent Plugin',
    dependencies: ['plugin-renderer', { id: 'plugin-i18n', optional: true }],
    extension: (ctx, cmd) => ({
      render: () => 'rendered'
    })
  })
}
```

Test dependency declarations:
src/plugin.test.ts
ts```
import { describe, expect, test } from 'vitest'
import { myPluginWithDependencies } from './plugin.ts'

describe('dependency declaration', () => {
  test('declares dependencies correctly', () => {
    const plugin = myPluginWithDependencies()

    expect(plugin.dependencies).toContain('plugin-renderer')
    const optionalDep = plugin.dependencies?.find(dep => typeof dep === 'object' && dep.optional)
    expect(optionalDep).toEqual({ id: 'plugin-i18n', optional: true })
  })
})
```

## Testing Extensions [​](https://gunshi.dev/guide/plugin/testing#testing-extensions)
Extensions are the heart of Gunshi plugins, providing the actual functionality that commands can use. Testing extensions requires special attention to their interaction with the command context, handling of asynchronous operations, and proper state management. This section explores various patterns for testing extensions using the `createCommandContext` helper, covering both simple synchronous methods and complex asynchronous workflows that interact with external resources.
### Testing with `createCommandContext` [​](https://gunshi.dev/guide/plugin/testing#testing-with-createcommandcontext)
The `createCommandContext` helper provides a complete context for testing extensions:
src/plugin.test.ts
ts```
import { createCommandContext } from 'gunshi/plugin'
import { expect, test } from 'vitest'
import { myPlugin } from './plugin.ts'

test('extension factory creates correct extension', async () => {
  const plugin = myPlugin({ debug: true })

  const command = define({ name: 'test', description: 'Test', run: vi.fn() })
  const ctx = await createCommandContext({
    command,
    values: { verbose: true },
    cliOptions: {
      version: '1.0.0'
    }
  })

  const extension = await plugin.extension.factory(ctx, command)

  expect(extension.someMethod).toBeDefined()
  const result = extension.someMethod()
  expect(result).toBe('expected value')
})
```

### Testing Complex Extension Methods [​](https://gunshi.dev/guide/plugin/testing#testing-complex-extension-methods)
The following example demonstrates how to test extension methods that interact with the command context:
src/plugin.test.ts
ts```
import { createCommandContext } from 'gunshi/plugin'
import { define } from 'gunshi'
import { describe, expect, test, vi } from 'vitest'
import { myPlugin } from './plugin.ts'

describe('extension methods', () => {
  test('showVersion displays version correctly', async () => {
    const plugin = myPlugin()

    const command = define({ name: 'app', description: 'App', run: vi.fn() })
    const ctx = await createCommandContext({
      command,
      cliOptions: { version: '2.0.0', name: 'test-app' }
    })

    const extension = await plugin.extension.factory(ctx, command)
    const result = extension.showVersion()

    expect(result).toBe('2.0.0')
  })

  test('handles missing version', async () => {
    const plugin = myPlugin()

    const command = define({ name: 'app', description: 'App', run: vi.fn() })
    const ctx = await createCommandContext({
      command,
      cliOptions: { version: undefined, name: 'test-app' }
    })

    const extension = await plugin.extension.factory(ctx, command)
    const result = extension.showVersion()

    expect(result).toBe('unknown')
  })
})
```

### Testing Async Extensions [​](https://gunshi.dev/guide/plugin/testing#testing-async-extensions)
The following examples show how to test asynchronous extension factories that load configuration and handle errors:
src/plugin.test.ts
ts```
import { createCommandContext } from 'gunshi/plugin'
import { describe, expect, test, vi } from 'vitest'
import myPlugin from './plugin.ts'

describe('async extension', () => {
  test('extension factory loads configuration', async () => {
    const loadConfig = vi.fn().mockReturnValue({
      apiUrl: 'https://api.example.com',
      timeout: 5000
    })
    const plugin = myPlugin({ loadConfig })
    const command = define({ name: 'test', description: 'Test', run: vi.fn() })
    const ctx = await createCommandContext({ command })
    const extension = await plugin.extension.factory(ctx, command)

    expect(loadConfig).toHaveBeenCalled()
    expect(extension.getConfig()).toEqual({
      apiUrl: 'https://api.example.com',
      timeout: 5000
    })
  })

  test('handles initialization errors gracefully', async () => {
    const warnMock = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const loadConfig = vi.fn().mockRejectedValue(new Error('Config not found'))
    const plugin = myPlugin({ loadConfig })
    const command = define({ name: 'test', description: 'Test', run: vi.fn() })
    const ctx = await createCommandContext({ command })
    const extension = await plugin.extension.factory(ctx, command)

    expect(extension.getConfig()).toEqual({
      apiUrl: 'http://localhost:3000',
      timeout: 3000
    })
    expect(warnMock).toHaveBeenCalledWith('Failed to load config:', expect.any(Error))
  })
})
```

## Testing Lifecycle [​](https://gunshi.dev/guide/plugin/testing#testing-lifecycle)
Gunshi plugins follow a specific lifecycle with distinct phases: initialization through the setup function and post-creation callbacks via onExtension. Understanding and testing these lifecycle hooks is essential for plugins that modify the CLI structure, add global options, or maintain shared state across commands.
This section covers strategies for testing each lifecycle phase and ensuring your plugin integrates seamlessly with the CLI initialization process.
### Testing the `setup` Function [​](https://gunshi.dev/guide/plugin/testing#testing-the-setup-function)
The `setup` function runs when the plugin is registered:
src/plugin.ts
ts```
import { plugin } from 'gunshi/plugin'

export interface DebuggablePluginOptions {
  enable?: boolean
}

export function debuggablePlugin({ enable = true }: DebuggablePluginOptions) {
  return plugin({
    id: 'debuggable-plugin',
    name: 'Debuggable Plugin',
    setup: ctx => {
      if (enable) {
        ctx.addGlobalOption('debug', {
          type: 'boolean',
          description: 'Enable debug mode',
          default: false
        })
      }
    }
  })
}
```

Test `setup` behavior:
src/plugin.test.ts
ts```
import { createCommandContext } from 'gunshi/plugin'
import { describe, expect, test, vi } from 'vitest'
import { debuggablePlugin } from './plugin.ts'

// Mockup PluginContext
function mockPluginContext(): PluginContext {
  return {
    subCommands: new Map(),
    globalOptions: new Map(),
    addGlobalOption: vi.fn(),
    addCommand: vi.fn(),
    hasCommand: vi.fn(),
    decorateCommand: vi.fn(),
    decorateUsageRenderer: vi.fn(),
    decorateHeaderRenderer: vi.fn(),
    decorateValidationErrorsRenderer: vi.fn()
  }
}

describe('debuggable plugin', () => {
  test('enable debug option', async () => {
    const mockPluginCtx = mockPluginContext()
    const plugin = debuggablePlugin({ enable: true })

    // Run the plugin setup
    plugin(mockPluginCtx)

    expect(mockPluginCtx.addGlobalOption).toHaveBeenCalledWith(
      'debug',
      expect.objectContaining({ type: 'boolean', description: 'Enable debug mode', default: false })
    )
  })

  test('disable debug option', () => {
    const mockPluginCtx = mockPluginContext()
    const plugin = debuggablePlugin({ enable: false })

    plugin(mockPluginCtx)

    expect(mockPluginCtx.addGlobalOption).not.toHaveBeenCalledWith(
      'debug',
      expect.objectContaining({ type: 'boolean', description: 'Enable debug mode', default: false })
    )
  })
})
```

### Testing the `onExtension` Callback [​](https://gunshi.dev/guide/plugin/testing#testing-the-onextension-callback)
The `onExtension` callback runs after extensions are created:
src/plugin.ts
ts```
import { plugin } from 'gunshi/plugin'

interface TrackerState {
  initialized: boolean
  initTime?: number | undefined
  commandName?: string | undefined
}

export function trackerPlugin() {
  const sharedState = {
    initialized: false,
    initTime: null as number | null,
    commandName: null as string | null
  }

  return plugin({
    id: 'tracker-plugin',
    name: 'Tracker Plugin',

    extension: (ctx, cmd) => ({
      get isInitialized() {
        return sharedState.initialized
      },
      getInitTime: () => sharedState.initTime,
      getCommandName: () => sharedState.commandName
    }),

    onExtension: (ctx, cmd) => {
      sharedState.initialized = true
      sharedState.initTime = Date.now()
      sharedState.commandName = cmd.name
    }
  })
}
```

Test `onExtension` behavior:
src/plugin.test.ts
ts```
import { createCommandContext } from 'gunshi/plugin'
import { describe, expect, test, vi } from 'vitest'
import { trackerPlugin } from './init-tracker.ts'

describe('onExtension callback', () => {
  test('extension not initialized before onExtension', async () => {
    const plugin = trackerPlugin()
    const command = define({ name: 'test', description: 'Test', run: vi.fn() })
    const ctx = await createCommandContext({ command })
    const extension = await plugin.extension.factory(ctx, command)

    expect(extension.isInitialized).toBe(false)
    expect(extension.getInitTime()).toBeUndefined()
  })

  test('onExtension initializes extension', async () => {
    const plugin = trackerPlugin()
    const command = define({ name: 'deploy', description: 'Deploy', run: vi.fn() })
    const ctx = await createCommandContext({ command })
    const extension = await plugin.extension.factory(ctx, command)
    await plugin.extension.onFactory?.(ctx, command)

    expect(extension.isInitialized).toBe(true)
    expect(extension.getInitTime()).toBeGreaterThan(0)
    expect(extension.getCommandName()).toBe('deploy')
  })
})
```

## Testing Decorators [​](https://gunshi.dev/guide/plugin/testing#testing-decorators)
Decorators allow plugins to wrap and enhance existing command runners and renderers, adding functionality like logging, error handling, or output formatting. Testing decorators requires verifying both their enhancement behavior and their ability to properly delegate to the underlying functions. This section demonstrates techniques for testing command and renderer decorators, ensuring they intercept correctly when needed and pass through transparently when appropriate.
### Command Decorator Testing [​](https://gunshi.dev/guide/plugin/testing#command-decorator-testing)
Test decorators that wrap command runners:
src/decorator.test.ts
ts```
import { createCommandContext } from 'gunshi/plugin'
import { describe, expect, test, vi } from 'vitest'
import { commandDecorator } from './decorators.ts'

describe('command decorator', () => {
  test('intercepts help option', async () => {
    const usage = 'Usage: test [options]'

    const ctx = await createCommandContext({
      command: { name: 'test', description: 'Test', run: vi.fn() },
      values: { help: true },
      cliOptions: {
        renderUsage: async () => usage
      }
    })

    const baseRunner = vi.fn(() => 'command executed')
    const decoratedRunner = commandDecorator(baseRunner)
    const result = await decoratedRunner(ctx)

    expect(result).toBe(usage)
    expect(baseRunner).not.toHaveBeenCalled()
  })

  test('passes through normally', async () => {
    const ctx = await createCommandContext({
      command: { name: 'test', description: 'Test', run: vi.fn() }
    })

    const baseRunner = vi.fn(() => 'command executed')
    const decoratedRunner = commandDecorator(baseRunner)
    const result = await decoratedRunner(ctx)

    expect(result).toBe('command executed')
    expect(baseRunner).toHaveBeenCalledWith(ctx)
  })
})
```

### Testing Renderer Decorators [​](https://gunshi.dev/guide/plugin/testing#testing-renderer-decorators)
The following example shows how to test extensions that interact with renderer decorators:
src/renderer.test.ts
ts```
import { createCommandContext } from 'gunshi/plugin'
import { expect, test, vi } from 'vitest'
import myPlugin from './plugin.ts'
import { headerRendererDecorator } from './decorators.ts'

import type { PluginId } from './constants.ts'
import type { MyPluginExtension } from './types.ts'

describe('renderer decorators: decorateHeaderRenderer', async () => {
  test('render header with renderHeader option', async () => {
    const plugin = myPlugin()
    const header = 'Test Application v1.0.0'
    const ctx = await createCommandContext<{ extensions: Record<PluginId, MyPluginExtension> }>({
      command: { name: 'app', description: 'App', run: vi.fn() },
      extensions: {
        [plugin.id]: plugin.extension
      },
      cliOptions: {
        renderHeader: async () => header
      }
    })

    const baseRunner = vi.fn<Parameters<typeof headerRendererDecorator>[0]>(
      async () => 'header rendered'
    )
    const rendered = await headerRendererDecorator(baseRunner, ctx)
    expect(rendered).toBe(header)
    expect(baseRunner).not.toHaveBeenCalled()
  })

  test('not render Header without renderHeader option', async () => {
    const plugin = myPlugin()
    const ctx = await createCommandContext<{ extensions: Record<PluginId, MyPluginExtension> }>({
      command: { name: 'app', description: 'App', run: vi.fn() },
      extensions: {
        [plugin.id]: plugin.extension
      }
    })

    const baseRunner = vi.fn<Parameters<typeof headerRendererDecorator>[0]>(
      async () => 'header rendered'
    )
    const rendered = await headerRendererDecorator(baseRunner, ctx)
    expect(rendered).toBe('header rendered')
  })
})
```

## Integration Testing [​](https://gunshi.dev/guide/plugin/testing#integration-testing)
While unit tests verify individual plugin components, integration tests ensure your plugin works correctly within a complete CLI environment with real command instances and potentially multiple interacting plugins. These tests validate the entire plugin lifecycle from registration through execution, including dependency resolution and inter-plugin communication. This section provides patterns for comprehensive integration testing that catches issues unit tests might miss.
### Testing Complete Plugin Flow [​](https://gunshi.dev/guide/plugin/testing#testing-complete-plugin-flow)
Integration tests verify the entire plugin lifecycle. The following example shows a logging plugin that we'll use for integration testing:
src/plugin.ts
ts```
import { plugin } from 'gunshi/plugin'

export interface LoggingExtension {
  log: (message: string) => void
}

export function loggingPlugin() {
  return plugin({
    id: 'logging-plugin',
    name: 'Logging Plugin',

    extension: (ctx, cmd) => ({
      log: (message: string) => {
        if (ctx.values.verbose) {
          console.log(`[${cmd.name}] ${message}`)
        }
      }
    }),

    setup(ctx) {
      ctx.addGlobalOption('verbose', {
        type: 'boolean',
        short: 'V',
        description: 'Enable verbose logging'
      })
    }
  })
}
```

Test with real CLI instance:
src/plugin.test.ts
ts```
import { describe, expect, test, vi } from 'vitest'
import { cli, define } from 'gunshi'
import { loggingPlugin } from './plugin.ts'

describe('plugin integration', () => {
  test('plugin adds global options to CLI', async () => {
    const plugin = loggingPlugin()
    const mockRun = vi.fn(() => 'success')
    const command = define({
      name: 'test-command',
      description: 'Test command',
      run: mockRun
    })
    await cli(['--verbose'], command, {
      plugins: [plugin]
    })

    expect(mockRun).toHaveBeenCalledWith(
      expect.objectContaining({
        values: {
          verbose: true
        }
      })
    )
  })
})
```

### Testing Multiple Plugins [​](https://gunshi.dev/guide/plugin/testing#testing-multiple-plugins)
Test plugin interactions with dependencies:
src/plugin.ts
ts```
import { plugin } from 'gunshi/plugin'

export interface NotificationExtension {
  notify: (message: string) => void
}

const notificationDependencies = [{ id: 'logging-plugin', optional: true }] as const

export function notificationPlugin() {
  return plugin<
    Record<'logging-plugin', LoggingExtension>,
    'notification-plugin',
    typeof notificationDependencies
  >({
    id: 'notification-plugin',
    name: 'Notification Plugin',
    dependencies: notificationDependencies,
    extension: (ctx, cmd) => {
      const logger = ctx.extensions['logging-plugin']?.log
      return {
        notify(message: string) {
          if (logger) {
            logger(`[DEBUG] ${message}`)
          } else {
            console.log(message)
          }
        }
      }
    }
  })
}
```

Test plugin discovery and fallback:
src/plugin.test.ts
ts```
import { createCommandContext } from 'gunshi/plugin'
import { describe, expect, test, vi } from 'vitest'
import { loggingPlugin, notificationPlugin } from './plugin.ts'

import type { LoggingExtension, NotificationExtension } from './plugin.ts'

describe('plugin interactions', () => {
  test('uses logger when available', async () => {
    const command = define({ name: 'test', description: 'Test', run: vi.fn() })

    const logging = loggingPlugin()
    const notification = notificationPlugin()

    const logSpy = vi.fn()
    vi.spyOn(logging.extension, 'factory').mockImplementation(async () => {
      return { log: logSpy }
    })
    const ctx = await createCommandContext<{
      extensions: Record<'logging-plugin', LoggingExtension> &
        Record<'notification-plugin', NotificationExtension>
    }>({
      command,
      extensions: {
        [logging.id]: logging.extension,
        [notification.id]: notification.extension
      }
    })

    ctx.extensions['notification-plugin'].notify('Hello')
    expect(logSpy).toHaveBeenCalledWith('[DEBUG] Hello')
  })

  test('falls back when logger missing', async () => {
    const command = define({ name: 'test', description: 'Test', run: vi.fn() })
    const notification = notificationPlugin()

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    const ctx = await createCommandContext<{
      extensions: Record<'notification-plugin', NotificationExtension>
    }>({
      command,
      extensions: {
        [notification.id]: notification.extension
      }
    })

    ctx.extensions['notification-plugin'].notify('Hello')
    expect(logSpy).toHaveBeenCalledWith('Hello')
  })
})
```

## Testing Techniques Reference [​](https://gunshi.dev/guide/plugin/testing#testing-techniques-reference)
This reference section consolidates the key testing techniques and principles covered throughout this guide into a quick-access format. Use these techniques as templates for your own plugin tests, adapting them to your specific requirements while maintaining the core testing principles that ensure plugin reliability and maintainability.
### Quick Reference [​](https://gunshi.dev/guide/plugin/testing#quick-reference)
The following code snippets provide quick examples of common testing approaches:
ts```
// Structure validation
expect(plugin.id).toBe('plugin-id')
expect(plugin.dependencies).toContain('dependency-id')

// Configuration validation
expect(() => plugin({ invalid: true })).toThrow()

// Extension testing with createCommandContext
const ctx = await createCommandContext({ command, values, cliOptions })
const extension = await plugin.extension.factory(ctx, command)

// Async extension testing
const loadConfig = vi.fn().mockReturnValue(config)
const plugin = myPlugin({ loadConfig })

// Lifecycle testing
plugin(mockPluginContext)
plugin.extension.onFactory?.(ctx, command)

// Command decorator testing
const commandDecorated = commandDecorator(baseRunner)
const result = await commandDecorated(ctx)

// Renderer decorators testing
const rendered = await rendererDecorator(baseRunner, ctx)

// Integration testing
await cli(['--option'], command, { plugins: [plugin] })

// Multiple plugins
const ctx = await createCommandContext({
  extensions: {
    plugin1: plugin1.extension,
    plugin2: plugin2.extension
  }
})
```

### Key Testing Principles [​](https://gunshi.dev/guide/plugin/testing#key-testing-principles)
  1. Test behavior, not implementation: Focus on what the plugin does, not how
  2. Use createCommandContext: Provides complete type-safe context for testing
  3. Test edge cases: Invalid config, missing dependencies, async failures
  4. Isolate tests: Each test should be independent and deterministic
  5. Mock external dependencies: File system, network calls, timers
  6. Test lifecycle hooks: setup, onExtension, decorators
  7. Verify integration: Test plugins working together in real CLI


### Common Testing Scenarios [​](https://gunshi.dev/guide/plugin/testing#common-testing-scenarios)
  * Plugin initialization with various configurations
  * Extension method behavior with different context states
  * Async operations and error handling
  * Dependency resolution and fallback behavior
  * Decorator application and pass-through
  * Global option and command registration
  * Multi-plugin interactions and discovery


### Type-Safe Testing [​](https://gunshi.dev/guide/plugin/testing#type-safe-testing)
The following example demonstrates creating a fully type-safe plugin with compile-time dependency checking:
ts```
import { plugin } from 'gunshi/plugin'
import type { LoggerExtension } from './plugins/logger.ts'
import type { MyExtension } from './types.ts'

const typedPlugin = plugin<{ logger: LoggerExtension }, 'my-plugin', ['logger'], MyExtension>({
  id: 'my-plugin',
  dependencies: ['logger'],
  extension: (ctx, cmd) => ({
    doSomething: () => {
      ctx.extensions.logger.debug('Working')
      return 'done'
    }
  })
})
```

This ensures compile-time type safety for dependencies and extensions.
TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/plugins/testing).
## Next Steps [​](https://gunshi.dev/guide/plugin/testing#next-steps)
Now that you've mastered testing strategies for Gunshi plugins—from unit testing individual components to integration testing with real CLI contexts—you're ready to apply professional development practices.
The next chapter, [Plugin Development Guidelines](https://gunshi.dev/guide/plugin/guidelines), provides comprehensive guidelines for building production-ready plugins, including performance optimization, error handling strategies, and documentation standards that will help you create robust and maintainable plugins for the Gunshi ecosystem.
Last updated: 21.02.26, 15:06
Pager
[Previous pagePlugin Type System](https://gunshi.dev/guide/plugin/type-system)
[Next pagePlugin Development Guidelines](https://gunshi.dev/guide/plugin/guidelines)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
