'use strict';
var socketIo = require('socket.io');

class Io {
    constructor() {
        this.io = false;
        this.userName = {};
        this.usedName = ['不幸的佚名酱'];
        this.userNum = 0;
        this.currentRoom = {};
        this.roomList = ['RUO'];
    }
    init(http) {
        this.io = socketIo(http);
        this.ioListen();
    }
    ioListen() {
        this.io.on('connection', (socket) => {
            this.setPara(socket);
            this.changeName(socket);
            this.userMsg(socket);
            this.disconnect(socket);
            this.sysMsg(socket);
        });
    }
    setPara(socket) {
        socket.on('init', (msg) => {
            if (this.usedName.indexOf(msg) == -1) {
                this.userName[socket.id] = msg;
                this.usedName.push(msg);
            } else {
                this.userName[socket.id] = '不幸的佚名酱';
            }
            this.assignRoom(socket);
        })
    }
    changeName(socket) {
        socket.on('changeName', (msg) => {
            if (this.usedName.indexOf(msg) == -1) {
                let nameIndex = this.usedName.indexOf(this.userName[socket.id]);
                this.usedName[nameIndex] = msg;
                this.userName[socket.id] = msg;
                socket.emit('sys message', `赐予汝的新称号 : ${msg}酱`);
            }
            else {
                socket.emit('sys message', `有个煞笔(${msg})和你同名!`);
            }
        });
    }
    assignRoom(socket) {
        // socket.leave(this.currentRoom[socket.id]
        socket.join('RUO', () => {
            this.currentRoom[socket.id] = 'RUO';
            this.newUserNotice(socket);
        });
    }
    newUserNotice(socket) {
        this.userNum++;
        var msg = `野生的${this.userName[socket.id]}酱出现在草丛里!`;
        this.io.to(this.currentRoom[socket.id]).emit('newUser', msg);
    }
    userMsg(socket) {
        socket.on('message', (msg) => {
            msg = `${msg},${this.userName[socket.id]}`;
            this.io.to(this.currentRoom[socket.id]).emit('message', msg);
        });
    }
    sysMsg(socket) {
        socket.on('sys message', (msg) => {
            this.io.to(this.currentRoom[socket.id]).emit('sys message', msg);
        });
    }
    disconnect(socket) {
        socket.on('disconnect', () => {
            var msg = this.userName[socket.id] + ' just left';
            this.io.emit('exit user', msg);
            var nameIndex = this.usedName.indexOf(this.userName[socket.id]);
            delete this.userName[socket.id];
            delete this.usedName[nameIndex];
            socket.leave(this.currentRoom[socket.id]);
            delete this.currentRoom[socket.id];
        });

    }

}



module.exports = new Io();