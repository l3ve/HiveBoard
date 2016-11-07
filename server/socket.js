var io = require('socket.io')();
var Datastore = require('nedb'),
    db = new Datastore({ filename: './db/proxy.db', autoload: true });

class Io {
    constructor(props) {
        // 代理界面
        io.listen(3333);
        this.start();
    }
    start() {
        io.on('connection', (client) => {
            client.emit('sys-msg', { msg: '已经连接上代理服务器' });
            this.getAllfile();
            this.saveInfo(client);
            this.removeInfo(client);
            this.updateInfo(client);
        })
    }
    msg(client, msg) {
        client.emit('user-msg', { msg: msg });
    }
    getAllfile() {
        db.find({}, (err, res) => {
            io.emit('all-local-file-list', res);
        })
    }
    saveInfo(client) {
        client.on('save-info', (info) => {
            let data = {
                host: info.req.hostname,
                path: info.req.path,
                localPath: '/Users/L3ve/backstage/static/backsite/assets/base.js'
            }
            this.findInfo(info.req.hostname, info.req.path)
                .then((count) => {
                    if (count <= 0) {
                        db.insert(data, function (err, newDoc) {
                            io.emit('sys-msg', { msg: '添加本地代理成功!' });
                            io.emit('new-local-file-list', newDoc);
                        });
                    }
                })
        })
    }
    updateInfo(client) {
        client.on('update-info', (res) => {
            db.update({
                host: res.info.host,
                path: res.info.path
            }, {
                    host: res.newInfo.host,
                    path: res.newInfo.path,
                    localPath: res.newInfo.localPath
                }, { multi: true }, (err, num) => {
                    if (num >= 1) {
                        this.getAllfile();
                    }
                })
        })
    }
    removeInfo(client) {
        client.on('remove-info', (info) => {
            db.remove({
                host: info.host,
                path: info.path
            }, { multi: true }, (err, num) => {
                if (num >= 1) {
                    this.getAllfile();
                }
            })
        })
    }
    findInfo(host, path) {
        return new Promise((resolve) => {
            db.count({ host: host, path: path }, (err, count) => {
                resolve(count);
            })
        })
    }
    sendReqAndRes(info) {
        io.emit('req&res-Info', info);
    }
}

export default Io;