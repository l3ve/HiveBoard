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
            infoCls: ''
        }
        this.io = io('http://localhost:3333');

        this.showInfo = this.showInfo.bind(this);
        this.hideAll = this.hideAll.bind(this);
        this.openLocalFileList = this.openLocalFileList.bind(this);
        this.removeLocalFile = this.removeLocalFile.bind(this);
    }
    componentDidMount() {
        //绑定全局事件
        document.body.addEventListener('keyup', (event) => {
            let key = event.keyCode || event.charCode || 0;
            if ([27].indexOf(key) !== -1) {
                this.hideAll();
            }
        });
    }
    componentWillMount() {
        this.io.on('sys-msg', (res) => {
            Tips.show('系统', res.msg);
        })
        this.io.on('user-msg', (res) => {
            Tips.show('用户', res.msg);
        })
        this.io.on('req&res-Info', (res) => {
            let {allProxy} = this.state;
            this.setState({
                allProxy: allProxy.concat(res)
            });
        })
        this.io.on('all-local-file-list', (res) => {
            this.setState({
                localFileList: res
            });
        })
    }
    saveInfo(e, info) {
        e.stopPropagation();
        let {allProxy} = this.state;
        allProxy.forEach((ele, i) => {
            if (ele.req.path == info.req.path && ele.req.hostname == info.req.hostname) {
                ele.where = 'Local';
            }
        });
        this.io.emit('save-info', info);
    }
    showInfo(info) {
        this.setState({
            infoCls: 'showInfo',
            selectProxy: info
        });
    }
    hideAll(e) {
        this.setState({
            infoCls: ''
        });
    }
    openLocalFileList() {
        if (this.state.infoCls == 'openFile') {
            this.setState({
                infoCls: ''
            });
        } else {
            this.setState({
                infoCls: 'openFile'
            });
        }
    }
    removeLocalFile(info) {
        let {allProxy} = this.state;
        allProxy.forEach((ele, i) => {
            if (ele.req.path == info.path && ele.req.hostname == info.host) {
                ele.where = 'Remote';
            }
        });
        this.io.emit('remove-info', info);
    }
    updateInfo(e, info, host, path, localPath) {
        const _newInfo = {
            host: host || info.host,
            path: path || info.path,
            localPath: e.target.innerHTML || localPath || info.localPath
        }
        this.io.emit('update-info', {
            info: info,
            newInfo: _newInfo
        });
    }
    render() {
        let {localFileList, allProxy, selectProxy, infoCls} = this.state;
        const keyForReqHeader = selectProxy.req.headers ? Object.keys(selectProxy.req.headers) : [],
            keyForResHeader = Object.keys(selectProxy.res);
        return (
            <div className='main'>
                <nav className='top-nav'>
                    <i className='local-file-btn' onClick={this.openLocalFileList}></i>
                </nav>
                <div className={'ctx-body ' + infoCls}>
                    <div className='proxy-info'>
                        {allProxy.map((info, i) => {
                            return (
                                <p className='the-one' onClick={() => this.showInfo(info)}>
                                    <span className={'type ' + info.type}>{info.type}</span>
                                    <span className='method'>{info.req.method}:</span>
                                    <span className='url'>http://{info.req.headers.host}{info.req.path}</span>
                                    <span className={'where ' + info.where}>{info.where}</span>
                                    <span className='fn-btn' onClick={(e) => this.saveInfo(e, info)}></span>
                                </p>
                            )
                        })}
                    </div>
                    {
                        infoCls == 'openFile' ? (
                            <div className='local-file animated zoomIn'>
                                <div className='shadow' onClick={this.hideAll} ></div>
                                {
                                    localFileList.map((file) => {
                                        const _host = file.host;
                                        return (
                                            <p className='one'>
                                                <span>{_host}</span>
                                                <span className='http-file-path' contentEditable="true" >{file.path}</span>
                                                <span className='local-file-path' contentEditable="true" onBlur={(e) => this.updateInfo(e, file)}>{file.localPath}</span>
                                                <i className='remove-info' onClick={() => this.removeLocalFile(file)}></i>
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        ) : ''
                    }
                    {
                        infoCls == 'showInfo' ? (
                            <div className='detail-info animated bounceInRight' >
                                <div className='shadow' onClick={this.hideAll} ></div>
                                <div className='center'>
                                    <div className='req'>
                                        <p className='header'>Request</p>
                                        <p className='prop' ><span>method:</span>{selectProxy.req.method}</p>
                                        <p className='prop' ><span>url:</span>{selectProxy.req.hostname}{selectProxy.req.path}</p>
                                        {
                                            keyForReqHeader.map((key) => {
                                                return <p className='prop' ><span>{key}:</span>{selectProxy.req.headers[key]}</p>
                                            })
                                        }
                                    </div>
                                    <div className='res'>
                                        <p className='header'>Response</p>
                                        {
                                            keyForResHeader.map((key) => {
                                                return <p><span>{key}:</span>{selectProxy.res[key]}</p>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        ) : ''
                    }
                </div>
            </div>
        );
    }
}

export default Interface;