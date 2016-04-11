var path = require('path');

var config = {
    debug: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3333
};

module.exports = config;