import React, {Component, PropTypes} from 'react';
import {insert} from './db.js';
import {co} from 'co';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _cls: 'display',
            _nameCls: 'empty',
            _hrefCls: 'empty',
            _chapterCls: 'empty',
            _imgCls: 'empty'
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
    handleChange(ref) {
        if (this.refs[ref].value.length != 0) {
            this.setState({
                ['_'+ref+'Cls']: 'fill'
            });
        } else {
            this.setState({
                ['_'+ref+'Cls']: 'empty'
            });
        }
    }
    render() {
        let {_cls, _nameCls, _hrefCls, _chapterCls, _imgCls} = this.state;
        return (
            <div className={'add ' + _cls}>
                <div className='all_input'>
                    <div className='name-wrap'>
                        <input ref='name' onChange={() => { this.handleChange('name') } } id='name' className={'name '+_nameCls} type="text" />
                        <label htmlFor="name"><span>名字</span></label>
                    </div>
                    <div className='href-wrap'>
                        <input ref='href' onChange={() => { this.handleChange('href') } } id='href'  className={'href '+_hrefCls} type="text" />
                        <label htmlFor="href"><span>连接</span></label>
                    </div>
                    <div className='chapter-wrap'>
                        <input ref='chapter' onChange={() => { this.handleChange('chapter') } } id='chapter'  className={'chapter '+_chapterCls} type="text" />
                        <label htmlFor="chapter"><span>章节</span></label>
                    </div>
                    <div className='img-wrap'>
                        <input ref='img' onChange={() => { this.handleChange('img') } } id='img'  className={'img '+_imgCls} type="text" />
                        <label htmlFor="img"><span>图片</span></label>
                    </div>
                </div>
                <p className='save-btn' onClick={() => { this.insert() } }>一发入魂</p>
            </div>
        );
    }
}

Add.propTypes = {

};

export default Add;