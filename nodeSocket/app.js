var routes = require('./routes');
var config = require('./config');
var logger = require('koa-logger');
var path = require('path');
var app = require('koa')();
var router = require('koa-router')();
var favicon = require('koa-favicon');
var server = require('http').createServer(app.callback());
var io = require('socket.io')(server);


app.use(favicon(__dirname + '/src/favicon.ico'));
// app.use(middlewares.rt());
// app.use(middlewares.staticCache(path.join(__dirname, 'public'), {
//     buffer: !config.debug,
//     maxAge: config.debug ? 0 : 60 * 60 * 24 * 7
// }));
// app.use(middlewares.bodyParser());

if (config.debug && process.env.NODE_ENV !== 'test') {
    app.use(logger());
}

app.use(router.routes());
app.use(router.allowedMethods());
routes(router);

// listen
app.listen(config.port);
console.log('listening on port '+config.port);


io.on('connection', function(socket) {
    console.log('something connectioned');
    socket.on('event', function(data) { });
    socket.on('disconnect', function() { });
});