import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/notification.css';


let defaultTop = 24;
let notificationInstance;
let defaultDuration = 4.5;
let seed = 0;

function getUuid() {
    const now = Date.now();
    return `rcNotification_${now}_${seed++}`;
}

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

Notice.propTypes = {
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
                    {notice.content}
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

Notification.propTypes = {
    style: {
        top: 65,
        left: '50%'
    }
};

function newInstance(properties) {
    const props = properties || {};
    const div = document.createElement('div');
    document.body.appendChild(div);
    const notification = ReactDOM.render(<Notification {...props} />, div);
    return {
        notice(noticeProps) {
            notification.add(noticeProps);
        },
        removeNotice(key) {
            notification.remove(key);
        },
        component: notification,
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        },
    };
}

function getNotificationInstance() {
    if (notificationInstance) {
        return notificationInstance;
    }
    notificationInstance = newInstance({
        style: {
            top: defaultTop,
            right: 0,
        },
    });
    return notificationInstance;
}

function notice(args) {
    const duration = args.duration ? args.duration : defaultDuration;
    getNotificationInstance().notice({
        content: (
            <div className='fuck'>
                <div className='message' >{args.message}</div>
                <div className='description' >{args.description}</div>
            </div>
        ),
        duration,
        style: {}
    })
}

const api = {
    open(props) {
        notice(props);
    }
}

export default api;

