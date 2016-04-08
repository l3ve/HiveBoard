var koa = require('koa');
var appListen = koa();

var coBody = require('co-body');
appListen.use(function* (next) {
    var query = yield next;
    var _hpdata = hp.handleparam(this.path, query);
    this.body = _hpdata;
});

appListen.use(function* (next) {
    yield next;
    if (this.method === 'GET') {
        return this.query;
    } else if (this.method === 'POST') {
        var _body = yield coBody(this);
        return _body;
    }
});


appListen.on('error', function(err, ctx) {
    log.error('server error', err, ctx);
});


if (!module.parent) {
    appListen.listen(3333);
}
