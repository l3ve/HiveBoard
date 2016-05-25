import React, {Component, PropTypes} from 'react';
import {insert} from './db.js';
import {co} from 'co';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _cls: 'display'
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
        let _name = this.refs['input_name'].value,
            _href = this.refs['input_href'].value,
            _chapter = this.refs['input_chapter'].value,
            _img = this.refs['input_img'].value,
            {getAll} = this.props;
        co(function* () {
            yield insert({
                'name': _name,
                'href': _href,
                'img': _img,
                'id': new Date().getTime()
            });
            getAll();
            this.hidden();
        }.bind(this))
    }
    render() {
        let {_cls} = this.state;
        return (
            <div className={'add ' + _cls}>
                <div className='all_input'>
                    <div className='name-wrap'>
                        <input ref='input-name' id='name' className='name' type="text" />
                        <label htmlFor="name"><span>名字</span></label>
                    </div>
                    <div className='href-wrap'>
                        <input ref='input-href' id='href'  className='href' type="text" />
                        <label htmlFor="href"><span>连接</span></label>
                    </div>
                    <div className='chapter-wrap'>
                        <input ref='input-chapter' id='chapter'  className='chapter' type="text" />
                        <label htmlFor="chapter"><span>章节</span></label>
                    </div>
                    <div className='img-wrap'>
                        <input ref='input-img' id='img'  className='img' type="text" />
                        <label htmlFor="img"><span>图片</span></label>
                    </div>
                </div>
                <p onClick={() => { this.insert() } }>一发入魂</p>
            </div>
        );
    }
}

Add.propTypes = {

};

export default Add;