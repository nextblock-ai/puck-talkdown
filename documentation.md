# Talkdown Language Documentation

Talkdown is a markdown-based language for creating AI agents of all kinds. Talkdown uses markdown along with embedded JavaScript, Python, and Bash blocks to describe the agent's behavior. Talkdown programs are composed of one or more files, with each file representing a logical process or action.

## Sections

Talkdown files have a standard set of sections:

- `# Input Data Requirements`: Specify the required input data for the program.
- `# Validation`: Validation logic for input data.
- `# Logic`: Core logic implementing the behavior of the AI agent.

You can also define custom sections using standard markdown headings (e.g., `## Custom Section`).

## Variables and Section References

- Variables: `$variableName`
- Section References: `@sectionName`

## Language Constructs

### Conditionals

Talkdown supports basic conditionals such as `if`, `else`, `elsif`, and `switch`:

```
if condition
  ...
elsif condition
  ...
else
  ...
end
```

### Loops

Talkdown supports basic loops, such as `while`, `until`, and `for`:

```
while condition
  ...
end

until condition
  ...
end

for item in items
  ...
end
```

## Embedded Code Blocks

You can use embedded JavaScript, Python, and Bash code blocks within Talkdown files:

- JavaScript:

  ```
  ```javascript
  // JavaScript code goes here
  ```

- Python:

  ```
  ```python
  # Python code goes here
  ```

- Bash:

  ```
  ```bash
  # Bash code goes here
  ```

## Commenting

Use `//` to create single-line comments in Talkdown programs:

```
// This is a comment
```

## Integration with VS Code

The Talkdown extension for Visual Studio Code offers various features such as syntax highlighting, code folding, validation, linting, IntelliSense, debugging, and code snippets.

Please refer to the Talkdown extension documentation and settings for more information on how to configure and use Talkdown with Visual Studio Code.
