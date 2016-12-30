import React, { Component } from 'react';
import Nav from './nav.jsx';
import Home from './home.jsx';
import ProxyList from './proxyList';
import Setting from './set';

import './css/interface';

class Interface extends Component {
    constructor() {
        super();
        this.state = {
            nav: [
                { name: '主页', sort: 'home' },
                { name: '已代理', sort: 'proxy' },
                { name: '过滤', sort: 'filter' },
                { name: '建设中', sort: 'building' },
                { name: '设置', sort: 'set' }
            ],
            curTab: 'home'
        }
        this.switchTab = this.switchTab.bind(this);
    }
    switchTab(sort) {
        if (this.state.curTab == sort) return false;
        this.setState({
            curTab: sort
        });
    }
    render() {
        let {curTab, nav} = this.state;

        return (
            <div className='main'>
                <Nav nav={nav} onSelect={this.switchTab} />
                <div className='tab-body'>
                    <Home />
                    {curTab=='proxy'?<ProxyList />:''}
                    {curTab=='set'?<Setting />:''}
                </div>
            </div>
        );
    }
}

export default Interface;