import React, { Component } from 'react';
import io from 'socket.io-client';

import './css/set';

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseLocalPath: [
                {}
            ]
        }
        this.io = io('http://localhost:3333');
    }
    componentWillMount() {
        this.io.on('base-local-path', (res) => {
            this.setState({
                baseLocalPath: res
            });
        })
    }
    updateBaseLocalPath(e, info) {
        e.stopPropagation();
        this.io.emit('update-base-local-path', { id: info[0]._id, path: e.target.value });
    }
    render() {
        const {baseLocalPath} = this.state;
        return (
            <div className='setting-box animated slideInRight'>
                <div className='set-one'>
                    <label htmlFor='base-local-path'>本地地址</label>
                    <input key={baseLocalPath[0].baseLocalPath} id='base-local-path' onBlur={(e) => this.updateBaseLocalPath(e, baseLocalPath)} defaultValue={baseLocalPath[0].baseLocalPath} />
                </div>
            </div>
        );
    }
}

export default Setting;