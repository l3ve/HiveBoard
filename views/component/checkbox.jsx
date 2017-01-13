import React, { Component } from 'react';
import './css/checkbox';

class Checkbox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {label, target} = this.props;
        const _css = {
            strokeDasharray:' 126.37, 126.37',
            strokeDashoffset: 0,
            transition: 'stroke-dashoffset 0.2s ease-in-out 0s'
        }
        return (
            <div className='checkbox-box'>
                <input type="checkbox" id={target} />
                <label htmlFor={target}><i></i>{label}</label>
            </div>
        );
    }
}
Checkbox.defaultProps = {
    label: 'HTML',
    target: 'id-' + Date.now()
}

export default Checkbox;