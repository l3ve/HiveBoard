import React, {Component, PropTypes} from 'react';
import {insert} from './db.js';
import {co} from 'co';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _cls: 'display',
            _imgSrc: '',
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
    clear() {
        this.refs['name'].value = '';
        this.refs['href'].value = '';
        this.refs['chapter'].value = '';
        this.refs['img'].value = '';
        this.setState({
            _nameCls: 'empty',
            _hrefCls: 'empty',
            _chapterCls: 'empty',
            _imgCls: 'empty',
            _imgSrc: ''

        });
    }
    insert() {
        let _name = this.refs['name'].value || '莫名',
            _href = this.refs['href'].value || 'http://www.didamoe.com',
            _chapter = this.refs['chapter'].value || '1',
            _img = this.state._imgSrc,
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
            this.clear();
        }.bind(this))
    }
    toBase64(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((so) => {
            reader.onload = (e) => {
                this.setState({
                    _imgSrc: e.target.result
                });
                so(e.target.result);
            }
        })
    }
    handleChange(ref) {
        if (this.refs[ref].value.length != 0) {
            this.setState({
                ['_' + ref + 'Cls']: 'fill'
            });
        } else {
            this.setState({
                ['_' + ref + 'Cls']: 'empty'
            });
        }
        if (ref == 'img') {
            this.toBase64(this.refs['img'].files[0]);
        }
    }
    render() {
        let {_cls, _nameCls, _hrefCls, _chapterCls, _imgCls, _imgSrc} = this.state;
        return (
            <div className={'add ' + _cls}>
                <div className='all_input'>
                    <div className='name-wrap'>
                        <input ref='name' onChange={() => { this.handleChange('name') } } id='name' className={'name ' + _nameCls} type="text" />
                        <label htmlFor="name"><span>名字</span></label>
                    </div>
                    <div className='href-wrap'>
                        <input ref='href' onChange={() => { this.handleChange('href') } } id='href'  className={'href ' + _hrefCls} type="text" />
                        <label htmlFor="href"><span>连接</span></label>
                    </div>
                    <div className='chapter-wrap'>
                        <input ref='chapter' onChange={() => { this.handleChange('chapter') } } id='chapter'  className={'chapter ' + _chapterCls} type="text" />
                        <label htmlFor="chapter"><span>章节</span></label>
                    </div>
                    <div className='img-wrap'>
                        <input ref='img' onChange={() => { this.handleChange('img') } } id='img'  className={'img ' + _imgCls} type="file" />
                        <label htmlFor="img"><span>图片</span></label>
                        {_imgSrc ? <img className='preview' src={_imgSrc} alt="preview"/> : ''}
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