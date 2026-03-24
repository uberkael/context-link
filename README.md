# Context Link (VSCode Extension)

[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/UberKaeL.context-link?label=VS%20Code%20Marketplace)](https://marketplace.visualstudio.com/items?itemName=UberKaeL.context-link)

![Context Link Icon](icon.png)

Simple VSCode extension to:

Copy to the clipboard **file paths with line references** to use as context with AI assistants like **Claude**,  **OpenCode** etc.

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

| Format       | No Selection | Single Line      | Line Range          |
| ------------ | ------------ | ---------------- | ------------------- |
| **Claude**   | `@path/file` | `@path/file#L10` | `@path/file#L10-20` |
| **OpenCode** | `@path/file` | `path/file:10`   | `path/file:10-20`   |

## Extension Settings

| Setting                        | Default   | Values                 | Description                                           |
|------------------------------- | --------- | ---------------------  | ----------------------------------------------------- |
| `contextLink.format`           | `claude`  | `claude`, `opencode`   | Output format for the context link (not synchronized) |
| `contextLink.showNotification` | `false`   | `true`, `false`        | Show a notification when copied                       |
| `contextLink.pathType`         | `absolute`| `relative`, `absolute` | Path type for the context link                        |

> **Note:** The `format` setting is machine-specific and will not be synchronized across devices when using VS Code Settings Sync.

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
