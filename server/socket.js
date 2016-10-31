var io = require('socket.io')();
var Datastore = require('nedb'),
    db = new Datastore({ filename: './db/proxy.db', autoload: true });

class Io {
    constructor(props) {
        // 代理界面
        io.listen(3333);
        this.start();



        var doc = {
            hello: 'world'
            , n: 5
            , today: new Date()
            , fruits: ['apple', 'orange', 'pear']
            , infos: { name: 'nedb' }
        };
        db.find({n:5},(err,res)=>{
            console.log(res);
        })
        // db.insert(doc, function (err, newDoc) {   // Callback is optional
        //     // newDoc is the newly inserted document, including its _id
        //     // newDoc has no key called notToBeSaved since its value was undefined
        //     console.log(newDoc);
        // });
    }
    start() {
        io.on('connection', (client) => {
            client.emit('sys-msg', { msg: '已经连接上代理服务器' });
        })
    }
    sendReqAndRes(info) {
        io.emit('req&res-Info', info);
    }
}

export default Io;