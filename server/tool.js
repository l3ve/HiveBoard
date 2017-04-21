var fs = require('fs');

exports.classify = function (req) {
    let type = '',
        url = req.path,
        reJs = /\.(js$|js\?)/,
        reCss = /\.(css$|css\?)/,
        reImg = /\.((png|jpg|jpeg|gif|ico)$|(png|jpg|jpeg|gif|ico)\?)/;
    if (reJs.test(url)) {
        type = 'js';
    } else if (reCss.test(url)) {
        type = 'css';
    } else if (reImg.test(url)) {
        type = 'img';
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