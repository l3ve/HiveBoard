import View from './view';
class Io {
    constructor() {
        this.io = false;
        this.init();
    }
    init() {
        this.io = io('http://192.168.4.191:3333');
        this.setPara();
        this.io.on('message', (msg) => {
            View.renderTalk(msg);
        });
        this.io.on('sys message', (msg) => {
            View.renderSysTip(msg);
        });
        this.io.on('newUser', (msg) => {
            View.renderCtxTip(msg);
        });
    }
    setPara() {
        if (window.localStorage.name) {
            let _name = window.localStorage.name;
            document.querySelector('.name').setAttribute('value', _name);
            this.send('init', _name);
        }
    }
    send(type, msg,) {
        this.io.emit(type, msg);
    }
}


export default new Io();