class View {
    constructor() {
        this.talkBox = document.querySelector('.msg-box ul');
        this.tipBox = document.querySelector('.tip-box ul');
        this.tips = [];
        this._st = false;
        console.log(this.createElement('ul', 'ul')('li', 'li')());
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
    createElement(tag, cls = '', child = false) {
        let _tag = document.createElement(tag);
        cls.split(' ').forEach((_cls, i) => {
            _tag.classList.add(_cls);
        });
        if (child) {
            _tag.appendChild(child);
        }
        console.log(tag);
        if (tag || child) {
            return (tag, cls = '', child = false) => {
                this.createElement(tag, cls, _tag);
            };
        } else {
            return _tag;
        }
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