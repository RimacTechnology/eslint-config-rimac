# Usage

1. Install the library as a dev dependency alongside required dependencies using
```shell
yarn add -D 
    @rimac-automobili/eslint-config
    @typescript-eslint/parser
    eslint 
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
Add the following ruleset to your `.eslintrc.json` file under `extends` section (example below)

- `"@rimac-automobili/eslint-config/react"`
- `"@rimac-automobili/eslint-config/jest"`
- `"@rimac-automobili/eslint-config/type-graphql"`

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
