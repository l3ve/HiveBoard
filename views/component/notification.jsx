import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/notification.css';


let defaultTop = 24;
let notificationInstance;
let defaultDuration = 4.5;
let seed = 0;

class Notice extends Component {
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
        const {style, children} = this.props;
        return (
            <div className='notice' style={style}>
                <div className='content'>{children}</div>
            </div>
        );
    }
}

Notice.defaultProps = {
    onEnd: () => { },
    onClose: () => { },
    duration: 1.5,
    style: {
        right: '50%'
    }
};

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notices: []
        }
    }
    add(notice) {
        const key = notice.key = notice.key || getUuid();
        this.setState(previousState => {
            const notices = previousState.notices;
            if (!notices.filter(v => v.key === key).length) {
                return {
                    notices: notices.concat(notice),
                };
            }
        });
    }
    remove(key) {
        this.setState(previousState => {
            return {
                notices: previousState.notices.filter(notice => notice.key !== key),
            };
        });
    }
    render() {
        const {style} = this.props;
        const noticeNodes = this.state.notices.map((notice) => {
            return (
                <Notice
                    {...notice}
                    >
                    <div className={notice.type}>
                        <div className='message' >{notice.message}</div>
                        <div className='description' >{notice.description}</div>
                    </div>
                </Notice>
            );
        });
        return (
            <div className='message-box' style={style}>
                {noticeNodes}
            </div>
        );
    }
}

Notification.defaultProps = {
    style: {
        top: 65,
        right: 0
    }
};


const api = {
    success(props) {
        Singleton().notice(props, 'suc');
    },
    error() {
        Singleton().notice(props, 'err');
    }
}

export default api;




function getUuid() {
    const now = Date.now();
    return `rcNotification_${now}_${seed++}`;
}

function Singleton() {
    if (notificationInstance) {
        return notificationInstance;
    }
    const div = document.createElement('div');
    document.body.appendChild(div);
    const notification = ReactDOM.render(<Notification />, div);
    notificationInstance = {
        notice(...noticeProps) {
            notification.add(...noticeProps);
        },
        removeNotice(key) {
            notification.remove(key);
        },
        component: notification,
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        }
    };
    return notificationInstance;
}