module.exports = {
    "plugins": ["jest"],
    "rules": {
        "jest/consistent-test-it": [ "error", { "fn": "it", "withinDescribe": "test" } ],
        "jest/expect-expect": "error",
        "jest/lowercase-name": "error",
        "jest/no-commented-out-tests": "error",
        "jest/no-conditional-expect": "error",
        "jest/no-deprecated-functions": "error",
        "jest/no-disabled-tests": "error",
        "jest/no-done-callback": "error",
        "jest/no-duplicate-hooks": "error",
        "jest/no-export": "error",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/no-if": "error",
        "jest/no-interpolation-in-snapshots": "error",
        "jest/no-jest-import": "error",
        "jest/no-large-snapshots": [ "warn", { "maxSize": 500 } ],
        "jest/no-standalone-expect": "error",
        "jest/no-test-prefixes": "error",
        "jest/no-test-return-statement": "error",
        "jest/prefer-hooks-on-top": "error",
        "jest/prefer-strict-equal": "error",
        "jest/prefer-to-be-null": "error",
        "jest/prefer-to-be-undefined": "error",
        "jest/prefer-to-contain": "error",
        "jest/prefer-to-have-length": "error",
        "jest/prefer-todo": "error",
        "jest/require-to-throw-message": "error",
        "jest/require-top-level-describe": "error",
        "jest/valid-describe": "error",
        "jest/valid-expect": "error",
        "jest/valid-expect-in-promise": "error",
        "jest/valid-title": "error"

        // "prefer-called-with": "FIND THE RULE"
        // "prefer-expect-assertions": "FIND THE RULE"
    }
}
