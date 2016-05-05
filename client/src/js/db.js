var utility = require('utility');
var crypto = require('crypto');
var leveldb = require('levelup');
var memdown = require('memdown').clearGlobalStore();
var co = require('co');
var db = leveldb('./data/msg', {
    valueEncoding: 'json',
    db: memdown
});

exports.get = function* () {
    var err = null;
    var items = [];
    var stream = db.createReadStream();
    stream.on('data', function (data) {
        var value = data.value;
        value.id = data.key;
        items.push(value);
    });
    var end = function (stream) {
        return function(done){
            let endEvents = ['end'],
                called = false;
            function _done(err, data) {
                if (called) {
                    return;
                }
                called = true;
                stream.removeListener('error', _done);
                endEvents.forEach(function (name) {
                    stream.removeListener(name, end);
                });
                console.log(done);
                done(err, data);
            }
            function end(data) {
                _done(null, data);
            }
            stream.once('error', _done);
            endEvents.forEach(function (name) {
                stream.once(name, end);
            });
        }
    }
    var res = end(stream);
    yield res;
    return items;
};

exports.insert = function* (msg) {
    var id = utility.md5(msg.content + crypto.randomBytes(60).toString('hex'));
    yield function* () { db.put(id, msg) };
    return id;
};