class Io {
    constructor() {
        this.io = false;
        this.talkBox = document.querySelector('.msg-box ul');
        this.init();
    }
    init() {
        this.io = io('http://localhost:3333');
        this.io.on('room list', (list) => {
            console.log('room list: ' + list);
        });
        this.io.on('chat message', (msg) => {
            console.log(msg);
            let _li = document.createElement('li');
            _li.innerHTML = msg;
            this.talkBox.appendChild(_li);
        });
        this.io.on('sys message', (msg) => {
            this.renderLi(msg);
        });
        this.io.on('new user', (msg) => {
            this.renderLi(msg);
        });
    }
    renderLi(content) {
        let _li = document.createElement('li');
        _li.innerHTML = content;
        this.talkBox.appendChild(_li);
    }
}


export default Io;