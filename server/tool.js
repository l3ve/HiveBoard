var fs = require('fs');
var zlib = require('zlib');

exports.classify = function (req, res) {
    let type = '',
        url = req.path,
        reJson = /application\/json|text\/javascript/
    reJs = /\.(js$|js\?)/,
        reCss = /\.(css$|css\?)/,
        reImg = /\.((png|jpg|jpeg|gif|ico)$|(png|jpg|jpeg|gif|ico)\?)/;
    if (reJs.test(url)) {
        type = 'js';
    } else if (reCss.test(url)) {
        type = 'css';
    } else if (reImg.test(url)) {
        type = 'img';
    } else if (reJson.test(res['content-type'])) {
        type = 'json'
    } else {
        type = 'other';
    }
    return type
}
exports.loopFsStat = function (pathArr, cb) {
    let prmArr = pathArr.map((path) => {
        return PromiseFsStat(path)
    });
    prmArr.push(delayPromise(1000));
    Promise.race(prmArr).then((para) => {
        if (para) {
            cb(para)
        } else {
            cb({
                stats: false,
                localPath: ''
            })
        }
    })
}

exports.unzip = function (chunk) {
    if (chunk.length > 0) {
        return zlib.unzipSync(chunk).toString('utf8')
    } else {
        return '接口数据为空'
    }
}

function PromiseFsStat(localPath) {
    return new Promise((resolve) => {
        fs.stat(localPath, (err, stats) => {
            if (stats) {
                resolve({ stats, localPath })
            }
        })
    })
}

function delayPromise(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}