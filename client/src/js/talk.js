import Io from './socket-C';
import Canvas from './canvas';

let socket = Io,
    canvas = new Canvas('canvas');

document.querySelector('.talk').addEventListener('keydown',(e)=>{
    if (e.keyCode === 13) {
        socket.send('talk',e.path[0].value);
    }
});
document.querySelector('.room').addEventListener('keydown',(e)=>{
    if (e.keyCode === 13) {
        canvas.clear();
        // canvas.removeListenerEvent();
    }
});
document.querySelector('.name').addEventListener('keydown',(e)=>{
    if (e.keyCode === 13) {
        window.localStorage.name = e.path[0].value;
        socket.send('changeName',e.path[0].value);
    }
});
