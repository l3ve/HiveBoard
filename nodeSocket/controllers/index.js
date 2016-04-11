var render = require('../common/render');
var Message = require('../models/message');

function* list() {
    var list = yield Message.get();
    this.body = yield render('list', { posts: list });
}

function* add() {
    this.body = yield render('new');
}

function* insert() {
    yield Message.insert({
        'content': 'Just Fun',
        'user': 'zwei'
    });
    var list = yield Message.get();
    this.body = yield render('list', { posts: list });
}

module.exports = {
    list,add,insert
}