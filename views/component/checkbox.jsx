import React, { Component } from 'react';
import './css/checkbox';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchStatus: props.status || 'on'
        }
        this.click = this.click.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.status != this.props.status) {
            this.setState({
                switchStatus: nextProps.status
            });
        }
    }
    click() {
        const {click, label} = this.props;
        this.setState((preState) => {
            if (preState.switchStatus == 'off') {
                click(label, 'on');
                return {
                    switchStatus: 'on'
                }
            } else {
                click(label, 'off');
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