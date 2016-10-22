import http from 'http';
import net from 'net';
import url from 'url';
import Io from './socket.js';
import {classify} from './tool';

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
        cRes.writeHead(pRes.statusCode, pRes.headers);
        pRes.pipe(cRes);
        socket.sendReqAndRes({
            type:classify(options,pRes.headers),
            req:options,
            res:pRes.headers
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
