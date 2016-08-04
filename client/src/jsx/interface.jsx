import React, {Component, PropTypes} from 'react';
import Io from './js/socket-C';
import Canvas from './js/canvas';

import './css/interface';

class Interface extends Component {
    componentDidMount() {
        let socket = new Io(),
            canvas = new Canvas('canvas');

        document.querySelector('.talk').addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                socket.send('talk', e.path[0].value);
            }
        });
        document.querySelector('.room').addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                canvas.clear();
                // canvas.removeListenerEvent();
            }
        });
        document.querySelector('.name').addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                window.localStorage.name = e.path[0].value;
                socket.send('changeName', e.path[0].value);
            }
        });
    }
    render() {
        return (
            <div className='interface'>
                <div className="setting">
                    <input type="text" className="name" placeholder="名字"/>
                    <input type="text" className="room" placeholder="房间号"/>
                </div>
                <div className="game-box">
                    <canvas id="canvas"></canvas>
                </div>
                <div className="footer">
                    <input type="text" className="talk" placeholder="说点什么屁话吧~"/>
                </div>
            </div>
        );
    }
}

Interface.propTypes = {

};

export default Interface;