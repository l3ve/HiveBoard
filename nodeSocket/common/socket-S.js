'use strict';
var socketIo = require('socket.io');

class Io {
    constructor() {
        this.io = false;
        this.userName = {};
        this.usedName = [];
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
            this.assignRoom(socket);
            socket.on('change room', (msg) => {
                this.changeRoom(socket, msg);
            });
            this.sysMsg(socket);
            this.userMsg(socket);
            this.changeName(socket);
            this.disconnect(socket);
        });
    }

    userMsg(socket) {
        socket.on('chat message', (msg) => {
            msg = this.userName[socket.id] + ' said: ' + msg;
            this.io.to(this.currentRoom[socket.id]).emit('chat message', msg);
        });
    }

    sysMsg(socket) {
        socket.on('sys message', (msg) => {
            this.io.to(this.currentRoom[socket.id]).emit('sys message', msg);
        });
    }

    assignGuestName(socket) {
        this.userName[socket.id] = 'Guest' + this.userNum;
        this.usedName.push('Guest' + this.userNum);
        this.userNum++;
        var msg = this.userName[socket.id] + ' enter the room! Welcome!';
        this.io.to(this.currentRoom[socket.id]).emit('new user', msg);
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

    changeName(socket) {
        socket.on('change name', (msg) => {
            if (this.usedName.indexOf(msg) == -1) {
                var nameIndex = this.usedName.indexOf(this.userName[socket.id]);
                this.userName[socket.id] = msg;
                this.usedName[nameIndex] = msg;
                socket.emit('sys message', 'Your name has been changed as ' + msg);
            }
            else {
                socket.emit('sys message', 'Your name has been used');
            }

        });
    }

    assignRoom(socket) {
        socket.join('RUO', () => {
            this.currentRoom[socket.id] = 'RUO';
            this.assignGuestName(socket);
            socket.emit('room list', this.roomList);
        });
    }

    changeRoom(socket, msg) {
        var sysMsg = this.userName[socket.id] + ' left room ' + this.currentRoom[socket.id];
        this.io.to(this.currentRoom[socket.id]).emit('sys message', sysMsg);
        if (msg != 'room') {
            socket.leave(this.currentRoom[socket.id], () => {
                var isExist = false;
                if (this.currentRoom[socket.id] !== 'RUO') {
                    for (key in this.currentRoom) {
                        if (key == socket.id) {
                            continue;
                        }
                        if (this.currentRoom[key] === this.currentRoom[socket.id]) {
                            isExist = true;
                            break;
                        }
                    }
                }
                else {
                    isExist = true;
                }
                if (isExist === false) {
                    var roomIndex = this.roomList.indexOf(this.currentRoom[socket.id]);
                    console.log(roomIndex);
                    this.roomList.splice(roomIndex, 1);
                }
                console.log(isExist + '-' + this.roomList);
                socket.join(msg);
                this.currentRoom[socket.id] = msg;
                sysMsg = this.userName[socket.id] + ' join room ' + this.currentRoom[socket.id];
                if (this.roomList.indexOf(msg) == -1) {
                    this.roomList.push(msg);
                }
                socket.emit('sys message', sysMsg);
                socket.emit('change room name', { 'msg': msg, 'roomList': this.roomList });
                this.io.emit('room list', this.roomList);
            });
        }
        else {
            socket.emit('sys message', '无法加入房间room！');
        }
    }
    successCallback(msg) {
        // socket.emit('sys message', msg);
    }
}



module.exports = new Io();