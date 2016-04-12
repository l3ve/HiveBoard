import Io from './socket-C';

let socket = new Io();

document.querySelector('.talk').addEventListener('keydown',(e)=>{
    if (e.keyCode === 13) {
        socket.io.emit('chat message',e.path[0].value)
    }
})
document.querySelector('.name').addEventListener('keydown',(e)=>{
    if (e.keyCode === 13) {
        socket.io.emit('change name',e.path[0].value)
    }
})