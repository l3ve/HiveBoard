var io = require('socket.io')();

class Io {
    constructor(props) {
        // 代理界面
        io.listen(3333);
        this.start();
    }
    start() {
        io.on('connection', (client) => {
            client.emit('sys-msg',{msg:'已经连接上代理服务器'})
        });
    }
    sendRequestInfo(info) {
        io.emit('reqInfo',info);
    }
    sendRespondInfo(info) {
        io.emit('resInfo',info);
    }
}

export default Io;