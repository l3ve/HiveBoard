var leveldb = require('levelup');
var memdown = require('memdown').clearGlobalStore();
var config = require('../config');
var thunkify = require('thunkify-wrap');

var db = leveldb('./data/msg', {
    valueEncoding: 'json',
    db: memdown
});

thunkify(db, ['get','put','del','batch']);
module.exports = db;