module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/modules.js', to: 'modules.js'},
    {from: '/', to: '_list/homepage/empty', method: 'GET'},
]
