module.exports = {
    'plugins': ['type-graphql'],
    'rules': {
        'type-graphql/invalid-decorated-type': 'error',
        'type-graphql/invalid-decorator-type': 'error',
        'type-graphql/invalid-nullable-input-type': 'error',
        'type-graphql/invalid-nullable-output-type': 'error',
        'type-graphql/missing-decorator-type': ['error', 'all'],
        'type-graphql/wrong-decorator-signature': 'error',
    },
}
