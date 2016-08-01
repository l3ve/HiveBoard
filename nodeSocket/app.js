var config = require('./config');
var logger = require('koa-logger');
var bodyParser = require('koa-bodyParser');
var path = require('path');
var app = require('koa')();
var favicon = require('koa-favicon');
var static = require('koa-static');
var io = require('./src/socket-S');
app.use(bodyParser());
app.use(static(path.join(__dirname,'.')));
app.use(favicon(__dirname + '/favicon.ico'));

if (config.debug && process.env.NODE_ENV !== 'test') {
    app.use(logger());
}

var server = require('http').createServer(app.callback());
io.init(server);
// listen
server.listen(config.port);
console.log('listening on port '+config.port);
