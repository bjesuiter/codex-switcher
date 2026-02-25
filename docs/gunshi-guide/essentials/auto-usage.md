[Skip to content](https://gunshi.dev/guide/essentials/auto-usage#VPContent)
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
  * [How Auto Usage Works](https://gunshi.dev/guide/essentials/auto-usage#how-auto-usage-works "How Auto Usage Works")
  * [Understanding Bracket Notation](https://gunshi.dev/guide/essentials/auto-usage#understanding-bracket-notation "Understanding Bracket Notation")
  * [Generated Help Output](https://gunshi.dev/guide/essentials/auto-usage#generated-help-output "Generated Help Output")
  * [Customizing Help Output](https://gunshi.dev/guide/essentials/auto-usage#customizing-help-output "Customizing Help Output")
  * [Sub-command Help Generation](https://gunshi.dev/guide/essentials/auto-usage#sub-command-help-generation "Sub-command Help Generation")
  * [Automatic Features](https://gunshi.dev/guide/essentials/auto-usage#automatic-features "Automatic Features")
  * [Key Points](https://gunshi.dev/guide/essentials/auto-usage#key-points "Key Points")
  * [Next Steps](https://gunshi.dev/guide/essentials/auto-usage#next-steps "Next Steps")


Are you an LLM? You can read better optimized documentation at /guide/essentials/auto-usage.md for this page in Markdown format
# Auto Usage Generation [​](https://gunshi.dev/guide/essentials/auto-usage#auto-usage-generation)
Gunshi automatically generates comprehensive usage information for your commands, ensuring your CLI is self-documenting and user-friendly without additional effort.
## How Auto Usage Works [​](https://gunshi.dev/guide/essentials/auto-usage#how-auto-usage-works)
When you define a command with Gunshi, the library automatically:
  * Adds `--help` and `-h` flags to every command
  * Adds `--version` and `-v` flags when you provide a version in the CLI options
  * Generates formatted usage text based on your command configuration
  * Displays usage information when users request help or provide invalid arguments
  * Includes descriptions, examples, and type information you provide


The generated usage follows standard CLI conventions, making your application immediately familiar to users.
## Understanding Bracket Notation [​](https://gunshi.dev/guide/essentials/auto-usage#understanding-bracket-notation)
Gunshi uses consistent bracket notation throughout the generated usage to indicate whether elements are required or optional:
### Angle Brackets `<>` - Required Elements [​](https://gunshi.dev/guide/essentials/auto-usage#angle-brackets-required-elements)
Angle brackets indicate required elements or parameters without default values:
  * `<OPTIONS>` - The command has required options (at least one option without a default value)
  * `<name>` - An option parameter that must be provided (no default value)
  * `<positional>` - A required positional argument


Example:
sh```
USAGE:
  app <OPTIONS>

OPTIONS:
  -n, --name <name>    Name to use (required)
```

### Square Brackets `[]` - Optional Elements [​](https://gunshi.dev/guide/essentials/auto-usage#square-brackets-optional-elements)
Square brackets indicate optional elements or parameters with default values:
  * `[name]` - An option parameter with a default value
  * `[COMMANDS]` - Sub-command selection (when multiple commands exist)
  * `[commandName]` - A default command that runs when no sub-command is specified


Example:
sh```
USAGE:
  app [COMMANDS]

COMMANDS:
  [manage]    Default command for managing resources

OPTIONS:
  -t, --type [type]    Resource type (default: standard)
```

This notation provides immediate visual feedback about what users must provide versus what they can omit, making your CLI more intuitive to use.
TIP
Auto-usage generation is powered by the `@gunshi/plugin-renderer` plugin, which is automatically included when you use the standard `cli()` function. This plugin handles all help text rendering and formatting.
## Generated Help Output [​](https://gunshi.dev/guide/essentials/auto-usage#generated-help-output)
Gunshi transforms your command definitions into professional help documentation.
Here's what users see when they request help.
### Basic Command Help [​](https://gunshi.dev/guide/essentials/auto-usage#basic-command-help)
For a simple command with basic configuration (see [Getting Started](https://gunshi.dev/guide/essentials/getting-started) for implementation details), running with `--help` displays:
sh```
A greeting CLI (greet-cli v1.0.0)

USAGE:
  greet-cli <OPTIONS>

OPTIONS:
  -h, --help                 Display this help message
  -v, --version              Display this version
  -n, --name <name>          Name to greet
  -u, --uppercase            Convert greeting to uppercase
```

NOTE
The `--help` flag is automatically added - you never need to define it manually.
### Help with Arguments and Examples [​](https://gunshi.dev/guide/essentials/auto-usage#help-with-arguments-and-examples)
When your command includes argument definitions and examples (see [Declarative Configuration](https://gunshi.dev/guide/essentials/declarative) for how to define these), the generated help becomes more comprehensive:
sh```
app (app v1.0.0)

USAGE:
  app <OPTIONS>

OPTIONS:
  -p, --path <path>                    File or directory path to operate on
  -r, --recursive                      Operate recursively on directories
  --no-recursive                       Negatable of -r, --recursive
  -o, --operation <operation>          Operation to perform: list, copy, move, or delete
  -h, --help                           Display this help message
  -v, --version                        Display this version

EXAMPLES:
  # List files in current directory
  $ app --operation list

  # Copy files recursively
  $ app --operation copy --path ./source --recursive

  # Delete files
  $ app --operation delete --path ./temp
```

IMPORTANT
Boolean options automatically receive a negatable version with the `--no-` prefix. This allows users to explicitly disable boolean flags.
## Customizing Help Output [​](https://gunshi.dev/guide/essentials/auto-usage#customizing-help-output)
### Displaying Option Types [​](https://gunshi.dev/guide/essentials/auto-usage#displaying-option-types)
Enable type display in the usage output to help users understand what value each option expects:
js```
await cli(process.argv.slice(2), command, {
  name: 'app',
  version: '1.0.0',
  usageOptionType: true // Enable type display
})
```

This adds type information to each option:
sh```
OPTIONS:
  -p, --path <path>              [string]   File or directory path to operate on
  -r, --recursive                [boolean]  Operate recursively on directories
  --no-recursive                 [boolean]  Negatable of -r, --recursive
  -o, --operation <operation>    [string]   Operation to perform: list, copy, move, or delete
  -h, --help                     [boolean]  Display this help message
  -v, --version                  [boolean]  Display this version
```

## Sub-command Help Generation [​](https://gunshi.dev/guide/essentials/auto-usage#sub-command-help-generation)
For CLIs with sub-commands (see [Composable Sub-commands](https://gunshi.dev/guide/essentials/composable) for implementation), Gunshi generates hierarchical help documentation.
### Main Command Help [​](https://gunshi.dev/guide/essentials/auto-usage#main-command-help)
When users run the main command with `--help`:
sh```
resource-manager (resource-manager v1.0.0)

USAGE:
  resource-manager [COMMANDS] <OPTIONS>

COMMANDS:
  [manage] <OPTIONS>       Manage resources
  create <OPTIONS>         Create a new resource
  list <OPTIONS>           List all resources

For more info, run any command with the `--help` flag:
  resource-manager --help
  resource-manager create --help
  resource-manager list --help

OPTIONS:
  -h, --help             Display this help message
  -v, --version          Display this version
```

NOTE
The brackets in `[manage]` indicate it's the default command that runs when no sub-command is specified.
### Sub-command Specific Help [​](https://gunshi.dev/guide/essentials/auto-usage#sub-command-specific-help)
Each sub-command has its own help, accessible via `command --help`. The below `create --help`:
sh```
resource-manager (resource-manager v1.0.0)

Create a new resource

USAGE:
  resource-manager create <OPTIONS>

OPTIONS:
  -h, --help                 Display this help message
  -v, --version              Display this version
  -n, --name <name>          Name of the resource
  -t, --type [type]          Type of resource (default: default)
```

### Positional Arguments Display [​](https://gunshi.dev/guide/essentials/auto-usage#positional-arguments-display)
When commands accept positional arguments (arguments without flags), they appear in the `ARGUMENTS` line:
sh```
resource-manager (resource-manager v1.0.0)

Manage resources

USAGE:
  resource-manager manage <OPTIONS> <resource>

ARGUMENTS:
  resource           Type of resource to manage (e.g., user, project)

OPTIONS:
  -h, --help             Display this help message
  -v, --version          Display this version
```

Positional arguments are displayed with clear, descriptive names that indicate their purpose. Currently, all positional arguments are shown as required using angle brackets (e.g., `<resource>`).
## Automatic Features [​](https://gunshi.dev/guide/essentials/auto-usage#automatic-features)
Gunshi provides several automatic features without requiring any configuration:
### Help Flag (`--help`, `-h`) [​](https://gunshi.dev/guide/essentials/auto-usage#help-flag-help-h)
  * Automatically added to all commands
  * Displays usage information and exits
  * Works at every command level (main and sub-commands)


### Version Flag (`--version`, `-v`) [​](https://gunshi.dev/guide/essentials/auto-usage#version-flag-version-v)
  * Automatically added when you provide a `version` in CLI options
  * Displays the version and exits
  * Available at all command levels


### Negatable Boolean Options [​](https://gunshi.dev/guide/essentials/auto-usage#negatable-boolean-options)
  * Boolean options automatically get `--no-` prefixed versions
  * Allows explicit disabling of boolean flags
  * Example: `--recursive` automatically creates `--no-recursive`


### Invalid Argument Handling [​](https://gunshi.dev/guide/essentials/auto-usage#invalid-argument-handling)
  * Usage is automatically displayed when users provide invalid arguments
  * Helps users understand what went wrong
  * Provides immediate guidance for correct usage


## Key Points [​](https://gunshi.dev/guide/essentials/auto-usage#key-points)
When working with auto-generated usage:
  * The `--help` flag is automatically added to all commands - you don't need to define it
  * Usage is displayed when users provide invalid arguments or explicitly request help
  * Descriptions in your `args` configuration become the help text for each option
  * The `examples` field accepts both single strings and multi-line strings for multiple examples
  * Sub-command help is accessible both from the main help and individually via `command --help`
  * Required options are shown with angle brackets `<option>` in the USAGE line
  * Boolean options automatically get negatable versions (`--no-` prefix) when not required
  * The `usageOptionType` CLI option adds type annotations to help output


## Next Steps [​](https://gunshi.dev/guide/essentials/auto-usage#next-steps)
Learn about the [Plugin System](https://gunshi.dev/guide/essentials/plugin-system) to extend functionality.
Last updated: 21.02.26, 15:06
Pager
[Previous pageLazy & Async](https://gunshi.dev/guide/essentials/lazy-async)
[Next pagePlugin System](https://gunshi.dev/guide/essentials/plugin-system)
Released under the MIT License.
Copyright © 2025 kazuya kawaguchi.
