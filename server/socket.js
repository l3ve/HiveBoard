var io = require('socket.io')(),
    Datastore = require('nedb'),
    path = require('path'),
    {app} = require('electron'),
    db = new Datastore({ filename: path.join(app.getPath('userData'), 'proxy.db'), autoload: true });

class Io {
    constructor(props) {
        this.proxy = '';
        this.baseLocalPath = '';
        this.position = global.mainWindow.getPosition();
        // 代理界面
        io.listen(3333);
        this.start();
    }
    start() {
        io.on('connection', (client) => {
            this.msg({ msg: '已经连接上代理服务器', tag: 'connection-success' })
            this.getAllfile();
            this.getBaseLocalPath();
            this.saveInfo(client);
            this.removeInfo(client);
            this.updateInfo(client);
            this.updateBaseLocalPath(client);
        })
    }
    msg(nt) {
        io.emit('sys-msg', { msg: nt.msg, tag: nt.tag });
    }
    checkProxy(u) {
        return this.proxy.find((ele, i) => {
            return ele.path == u.path && ele.host == u.hostname && ele.where == 'Local';
        });
    }
    getAllfile() {
        db.find({ name: 'proxy' }, (err, res) => {
            this.proxy = res;
            io.emit('all-local-file-list', res);
        })
    }
    returnLocalPath(proxy) {
        return this.baseLocalPath + proxy.localPath;
    }
    saveInfo(client) {
        client.on('change-info', (info) => {
            let data = {
                host: info.req.hostname,
                path: info.req.path,
                where: info.where,
                name: 'proxy',
                localPath: info.req.path
            }
            this.findInfo({ name: 'proxy', host: info.req.hostname, path: info.req.path })
                .then((count) => {
                    if (count <= 0) {
                        db.insert(data, (err, newDoc) => {
                            if (newDoc) {
                                this.msg({ msg: '添加本地代理成功!', tag: 'add-success' });
                                this.getAllfile();
                            }
                        });
                    } else {
                        this.msg({ msg: data, tag: 'add-be' });
                    }
                })
        })
    }
    updateInfo(client) {
        client.on('update-info', (res) => {
            db.update({
                _id: res.info._id
            }, {
                    host: res.newInfo.host || res.info.host,
                    path: res.newInfo.path || res.info.path,
                    where: res.newInfo.where || res.info.where,
                    name: 'proxy',
                    localPath: res.newInfo.localPath || res.info.localPath
                }, { multi: true, upsert: true }, (err, num) => {
                    if (num >= 1) {
                        this.msg({ msg: '更新本地代理成功!', tag: 'update-success' });
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
                    this.msg({ msg: '删除本地代理成功!', tag: 'remove-success' });
                    this.getAllfile();
                }
            })
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
    updateBaseLocalPath(client) {
        client.on('update-base-local-path', (res) => {
            db.update({
                name: 'baseLocalPath',
            }, {
                    name: 'baseLocalPath',
                    baseLocalPath: res.path
                }, { upsert: true }, (err, num) => {
                    if (num >= 1) {
                        this.msg({ msg: '更新本地代理地址成功!', tag: 'update-localpath-success' });
                        this.getBaseLocalPath();
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

module.exports = Io;