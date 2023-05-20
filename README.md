# Puck - Talkdown - VS Code Extension

Puck - Talkdown is a Visual Studio Code extension for creating AI agents using a markdown-based language. Talkdown supports embedded JavaScript, Python, and Bash blocks to describe an agent's behavior. With a set of conditional logic, branching, and variables combined with embedded code execution, you can create Turing complete, dynamic agents using a language that closely resembles Markdown.

## Features

1. **Language Definition**: Syntax highlighting, code folding, comment toggling, and more for Talkdown keywords and constructs.
2. **Embedded Language Support**: Integrated language features for JavaScript, Python, and Bash blocks.
3. **Talkdown Validation & Linting**: Real-time validation for standard sections, and linting for best practices, unused variables, and common issues.
4. **Code Snippets**: Predefined and customizable snippets for common Talkdown constructs and sections.
5. **Debugging & Execution**: Local Language Model (LLM) integration for debugging and execution of Talkdown agents.
6. **IntelliSense & Autocomplete**: Context-aware suggestions for Talkdown keywords, variables, and sections.
7. **Documentation & Help**: Integrated language reference, tutorials, and sample agents.

## Getting Started

### Prerequisites

- Install [Visual Studio Code](https://code.visualstudio.com/)
- Install [Node.js and npm](https://nodejs.org/en/download/)

### Installation

1. Clone the repository and navigate to the project directory.

   ```bash
   git clone https://github.com/<your_username>/talkdown.git
   cd talkdown
   ```

2. Install the dependencies.

   ```bash
   npm install
   ```

3. Compile the TypeScript source code.

   ```bash
   npm run compile
   ```

4. Open the project in Visual Studio Code.

   ```bash
   code .
   ```

5. Press `F5` to launch the extension in a new Extension Development Host instance of VS Code.

## Usage

1. Create a new file with the `.td` or `.talkdown` extension.
2. Start writing your Talkdown agent using sections, constructs, and embedded code blocks.
3. Save your file to trigger validation, linting, and language support features.
4. Press `F5` to start debugging your Talkdown agent.

For detailed information on the Talkdown language, consult the [Talkdown language reference](./documentation.md) and the embedded help tooltips.

## Configuration

You can customize the Talkdown extension's features and options through the VS Code settings. Open the settings with `Ctrl+,` or `Cmd+,`, and search for "Talkdown" to view and modify the available settings.

## Contributing

We welcome contributions to improve the extension. If you have suggestions, bug reports, or feature requests, please open an issue or create a pull request.