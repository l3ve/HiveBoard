import React, {Component, PropTypes} from 'react';
import Io from './js/socket-C';
import Canvas from './js/canvas';

import './css/interface';

class Interface extends Component {
    constructor() {
        super();
        this.state = {
            cur: '0'
        }
        this.chessType = [
            {
                name: '蜂后',
                num: '1',
                type: '1'
            }, {
                name: '蚂蚁',
                num: '3',
                type: '2'
            }, {
                name: '甲虫',
                num: '2',
                type: '3'
            }, {
                name: '蟋蟀',
                num: '3',
                type: '4'
            }, {
                name: '蜘蛛',
                num: '2',
                type: '5'
            }, {
                name: '蚊子',
                num: '1',
                type: '6'
            }, {
                name: '瓢虫',
                num: '1',
                type: '7'
            }, {
                name: '鼠妇',
                num: '1',
                type: '8'
            }
        ]
        this.socket = '';
        this.canvas = '';
        this.talk = this.talk.bind(this);
        this.changeName = this.changeName.bind(this);
    }
    componentDidMount() {
        // this.socket = new Io();
        this.canvas = new Canvas('canvas');
    }
    changeName(e) {
        if (e.keyCode === 13) {
            // window.localStorage.name = this.refs.name.value;
            // this.socket.send('changeName', this.refs.name.value);
            this.canvas.stop();
        }
    }
    talk(e) {
        if (e.keyCode === 13) {
            this.canvas.debugDrawlauyout();
            // canvas.clear();
            // canvas.removeListenerEvent();
            // this.socket.send('talk', this.refs.talk.value);
            // this.refs.talk.value = '';
        }
    }
    chooseType(type) {
        const {cur} = this.state;
        if(cur == type) {
            type = '0';
        }
        this.setState({
            cur: type
        });
        this.canvas.switchType(type);
    }
    render() {
        const {cur} = this.state;
        return (
            <div className='interface'>
                <div className="setting">
                    <input type="text" ref='name' className="name" onKeyDown={this.changeName} placeholder="名字"/>
                    <input type="text" className="room" placeholder="房间号"/>
                </div>
                <div className="game-box">
                    <canvas id="canvas"></canvas>
                </div>
                <div className='chess-type-box'>
                    {this.chessType.map((chess) => {
                        let cls = '';
                        if (cur == chess.type) {
                            cls = 'cur'
                        }
                        return (
                            <div className={'chess-type ' + cls} onClick={() => this.chooseType(chess.type) }>{chess.name}</div>
                        )
                    }) }
                </div>
                <div className="footer">
                    <input type="text" ref='talk' className="talk" onKeyDown={this.talk} placeholder="说点什么屁话吧~"/>
                </div>
            </div>
        );
    }
}

Interface.propTypes = {

};

export default Interface;