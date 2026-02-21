# Context Link

Copy file paths with line references to share code context with AI assistants like Claude and OpenCode.

## Features

- Copy file path with line references in one keystroke
- Support for both Claude and OpenCode formats
- Works with selections or entire files
- Context menu integration

## Usage

1. Open a file in VS Code
2. Select lines (optional)
3. Press `Ctrl+Alt+U` (Windows/Linux) or `Cmd+Alt+U` (macOS)
4. The context link is copied to clipboard

### Output Formats

| Format       | No Selection  | Single Line        | Line Range            |
|--------------|---------------|--------------------|-----------------------|
| **Claude**   | `@path/file`  | `@path/file#L10`   | `@path/file#L10-20`   |
| **OpenCode** | `@path/file`  | `path/file:10`     | `path/file:10-20`     |

## Extension Settings

This extension contributes the following setting:

- `contextLink.format`: Output format for the context link
  - `claude` (default): Claude format with `@` prefix and `#L` for lines
  - `opencode`: OpenCode format with `:` for line references

## Keyboard Shortcuts

| Command             | Windows/Linux | macOS        |
|---------------------|---------------|--------------|
| Copy Context Link   | `Ctrl+Alt+U`  | `Cmd+Alt+U`  |

## Context Menu

Right-click in the editor and select "Copy Context Link" from the context menu.

## Use with AI Assistants

Paste the copied link into your AI assistant to provide context:

```markdown
Check the error handling in @src/utils/parser#L45-60
```

The AI assistant will understand the file path and line references, making it easier to discuss specific code sections.

## Release Notes

### 0.0.1

Initial release:

- Copy context links with keyboard shortcut
- Support for Claude and OpenCode formats
- Context menu integration
