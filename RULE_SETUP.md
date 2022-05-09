# Rule Setup

Instructions on how to setup rules that require configuration

## `todos/only-documented-todos`

-   This rule checks that all your `FIXMEs` and `TODOs` have an issue url attached to them

**Setup**

-   Add a new `bugs` section to `package.json` (check the `package.json` example snippet below) that will
    contain the `url` where all the issues are opened for your project
    -   You can find which url to put by opening a single issue, for example
        `https://rimac-automobili.atlassian.net/browse/TEL-4380` and taking just the part that will never
        change `https://rimac-automobili.atlassian.net/browse/TEL-` and put that in the `url`. Note that only
        the issue number at the end changes from issue to issue.
-   All the future todo URLs will have to start with that url
-   For example for the telemetry project the url is as listed below in the `package.json` example snippet and
    the todos should be created as such

```typescript
// TODO: this needs to be better https://rimac-automobili.atlassian.net/browse/TEL-4380
const test = 1
```

```json
{
    "name": "@rimac-technology/eslint-config",
    "version": "23.0.0",
    "bugs": {
        "url": "https://rimac-automobili.atlassian.net/browse/TEL-"
    }
}
```
