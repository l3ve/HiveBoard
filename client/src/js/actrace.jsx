import React, {Component} from 'react';
import tips from './notification';
import Brief from './brief';
import Detail from './detail';
import Add from './add';
import Intro from './intro';
import {all, get, insert} from './db.js';
import {co} from 'co';

class ACT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list : [],
            detail:{}
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
                list: _all,
                detail: _all[0]
            });
        }.bind(this,null))
    }
    toDetail(obj) {
        this.setState({
            detail:obj
        });
    }
    render() {
        let {list,detail} = this.state;
        return (
            <div className='actrace'>
                <Intro ref='intro' />
                <div className='add-btn' onClick={() => { this.showAdd() } }>ADD</div>
                <div className='warp'>
                    <Brief list={list} getAll={()=>this.getAll()} toDetail={(data)=>this.toDetail(data)} />
                    <Detail detail={detail}/>
                </div>
                <Add ref='add' getAll={()=>this.getAll()} />
            </div>
        );
    }
}

export default ACT;

