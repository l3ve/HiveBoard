export function classify(req, res) {
    let type = '',
        ctxType = res['content-type'],
        url = req.path,
        reJs = /\.(js$|js\?)/,
        reCss = /\.(css$|css\?)/,
        reImg = /\.((png|jpg|jpeg|gif)$|(png|jpg|jpeg|gif)\?)/;
    if (reJs.test(url)) {
        type = 'js'
    } else if (reCss.test(url)) {
        type = 'css';
    } else if (reImg.test(url)) {
        type = 'img';
    } else {
        type = 'other';
    }
    return type
}