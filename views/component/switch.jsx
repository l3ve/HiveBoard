import React, { Component } from 'react';
import './css/switch.css';
class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _cls: props.defaulStatus ? 'checked' : ''
        }
    }
    onSwitch(e) {
        e.stopPropagation();
        const {_cls} = this.state,
            {onChange} = this.props;
        this.setState({
            _cls: _cls ? '' : 'checked'
        });
        onChange(_cls ? '' : 'checked');
    }
    render() {
        const {_cls} = this.state;
        return (
            <div className={'zwei-switch ' + _cls} onClick={(e) => { this.onSwitch(e) } }>
            </div>
        );
    }
}

export default Switch;