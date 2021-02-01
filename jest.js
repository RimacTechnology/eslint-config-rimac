module.exports = {
    "plugins": [ "jest" ],
    "rules": {
        "jest/consistent-test-it": [ "error", { "fn": "it", "withinDescribe": "test" } ],
        "jest/expect-expect": "error",
        'lowercase-name': "error",
        "no-commented-out-tests": "error",
        "no-conditional-expect": "error",
        "no-deprecated-functions": "error",
        "no-disabled-tests": "error",
        "no-done-callback": "error",
        "no-duplicate-hooks": "error",
        "no-export": "error",
        "no-focused-tests": "error",
        "no-identical-title": "error",
        "no-if": "error",
        "no-interpolation-in-snapshots": "error",
        "no-jest-import": "error",
        "jest/no-large-snapshots": [ "warn", { "maxSize": 500 } ],
        "no-standalone-expect": "error",
        "no-test-prefixes": "error",
        "no-test-return-statement": "error",
        "prefer-hooks-on-top": "error",
        "prefer-strict-equal": "error",
        "prefer-to-be-null": "error",
        "prefer-to-be-undefined": "error",
        "prefer-to-contain": "error",
        "prefer-to-have-length": "error",
        "prefer-todo": "error",
        "require-to-throw-message": "error",
        "require-top-level-describe": "error",
        "valid-describe": "error",
        "valid-expect": ["error", {
            type: 'object',
            properties: {
                alwaysAwait: true,
            },
        }],
        "valid-expect-in-promise": "error",
        "valid-title": "error"

        // "prefer-called-with": "FIND THE RULE"
        // "prefer-expect-assertions": "FIND THE RULE"
    }
}
