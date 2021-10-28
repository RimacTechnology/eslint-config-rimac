module.exports = {
    "env": {
        "browser": true
    },
    "overrides": [
        {
            "files": [
                "**/*.tsx"
            ],
            "rules": {
                "react/prop-types": "off"
            }
        }
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        "react/jsx-boolean-value": [
            "error",
            "always"
        ],
        "react/jsx-closing-bracket-location": "error",
        "react/jsx-closing-tag-location": "error",
        "react/jsx-curly-brace-presence": [
            "error",
            {
                "children": "never",
                "props": "never"
            }
        ],
        "react/jsx-curly-newline": [
            "error",
            {
                "multiline": "consistent",
                "singleline": "consistent"
            }
        ],
        "react/jsx-curly-spacing": [
            "error",
            {
                "children": true,
                "when": "never"
            }
        ],
        "react/jsx-equals-spacing": "error",
        "react/jsx-first-prop-new-line": [
            "error",
            "multiline"
        ],
        "react/jsx-indent": [
            "error",
            4,
            {
                "indentLogicalExpressions": true
            }
        ],
        "react/jsx-key": "error",
        "react/jsx-max-props-per-line": "error",
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-useless-fragment": ["error", { "allowExpressions": true }],
        "react/jsx-one-expression-per-line": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-props-no-multi-spaces": "error",
        "react/jsx-sort-props": "error",
        "react/jsx-tag-spacing": [
            "error",
            {
                "afterOpening": "never",
                "beforeClosing": "never",
                "beforeSelfClosing": "always",
                "closingSlash": "never"
            }
        ],
        "react/jsx-wrap-multilines": [
            "error",
            {
                "arrow": "parens-new-line",
                "assignment": "parens-new-line",
                "condition": "parens-new-line",
                "declaration": "parens-new-line",
                "logical": "parens-new-line",
                "prop": "parens-new-line",
                "return": "parens-new-line"
            }
        ],
        "react/no-unknown-property": "error",
        "react/self-closing-comp": [
            "error",
            {
                "component": true,
                "html": true
            }
        ],
        "react/jsx-newline": [
            "error",
            {
                "prevent": true
            }
        ]
    }
}
