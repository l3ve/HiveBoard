import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getUuid, Singleton } from '../js/tool';
import './css/message.css';

let instance;

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animCls: 'slideInDown'
        }
        this.end = this.end.bind(this);
        this.beginListen = this.beginListen.bind(this);
    }
    componentDidMount() {
        const {duration, uuid} = this.props;
        if (duration) {
            this.closeTimer = setTimeout(() => {
                this.close();
            }, duration * 1000);
        }
        this.refs[uuid].addEventListener('webkitAnimationEnd', this.beginListen)
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
        this.setState({
            animCls: 'zoomOut'
        });
    }
    beginListen() {
        const {uuid} = this.props;
        console.log(uuid,'change');
        this.refs[uuid].removeEventListener('webkitAnimationEnd', this.beginListen)
        this.refs[uuid].addEventListener('webkitAnimationEnd', this.end)
    }
    end() {
        const {uuid} = this.props;
        console.log(uuid,'remove');
        this.props.onClose(uuid);
    }
    render() {
        const {message, type, uuid} = this.props,
            {animCls} = this.state;
            console.log(uuid,animCls,'add');
        return (
            <div className={'animated ' + animCls} ref={uuid} >
                <p className={type}>
                    <span className='detail' >{message}</span>
                </p>
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
        this.remove = this.remove.bind(this);
    }
    add(message, type) {
        const uuid = message.uuid = message.uuid || getUuid();
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
                <div className='message'>
                    <Message key={msg.uuid} onClose={this.remove} {...msg} />
                </div>
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