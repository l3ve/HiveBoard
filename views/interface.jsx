import React, { Component } from 'react';
import io from 'socket.io-client';
import Tips from './notification';

import './css/interface.less';


class Interface extends Component {
    constructor() {
        super();
        this.state = {
            allProxy: [],
            localFileList: [],
            selectProxy: {
                req: {},
                res: {}
            },
            infoCls: 'hidden'
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
            let {allProxy} = this.state;
            this.setState({
                allProxy: allProxy.concat(res)
            });
        })
        this.io.on('new-local-file-list', (res) => {
            let {localFileList} = this.state;
            localFileList.push(res);
            this.setState({
                localFileList: localFileList
            });
        })
        this.io.on('all-local-file-list', (res) => {
            this.setState({
                localFileList: res
            });
        })
    }
    saveInfo(e,i) {
        e.stopPropagation();
        const {allProxy} = this.state;
        this.io.emit('save-info', allProxy[i]);
    }
    showInfo(i) {
        const {allProxy} = this.state;
        this.setState({
            infoCls: 'show',
            selectProxy: allProxy[i]
        });
    }
    hideInfo(e) {
        this.setState({
            infoCls: 'hidden'
        });
    }
    openLocalFileList() {

    }
    render() {
        let {localFileList,allProxy,selectProxy,infoCls} = this.state;
        const keyForReqHeader = selectProxy.req.headers?Object.keys(selectProxy.req.headers):[],
            keyForResHeader = Object.keys(selectProxy.res);
        return (
            <div className='main-body'>
                <nav className='top-nav'>
                    <i className='local-file-btn' onClick={this.openLocalFileList}></i>
                </nav>
                <div className='proxy-info'>
                    {allProxy.map((info,i) => {
                        return (
                            <p className='the-one' onClick={()=>this.showInfo(i)}>
                                <span className='method'>{info.req.method}:</span>
                                <span className='url'>http://{info.req.headers.host}{info.req.path}</span>
                                <span className={'type '+info.type}>{info.type}</span>
                                <span className='fn-btn tada animated' onClick={(e)=>this.saveInfo(e,i)}></span>
                            </p>
                        )
                    })}
                </div>
                <div className='local-file'>
                    {
                        localFileList.map((file)=>{
                            return (
                                <p>
                                    <span>{file.path}</span>
                                    <span>{file.localPath}</span>
                                </p>
                            )
                        })
                    }
                </div>
                <div className={'detail-info '+ infoCls} >
                    <div className='shadow' onClick={this.hideInfo}></div>
                    <div className={'body animated bounceInRight'}>
                        <div className='req'>
                            <p className='header'>Request</p>
                            <p><span>method:</span>{selectProxy.req.method}</p>
                            <p><span>url:</span>{selectProxy.req.hostname}{selectProxy.req.path}</p>
                            {
                                keyForReqHeader.map((key)=>{
                                    return <p><span>{key}:</span>{selectProxy.req.headers[key]}</p>
                                })
                            }
                        </div>
                        <div className='res'>
                            <p className='header'>Response</p>
                            {
                                keyForResHeader.map((key)=>{
                                    return <p><span>{key}:</span>{selectProxy.res[key]}</p>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Interface;