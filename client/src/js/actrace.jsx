import React, {Component} from 'react';
import tips from './notification.js';
import Brief from './brief.js';
import Detail from './detail.js';
import Add from './add.js';
import Intro from './intro.js';
import {all, get, insert} from './db.js';
import {co} from 'co';


co(function* () {
    // var b = yield insert('1',{
    //     'content': 'Just Fun'
    // });
    var _all = yield all();
    var _some = yield get("123").then((val)=>{
        // console.log(val);
    });
    var c = yield [_some,_all];
    // console.log(_all);
})


class ACT extends Component {
    constructor(props) {
        super(props);
        // tips.show('fuck!');
    }
    componentDidMount() {
        this.refs.intro.show();
    }
    showAdd() {
        this.refs.add.show();
    }
    render() {
        return (
            <div className='actrace'>
                <Intro ref='intro' />
                <div className='add-btn' onClick={()=>{this.showAdd()}}>ADD</div>
                <div className='warp'>
                    <Brief />
                    <Detail />
                </div>
                <Add ref='add' />
            </div>
        );
    }
}

export default ACT;

