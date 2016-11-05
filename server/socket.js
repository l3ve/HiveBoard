var io = require('socket.io')();
var Datastore = require('nedb'),
    db = new Datastore({ filename: './db/proxy.db', autoload: true });

class Io {
    constructor(props) {
        this.client = null;
        // 代理界面
        io.listen(3333);
        this.start();

        // db.find({ n: 5 }, (err, res) => {
        // console.log(res);
        // })

    }
    start() {
        io.on('connection', (client) => {
            client.emit('sys-msg', { msg: '已经连接上代理服务器' });
            this.client = client;
            this.getAllfile();
            this.saveInfo(client);
        })
    }
    msg(msg) {
        this.client.emit('user-msg', { msg: msg });
    }
    getAllfile() {
        db.find({}, (err, res) => {
            io.emit('all-local-file-list',res);
        })
    }
    saveInfo(client) {
        client.on('save-info', (info) => {
            let data = {
                host: info.req.hostname,
                path: info.req.path,
                localPath: '/Users/L3ve/backstage/static/backsite/assets/base.js'
            }
            db.insert(data, function (err, newDoc) {
                io.emit('local-file-list', newDoc);
            });
        })
    }
    sendReqAndRes(info) {
        io.emit('req&res-Info', info);
    }
}

export default Io;