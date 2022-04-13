module.exports = {
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "env": {
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "import",
        "promise",
        "unused-imports",
        "sort-keys-fix",
        "sort-destructure-keys",
        "typescript-sort-keys",
        "unicorn",
        "sort-class-members",
        "workspaces",
        "more",
        "sonarjs",
        "etc",
        "@rimac-technology",
        "eslint-comments"
    ],
    "rules": {
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-types": "warn",
        "@typescript-eslint/brace-style": "error",
        "@typescript-eslint/comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "exports": "always",
                "functions": "only-multiline",
                "imports": "always-multiline",
                "objects": "always-multiline"
            }
        ],
        "@typescript-eslint/comma-spacing": "error",
        "@typescript-eslint/consistent-indexed-object-style": "error",
        "@typescript-eslint/consistent-type-imports": [
            "error",
            {
                "prefer": "type-imports"
            }
        ],
        "@typescript-eslint/default-param-last": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/func-call-spacing": "error",
        "@typescript-eslint/keyword-spacing": "error",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "none",
                    "requireLast": false
                },
                "singleline": {
                    "delimiter": "comma",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/method-signature-style": [
            "error",
            "method"
        ],
        "@typescript-eslint/no-meaningless-void-operator": "error",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": "error",
        "@typescript-eslint/no-duplicate-imports": "error",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-empty-interface": [
            "error",
            {
                "allowSingleExtends": true
            }
        ],
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-redeclare": "error",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-throw-literal": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "args": "after-used",
                "ignoreRestSiblings": true
            }
        ],
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-use-before-define": "warn",
        "@typescript-eslint/prefer-enum-initializers": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-includes": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-reduce-type-parameter": "warn",
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/promise-function-async": [
            "error",
            {
                "allowedPromiseNames": ["Thenable"]
            }
        ],
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ],
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/restrict-plus-operands": [
            "warn",
            {
                "checkCompoundAssignments": true
            }
        ],
        "@typescript-eslint/return-await": "error",
        "@typescript-eslint/semi": [
            "error",
            "never"
        ],
        "@typescript-eslint/space-before-function-paren": [ "error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        } ],
        "@typescript-eslint/switch-exhaustiveness-check": "warn",
        "@typescript-eslint/type-annotation-spacing": "error",
        "arrow-parens": [
            "error",
            "always"
        ],
        "arrow-spacing": [
            "error",
            {
                "after": true,
                "before": true
            }
        ],
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "brace-style": "off",
        "comma-dangle": "off",
        "comma-spacing": "off",
        "computed-property-spacing": "error",
        "default-param-last": "off",
        "eqeqeq": "error",
        "etc/no-assign-mutated-array": "error",
        "etc/no-commented-out-code": "error",
        "etc/no-const-enum": "error",
        "etc/no-implicit-any-catch": "error",
        "etc/no-internal": "error",
        "etc/no-t": "error",
        "etc/no-deprecated": "error",
        "for-direction": "error",
        "func-call-spacing": "off",
        "import/default": "error",
        "import/export": "error",
        "import/named": "error",
        "import/newline-after-import": "error",
        "import/no-deprecated": "warn",
        "import/no-duplicates": "error",
        "import/no-named-as-default": "error",
        "import/no-relative-packages": "error",
        "import/no-named-default": "error",
        "import/no-self-import": "error",
        "import/no-useless-path-segments": [
            "error",
            {
                "noUselessIndex": true
            }
        ],
        "import/order": [
            "error",
            {
                "alphabetize": {
                    "caseInsensitive": true,
                    "order": "asc"
                },
                "groups": [
                    "builtin",
                    "external",
                    "parent",
                    "sibling",
                    "index"
                ],
                "newlines-between": "always"
            }
        ],
        "indent": [
            "error",
            4
        ],
        "init-declarations": "off",
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],
        "keyword-spacing": "off",
        "key-spacing": "error",
        "max-len": [
            "error",
            {
                "code": 120,
                "ignorePattern": "^import .*",
                "ignoreComments": true
            }
        ],
        "multiline-ternary": "off",
        "newline-before-return": "error",
        "newline-per-chained-call": [
            "error",
            {
                "ignoreChainWithDepth": 2
            }
        ],
        "no-async-promise-executor": "error",
        "no-await-in-loop": "warn",
        "no-case-declarations": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-confusing-arrow": "error",
        "no-console": "error",
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "off",
        "no-empty": "error",
        "no-empty-function": "off",
        "no-empty-pattern": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-func-assign": "error",
        "no-implicit-coercion": "error",
        "no-import-assign": "error",
        "no-inner-declarations": "error",
        "no-irregular-whitespace": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxEOF": 1,
                "maxBOF": 0
            }
        ],
        "no-obj-calls": "error",
        "no-param-reassign": "error",
        "no-promise-executor-return": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": "off",
        "no-return-await": "off",
        "no-self-assign": "error",
        "no-sequences": "error",
        "no-shadow": "off",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-trailing-spaces": "error",
        "no-throw-literal": "off",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-private-class-members": "error",
        "no-unused-expressions": "off",
        "no-use-before-define": "off",
        "no-useless-catch": "error",
        "no-useless-constructor": "off",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-whitespace-before-property": "error",
        "object-curly-newline": [
            "error",
            {
                "ImportDeclaration": {
                    "minProperties": 2,
                    "multiline": true
                }
            }
        ],
        "object-shorthand": "error",
        "padded-blocks": [ "error", "never" ],
        "prefer-promise-reject-errors": "error",
        "prefer-template": "error",
        "promise/catch-or-return": "error",
        "promise/no-nesting": "error",
        "promise/no-return-wrap": "error",
        "promise/param-names": "error",
        "promise/valid-params": "error",
        "quotes": "off",
        "radix": "error",
        "require-atomic-updates": "error",
        "require-await": "off",
        "@rimac-technology/import-declaration-newline": "error",
        "no-control-regex": "error",
        "no-invalid-regexp": "error",
        "no-regex-spaces": "error",
        "no-div-regex": "error",
        "prefer-regex-literals": ["error", { "disallowRedundantWrapping": true }],
        "require-unicode-regexp": "error",
        "wrap-regex": "error",
        "rest-spread-spacing": [
            "error"
        ],
        "semi": "off",
        "sort-imports": [
            "error",
            {
                "ignoreCase": true,
                "ignoreDeclarationSort": true,
                "ignoreMemberSort": false
            }
        ],
        "sort-keys-fix/sort-keys-fix": "error",
        "sort-destructure-keys/sort-destructure-keys": "error",
        "space-in-parens": "error",
        "space-before-function-paren": "off",
        "template-curly-spacing": "error",
        "typescript-sort-keys/interface": "error",
        "typescript-sort-keys/string-enum": "error",
        "use-isnan": "error",
        "unused-imports/no-unused-imports-ts": "error",
        "unicorn/template-indent": [
            "error",
            {
                "indent": 4
            }
        ],
        "unicorn/no-useless-promise-resolve-reject": "error",
        "unicorn/no-empty-file": "error",
        "unicorn/prefer-export-from": "error",
        "unicorn/no-abusive-eslint-disable": "error",
        "unicorn/no-for-loop": "error",
        "unicorn/no-instanceof-array": "error",
        "unicorn/no-lonely-if": "error",
        "unicorn/no-nested-ternary": "error",
        "no-nested-ternary": "off",
        "unicorn/no-new-buffer": "error",
        "unicorn/no-object-as-default-parameter": "error",
        "unicorn/no-this-assignment": "error",
        "unicorn/no-unreadable-array-destructuring": "error",
        "unicorn/no-unsafe-regex": "error",
        "unicorn/no-zero-fractions": "error",
        "unicorn/no-useless-length-check": "error",
        "unicorn/no-useless-spread": "error",
        "unicorn/no-useless-fallback-in-spread": "error",
        "unicorn/no-invalid-remove-event-listener": "error",
        "unicorn/prefer-array-flat-map": "error",
        "unicorn/numeric-separators-style": "error",
        "unicorn/prefer-array-find": "error",
        "unicorn/catch-error-name": "error",
        "unicorn/consistent-destructuring": "error",
        "unicorn/custom-error-definition": "error",
        "unicorn/empty-brace-spaces": "error",
        "unicorn/error-message": "error",
        "unicorn/escape-case": "error",
        "unicorn/new-for-builtins": "error",
        "unicorn/prefer-array-some": "error",
        "unicorn/prefer-date-now": "error",
        "unicorn/prefer-default-parameters": "error",
        "unicorn/prefer-keyboard-event-key": "error",
        "unicorn/prefer-math-trunc": "error",
        "unicorn/prefer-modern-dom-apis": "error",
        "unicorn/prefer-negative-index": "error",
        "unicorn/prefer-number-properties": "error",
        "unicorn/prefer-optional-catch-binding": "error",
        "unicorn/prefer-set-has": "error",
        "unicorn/prefer-string-replace-all": "error",
        "unicorn/prefer-string-slice": "error",
        "unicorn/prefer-string-starts-ends-with": "error",
        "unicorn/prefer-string-trim-start-end": "error",
        "unicorn/prefer-type-error": "error",
        "unicorn/better-regex": "error",
        "unicorn/prevent-abbreviations": [
            "error",
            {
                "allowList": {
                    "props": true,
                    "Props": true,
                    "ref": true,
                    "Ref": true,
                    "Refs": true,
                    "refs": true,
                    "params": true,
                    "Params": true,
                    "param": true,
                    "Param": true,
                    "prop": true,
                    "Prop": true,
                    "prev": true,
                    "Prev": true,
                    "Arg": true,
                    "Args": true,
                    "arg": true,
                    "args": true,
                    "env": true
                }
            }
        ],
        "unicorn/throw-new-error": "error",
        "valid-typeof": "error",
        "wrap-iife": "error",
        "yoda": "error",
        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": "error",
        "@typescript-eslint/sort-type-union-intersection-members": "error",
        "object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": [
            "error",
            "always"
        ],
        "@typescript-eslint/prefer-regexp-exec": "error",
        "sort-class-members/sort-class-members": [
            "error",
            {
                "order": [
                    "[static-properties]",
                    "[static-methods]",
                    "[properties]",
                    "[private-properties]",
                    "constructor",
                    "[getters]",
                    "[setters]",
                    "[conventional-private-properties]",
                    "[conventional-private-methods]",

                    "[arrow-function-properties]",
                    "[methods]",
                    "[async-methods]",

                    "[everything-else]"
                ],
                "groups": {
                    "private-properties": [{ "name": "/_.+/", "type": "property" }]
                },
            }
        ],
        "workspaces/no-absolute-imports": "error",
        "workspaces/no-relative-imports": "error",
        "workspaces/require-dependency": "error",
        "more/no-void-map": "error",
        "sonarjs/no-all-duplicated-branches": "error",
        "sonarjs/no-duplicated-branches": "error",
        "sonarjs/no-empty-collection": "error",
        "sonarjs/no-identical-conditions": "error",
        "sonarjs/no-identical-expressions": "error",
        "sonarjs/no-ignored-return": "error",
        "sonarjs/no-one-iteration-loop": "error",
        "sonarjs/no-use-of-empty-return-value": "error",
        "sonarjs/no-collection-size-mischeck": "error",
        "sonarjs/no-gratuitous-expressions": "error",
        "sonarjs/no-inverted-boolean-check": "error",
        "sonarjs/no-nested-switch": "error",
        "sonarjs/no-redundant-boolean": "error",
        "sonarjs/no-redundant-jump": "error",
        "sonarjs/no-same-line-conditional": "error",
        "sonarjs/no-small-switch": "error",
        "sonarjs/no-unused-collection": "error",
        "sonarjs/prefer-immediate-return": "error",
        "sonarjs/prefer-object-literal": "error",
        "sonarjs/prefer-single-boolean-return": "error",
        "sonarjs/prefer-while": "error",
        "sonarjs/cognitive-complexity": ["warn", 15],
        "eslint-comments/no-unused-disable": "error",
        "eslint-comments/no-duplicate-disable": "error",
    }
}
