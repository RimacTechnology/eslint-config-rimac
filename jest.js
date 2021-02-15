module.exports = {
    "plugins": [
        "jest",
        "jest-formatting"
    ],
    "rules": {
        "jest/consistent-test-it": "error",
        "jest/expect-expect": "error",
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
        "jest/valid-title": "error",
        "jest-formatting/padding-around-after-all-blocks": "error",
        "jest-formatting/padding-around-after-each-blocks": "error",
        "jest-formatting/padding-around-before-all-blocks": "error",
        "jest-formatting/padding-around-before-each-blocks": "error",
        "jest-formatting/padding-around-expect-groups": "error",
        "jest-formatting/padding-around-describe-blocks": "error",
        "jest-formatting/padding-around-test-blocks": "error",

        // "prefer-called-with":  // TODO "FIND THE RULE"
        // "prefer-expect-assertions": // TODO "FIND THE RULE"
    }
}
