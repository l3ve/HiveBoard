var utility = require('utility');
var crypto = require('crypto');
var leveldb = require('levelup');
var memdown = require('memdown').clearGlobalStore();
var thunkify = require('thunkify-wrap');
var db = leveldb('./data/msg', {
    valueEncoding: 'json',
    db: memdown
});

thunkify(db, ['get', 'put', 'del', 'batch']);

exports.get = function* () {
    var err = null;
    var items = [];
    var stream = db.createReadStream();
    stream.on('data', function (data) {
        var value = data.value;
        value.id = data.key;
        items.push(value);
    });
    var end = thunkify.event(stream);
    yield end();
    return items;
};

exports.insert = function(msg) {
    var id = utility.md5(msg.content + crypto.randomBytes(60).toString('hex'));
    db.put(id, msg);
    return id;
};