# Usage

1. Install the library as a dev dependency alongside required dependencies using
```shell
yarn add -D 
    @rimac-automobili/eslint-config/core 
    eslint 
    @typescript-eslint/parser
    @typescript-eslint/eslint-plugin 
    eslint-plugin-promise
    eslint-plugin-import
```

2. Set up the minimal required configuration as displayed below

### Minimal Required Configuration
1. Create a new file in the `root` of the project called `.eslintrc.json`
2. Place the following inside
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
3. Make sure the `project` (under `parserOptions`) is pointing to the correct path to your `tsconfig.json`

# Optional Rulesets

### React
1. Install the necessary dependencies as dev dependencies
```shell
yarn add -D 
    eslint-plugin-react 
    eslint-plugin-react-hooks 
```
2. Add the following ruleset to your `.eslintrc.json` file under `extends` section (example below)
```JSON
"@rimac-automobili/eslint-config/react"
```

### Using Optional Rulsets Example
```json
{
  "extends": [
    "@rimac-automobili/eslint-config/core",
    "@rimac-automobili/eslint-config/<optional-ruleset-name>"
  ]
}
```

# Turn on ESLint in your Project

## Intellij
1. Go to `File>Settings>Languages & Frameworks>Javascript>Code Quality Tools>ESLint`
2. Select `Automatic ESLint Configuration`
3. Check `run eslint --fix on save`
4. Apply settings

# Overriding or Adding Custom Rules
Rules can be overridden by adding them to the `rules` section in `.eslintrc.json` like the following example
```json
{
    "extends": [
        "@rimac-automobili/eslint-config/core",
        "@rimac-automobili/eslint-config/react"
    ],
    ...,
    "rules": {
        "space-infix-ops": "off"
    }
}
```
