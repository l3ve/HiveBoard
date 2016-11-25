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
        console.log(this.position);
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
            this.moveWindow(client);
        })
    }
    msg(nt) {
        io.emit('sys-msg', { msg: nt.msg, tag: nt.tag });
    }
    moveWindow(client) {
        client.on('move-window', (position) => {
            if (Math.abs(position.x) > 50 || Math.abs(position.y) > 50) return false;
            this.position[0] += position.x;
            this.position[1] += position.y;
            global.mainWindow.setPosition(this.position[0], this.position[1]);
        })
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
                            if (newDoc) {
                                this.msg({ msg: '添加本地代理成功!', tag: 'add-success' });
                                this.getAllfile();
                            }
                        });
                    } else {
                        this.msg({ msg: '本地代理已存在!', tag: 'add-be' });
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
                        this.msg({ msg: '更新本地代理地址成功!', tag: 'update-localpath-success' });
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