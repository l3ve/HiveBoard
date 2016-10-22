import React, { Component } from 'react';
import io from 'socket.io-client';
import Tips from './notification';

import './interface.less';


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
        let {sysMsg, info} = this.state;
        console.log(`info:`,info);
        return (
            <div>
                <h1>{sysMsg}</h1>
                {info.map((info) => {
                    return (
                        <div className='proxy-info'>
                            <p><span>hostname:</span> {info.req.hostname}</p>
                            <p><span>path:</span> {info.req.path}</p>
                            <p><span>method:</span> {info.req.method}</p>
                            <p><span>host:</span> {info.req.headers.host}</p>
                            <p><span>accept:</span> {info.req.headers.accept}</p>
                            <p><span>type:</span>{info.type}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Interface;

