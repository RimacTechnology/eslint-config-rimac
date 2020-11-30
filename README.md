# Usage

1. Install `npm install -D @rimac-automobili/eslint-config` 
2. Add `extends:  "@rimac-automobili/eslint-config/core"` to your `eslint.json`
3. Set the correct `tsconfig.json` path in your `eslint.json` as shown below

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

## Optional Rulesets

### React
```JSON
"@rimac-automobili/eslint-config/react"
```
