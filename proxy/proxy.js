import http from 'http';
import url from 'url';
import fetch from 'node-fetch';

module.exports = function () {
    return function (ctx, next) {
        const _url = url.parse(ctx.request.url).href,
            _ment = _url.split('.').pop().split('?')[0],
            _type = changeContentType(_ment),
            _userAgent = ctx.request.header['user-agent'];
            request(ctx,ctx);
        // if (_ment == 'js' || _ment == 'css'||_ment == 'ico' || _ment == 'png' || _ment == 'jpg') {
        //     return fetch(`${ctx.request.url}`, {
        //         headers: {
        //             "user-agent": _userAgent
        //         }
        //     })
        //         .then(res => res.text())
        //         .then(html => {
        //             // ctx.set({
        //             //     'User-Agent': _userAgent
        //             // });
        //             ctx.type = _type;
        //             ctx.body = html;
        //             next();
        //         })
        // }  else {
        //     return fetch(`${ctx.request.url}`)
        //         .then(res => res.text())
        //         .then(html => {
        //             ctx.type = _type;
        //             ctx.body = html;
        //             next();
        //         })
        // }
    }
}




function changeContentType(_ment) {
    let _type = 'text/plain';
    switch (_ment) {
        case 'js':
            _type = 'application/javascript; charset=utf-8';
            break;
        case 'css':
            _type = 'text/css';
            break;
        case 'ico':
            _type = 'image/x-icon';
            break;
        case 'woff':
            _type = 'application/octet-stream';
            break;
        case 'woff2':
            _type = 'font/woff2';
            break;
        case 'png':
            _type = 'image/png';
            break;
        case 'jpg':
            _type = 'image/jpeg';
            break;
        case 'svg':
            _type = 'image/svg+xml';
            break;
        case 'gif':
            _type = 'image/gif';
            break;
        default:
            _type = 'text/html; charset=utf-8';
            break;
    }
    return _type;
}