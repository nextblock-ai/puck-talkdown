export const talkdownSnippets: { [key: string]: { prefix: string; body: string | string[]; description: string } } = {
    "inputDataRequirements": {
        "prefix": "input_data",
        "body": [
            "## Input Data Requirements",
            "",
            "| Data Source | Data Type | Description |",
            "| ------------ | --------- | ----------- |",
            "| _$1ExampleSource_ | _$2ExampleType_ | _Description of data required from this source_ |"
        ],
        "description": "Snippets for Input Data Requirements section"
    },
    "embeddedJavaScript": {
        "prefix": "jscode",
        "body": [
            "```javascript",
            "$1",
            "```"
        ],
        "description": "Embedded JavaScript block"
    },
    "embeddedPython": {
        "prefix": "pycode",
        "body": [
            "```python",
            "$1",
            "```"
        ],
        "description": "Embedded Python block"
    },
    "embeddedBash": {
        "prefix": "shcode",
        "body": [
            "```bash",
            "$1",
            "```"
        ],
        "description": "Embedded Bash block"
    }
};