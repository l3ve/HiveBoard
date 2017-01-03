import React, { Component } from 'react';
import io from 'socket.io-client';
import Switch from './component/switch';

import './css/proxyList';

class ProxyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            proxyFile: []
        };
        this.io = io('http://localhost:3333');
    }
    componentWillMount() {
        this.io.on('all-local-file-list', (res) => {
            this.setState({
                proxyFile: res
            });
        })
    }
    updateInfo(info, i, status) {
        let _newInfo = {};
        // if (this.refs['hfp-' + i].innerHTML == info.path && this.refs['lfp-' + i].innerHTML == info.localPath) return false;
        if (!status) {
            _newInfo = {
                host: info.host,
                path: this.refs['hfp-' + i].innerHTML || info.path,
                localPath: this.refs['lfp-' + i].innerHTML || info.localPath
            }
        } else {
            _newInfo = {
                where: status == 'checked' ? 'Local' : 'Remote'
            }
        }
        this.io.emit('update-info', {
            info: info,
            newInfo: _newInfo
        });
    }
    removeLocalFile(info) {
        this.io.emit('remove-info', info);
    }
    render() {
        const {proxyFile} = this.state;
        return (
            <div className='proxy-file animated zoomIn'>
                <div className='shadow'></div>
                {
                    proxyFile.map((file, i) => {
                        const _host = file.host;
                        return (
                            <p key={'lf-' + i} className='one'>
                                <span>{_host}</span>
                                <span ref={'hfp-' + i} className='http-file-path' contentEditable="true" suppressContentEditableWarning={true} onBlur={() => this.updateInfo(file, i)} >{file.path}</span><br />
                                <span ref={'lfp-' + i} className='local-file-path' contentEditable="true" suppressContentEditableWarning={true} onBlur={() => this.updateInfo(file, i)} >{file.localPath}</span>
                                <i className='remove-info' onClick={() => this.removeLocalFile(file)}></i>
                                <Switch defaulStatus={file.where == 'Local'} onChange={(status) => this.updateInfo(file, i, status)} />
                            </p>
                        )
                    })
                }
            </div>
        );
    }
}

export default ProxyList;