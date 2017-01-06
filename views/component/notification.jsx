import React, { Component } from 'react';

class Notice extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        const {duration} = this.props;
        if (duration) {
            this.closeTimer = setTimeout(() => {
                this.close();
            }, duration * 1000);
        }
    }
    componentWillUnmount() {
        this.clearCloseTimer();
    }
    clearCloseTimer() {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
    }
    close() {
        this.clearCloseTimer();
        this.props.onClose();
    }
    render() {

        return (
            <div>

            </div>
        );
    }
}



export default notification;

Notice.propTypes = {
    onEnd: () => { },
    onClose: () => { },
    duration: 1.5,
    style: {
        right: '50%'
    }
};
