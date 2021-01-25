# Usage

1. Install the library as a dev dependency alongside required dependencies using
```shell
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

2. Setup the minimal required configuration as displayed below

## Minimal Required Configuration
```JSON
{
    "extends": [
        "@rimac-automobili/eslint-config/core"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json" 
    }
}
```

#### NOTE
`project` path under `parserOptions` should point to the location of your `tsconfig.json` file

## Optional Rulesets

### React
```JSON
"@rimac-automobili/eslint-config/react"
```

### Using option rulsets
Add it to the `extends` array in the eslint config file like so
```json
{
  "extends": [
    "@rimac-automobili/eslint-config/core",
    "@rimac-automobili/eslint-config/<optional-ruleset-name>"
  ]
}
```

## Overriding or Adding Custom Rules
Rules can be overridden by adding them to the `rules` section in eslint config like so

```json
{
  "rules": {
    "@typescript-eslint/ban-types": "off"
  }
}
```
