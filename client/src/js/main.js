import Io from './socket-C';

let socket = Io;

document.querySelector('.talk').addEventListener('keydown',(e)=>{
    if (e.keyCode === 13) {
        socket.send('message',e.path[0].value)
    }
});
document.querySelector('.name').addEventListener('keydown',(e)=>{
    if (e.keyCode === 13) {
        window.localStorage.name = e.path[0].value;
        socket.send('changeName',e.path[0].value);
    }
});