var leveldb = require('levelup');
var memdown = require('memdown').clearGlobalStore();
var thunkify = require('thunkify-wrap');

var db = leveldb('./database/msg', {
    valueEncoding: 'json',
    db: memdown
});

thunkify(db, ['get','put','del','batch']);
module.exports = db;