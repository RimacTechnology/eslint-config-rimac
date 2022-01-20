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
        '@semantic-release/commit-analyzer',
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
                            type: 'chore',
                            section: 'Other',
                        },
                        {
                            type: 'docs',
                            section: 'Documentation',
                        },
                        {
                            type: 'style',
                            section: 'Styles',
                        },
                        {
                            type: 'refactor',
                            section: 'Code Refactoring',
                        },
                        {
                            type: 'perf',
                            section: 'Performance Improvements',
                        },
                        {
                            type: 'test',
                            section: 'Tests',
                        },
                        {
                            type: 'ci',
                            section: 'Continuous Integration',
                        },
                        {
                            type: 'build',
                            section: 'Build System',
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
        [
            '@semantic-release/git',
            {
                message: 'release: ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
            },
        ],
    ],
}
