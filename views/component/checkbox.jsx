import React, { Component } from 'react';
import './css/checkbox';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchStatus: 'off'
        }
        this.click = this.click.bind(this);
    }
    click() {
        this.setState((preState) => {
            if (preState.switchStatus == 'off') {
                return {
                    switchStatus: 'on'
                }
            } else {
                return {
                    switchStatus: 'off'
                }
            }
        });
    }
    render() {
        const {label, target} = this.props,
            {switchStatus} = this.state;
        return (
            <div className={'checkbox-box ' + switchStatus} onClick={this.click}>
                <span>{label}</span>
            </div>
        );
    }
}
Checkbox.defaultProps = {
    label: 'HTML'
}

export default Checkbox;