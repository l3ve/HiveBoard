var io = require('socket.io')(),
    DB = require('./db.js');

class Io {
    constructor(props) {
        this.proxy = [];
        this.baseLocalPath = '';
        //数据库
        this.db = new DB();
        // 代理界面
        io.listen(3333);
        this.start();
    }
    start() {
        io.on('connection', (client) => {
            this.msg({ msg: '已经连接上代理服务器', tag: 'connection-success' })
            this.saveInfo(client);
            this.removeInfo(client);
            this.updateInfo(client);
            this.updateSetting(client)
            this.init(client);
        })
    }
    init(client) {
        client.on('init', () => {
            this.getAllfile();
            this.getBaseLocalPath();
            this.getFilterStatus();
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
        this.db.findAll('proxy').then((res) => {
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
                localPath: info.localPath || info.req.path
            }
            this.db.isBe({ name: 'proxy', host: info.req.hostname, path: info.req.path })
                .then((count) => {
                    if (count <= 0) {
                        this.db.insert(data).then((newDoc) => {
                            if (newDoc) {
                                this.msg({ msg: '添加本地代理成功!', tag: 'add-success' });
                                this.getAllfile();
                            }
                        });
                    } else {
                        this.db.updateById(info._id, data).then((res) => {
                            if (res >= 1) {
                                this.msg({ msg: '更新本地代理成功!', tag: 'update-success' });
                                this.getAllfile();
                            }
                        })
                    }
                })
        })
    }
    updateInfo(client) {
        client.on('update-info', (res) => {
            let newDate = {
                host: res.newInfo.host || res.info.host,
                path: res.newInfo.path || res.info.path,
                where: res.newInfo.where || res.info.where,
                name: 'proxy',
                localPath: res.newInfo.localPath || res.info.localPath
            }
            this.db.updateById(res.info._id, newDate).then((res) => {
                if (res >= 1) {
                    this.msg({ msg: '更新本地代理成功!', tag: 'update-success' });
                    this.getAllfile();
                }
            })
        })
    }
    removeInfo(client) {
        client.on('remove-info', (info) => {
            this.db.remove(info._id).then((num) => {
                if (num >= 1) {
                    this.msg({ msg: '删除本地代理成功!', tag: 'remove-success' });
                    this.getAllfile();
                }
            })
        })
    }
    getBaseLocalPath() {
        this.db.findAll('baseLocalPath').then((res) => {
            this.baseLocalPath = res[0].baseLocalPath;
            io.emit('base-local-path', res);
        })
    }
    getFilterStatus() {
        this.db.findAll('filterStatus').then((res) => {
            this.filterStatus = res[0].filterStatus;
            io.emit('filter-status', res[0]);
        })
    }
    updateSetting(client) {
        client.on('update-base-local-path', (res) => {
            this.db.updateById(res.id, {
                name: 'baseLocalPath',
                baseLocalPath: res.path
            }).then((res) => {
                if (res >= 1) {
                    this.msg({ msg: '更新本地代理地址成功!', tag: 'update-localpath-success' });
                    this.getBaseLocalPath();
                }
            })
        })
        client.on('update-filter-type', (res) => {
            this.db.updateById(res.id, {
                name: 'filterStatus',
                filterStatus: res.filter
            }).then((res) => {
                if (res >= 1) {
                    this.msg({ msg: '更新过滤设置!', tag: 'update-filter-success' });
                    this.getFilterStatus();
                }
            })
        })
    }
    sendReqAndRes(info) {
        io.emit('req&res-Info', info);
    }
}

module.exports = Io;