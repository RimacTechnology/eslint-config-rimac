module.exports = {
    'plugins': ['mobx'],
    'rules': {
        'mobx/exhaustive-make-observable': 'error',
        'mobx/missing-make-observable': 'error',
        'mobx/missing-observer': 'error',
        'mobx/no-anonymous-observer': 'error',
        'mobx/unconditional-make-observable': 'error',
    },
}
