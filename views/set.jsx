import React, { Component } from 'react';
import io from 'socket.io-client';

import './css/set';

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseLocalPath:''
        }
        this.io = io('http://localhost:3333');
    }
    componentWillMount() {
        this.io.on('base-local-path', (path) => {
            this.setState({
                baseLocalPath: path
            });
        })
    }
    updateBaseLocalPath(e, info) {
        e.stopPropagation();
        this.io.emit('update-base-local-path', { path: e.target.value });
    }
    render() {
        const {baseLocalPath}=this.state;
        return (
            <div className='setting-box animated slideInRight'>
                <div className='set-one'>
                    <label htmlFor='base-local-path'>本地地址</label>
                    <input key={baseLocalPath} id='base-local-path' onBlur={(e) => this.updateBaseLocalPath(e)} defaultValue={baseLocalPath} />
                </div>
            </div>
        );
    }
}

export default Setting;