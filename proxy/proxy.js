import http from 'http';
import url from 'url';
import fetch from 'node-fetch';

module.exports = function () {
    return function (ctx, next) {
        const _url = url.parse(ctx.request.url).href,
            _ment = _url.split('.').pop();
        if (_ment == 'js' || _ment == 'css') {
            console.log('res');
            return fetch(`${ctx.request.url}`)
                .then(res => res.text())
                .then(html => {
                    ctx.body = html;
                    next();
                })
        } else if (_ment == 'ico' || _ment == 'png' || _ment == 'jpg') {
            console.log('img');
            ctx.body = ctx.request.url;
        } else {
            console.log('html');
            return fetch(`${ctx.request.url}`)
                .then(res => res.text())
                .then(html => {
                    ctx.body = html;
                    next();
                })
        }
    }
}