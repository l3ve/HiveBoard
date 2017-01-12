import io from 'socket.io-client';
let instance;


const api = Singleton();
export default api;


function Singleton() {
    if (instance) {
        return instance;
    }
    instance = io('http://localhost:3333');
    return instance;
}