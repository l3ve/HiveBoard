import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getUuid, Singleton } from '../js/tool';
import anim from 'css-animation';

import './css/message.css';

let instance;

class Message extends Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }
    componentDidMount() {
        const {duration, uuid} = this.props;
        anim(this.refs[uuid], 'slideInDown');
        if (duration) {
            this.closeTimer = setTimeout(() => {
                anim(this.refs[uuid], 'zoomOut', this.close);
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
        const {uuid} = this.props;
        this.clearCloseTimer();
        this.props.onClose();
    }
    render() {
        const {message, type, uuid} = this.props;
        return (
            <div className='message'>
                <div className={'animated ' + type} ref={uuid}>
                    <span className='detail' >{message}</span>
                </div>
            </div>
        );
    }
}

Message.defaultProps = {
    onClose: () => { },
    duration: 4.5
};

class MessageBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }
    add(message, type) {
        const uuid = message.uuid = getUuid();
        message.type = type;
        this.setState(previousState => {
            const messages = previousState.messages;
            if (!messages.filter(v => v.uuid === uuid).length) {
                return {
                    messages: messages.concat(message),
                };
            }
        });
    }
    remove(uuid) {
        this.setState(previousState => {
            return {
                messages: previousState.messages.filter(message => message.uuid !== uuid),
            };
        });
    }
    render() {
        const message = this.state.messages.map((msg) => {
            return (
                <Message key={msg.uuid} onClose={() => this.remove(msg.uuid)} {...msg} />
            );
        });
        return (
            <div className='message-box'>
                {message}
            </div>
        );
    }
}

const api = {
    target: {
        instance: 'message',
        Component: MessageBox
    },
    success(props) {
        Singleton(this.target).add(props, 'suc');
    },
    error(props) {
        Singleton(this.target).add(props, 'err');
    }
}

export default api;