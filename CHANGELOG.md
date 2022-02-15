### [21.0.1](https://bitbucket.org/rimacautomobili/eslint-config/branches/compare/v21.0.1%0Dv21.0.0#diff) (2022-02-15)


### Bug Fixes

* **core:** allow comments to exceed max-len ([92d7906](https://bitbucket.org/rimacautomobili/eslint-config/commits/92d7906f0104a9d1a566bf7060f691f545d8620b))

## [21.0.0](https://bitbucket.org/rimacautomobili/eslint-config/branches/compare/v21.0.0%0Dv20.5.3#diff) (2022-02-08)


### ⚠ BREAKING CHANGES

* **type-graphql:** `type-graphql/missing-decorator-type` now always requires types to be set
regardless of a simple or complex types

### Features

* **type-graphql:** `type-graphql/missing-decorator-type` now always requires types to be set ([a6d7b8c](https://bitbucket.org/rimacautomobili/eslint-config/commits/a6d7b8cf4c922ef343778093b89885b9600164d3))

### [20.5.3](https://bitbucket.org/rimacautomobili/eslint-config/branches/compare/v20.5.3%0Dv20.5.2#diff) (2022-02-08)


### Bug Fixes

* **core:** allow thenable function in `@typescript-eslint/promise-function-async` rule ([fdaebb2](https://bitbucket.org/rimacautomobili/eslint-config/commits/fdaebb2e444f47efd645a97b2cdf3d64e21afb9c))


### Other

* format config files with prettier ([015e0d4](https://bitbucket.org/rimacautomobili/eslint-config/commits/015e0d4ed3c4c20dc18fe2042b2c2dbcb0ca5624))


### Continuous Integration

* run prettier on config files in CI ([07dff2a](https://bitbucket.org/rimacautomobili/eslint-config/commits/07dff2a65d3a4abb903a282f6ed78ddc986316df))


### Styles

* remove unnecesarry yarn reference in package json command ([f476c5b](https://bitbucket.org/rimacautomobili/eslint-config/commits/f476c5b4b486f72050ee863d5fe803b2cf0a7a4c))

### [20.5.2](https://bitbucket.org/rimacautomobili/eslint-config/branches/compare/v20.5.2%0Dv20.5.1#diff) (2022-02-03)


### Bug Fixes

* **core:** rule checking max line length will no longer fail on imports exceeding 120 chars ([962bbb5](https://bitbucket.org/rimacautomobili/eslint-config/commits/962bbb5da200284425d23b4a07730e327d89e00c))

### [20.5.1](https://bitbucket.org/rimacautomobili/eslint-config/branches/compare/v20.5.1%0Dv20.5.0#diff) (2022-02-03)


### Bug Fixes

* **type-graphql:** bump type-graphql package to support eslint 8 ([5a8d21e](https://bitbucket.org/rimacautomobili/eslint-config/commits/5a8d21ecb0dd33baeb18f76ea40b3503ba42fc83))

## [20.5.0](https://bitbucket.org/rimacautomobili/eslint-config/branches/compare/v20.5.0%0Dv20.4.0#diff) (2022-02-03)


### Features

* **jest:** add `jest/prefer-comparison-matcher` rule ([01aad01](https://bitbucket.org/rimacautomobili/eslint-config/commits/01aad01079372fd548d7bf0334eac41123f7c08a))
* **jest:** add `jest/prefer-equality-matcher` rule ([eb36471](https://bitbucket.org/rimacautomobili/eslint-config/commits/eb3647170d41705db2447e7d520e7cb53ce2c70e))


### Build System

* **.releaserc.js:** mark chore commit as patch release type ([a38b39b](https://bitbucket.org/rimacautomobili/eslint-config/commits/a38b39b015faf353b03cc440e4b28a59f83a582a))


### Other

* **releaserc:** remove commit analyzer overrides ([659c579](https://bitbucket.org/rimacautomobili/eslint-config/commits/659c5791a168aa9ae1482bf2670daf205341f070))
* revert release packages version bump ([9bce60b](https://bitbucket.org/rimacautomobili/eslint-config/commits/9bce60b2910a0b3a0107aa41166fc1b6c66428ec))

## [20.4.0](https://bitbucket.org/rimacautomobili/eslint-config/branches/compare/v20.4.0%0Dv20.3.0#diff) (2022-01-14)


### Features

* **core:** add unicorn/no-useless-promise-resolve-reject rule ([fac85eb](https://bitbucket.org/rimacautomobili/eslint-config/commits/fac85ebee6933fdb778b50db2c8120778454ee7a))


### Other

* update dependencies ([98f3f30](https://bitbucket.org/rimacautomobili/eslint-config/commits/98f3f304161640dbcab1c0015b943e17e3e93a5f))

## [20.3.0](https://bitbucket.org/rimacautomobili/eslint-config/branches/compare/v20.3.0%0Dv20.2.1#diff) (2022-01-14)


### Other

* add semantic release for version and release management ([4a038c5](https://bitbucket.org/rimacautomobili/eslint-config/commits/4a038c56752d2c4c51a455c3c5c999d167b735ba))
* update yarn package manager to latest version and all relevant yarn plugins ([b868fa2](https://bitbucket.org/rimacautomobili/eslint-config/commits/b868fa22f3fb340b4b09f8ef834df8ec07b20051))


### Documentation

* add semantic-release and commitizen tags ([c4f62f8](https://bitbucket.org/rimacautomobili/eslint-config/commits/c4f62f856fdb6bb2180d450e64bdc2d8fe13662d))


### Continuous Integration

* add install step to all pipelines ([81c44a2](https://bitbucket.org/rimacautomobili/eslint-config/commits/81c44a2c5bafcdb45a1033d045f51fbcb9242ed7))
* extract common pipeline steps and add release for different branched (master, beta and alpha) ([94a7e86](https://bitbucket.org/rimacautomobili/eslint-config/commits/94a7e86ff8bc67977818f701fab2df0cb0ba271d))
