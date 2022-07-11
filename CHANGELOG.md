# [26.0.0](https://github.com/RimacTechnology/eslint-config-rimac/compare/v25.0.0...v26.0.0) (2022-07-11)


### Bug Fixes

* **core:** make todo rule error instead of warn ([44e2f47](https://github.com/RimacTechnology/eslint-config-rimac/commit/44e2f473ebe2fa12eba77f846bf1f1ccba313f7e))


### Features

* **chore:** disallow unreadable IFFEs ([6b316bd](https://github.com/RimacTechnology/eslint-config-rimac/commit/6b316bd31dab92535a5208d9b24be5167330507c))
* **core:** add @typescript-eslint/consistent-generic-constructors ([2720f04](https://github.com/RimacTechnology/eslint-config-rimac/commit/2720f040d561683491e1ff0453e2116788f8aa64))
* **core:** add prefer-logical-operator-over-ternary ([eb04a7a](https://github.com/RimacTechnology/eslint-config-rimac/commit/eb04a7afe5dbbf39cb3772e4fc4e1fa8120eab03))
* **core:** perfer modern math apis ([1ac8261](https://github.com/RimacTechnology/eslint-config-rimac/commit/1ac82614bd2078bc6e4f0bedaacacc6edf8b67f0))
* **jest:** add jest/prefer-hooks-in-order ([f6afc5a](https://github.com/RimacTechnology/eslint-config-rimac/commit/f6afc5aefa446c245a7b2652a96cfed018e14f8a))
* **react:** enforce using ternary for conditional rendering ([3c79f96](https://github.com/RimacTechnology/eslint-config-rimac/commit/3c79f96b6869597bb180b06d94cd0f453871ef2e))


### BREAKING CHANGES

* **chore:** disallow unreadable IFFEs
* **core:** modern math APIs now have to be used over the legacy ones
* **core:** logical operator is now preferred if it makes sense
* **react:** conditional rendering must be done via a ternary operator
* **jest:** jest hooks now have to be setup in the order jest calls
them
* **core:** generic type declarations now have to specified in a certain way
* **core:** Todos now require links and will error if not present

# [25.0.0](https://github.com/RimacTechnology/eslint-config-rimac/compare/v24.0.0...v25.0.0) (2022-05-10)


### Features

* **core:** require issue urls for todos and fixmes ([be713a4](https://github.com/RimacTechnology/eslint-config-rimac/commit/be713a40348052350ab03e29d50ac6b827e50283)), closes [#8](https://github.com/RimacTechnology/eslint-config-rimac/issues/8)


### BREAKING CHANGES

* **core:** all todo and fixme comments are now required to have an issue url attached at the
end

# [24.0.0](https://github.com/RimacTechnology/eslint-config-rimac/compare/v23.0.0...v24.0.0) (2022-05-09)


### Features

* **core:** spacing between blocks ([6cc33d6](https://github.com/RimacTechnology/eslint-config-rimac/commit/6cc33d693e75df9dd82321064e0badb54d2d272e)), closes [#17](https://github.com/RimacTechnology/eslint-config-rimac/issues/17)


### BREAKING CHANGES

* **core:** require spacing between blocks

# [23.0.0](https://github.com/RimacTechnology/eslint-config-rimac/compare/v22.3.0...v23.0.0) (2022-05-04)


### Features

* **core:** add @typescript-eslint/no-redundant-type-constituents ([e0f20cd](https://github.com/RimacTechnology/eslint-config-rimac/commit/e0f20cd529c7d7b004e5de832987ea514b552647))
* **core:** add @typescript-eslint/no-unnecessary-condition ([b886261](https://github.com/RimacTechnology/eslint-config-rimac/commit/b886261f87552c8d8cb1bc15e60fbb63098d0389))
* **core:** add @typescript-eslint/no-useless-empty-export ([0995950](https://github.com/RimacTechnology/eslint-config-rimac/commit/09959502f6e44c4f7499a12d456b74cc91c4df54))
* **core:** add @typescript-eslint/space-before-blocks ([cf6d661](https://github.com/RimacTechnology/eslint-config-rimac/commit/cf6d66174e6a5be8d178aed35a5b97f7512a5bd5))
* **core:** add lines-between-class-members ([ef632bd](https://github.com/RimacTechnology/eslint-config-rimac/commit/ef632bdd7bdd4729d1b3218ae0f526ea52d45256))


### BREAKING CHANGES

* **core:** New rule: lines-between-class-members
* **core:** New rule: @typescript-eslint/space-before-blocks
* **core:** New rule: @typescript-eslint/no-useless-empty-export
* **core:** New rule: @typescript-eslint/no-unnecessary-condition
* **core:** New rule: @typescript-eslint/no-redundant-type-constituents

# [22.3.0](https://github.com/RimacTechnology/eslint-config-rimac/compare/v22.2.3...v22.3.0) (2022-04-25)


### Features

* add test ([1992f48](https://github.com/RimacTechnology/eslint-config-rimac/commit/1992f48ee455019528da25a7c3f8a5adecaeb8d1))
