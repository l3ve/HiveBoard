class View {
    constructor() {
        this.talkBox = document.querySelector('.msg-box ul');
        this.tipBox = document.querySelector('.tip-box ul');
        this.tips = [];
        this._st = false;
        console.log();
    }
    renderTalk(content) {
        let _li = this.createElement({
            tag: 'li',
            cls: 'msg,animated,bounceInLeft'
        })({
            tag: 'p',
            ctx: content
        })();
        this.talkBox.appendChild(_li);
        this.talkBox.parentNode.scrollTop = this.talkBox.offsetHeight;
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
                let _len = _child.length - 2;
                while (_len >= 0) {
                    _child[_len].appendChild(_child[_len + 1]);
                    _len--;
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