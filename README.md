# Eslint Config

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Conventional Changelog](https://img.shields.io/badge/changelog-conventional-brightgreen.svg)](http://conventional-changelog.github.io)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-conventionalcommits-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

## Usage

1. Install the library as a dev dependency alongside required dependencies using

```bash
yarn add -D
    @rimac-technology/eslint-config
    eslint
```

2. Set up the minimal required configuration as displayed below

## Minimal Required Configuration

1. Create a new file in the `root` of the project called `.eslintrc.json`
2. Place the following inside

```json
{
    "extends": ["@rimac-technology/eslint-config/core"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json"
    }
}
```

3. Make sure the `project` field (under `parserOptions`) is pointing to the correct path to your
   `tsconfig.json`

## Optional Rulesets

Add the following ruleset to your `.eslintrc.json` file under `extends` section (example below)

-   `"@rimac-technology/eslint-config/react"`
-   `"@rimac-technology/eslint-config/jest"`
-   `"@rimac-technology/eslint-config/type-graphql"`
-   `"@rimac-technology/eslint-config/mobx"`
-   `"@rimac-technology/eslint-config/testing-library"` \*See usage below

### Using Optional Rulesets

#### `General`

-   The following is added to `.eslintrc.json`

```json
{
    "extends": [
        "@rimac-technology/eslint-config/core",
        "@rimac-technology/eslint-config/<optional-ruleset-name>"
    ]
}
```

`Testing Library`

-   If you prefer more granular control of which files `eslint-plugin-testing-library` considers for test
    files and lints you can change `"files"` field.

```json
{
    "overrides": [
        {
            "files": ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
            "extends": ["@rimac-technology/eslint-config/testing-library"]
        }
    ]
}
```

## Turn on ESLint in your Project

### Intellij

1. Go to `File>Settings>Languages & Frameworks>Javascript>Code Quality Tools>ESLint`
2. Select `Automatic ESLint Configuration`
3. Check `run eslint --fix on save`
4. Apply settings

## Overriding or Adding Custom Rules

Rules can be overridden by adding them to the `rules` section in `.eslintrc.json` like the following example

```json
{
    "extends": ["@rimac-technology/eslint-config/core"],
    "rules": {
        "space-infix-ops": "off"
    }
}
```

## Troubleshooting

Little fellow sometimes has problems. Here is how to help if it doesn't work:

1. Delete `node_modules`
2. Go to `File>Invalidate Caches>Invalidate and Restart`
3. Reinstall dependencies

-   Check if it works from the terminal. If it does, you IDE might be the problem here.

## Testing Locally

In `package.json`, specify the path to the folder where you cloned `eslint-config` on your computer and place
it instead of the version.

Then you can use it like any other lib.

-   Default install

```json
// Current
{
    "@rimac-technology/eslint-config": "^19.0.0"
}
```

-   Local install for testing

```json
{
    "@rimac-technology/eslint-config": "../eslint-config"
}
```
