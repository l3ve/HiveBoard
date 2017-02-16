import React, { Component } from 'react';
import Checkbox from './component/checkbox';
const {ipcRenderer} = require('electron')


import './css/filter';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {
                filterStatus: {
                    js: 'on',
                    css: 'on',
                    img: 'on',
                    other: 'on'
                }
            }
        }
        this.switchStatus = this.switchStatus.bind(this);
    }
    componentWillMount() {
        ipcRenderer.on('filter-status', (e,res) => {
            this.setState({
                filter: res
            });
        })
        ipcRenderer.send('init');
    }
    switchStatus(type, status) {
        let {filter} = this.state;
        filter = { ...filter.filterStatus, [type]: status };
        ipcRenderer.send('update-filter-type', { id: filter._id, filter: filter });
    }
    render() {
        const {filterStatus} = this.state.filter;
        return (
            <div className='filter animated fadeInDown'>
                <Checkbox label='js' status={filterStatus.js} click={this.switchStatus} />
                <Checkbox label='css' status={filterStatus.css} click={this.switchStatus} />
                <Checkbox label='img' status={filterStatus.img} click={this.switchStatus} />
                <Checkbox label='other' status={filterStatus.other} click={this.switchStatus} />
            </div>
        );
    }
}

export default Filter;