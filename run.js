exports.start = function () {
    require('babel-register')
    require('./proxy/server.js')
    require('./socket/socket.js')
}