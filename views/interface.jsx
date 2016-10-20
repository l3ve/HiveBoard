import React, { Component } from 'react';
import io from 'socket.io-client';
import './interface.less';

class Interface extends Component {
    constructor() {
        super();
        this.state = {
            sysMsg: '初始化状态',
            reqInfo: [],
            resInfo: []
        }
        this.io = io('http://localhost:3333');
    }
    componentWillMount() {
        this.io.on('sys-msg', (res) => {
            this.setState({
                sysMsg: res.msg
            });
        })
        this.io.on('reqInfo', (res) => {
            let {reqInfo} = this.state;
            this.setState({
                reqInfo: reqInfo.concat(res)
            });
        })
        this.io.on('resInfo', (res) => {
            let {resInfo} = this.state;
            this.setState({
                resInfo: resInfo.concat(res)
            });
        })
    }
    send(_data) {
        this.io.emit('set', _data);
    }
    render() {
        let {sysMsg, reqInfo, resInfo} = this.state;
        console.log(`req:`,reqInfo);
        console.log(`res:`,resInfo);
        return (
            <div>
                <h1>{sysMsg}</h1>
                {reqInfo.map((info) => {
                    return (
                        <div className='one'>
                            <p>{info.hostname}</p>
                            <p>{info.path}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Interface;

