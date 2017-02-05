import React, { Component } from 'react';
import io from './js/socket_client';

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
        io.on('base-local-path', (res) => {
            this.setState({
                baseLocalPath: res
            });
        })
        io.emit('init');
    }
    updateBaseLocalPath(e, info) {
        if (e.target.value == info.baseLocalPath) return false;
        e.stopPropagation();
        io.emit('update-base-local-path', { id: info._id, path: e.target.value });
    }
    addSet() {
        io.emit('update-base-local-path', { path: '/' });
    }
    removeSet(path) {
        io.emit('remove-base-local-path', path);
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