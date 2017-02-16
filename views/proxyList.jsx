import React, { Component } from 'react';
const {ipcRenderer} = require('electron')
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
        ipcRenderer.on('all-local-file-list', (e,res) => {
            this.setState({
                proxyFile: res
            });
        })
        ipcRenderer.send('init');
    }
    updateInfo({info, i, status}) {
        let _newInfo = {},
            {proxyFile} = this.state;
        if (this.refs['hfp-' + i].innerHTML == proxyFile[i].path && this.refs['lfp-' + i].innerHTML == proxyFile[i].localPath && !status) return false;
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
        ipcRenderer.send('update-info', {
            info: info,
            newInfo: _newInfo
        });
    }
    removeLocalFile(info) {
        ipcRenderer.send('remove-info', info);
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