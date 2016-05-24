import React, {Component} from 'react';
import tips from './notification.js';
import Brief from './brief.js';
import Detail from './detail.js';
import Add from './add.js';
import Intro from './intro.js';
import {all, get, insert} from './db.js';
import {co} from 'co';

class ACT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list : []
        }
        // tips.show('fuck!');
    }
    componentDidMount() {
        // this.refs.intro.show();
    }
    componentWillMount() {
        this.getAll();
    }
    showAdd() {
        this.refs.add.show();
    }
    getAll() {
        co(function* () {
            let _all = yield all();
            this.setState({
                list: _all
            });
        }.bind(this,null))
    }
    render() {
        let {list} = this.state;
        return (
            <div className='actrace'>
                <Intro ref='intro' />
                <div className='add-btn' onClick={() => { this.showAdd() } }>ADD</div>
                <div className='warp'>
                    <Brief list={list} getAll={()=>this.getAll()} />
                    <Detail />
                </div>
                <Add ref='add' getAll={()=>this.getAll()} />
            </div>
        );
    }
}

export default ACT;

