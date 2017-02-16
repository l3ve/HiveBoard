import React, { Component } from 'react';
const {ipcRenderer} = require('electron')

import './css/set';

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseLocalPath: [
                {}
            ]
        }
    }
    componentWillMount() {
        ipcRenderer.on('base-local-path', (e,res) => {
            this.setState({
                baseLocalPath: res
            });
        })
        ipcRenderer.send('init');
    }
    updateBaseLocalPath(e, info) {
        if (e.target.value == info.baseLocalPath) return false;
        e.stopPropagation();
        ipcRenderer.send('update-base-local-path', { id: info._id, path: e.target.value });
    }
    addSet() {
        ipcRenderer.send('update-base-local-path', { path: '/' });
    }
    removeSet(path) {
        ipcRenderer.send('remove-base-local-path', path);
    }
    render() {
        const {baseLocalPath} = this.state;
        return (
            <div className='setting-box animated slideInRight'>
                {
                    baseLocalPath.map((path, i) => {
                        return (
                            <div className='set-one'>
                                <label htmlFor='base-local-path'>本地地址</label>
                                <input key={path.baseLocalPath} id='base-local-path' onBlur={(e) => this.updateBaseLocalPath(e, path)} defaultValue={path.baseLocalPath} />
                                <i className='remove-btn' onClick={() => this.removeSet(path)}></i>
                            </div>
                        )
                    })
                }
                <div className='set-add' onClick={this.addSet}>
                    <label>新增地址</label>
                </div>
            </div>
        );
    }
}

export default Setting;