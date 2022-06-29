# cucumber-json-formatter

This module is wrapper around [json-formatter](https://github.com/cucumber/json-formatter). This module includes latest binary of `cucumber/json-formatter(v19.0.0)` for linux, mac and windows system.

## Installation

```bash
npm install -g @deepakvishwakarma/cucumber-json-formatter
```

## How to use

This module works same as _cucumber/json-formatter_. You can install module globally. The node.js script will detect the current platform and execute corresponding binary to generate output.

```bash
cat test/cucumber-messages.ndjson | cucumber-json-formatter > cucumber-report.json
```

## Others uses

This module can also used as dependency. You can use the absolute path for `main.js` in config.

**Example**

- [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)

```json
{
  "cypress-cucumber-preprocessor": {
    "json": {
      "enabled": true,
      "output": "reports.json",
      "formatter": "./node_modules/@deepakvishwakarma/cucumber-json-formatter/lib/main.js"
    }
  }
}
```

- Install globally

```json
{
  "cypress-cucumber-preprocessor": {
    "json": {
      "enabled": true,
      "output": "reports.json",
      "formatter": "cucumber-json-formatter"
    }
  }
}
```
