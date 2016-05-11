var utility = require('utility');
var crypto = require('crypto');
var leveldb = require('levelup');
var Memdown = require('memdown');
var _db = Memdown.clearGlobalStore();
var co = require('co');

var db = leveldb('./data/msg', {
    valueEncoding: 'json',
    db: _db
});

exports.all = co.wrap(function* () {
    var err = null;
    var items = [];
    var stream = db.createReadStream();
    stream.on('data', function (data) {
        var value = data.value;
        value.id = data.key;
        items.push(value);
    });
    var EventEnd = function (stream) {
        return function (done) {
            var called = false;
            function _done(err, data) {
                if (called) {
                    return;
                }
                called = true;
                stream.removeListener('end', _done);
                done(err, data);
            }
            stream.once('end', _done);
        }
    }
    yield EventEnd(stream);
    return items;
});

exports.get = co.wrap(function* (key) {
    let __val = {};
    let wait = function (key) {
        return function (done) {
            db.get(key, (err, _val) => {
                __val = _val;
                done();
            });
        }
    }
    yield wait(key);
    return __val;
})

exports.insert = co.wrap(function* (id, msg) {
    // var id = utility.md5(msg.content + crypto.randomBytes(60).toString('hex'));
    yield function* () {
        db.put(id, msg)
    };
    return id;
});