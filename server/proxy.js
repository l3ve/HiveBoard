import http from 'http';
import fs from 'fs';
import net from 'net';
import url from 'url';
import zlib from 'zlib';
import Io from './socket.js';
import { classify } from './tool';

const socket = new Io();
let isNeedProxy = true,
    realPath = '/Users/L3ve/backstage/static/backsite/assets/enter.js';

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
        if (isNeedProxy && u.path == '/backsite/assets/enter.js') {
            fs.stat(realPath, (err, stats) => {
                if (!stats) {
                    cRes.writeHead(404, { 'Content-Type': 'text/plain' });
                    cRes.end();
                    //与客户端通讯
                    socket.msg('找不到文件');
                } else {
                    cRes.writeHead(200, pRes.headers);
                    let file = fs.createReadStream(realPath),
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
                }
            })
        } else {
            cRes.writeHead(pRes.statusCode, pRes.headers);
            pRes.pipe(cRes);
        }
        //回传请求的信息
        socket.sendReqAndRes({
            type: classify(options, pRes.headers),
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
    var u = url.parse('http://' + cReq.url);
    var pSock = net.connect(u.port, u.hostname, function () {
        cSock.write('HTTP/1.1 200 Connection Established\r\n\r\n');
        pSock.pipe(cSock);
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
