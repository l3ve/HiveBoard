class View {
    constructor() {
        this.talkBox = document.querySelector('.msg-box ul');
        this.tipBox = document.querySelector('.tip-box ul');
        this.inPut = document.querySelector('.footer .talk');
        this.tips = [];
        this._st = false;
    }
    renderTalk(content) {
        let _li = this.createElement({
            tag: 'li',
            cls: 'msg,animated,bounceInLeft'
        })([{
            tag: 'i',
            props: [
                {
                    name: 'style',
                    value: 'background-image: url(http://7xnt0i.com1.z0.glb.clouddn.com/9)'
                }
            ]
        }, {
                tag: 'p',
                ctx: content
            }])();
        this.talkBox.appendChild(_li);
        this.talkBox.parentNode.scrollTop = this.talkBox.offsetHeight;
        this.inPut.value='';
    }
    renderCtxTip(content) {
        let _li = this.createElement({
            tag: 'li',
            cls: 'tip,animated,fadeIn'
        })({
            tag: 'span',
            ctx: content
        })();
        this.talkBox.appendChild(_li);
        this.talkBox.parentNode.scrollTop = this.talkBox.offsetHeight;
    }
    renderSysTip(content) {
        let _li = this.createElement({
            tag: 'li',
            cls: 'animated,bounceIn'
        })({
            tag: 'p',
            cls: 'msg',
            ctx: content
        })();
        this.tipBox.appendChild(_li);
        setTimeout(() => {
            this.animationEnd(_li, 'bounceOut');
        }, 3000);
    }
    createElement(para, child = []) {
        let _tag = [],
            _child = [];
        if (para[0]) {
            para.forEach((dom, i) => {
                setProps(dom);
            })
        } else if (typeof para === 'object') {
            setProps(para);
        }
        function setProps(para) {
            let {tag, cls, ctx, props} = para,
                _cls = cls || '',
                _props = props || [],
                _dom = '',
                _ctx = ctx || '';
            _dom = document.createElement(tag);
            _child = child;
            _cls.split(',').forEach((_cls) => {
                if (!_cls) return false;
                _dom.classList.add(_cls);
            });
            _props.forEach((_props) => {
                _dom.setAttribute(_props["name"],_props["value"]);
            });
            _dom.innerHTML = _ctx;
            _tag.push(_dom);
        }
        if (_tag.length > 1) {
            _child.push(_tag)
        } else {
            _child.push(_tag[0]);
        }
        return (para) => {
            if (!para) {
                let _len = _child.length - 2;
                while (_len >= 0) {
                    if (_child[_len + 1] instanceof Array) {
                        _child[_len + 1].forEach((_childs) => {
                            _child[_len].appendChild(_childs);
                        })
                    } else {
                        _child[_len].appendChild(_child[_len + 1]);
                    }
                    _len--;
                }
                return _child[0];
            }
            return this.createElement(para, _child);
        };
    }
    animationEnd(dom, animated, callback) {
        dom.classList.add('animated', animated);
        dom.addEventListener('webkitAnimationEnd', function () {
            dom.parentNode.removeChild(dom);
            typeof callback === 'function' ? callback() : '';
            dom = null;
        });
    }
};

export default new View();