import React, { Component } from 'react';
import io from 'socket.io-client';
import Tips from './notification';

import './css/interface.less';


class Interface extends Component {
    constructor() {
        super();
        this.state = {
            info: []
        }
        this.io = io('http://localhost:3333');
    }
    componentWillMount() {
        this.io.on('sys-msg', (res) => {
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
    render() {
        let {info} = this.state;
        console.log(`info:`, info);
        return (
            <div className='main-body'>
                <nav className='top-nav'></nav>
                <div className='proxy-info'>
                    {info.map((info) => {
                        return (
                            <p className='the-one'>
                                <span className='method'>{info.req.method}:</span>
                                <span className='url'>http://{info.req.headers.host}{info.req.path}</span>
                                <span className={'type '+info.type}>{info.type}</span>
                            </p>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Interface;

