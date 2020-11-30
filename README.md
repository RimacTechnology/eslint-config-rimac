# Minimal Required Config

1. Copy the config below
2. Set the correct `tsconfig.json` path

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
