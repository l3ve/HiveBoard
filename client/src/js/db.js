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
    let wait = function (key) {
        return new Promise((done) => {
            db.get(key, (err, _val) => {
                done(_val);
            });
        })
    }
    let __val = yield wait(key);
    return __val;
})

exports.insert = co.wrap(function* (msg) {
    var id = utility.md5(msg.id + crypto.randomBytes(60).toString('hex'));
    let _id = yield new Promise((done)=>{
        db.put(id, msg, (err, _val) => {
            done('ok');
        })
    });
    return _id;
});

exports.remove = co.wrap(function* (id) {
    let state =  yield new Promise((done)=> {
        db.del(id, (err, _val) => {
            done(_val);
        })
    })
    return state;
});