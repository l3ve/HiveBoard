class View {
    constructor() {
        this.talkBox = document.querySelector('.msg-box ul');
        this.tipBox = document.querySelector('.tip-box ul');
        this.tips = [];
        this._st = false;
        console.log(this.createElement({
            tag: 'ul',
            cls: 'li',
        })({
            tag: 'li',
            cls: 'li',
        })({
            tag: 'a',
            cls: 'xis',
            ctx: '这是消息'
        })());
    }
    renderLi(content) {
        let _li = this.createLiElement(content, 'fadeInDown');
        this.talkBox.appendChild(_li);
        this.talkBox.parentNode.scrollTop = this.talkBox.offsetHeight;
    }
    renderCtxTip(content) {
        let _li = this.createLiElement(content, 'fadeInDown');
        this.talkBox.appendChild(_li);
        this.talkBox.parentNode.scrollTop = this.talkBox.offsetHeight;
    }
    renderTip(content) {
        let _li = this.createLiElement(content, 'flipInX'),
            _tipBox = this.tipBox;
        _tipBox.appendChild(_li);
        setTimeout(() => {
            this.animationEnd(_li, 'rotateOutUpRight');
        }, 3000);
    }
    createLiElement(content, animated) {
        let _li = document.createElement('li'),
            _p = document.createElement('p');
        _p.innerHTML = content;
        _li.appendChild(_p);
        this.animationStart(_li, animated);
        return _li;
    }
    createElement(para) {
        let {tag, cls, child, ctx} = para,
            _tag = document.createElement(tag),
            _child = child || [];
        if (cls) {
            cls.split(',').forEach((_cls, i) => {
                _tag.classList.add(_cls);
            });
        }
        if (ctx) {
            _tag.innerHTML = ctx;
        }
        _child.push(_tag);
        return (para) => {
            if (!para) {
                let _len = _child.length-2;
                while(_len >= 0) {
                    _child[_len].appendChild(_child[_len+1]);
                    _len --;
                }
                return _child[0];
            }
            let _para = {
                tag: para.tag || false,
                cls: para.cls || '',
                child: _child || false,
                ctx: para.ctx || ''
            };
            return this.createElement(_para);
        };
    }
    animationStart(dom, animated) {
        dom.classList.add('animated', animated);
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