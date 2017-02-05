import React, { Component } from 'react';
import io from './js/socket_client';
import Switch from './component/switch';

import './css/proxyList';

class ProxyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            proxyFile: []
        };
    }
    componentWillMount() {
        io.on('all-local-file-list', (res) => {
            this.setState({
                proxyFile: res
            });
        })
        io.emit('init');
    }
    updateInfo({info, i, status}) {
        let _newInfo = {},
            {proxyFile} = this.state;
        if (this.refs['hfp-' + i].innerHTML  == proxyFile[i].path && this.refs['lfp-' + i].innerHTML == proxyFile[i].localPath) return false;
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
        io.emit('update-info', {
            info: info,
            newInfo: _newInfo
        });
    }
    removeLocalFile(info) {
        io.emit('remove-info', info);
    }
    render() {
        const {proxyFile} = this.state;
        return (
            <div className='proxy-file animated zoomIn'>
                <div className='shadow'></div>
                {
                    proxyFile.map((info, i) => {
                        return (
                            <p key={'lf-' + i} className='one'>
                                <span>{info.host}</span>
                                <span ref={'hfp-' + i} className='http-file-path' contentEditable="true" suppressContentEditableWarning={true} onBlur={() => this.updateInfo({info, i})} >{info.path}</span><br />
                                <span ref={'lfp-' + i} className='local-file-path' contentEditable="true" suppressContentEditableWarning={true} onBlur={() => this.updateInfo({info, i})} >{info.localPath}</span>
                                <i className='remove-info' onClick={() => this.removeLocalFile(info)}></i>
                                <Switch defaulStatus={info.where == 'Local'} onChange={(status) => this.updateInfo({info, i, status})} />
                            </p>
                        )
                    })
                }
            </div>
        );
    }
}

export default ProxyList;