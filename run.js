exports.start = function () {
    require('babel-register')
    require('./server/proxy.js')
}