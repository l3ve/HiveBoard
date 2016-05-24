import React, {Component, PropTypes} from 'react';
import {insert} from './db.js';
import {co} from 'co';

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
    hidden() {
        this.setState({
            _cls: 'hidden'
        });
    }
    insert() {
        let _vlaue = this.refs['input_value'].value,
            {getAll} = this.props;
        co(function* () {
            yield insert({
                'name': _vlaue,
                'id':new Date().getTime()
            });
            getAll();
            this.hidden();
        }.bind(this))
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