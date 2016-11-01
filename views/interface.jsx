import React, { Component } from 'react';
import io from 'socket.io-client';
import Tips from './notification';

import './css/interface.less';


class Interface extends Component {
    constructor() {
        super();
        this.state = {
            info: [],
            switchCls: ''
        }
        this.io = io('http://localhost:3333');

        this.showInfo = this.showInfo.bind(this);
        this.hideInfo = this.hideInfo.bind(this);
    }
    componentWillMount() {
        this.io.on('sys-msg', (res) => {
            Tips.show(res.msg);
        })
        this.io.on('user-msg', (res) => {
            Tips.show(res.msg);
        })
        this.io.on('req&res-Info', (res) => {
            let {info} = this.state;
            this.setState({
                info: info.concat(res)
            });
        })
    }
    send(_data) {
        this.io.emit('set', _data);
    }
    showInfo() {
        this.setState({
            switchCls: 'bounceInRight show'
        });
    }
    hideInfo(e) {
        this.setState({
            switchCls: 'bounceOutRight show'
        });
    }
    render() {
        let {info,switchCls} = this.state;
        return (
            <div className='main-body'>
                <nav className='top-nav'></nav>
                <div className='proxy-info'>
                    {info.map((info) => {
                        return (
                            <p className='the-one' onClick={this.showInfo}>
                                <span className='method'>{info.req.method}:</span>
                                <span className='url'>http://{info.req.headers.host}{info.req.path}</span>
                                <span className={'type '+info.type}>{info.type}</span>
                            </p>
                        )
                    })}
                </div>
                <div className={'save-info  animated '+ switchCls} >
                    <div className='shadow' onClick={this.hideInfo}></div>
                    <div className='body'>

                    </div>
                </div>
            </div>
        );
    }
}

export default Interface;

