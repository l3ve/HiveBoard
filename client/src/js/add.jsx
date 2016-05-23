import React, {Component, PropTypes} from 'react';
import {insert, all} from './db.js';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _cls : 'hidden'
        }
    }
    show() {
        this.setState({
            _cls: 'display'
        });
    }
    insert() {
        let _vlaue = this.refs['input_value'].value;
        console.log(_vlaue);
        co(function* () {
            let _ok = yield insert('1', {
                'name': _vlaue
            });
            let _check = yield all();
            console.log(_ok, _check);
        })
    }
    render() {
        let {_cls} = this.state;
        return (
            <div className={'add '+_cls}>
                <input ref='input_value' className='fuck' type="text" />
                <span onClick={() => { this.insert() } }>存档</span>
            </div>
        );
    }
}

Add.propTypes = {

};

export default Add;