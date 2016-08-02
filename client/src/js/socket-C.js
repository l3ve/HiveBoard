class Io {
    constructor() {
        this.io = false;
        this.init();
    }
    init() {
        this.io = io('http://192.168.72.58:3333');
        this.setPara();
        this.io.on('talk', (res) => {
            console.log(`${res.split(',')[1]}: ${res.split(',')[0]}.`);
        });
        this.io.on('tip', (res) => {
            console.log('系统:'+res);
        });
        this.io.on('newUser', (res) => {
            console.log(`---${res.msg}---`);
            console.log(`当前人数:${res.num}.`);
        });
        this.io.on('leave', (res) => {
            console.log(`---${res.msg}---`);
            console.log(`当前人数:${res.num}.`);
        });
    }
    setPara() {
        if (window.localStorage.name) {
            let _name = window.localStorage.name;
            document.querySelector('.name').setAttribute('value', _name);
            this.send('init', _name);
        }
    }
    send(type, msg={}) {
        this.io.emit(type, msg);
    }
}


export default new Io();