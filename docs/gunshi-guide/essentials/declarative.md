[Skip to content](https://gunshi.dev/guide/essentials/declarative#VPContent)
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
  * [Basic Declarative Structure](https://gunshi.dev/guide/essentials/declarative#basic-declarative-structure "Basic Declarative Structure")
  * [Complete Example](https://gunshi.dev/guide/essentials/declarative#complete-example "Complete Example")
  * [Command Configuration Options](https://gunshi.dev/guide/essentials/declarative#command-configuration-options "Command Configuration Options")
  * [CLI Configuration](https://gunshi.dev/guide/essentials/declarative#cli-configuration "CLI Configuration")
  * [Benefits of Declarative Configuration](https://gunshi.dev/guide/essentials/declarative#benefits-of-declarative-configuration "Benefits of Declarative Configuration")
  * [Next Steps](https://gunshi.dev/guide/essentials/declarative#next-steps "Next Steps")


Are you an LLM? You can read better optimized documentation at /guide/essentials/declarative.md for this page in Markdown format
# Declarative Configuration [​](https://gunshi.dev/guide/essentials/declarative#declarative-configuration)
Gunshi allows you to configure your commands declaratively, making your CLI code more organized and maintainable.
This approach separates the command definition from its execution logic.
## Basic Declarative Structure [​](https://gunshi.dev/guide/essentials/declarative#basic-declarative-structure)
If you've followed the Getting Started guide, you've seen how simple it is to create a basic CLI with Gunshi.
In that guide, we created a simple greeting command. As your CLI grows with more options, validation rules, and features, declarative configuration becomes essential for managing this complexity effectively.
A declaratively configured command in Gunshi follows this structure:
js```
import { define } from 'gunshi'

const command = define({
  // Command metadata
  name: 'command-name',
  description: 'Command description',

  // Command arguments
  args: {
    // Argument definitions
  },

  // Command examples
  examples: 'Example usage',

  // Command execution function
  run: ctx => {
    // Command implementation
  }
})
```

Let's see how this structure works in practice with a complete example.
## Complete Example [​](https://gunshi.dev/guide/essentials/declarative#complete-example)
Let's start with a simple example that demonstrates the declarative approach.
We'll build a greeting command with a few basic options:
cli.js
js```
import { cli, define } from 'gunshi'

// Define a command with declarative configuration
const command = define({
  // Command metadata
  name: 'greet',
  description: 'A greeting command with declarative configuration',

  // Command arguments with descriptions
  args: {
    name: {
      type: 'string',
      short: 'n',
      description: 'Name to greet',
      default: 'World'
    },
    greeting: {
      type: 'string',
      short: 'g',
      default: 'Hello',
      description: 'Greeting to use'
    },
    uppercase: {
      type: 'boolean',
      short: 'u',
      description: 'Display greeting in uppercase'
    }
  },

  // Command examples
  examples: `
# Basic usage with default values
$ node cli.js

# Specify a name
$ node cli.js --name Alice

# Use custom greeting and name
$ node cli.js -n Bob -g "Good morning"

# Display in uppercase
$ node cli.js --name Charlie --uppercase
`,

  // Command execution function
  run: ctx => {
    const { name, greeting, uppercase } = ctx.values

    let message = `${greeting}, ${name}!`

    if (uppercase) {
      message = message.toUpperCase()
    }

    console.log(message)
  }
})

// Run the command with the declarative configuration
await cli(process.argv.slice(2), command, {
  name: 'greet-cli',
  version: '1.0.0',
  description: 'A simple greeting CLI'
})
```

TIP
The example fully code is [here](https://github.com/kazupon/gunshi/tree/main/playground/essentials/declarative).
This example demonstrates the key components of declarative configuration:
  * **Command metadata** (`name`, `description`) identifies your command
  * **Arguments definition** (`args`) specifies what options the command accepts
  * **Examples** show users how to use the command
  * **Run function** contains the command's execution logic


When you run this command with `--help`, Gunshi automatically generates comprehensive help text from your declarative configuration.
## Command Configuration Options [​](https://gunshi.dev/guide/essentials/declarative#command-configuration-options)
### Command Metadata [​](https://gunshi.dev/guide/essentials/declarative#command-metadata)
  * `name`: The name of the command
  * `description`: A description of what the command does


### Additional Command Properties [​](https://gunshi.dev/guide/essentials/declarative#additional-command-properties)
Since v0.27.0, commands support additional configuration properties:
  * `internal`: Boolean flag to mark commands as internal (default: `false`). Internal commands are hidden from help usage but remain fully functional. This is useful for debug commands, administrative functions, or implementation details that shouldn't be exposed to end users.
  * `entry`: Boolean flag that marks the main command when subcommands exist (default: `undefined`). This property is typically set automatically by the framework. When used with the `fallbackToEntry` CLI option, it enables fallback behavior for unmatched subcommands.
  * `rendering`: Object to customize how the command displays help, usage, and error messages. This allows fine-grained control over command-level rendering output.
TIP
For detailed information about customizing rendering output including headers, usage text, and validation errors, see the [Rendering Customization guide](https://gunshi.dev/guide/advanced/custom-rendering).


### Command Options [​](https://gunshi.dev/guide/essentials/declarative#command-options)
Each option can have the following properties:
  * `type`: The data type ('string', 'number', 'boolean', 'positional', 'custom'[, 'enum' if supported])


  * `short`: A single-character alias for the option (e.g., `-n` as a shorthand for `--name`), making commands quicker to type for frequent use. 
Multiple boolean short option flags can be grouped together.
(e.g., `-Vb` is equivalent to `-V -b`). Options requiring values (like `string`, `number`, `enum`) cannot be part of a group.
  * `description`: A description of what the option does
  * `default`: Default value if the option is not provided
  * `required`: Set to `true` if the option is required (Note: Positional arguments defined with `type: 'positional'` without `multiple: true` are implicitly required by the parser).
  * `multiple`: Set to `true` if multiple option values are allowed
  * `toKebab`: Set to `true` to convert camelCase argument names to kebab-case in help text and command-line usage
  * `parse`: A function to parse and validate the argument value. Required when `type` is 'custom'
  * `conflicts`: Specify mutually exclusive options that cannot be used together


NOTE
For a more type-safe and composable way to define arguments, see [Parser Combinators](https://gunshi.dev/guide/experimentals/parser-combinators). Note that this feature is currently **experimental**.
#### Positional Arguments [​](https://gunshi.dev/guide/essentials/declarative#positional-arguments)
To define arguments that are identified by their position rather than a name/flag (like `--name`), set their `type` to `'positional'`.
The _key_ you use for the argument in the `args` object serves as its name for accessing the value later.
Here's how you define positional arguments in your command configuration:
js```
import { define } from 'gunshi'

const command = define({
  args: {
    // ... other options

    // 'source' is the key and the name used to access the value
    source: {
      type: 'positional',
      description: 'The source file path'
    },

    // 'destination' is the key and the name used to access the value
    destination: {
      type: 'positional',
      description: 'The destination file path'
    }
    // ... potentially more positional arguments
  }
})
```

  * **Implicitly Required** : Unlike named options which can be optional, positional arguments must always be provided by the user. When you define an argument with `type: 'positional'` in the schema, Gunshi expects it to be present on the command line. If it's missing, a validation error will occur. They cannot be truly optional like named flags.
  * **Order Matters** : Positional arguments are matched based on the order they appear on the command line and the order they are defined in the `args` object.
  * **Accessing Values** : The resolved value is accessible via `ctx.values`, using the _key_ you defined in the `args` object (e.g., `ctx.values.source`, `ctx.values.destination`).
  * **`ctx.positionals`**: This array still exists and contains the raw string values of positional arguments in the order they were parsed (e.g.,`ctx.positionals[0]` , `ctx.positionals[1]`). While available, using `ctx.values.<key>` is generally preferred for clarity and consistency.
  * **Descriptions** : The `description` property is used for generating help/usage messages.
  * **Type Conversion** : `args-tokens` resolves positional arguments as strings. You typically need to perform type conversions or further validation on the values accessed via `ctx.values.<key>` within your `run` function based on your application's needs.


#### Custom Type Arguments [​](https://gunshi.dev/guide/essentials/declarative#custom-type-arguments)
While the built-in types (`string`, `number`, `boolean`, `positional`) cover most use cases, you may need more complex parsing logic for certain arguments.
Gunshi supports custom argument types with user-defined parsing functions, allowing you to parse structured input like JSON, validate ranges, or integrate with validation libraries like `zod`.
To define a custom argument type:
js```
import { define } from 'gunshi'
import { z } from 'zod'

// custom schema with `zod`
const config = z.object({
  debug: z.boolean(),
  mode: z.string()
})

const command = define({
  name: 'example',
  description: 'Example command with custom argument types',
  args: {
    // CSV parser example
    tags: {
      type: 'custom',
      short: 't',
      description: 'Comma-separated list of tags',
      parse: value => value.split(',').map(tag => tag.trim())
    },

    // JSON parser example with `zod`
    config: {
      type: 'custom',
      short: 'c',
      description: 'JSON configuration',
      parse: value => {
        return config.parse(JSON.parse(value))
      }
    },

    // Custom validation example
    port: {
      type: 'custom',
      short: 'p',
      description: 'Port number (1024-65535)',
      parse: value => {
        const port = Number(value)
        if (Number.isNaN(port) || port < 1024 || port > 65_535) {
          throw new TypeError(`Invalid port: ${value}. Must be a number between 1024 and 65535`)
        }
        return port
      }
    }
  },
  run: ctx => {
    // Access the parsed values
    console.log('Tags:', ctx.values.tags) // Array of strings
    console.log('Config:', ctx.values.config) // Parsed JSON object
    console.log('Port:', ctx.values.port) // Validated port number
  }
})
```

Custom type arguments support:
  * **Type safety** : The return type of the `parse` function is properly inferred in TypeScript
  * **Validation** : Throw an error from the `parse` function to indicate invalid input
  * **Default values** : Set a `default` property to provide a value when the argument is not specified
  * **Multiple values** : Set `multiple: true` to allow multiple instances of the argument
  * **Short aliases** : Set a `short` property to provide a single-character alias


#### Kebab-Case Argument Names [​](https://gunshi.dev/guide/essentials/declarative#kebab-case-argument-names)
TIP
This feature is particularly useful for users migrating from the [`cac` library](https://github.com/cacjs/cac), which automatically converts camelCase argument names to kebab-case. If you're transitioning from `cac` to Gunshi, enabling the `toKebab` option will help maintain the same command-line interface for your users.
By default, argument names are displayed in the help text and used on the command line exactly as they are defined in the `args` object.
However, it's common practice in CLI applications to use kebab-case for multi-word argument names (e.g., `--user-name` instead of `--userName`).
Gunshi supports automatic conversion of camelCase argument names to kebab-case with the `toKebab` property, which can be set at two levels:
  1. **Command level** : Apply to all arguments in the command
To apply kebab-case conversion to all arguments in a command, set the `toKebab` property at the command level:
js```
import { define } from 'gunshi'

const command = define({
  name: 'example',
  description: 'Example command',
  toKebab: true, // Apply to all arguments
  args: {
    userName: { type: 'string' }, // Will be displayed as --user-name
    maxRetries: { type: 'number' } // Will be displayed as --max-retries
  },
  run: ctx => {
    /* ... */
  }
})
```

  2. **Argument level** : Apply to specific arguments only
Alternatively, you can apply kebab-case conversion to specific arguments only by setting it at the argument level:
js```
import { define } from 'gunshi'

const command = define({
  name: 'example',
  description: 'Example command',
  args: {
    userName: {
      type: 'string',
      toKebab: true // Will be displayed as --user-name
    },
    maxRetries: { type: 'number' } // Will remain as --maxRetries
  },
  run: ctx => {
    /* ... */
  }
})
```



When `toKebab` is enabled:
  * Argument names are converted from camelCase to kebab-case in help text and usage information
  * Parameter placeholders are also displayed in kebab-case (e.g., `--user-name <user-name>`)
  * Negatable boolean options use kebab-case (e.g., `--no-auto-save` for `autoSave: { type: 'boolean', negatable: true, toKebab: true }`)


NOTE
The argument values are still accessed using the original camelCase keys in your code (e.g., `ctx.values.userName`), regardless of how they appear on the command line.
#### Negatable Boolean Options [​](https://gunshi.dev/guide/essentials/declarative#negatable-boolean-options)
Sometimes you need to explicitly disable a boolean option that might be enabled by default or through configuration files.
Negatable options solve this by providing both positive and negative forms of the same option.
To enable this (e.g., allowing both `--verbose` and `--no-verbose`), add the `negatable: true` property to the option's definition.
  * If you define an option like `verbose: { type: 'boolean', negatable: true }`, Gunshi will recognize both `--verbose` and `--no-verbose`.
  * If `-V` or `--verbose` is passed, the value will be `true`.
  * If `--no-verbose` is passed, the value will be `false`.
  * If neither is passed, the value will be `undefined` (unless a `default` is specified).


Without `negatable: true`, only the positive form (e.g., `--verbose`) is recognized, and passing it sets the value to `true`.
The description for the negatable option (e.g., `--no-verbose`) is automatically generated (e.g., "Negatable of --verbose"). You can customize this message using [internationalization resource files](https://gunshi.dev/guide/advanced/internationalization) by providing a translation for the specific `arg:no-<optionName>` key (e.g., `arg:no-verbose`).
#### Conflicting Options [​](https://gunshi.dev/guide/essentials/declarative#conflicting-options)
You can define mutually exclusive options using the `conflicts` property.
This ensures that conflicting options cannot be used together:
js```
import { define } from 'gunshi'

const command = define({
  name: 'server',
  description: 'Server configuration',
  args: {
    // These options are mutually exclusive
    verbose: {
      type: 'boolean',
      short: 'v',
      description: 'Enable verbose output',
      conflicts: 'quiet' // Cannot be used with --quiet
    },
    quiet: {
      type: 'boolean',
      short: 'q',
      description: 'Suppress all output',
      conflicts: 'verbose' // Cannot be used with --verbose
    },

    // Multiple conflicts
    development: {
      type: 'boolean',
      description: 'Development mode',
      conflicts: ['production', 'staging'] // Cannot be used with either
    },
    production: {
      type: 'boolean',
      description: 'Production mode',
      conflicts: ['development', 'staging']
    },
    staging: {
      type: 'boolean',
      description: 'Staging mode',
      conflicts: ['development', 'production']
    }
  },
  run: ctx => {
    // Only one of the conflicting options can be true
    if (ctx.values.verbose) {
      console.log('Verbose mode enabled')
    } else if (ctx.values.quiet) {
      // Minimal output
    }
  }
})
```

When conflicting options are used together, Gunshi will throw an error:
  * Bidirectional conflict detection works with both long and short option forms
  * Clear error messages indicate which options are conflicting
  * Helps prevent invalid command configurations


### Examples [​](https://gunshi.dev/guide/essentials/declarative#examples)
The `examples` property provides example commands showing how to use the CLI.
This helps users understand how to use your command correctly and is displayed in the help output.
#### Basic Examples [​](https://gunshi.dev/guide/essentials/declarative#basic-examples)
You can provide examples as a simple string:
js```
import { define } from 'gunshi'

const command = define({
  name: 'copy',
  description: 'Copy files',
  args: {
    source: {
      type: 'positional',
      description: 'Source file'
    },
    destination: {
      type: 'positional',
      description: 'Destination file'
    },
    recursive: {
      type: 'boolean',
      short: 'r',
      description: 'Copy recursively'
    }
  },
  examples: 'copy file1.txt file2.txt',
  run: ctx => {
    // Implementation
  }
})
```

#### Multiple Examples [​](https://gunshi.dev/guide/essentials/declarative#multiple-examples)
For multiple examples, use a multi-line string with clear formatting:
js```
import { define } from 'gunshi'

const command = define({
  name: 'deploy',
  description: 'Deploy application',
  args: {
    environment: {
      type: 'string',
      short: 'e',
      required: true,
      description: 'Target environment'
    },
    tag: {
      type: 'string',
      short: 't',
      description: 'Version tag'
    },
    dryRun: {
      type: 'boolean',
      description: 'Perform a dry run'
    }
  },
  examples: `
# Deploy to production with a specific tag
deploy --environment production --tag v1.2.3

# Deploy to staging with dry run
deploy -e staging --dry-run

# Deploy to development (using short option)
deploy -e development

# Deploy with multiple options
deploy --environment production --tag latest --dry-run
  `.trim(),
  run: ctx => {
    // Implementation
  }
})
```

#### Dynamic Examples [​](https://gunshi.dev/guide/essentials/declarative#dynamic-examples)
You can also provide examples as a function that returns a string.
This is useful when examples need to be generated dynamically or localized:
js```
import { define } from 'gunshi'

const command = define({
  name: 'serve',
  description: 'Start development server',
  args: {
    port: {
      type: 'number',
      short: 'p',
      default: 3000,
      description: 'Port number'
    },
    host: {
      type: 'string',
      short: 'h',
      default: 'localhost',
      description: 'Host address'
    }
  },
  examples: ctx => {
    // Generate examples dynamically based on context
    const appName = ctx.name || 'serve'
    return `
# Start server with default settings
${appName}

# Start server on custom port
${appName} --port 8080

# Start server on all interfaces
${appName} --host 0.0.0.0 --port 3000

# Using short options
${appName} -h 192.168.1.100 -p 8080
    `.trim()
  },
  run: ctx => {
    console.log(`Server starting on ${ctx.values.host}:${ctx.values.port}`)
  }
})
```

#### Formatted Examples with Descriptions [​](https://gunshi.dev/guide/essentials/declarative#formatted-examples-with-descriptions)
For better readability, you can include descriptions with your examples:
js```
import { define } from 'gunshi'

const command = define({
  name: 'git-flow',
  description: 'Git flow commands',
  args: {
    feature: {
      type: 'string',
      description: 'Feature name'
    },
    hotfix: {
      type: 'string',
      description: 'Hotfix name'
    },
    release: {
      type: 'string',
      description: 'Release version'
    }
  },
  examples: `
Examples:
  # Start a new feature
  $ git-flow --feature user-authentication

  # Create a hotfix for production
  $ git-flow --hotfix critical-bug-fix

  # Prepare a new release
  $ git-flow --release 2.0.0

Notes:
  - Feature branches are created from develop
  - Hotfixes are created from master
  - Releases merge into both master and develop
  `.trim(),
  run: ctx => {
    // Implementation
  }
})
```

#### Async Examples [​](https://gunshi.dev/guide/essentials/declarative#async-examples)
For complex CLIs that need to load examples from external files or generate them based on runtime conditions, you can use async functions.
When using the function form, you can return a Promise for async example generation:
js```
import { define } from 'gunshi'

const command = define({
  name: 'config',
  description: 'Manage configuration',
  args: {
    set: {
      type: 'string',
      description: 'Set configuration value'
    },
    get: {
      type: 'string',
      description: 'Get configuration value'
    }
  },
  examples: async ctx => {
    // Could load examples from external source
    const examples = await loadExamplesFromFile('config-examples.txt')
    return (
      examples ||
      `
# Set a configuration value
config --set "api.key=abc123"

# Get a configuration value
config --get "api.key"
    `.trim()
    )
  },
  run: ctx => {
    // Implementation
  }
})
```

The examples are displayed when users run the command with `--help` flag, making it easier for them to understand the correct usage.
### Command Execution [​](https://gunshi.dev/guide/essentials/declarative#command-execution)
The `run` function receives a command context object (`ctx`) with:
  * `args`: The command arguments configuration (`ArgSchema` object).
  * `values`: An object containing the parsed and validated values for both named options (e.g., `ctx.values.name`) and positional arguments (accessed via their _key_ from the `args` definition, e.g., `ctx.values.file`). Values are properly typed based on their argument definitions - strings, numbers, booleans, or custom parsed types.
  * `explicit`: An object that tracks which arguments were explicitly provided by the user. Each property corresponds to an argument name and is `true` if the user explicitly provided it, `false` otherwise. This is useful for distinguishing between default values and user-provided values.
  * `positionals`: An array of strings containing the raw values of the arguments identified as positional, in the order they were parsed. Useful if you need the original order, but `ctx.values.<key>` is generally recommended.
  * `rest`: An array of strings containing arguments that appear after the `--` separator.
  * `_`: The raw argument array passed to the `cli` function (original command line arguments).
  * `tokens`: The raw tokens parsed by `args-tokens`.
  * `omitted`: A boolean indicating if the command was run without specifying a subcommand name.
  * `name`: The name of the _currently executing_ command.
  * `description`: The description of the _currently executing_ command.
  * `env`: The command environment settings (version, logger, renderers, etc.).
  * `callMode`: Command call mode ('entry', 'subCommand', or 'unexpected') indicating how the command was invoked.
  * `toKebab`: Boolean indicating whether camelCase argument names should be converted to kebab-case.
  * `log`: Function for outputting messages that respects the `usageSilent` setting.
  * `extensions`: Command context extensions for plugin functionality (available in v0.27.0+).
  * `validationError`: Contains validation errors from argument parsing if any occurred.


#### Tracking Explicitly Provided Arguments [​](https://gunshi.dev/guide/essentials/declarative#tracking-explicitly-provided-arguments)
Among the context properties, the `explicit` property deserves special attention as it allows you to determine whether an argument was explicitly provided by the user or if it's using a default value:
js```
import { define } from 'gunshi'

const command = define({
  name: 'deploy',
  args: {
    environment: {
      type: 'string',
      default: 'development'
    },
    force: {
      type: 'boolean',
      default: false
    }
  },
  run: ctx => {
    // Check if the user explicitly provided the environment
    if (ctx.explicit.environment) {
      console.log(`User specified environment: ${ctx.values.environment}`)
    } else {
      console.log(`Using default environment: ${ctx.values.environment}`)
    }

    // Useful for conditional logic based on user intent
    if (ctx.explicit.force && ctx.values.force) {
      console.log('User explicitly requested force mode')
    }
  }
})
```

This feature is particularly useful for:
  * Distinguishing between default values and user-provided values
  * Implementing different behavior based on whether a user explicitly set an option
  * Validation logic that needs to know if a value was user-provided
  * Warning users when they're using default values for critical options


## CLI Configuration [​](https://gunshi.dev/guide/essentials/declarative#cli-configuration)
When calling the `cli` function, you can provide additional configuration:
js```
await cli(process.argv.slice(2), command, {
  name: 'app-name',
  version: '1.0.0',
  description: 'Application description'
  // Additional configuration options
})
```

## Benefits of Declarative Configuration [​](https://gunshi.dev/guide/essentials/declarative#benefits-of-declarative-configuration)
Throughout this guide, you've seen how declarative configuration structures your CLI code. This approach provides several key advantages:
  1. **Separation of concerns** : As shown in our examples, command definition stays separate from implementation logic
  2. **Self-documentation** : The structure itself documents your command's capabilities, automatically generating help text
  3. **Maintainability** : Clear structure makes commands easier to understand and modify as requirements change
  4. **Consistency** : Enforces uniform patterns across all your commands, from simple to complex


## Next Steps [​](https://gunshi.dev/guide/essentials/declarative#next-steps)
Now that you understand how to configure commands declaratively, you're ready to explore how Gunshi provides full type safety for your commands.
The next section on [Type Safe](https://gunshi.dev/guide/essentials/type-safe) will show you how to leverage TypeScript's type system to catch errors at compile time and get excellent IDE support while building your CLI applications.
With declarative configuration as your foundation, adding type safety will make your CLI development even more robust and developer-friendly.
Last updated: 21.02.26, 15:06
Pager
[Previous pageGetting Started](https://gunshi.dev/guide/essentials/getting-started)
[Next pageType Safe](https://gunshi.dev/guide/essentials/type-safe)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
