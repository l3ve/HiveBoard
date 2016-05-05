var utility = require('utility');
var crypto = require('crypto');
var leveldb = require('levelup');
var memdown = require('memdown').clearGlobalStore();
var co = require('co');
var thunkify = require('thunkify-wrap');
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
    var end = function () {
        return yield function* () {
             stream.once('end', function () {
                console.log('end fuck');
            })
        }
    };
    console.log(stream, thunkify.event.toString());
    yield end();
    return items;
};

exports.insert = function* (msg) {
    var id = utility.md5(msg.content + crypto.randomBytes(60).toString('hex'));
    yield function* () { db.put(id, msg) };
    return id;
};