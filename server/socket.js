var io = require('socket.io')();
var Datastore = require('nedb'),
    db = new Datastore({ filename: './db/proxy.db', autoload: true });

class Io {
    constructor(props) {
        this.client = null;
        // 代理界面
        io.listen(3333);
        this.start();

        // var doc = {
        //     hello: 'world'
        //     , n: 5
        //     , today: new Date()
        //     , fruits: ['apple', 'orange', 'pear']
        //     , infos: { name: 'nedb' }
        // };
        // db.find({ n: 5 }, (err, res) => {
        // console.log(res);
        // })

    }
    start() {
        io.on('connection', (client) => {
            client.emit('sys-msg', { msg: '已经连接上代理服务器' });
            this.client = client;
            this.saveInfo(client);
        })
    }
    msg(msg) {
        this.client.emit('user-msg', { msg: msg });
    }
    saveInfo(client) {
        client.on('save-info', (info) => {
            db.insert(info, function (err, newDoc) {
                console.log(newDoc);
            });
        })
    }
    sendReqAndRes(info) {
        io.emit('req&res-Info', info);
    }
}

export default Io;