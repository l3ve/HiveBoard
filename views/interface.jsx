import React, { Component } from 'react';
import Nav from './nav.jsx';
import Home from './home.jsx';
import ProxyList from './proxyList';
import Filter from './filter';
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
            curTab: 'set'
        }
        this.switchTab = this.switchTab.bind(this);
    }
    switchTab(sort) {
        if (this.state.curTab == sort) return false;
        this.setState({
            curTab: sort
        });
        this.refs.home.hideDetail();
    }
    render() {
        let {curTab, nav} = this.state;

        return (
            <div className='main'>
                <Nav nav={nav} onSelect={this.switchTab} />
                <div className='tab-body'>
                    <Home ref='home' />
                    {curTab == 'proxy' ? <ProxyList /> : ''}
                    {curTab == 'filter' ? <Filter /> : ''}
                    {curTab == 'set' ? <Setting /> : ''}
                </div>
            </div>
        );
    }
}

export default Interface;