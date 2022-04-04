module.exports = {
    branches: [
        '+([0-9])?(.{+([0-9]),x}).x',
        'master',
        {
            name: 'beta',
            prerelease: true,
        },
        {
            name: 'alpha',
            prerelease: true,
        },
    ],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'angular',
                releaseRules: [
                    {
                        type: 'refactor',
                        release: 'patch',
                    },
                    {
                        type: 'chore',
                        release: 'patch',
                    },
                ],
            },
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'conventionalcommits',
                presetConfig: {
                    commitUrlFormat: 'https://bitbucket.org/rimacautomobili/{{repository}}/commits/{{hash}}',
                    compareUrlFormat: 'https://bitbucket.org/rimacautomobili/{{repository}}/branches/compare/{{currentTag}}%0D{{previousTag}}#diff',
                    issueUrlFormat: 'https://rimac-automobili.atlassian.net/browse/{{id}}',
                    userUrlFormat: 'https://bitbucket.org/rimacautomobili/users/{{user}}',
                    types: [
                        {
                            type: 'feat',
                            section: 'Features',
                        },
                        {
                            type: 'fix',
                            section: 'Bug Fixes',
                        },
                        {
                            type: 'refactor',
                            section: 'Code Refactoring',
                        },
                        {
                            type: 'chore',
                            section: 'Other',
                        },
                        {
                            type: 'perf',
                            section: 'Performance Improvements',
                        },
                        {
                            type: 'revert',
                            section: 'Reverts',
                        },
                    ],
                },
            },
        ],
        '@semantic-release/changelog',
        '@semantic-release/npm',
        '@semantic-release/git',
    ],
}
