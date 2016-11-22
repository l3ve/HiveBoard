var io = require('socket.io')();
var Datastore = require('nedb'),
    db = new Datastore({ filename: './db/proxy.db', autoload: true });

class Io {
    constructor(props) {
        this.proxy = '';
        this.baseLocalPath = '';
        // 代理界面
        io.listen(3333);
        this.start();
    }
    start() {
        io.on('connection', (client) => {
            client.emit('sys-msg', { msg: '已经连接上代理服务器' });
            this.getAllfile();
            this.getBaseLocalPath();
            this.saveInfo(client);
            this.removeInfo(client);
            this.updateInfo(client);
            this.updateBaseLocalPath(client);
        })
    }
    msg(msg) {
        io.emit('user-msg', { msg: msg });
    }
    checkProxy(u) {
        return this.proxy.find((ele, i) => {
            return ele.path == u.path && ele.host == u.hostname;
        });
    }
    getAllfile() {
        db.find({ name: 'proxy' }, (err, res) => {
            this.proxy = res;
            io.emit('all-local-file-list', res);
        })
    }
    getBaseLocalPath() {
        db.find({ name: 'baseLocalPath' }, (err, res) => {
            if (res.length) {
                this.baseLocalPath = res[0].baseLocalPath;
                io.emit('base-local-path', res[0].baseLocalPath);
            }
        })
    }
    saveInfo(client) {
        client.on('save-info', (info) => {
            let data = {
                host: info.req.hostname,
                path: info.req.path,
                name: 'proxy',
                localPath: this.baseLocalPath
            }
            this.findInfo({ name: 'proxy', host: info.req.hostname, path: info.req.path })
                .then((count) => {
                    if (count <= 0) {
                        db.insert(data, (err, newDoc) => {
                            io.emit('sys-msg', { msg: '添加本地代理成功!' });
                            if (newDoc) {
                                this.getAllfile();
                            }
                        });
                    } else {
                        io.emit('sys-msg', { msg: '本地代理已存在!' });
                    }
                })
        })
    }
    updateBaseLocalPath(client) {
        client.on('update-base-local-path', (res) => {
            db.update({
                name: 'baseLocalPath',
            }, {
                    name: 'baseLocalPath',
                    baseLocalPath: res.path
                }, { upsert: true }, (err, num) => {
                    if (num >= 1) {
                        this.getBaseLocalPath();
                    }
                })
        })
    }
    updateInfo(client) {
        client.on('update-info', (res) => {
            db.update({
                _id: res.info._id
            }, {
                    name: 'proxy',
                    host: res.newInfo.host,
                    path: res.newInfo.path,
                    localPath: res.newInfo.localPath
                }, { multi: true, upsert: true }, (err, num) => {
                    if (num >= 1) {
                        this.getAllfile();
                    }
                })
        })
    }
    removeInfo(client) {
        client.on('remove-info', (info) => {
            db.remove({
                _id: info._id
            }, { multi: true }, (err, num) => {
                if (num >= 1) {
                    this.getAllfile();
                }
            })
        })
    }
    findInfo(obj) {
        return new Promise((resolve) => {
            db.count(obj, (err, count) => {
                resolve(count);
            })
        })
    }
    sendReqAndRes(info) {
        io.emit('req&res-Info', info);
    }
}

export default Io;