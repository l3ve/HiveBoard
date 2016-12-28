import React, { Component } from 'react';
import Wave from './component/wave';
import './css/nav';

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curIndex: 0,
            _style: {
                left: '0',
                width: 100 / props.nav.length + '%',
                bottom: '0px',
                display: 'block',
                backgroundColor: 'rgb(255,255,255)',
                height: '2px',
                marginTop: '-2px',
                position: 'relative',
                transition: 'left .4s cubic-bezier(0.23, 1, 0.32, 1) 0ms',
            }
        }
    }
    changeCurStyle(i) {
        const {_style} = this.state,
            _width = _style.width;
        this.setState({
            _style: {
                ..._style,
                left: parseInt(_width) * i + '%'
            },
            curIndex: i
        });
    }
    switchTab(i) {
        this.changeCurStyle(i);
    }
    render() {
        const {_style, curIndex} = this.state,
            {nav} = this.props;
        return (
            <nav className='top-nav'>
                <div className='nav-box'>
                    {
                        nav.map((nav, i) => {
                            return <span className={curIndex == i ? 'cur' : ''} onClick={() => this.switchTab(i)}>{nav.name}</span>
                        })
                    }
                </div>
                <div style={_style}></div>
            </nav>
        );
    }
}

export default Nav;