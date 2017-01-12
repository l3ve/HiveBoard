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
        e.stopPropagation();
        io.emit('update-base-local-path', { id: info[0]._id, path: e.target.value });
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