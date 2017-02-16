var DB = require('./db.js'),
    ipcMain = require('electron').ipcMain;

class Io {
    constructor(props) {
        this.proxy = [];
        this.baseLocalPath = '';
        //数据库
        this.db = new DB();
        // 代理界面
        this.start();
    }
    start() {
        this.saveInfo();
        this.removeInfo();
        this.updateInfo();
        this.updateSetting();
        this.removeSetting();
        this.init();
    }
    init(client) {
        ipcMain.on('init', (e) => {
            this.getAllfile(e);
            this.getBaseLocalPath(e);
            this.getFilterStatus(e);
        })
    }
    msg(e,nt) {
        e.sender.send('sys-msg', { msg: nt.msg, tag: nt.tag });
    }
    checkProxy(u) {
        return this.proxy.find((ele, i) => {
            return ele.path == u.path && ele.host == u.hostname && ele.where == 'Local';
        });
    }
    getAllfile(e) {
        this.db.findAll('proxy').then((res) => {
            this.proxy = res;
            e.sender.send('all-local-file-list', res);
        })
    }
    returnLocalPath(proxy) {
        return this.baseLocalPath.map((path) => {
            return path.baseLocalPath + proxy.localPath
        });
    }
    saveInfo() {
        ipcMain.on('change-info', (e,info) => {
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
                                this.msg(e,{ msg: '添加本地代理成功!', tag: 'add-success' });
                                this.getAllfile(e);
                            }
                        });
                    } else {
                        this.db.updateById(info._id, data).then((res) => {
                            if (res >= 1) {
                                this.msg(e,{ msg: '更新本地代理成功!', tag: 'update-success' });
                                this.getAllfile(e);
                            }
                        })
                    }
                })
        })
    }
    updateInfo() {
        ipcMain.on('update-info', (e,res) => {
            let newDate = {
                host: res.newInfo.host || res.info.host,
                path: res.newInfo.path || res.info.path,
                where: res.newInfo.where || res.info.where,
                name: 'proxy',
                localPath: res.newInfo.localPath || res.info.localPath
            }
            this.db.updateById(res.info._id, newDate).then((res) => {
                if (res >= 1) {
                    this.msg(e,{ msg: '更新本地代理成功!', tag: 'update-success' });
                    this.getAllfile(e);
                }
            })
        })
    }
    removeInfo() {
        ipcMain.on('remove-info', (e,info) => {
            this.db.remove(info._id).then((num) => {
                if (num >= 1) {
                    this.msg(e,{ msg: '删除本地代理成功!', tag: 'remove-success' });
                    this.getAllfile(e);
                }
            })
        })
    }
    getBaseLocalPath(e) {
        this.db.findAll('baseLocalPath').then((res) => {
            this.baseLocalPath = res;
            e.sender.send('base-local-path', res);
        })
    }
    getFilterStatus(e) {
        this.db.findAll('filterStatus').then((res) => {
            this.filterStatus = res[0].filterStatus;
            e.sender.send('filter-status', res[0]);
        })
    }
    updateSetting() {
        ipcMain.on('update-base-local-path', (e,res) => {
            this.db.updateById(res.id, {
                name: 'baseLocalPath',
                baseLocalPath: res.path
            }).then((res) => {
                if (res >= 1) {
                    this.msg(e,{ msg: '更新本地代理地址成功!', tag: 'update-localpath-success' });
                    this.getBaseLocalPath(e);
                }
            })
        })
        ipcMain.on('update-filter-type', (e,res) => {
            this.db.updateById(res.id, {
                name: 'filterStatus',
                filterStatus: res.filter
            }).then((res) => {
                if (res >= 1) {
                    this.msg(e,{ msg: '更新过滤设置!', tag: 'update-filter-success' });
                    this.getFilterStatus(e);
                }
            })
        })
    }
    removeSetting() {
        ipcMain.on('remove-base-local-path', (e,info) => {
            this.db.remove(info._id).then((num) => {
                if (num >= 1) {
                    this.msg(e,{ msg: '删除本地代理成功!', tag: 'remove-success' });
                    this.getBaseLocalPath(e);
                }
            })
        })
    }
}

module.exports = Io;