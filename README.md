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
3. Make sure the `project` field (under `parserOptions`) is pointing to the correct path to your `tsconfig.json`

# Optional Rulesets

Add the following ruleset to your `.eslintrc.json` file under `extends` section (example below)

- `"@rimac-automobili/eslint-config/react"`
- `"@rimac-automobili/eslint-config/jest"`
- `"@rimac-automobili/eslint-config/type-graphql"`
- `"@rimac-automobili/eslint-config/next"` *Requires Next >= 11
- `"@rimac-automobili/eslint-config/testing-library"` *See usage below

### Using Optional Rulsets 

#### `General`

- The following is added to `.eslintrc.json`

```json
{
  "extends": [
    "@rimac-automobili/eslint-config/core",
    "@rimac-automobili/eslint-config/<optional-ruleset-name>"
  ]
}
```

`Testing Library`

- If you prefer more granular control of which files `eslint-plugin-testing-library` considers test files and lints 
you can modify `"files"` field.

```json
{
    "overrides": [{
        "files": ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
        "extends": ["@rimac-automobili/eslint-config/testing-library"]
    }]
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
        "@rimac-automobili/eslint-config/core"
    ],
    "rules": {
        "space-infix-ops": "off"
    }
}
```
