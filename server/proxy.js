var http = require('http');
var fs = require('fs');
var net = require('net');
var url = require('url');
var zlib = require('zlib');
var Io = require('./socket.js');
var {classify, loopFsStat} = require('./tool.js');

const socket = new Io();
//HTTP代理
function request(cReq, cRes) {
    var u = url.parse(cReq.url);
    var options = {
        hostname: u.hostname,
        port: u.port || 80,
        path: u.path,
        method: cReq.method,
        headers: cReq.headers
    };
    var pReq = http.request(options, function (pRes) {
        const proxy = socket.checkProxy(u),
            localPath = proxy ? socket.returnLocalPath(proxy) : '';
        if (proxy) {
            loopFsStat(localPath, ({stats, localPath}) => {
                if (stats) {
                    cRes.writeHead(200, pRes.headers);
                    let file = fs.createReadStream(localPath),
                        acceptEncoding = pRes.headers['content-encoding'];
                    //判断是否需要压缩
                    if (acceptEncoding && acceptEncoding.indexOf('gzip') != -1) {
                        var gzipStream = zlib.createGzip();
                        // 设置返回头content-encoding为gzip
                        file.pipe(gzipStream).pipe(cRes);
                    } else {
                        // 不压缩
                        file.pipe(cRes);
                    }
                } else {
                    cRes.writeHead(404, { 'Content-Type': 'text/plain' });
                    cRes.end();
                    //与客户端通讯
                    socket.msg({ msg: `${localPath}找不到文件`, tag: 'unfind' });
                }
            })
        } else {
            cRes.writeHead(pRes.statusCode, pRes.headers);
            pRes.pipe(cRes);
        }
        //回传请求的信息
        socket.sendReqAndRes({
            type: classify(options, pRes.headers),
            where: proxy ? 'Local' : 'Remote',
            req: options,
            res: pRes.headers
        });
    }).on('error', (e) => {
        cRes.end();
    });
    cReq.pipe(pReq);
}

//TCP代理
function connect(cReq, cSock) {
    var _u = url.parse(cReq.url);
    var options = {
        hostname: _u.hostname,
        port: _u.port || 80,
        path: _u.path,
        method: cReq.method,
        headers: cReq.headers
    };
    var u = url.parse('http://' + cReq.url);
    var pSock = net.connect(u.port, u.hostname, function () {
        cSock.write('HTTP/1.1 200 Connection Established\r\n\r\n');
        pSock.pipe(cSock);
        //回传请求的信息
        // socket.sendReqAndRes({
        //     type: classify(options, pRes.),
        //     req: options,
        //     res: pRes.headers
        // });
    }).on('error', function (e) {
        cSock.end();
    });
    cSock.pipe(pSock);
}
//  代理服务器
http.createServer()
    .on('request', request)
    .on('connect', connect)
    .listen(3344, '0.0.0.0');
console.log(`Server up and running! On port 3344!`);
