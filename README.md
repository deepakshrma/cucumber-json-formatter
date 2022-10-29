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

### Note:

`Paweł Kruszczyński` found strenge issue related to settings in latest node. I have not test the issue. However, If you find such issue. You can also follow the setting that `Paweł` has mentioned as below.

**Explanation:**
_Maybe I have some new version of nodejs or something, but "formatter" value is called with spawn, from child_process package, so the JS script cannot be directly invoked, but with "node" and script as args, it works flawlessly, so if you can add it to your README, maybe someone struggles with same problem._

```json
{
  "devDependencies": {
    "@badeball/cypress-cucumber-preprocessor": "^13.0.1",
    "@bahmutov/cypress-esbuild-preprocessor": "^2.1.4",
    "@deepakvishwakarma/cucumber-json-formatter": "^0.0.2",
    "cypress": "^10.10.0",
    "cypress-xpath": "^2.0.1",
    "esbuild": "^0.15.8"
  },
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true,
    "filterSpecs": true,
    "omitFiltered": true,
    "json": {
      "enabled": true,
      "output": "cypress/cucumber-json/log.json",
      "formatter": "node",
      "args": [
        "./node_modules/@deepakvishwakarma/cucumber-json-formatter/lib/main.js"
      ]
    }
  }
}
```
