import Chess from './chess/chess';
import Layout from './chess/layout';

class Canvas {
    constructor(canvasId) {
        this.canvas = document.querySelector(`#${canvasId}`);
        this.ctx = canvas.getContext('2d');
        this.stopUpdata = false;
        this.yourTurn = true;
        this.correctPosition = false;
        this.chessType = '0';
        this.canvas.setAttribute('width', document.querySelector('.game-box').offsetWidth + 'px');
        this.canvas.setAttribute('height', document.querySelector('.game-box').offsetHeight - 140 + 'px');
        this.chess = {
            previewChess: '',
            fixPosition: {
                x: 0,
                y: 0
            },
            firstPosition: {
                x: 0,
                y: 0
            },
            allChess: [],
            layout: []
        };
        this.selectEnd = true;
        this.handleClick = this.handleClick.bind(this);
        this.previewChess = this.previewChess.bind(this);
        this.reset = this.reset.bind(this);
        this.listenerEvent();
        this.updata();
    }
    listenerEvent() {
        this.canvas.addEventListener("click", this.handleClick, false);
    }
    removeListenerEvent() {
        this.canvas.removeEventListener("mousemove", this.previewChess);
        this.canvas.removeEventListener("contextmenu", this.reset);
    }
    updata() {
        if (this.stopUpdata) {
            return false;
        }
        this.clear();
        this.chess.layout.forEach((layout) => {
            this.drawChess(layout);
        });
        this.chess.allChess.forEach((chess) => {
            this.drawChess(chess);
        });
        this.drawChess(this.chess.previewChess);
        requestAnimationFrame(() => this.updata());
    }
    clear(w = this.canvas.width, h = this.canvas.height) {
        this.ctx.clearRect(0, 0, w, h);
    }
    stop() {
        this.stopUpdata = true;
        this.clear();
    }
    debugDrawlauyout() {
        this.chess.layout.forEach((layout,i) => {
            setTimeout(() => {
                this.drawChess(layout);
            }, 3000*i);
        });
    }
    saveChess(chess) {
        this.chess.allChess.push(chess)
    }
    switchType(type) {
        this.chessType = type;
        if (type == 0) {
            //无选中的情况(可以点击移动棋子)
            this.reset(null, false);
        } else {
            //选中的情况(可放子)
            //创建预览棋子
            this.chess.previewChess = this.createChess({
                x: -999,
                y: -999,
                type: type
            });
            this.canvas.addEventListener("mousemove", this.previewChess, false);
        }
    }
    handleClick(e) {
        // 是否允许放棋
        // 条件: 1.是否为第一次放棋.
        //      2.本轮是否为自己的轮次.
        //      3.当前位置是否为放棋的位置.
        if (this.chess.allChess.length!=0 && (!this.yourTurn || !this.correctPosition)) {
            return false;
        }
        const mousePosition = {
            x: e.offsetX,
            y: e.offsetY
        };
        switch (this.chessType) {
            case '0':
                this.selectChess(mousePosition);
                break;
            default:
                this.setChess();
                break;
        }
    }
    selectChess(mousePosition) {
        if (this.selectEnd) {
            const newChess = this.chess.allChess.filter((_chess) => {
                if (_chess.isYou(mousePosition.x, mousePosition.y)) {
                    this.chess.firstPosition = {
                        x: _chess.x,
                        y: _chess.y
                    };
                    this.chess.previewChess = _chess;
                    this.selectEnd = false;
                    this.canvas.addEventListener("mousemove", this.previewChess, false);
                    this.canvas.addEventListener("contextmenu", this.reset, false);
                    return false;
                } else {
                    return true;
                }
            });
            this.chess.allChess = newChess;
        } else {
            this.getLayout(this.chess.previewChess);
            this.chess.allChess.push(this.chess.previewChess);
            this.reset(null, false);
        }
    }
    setChess() {
        const _chess = this.createChess(this.chess.previewChess);
        this.saveChess(_chess);
        this.getLayout(_chess);
        this.reset(null, false);
    }
    previewChess(e) {
        this.correctPosition = false;
        this.chess.previewChess.move(e.offsetX, e.offsetY);
        this.setLimit(e.offsetX, e.offsetY)
    }
    createChess(chess) {
        if (chess.type) {
            return new Chess(chess);
        } else {
            return new Layout(chess);
        }
    }
    reset(e, b = true) {
        this.removeListenerEvent();
        this.selectEnd = true;
        if (b) {
            this.chess.previewChess.move(this.chess.firstPosition.x, this.chess.firstPosition.y);
            this.chess.allChess.push(this.chess.previewChess);
        }
        this.chess.previewChess = '';
    }
    drawChess(chess) {
        const {x, y, size, type, color} = chess,
            ctx = this.ctx;
        ctx.save();
        if (type == '99') {
            //网格区域样式
            ctx.strokeStyle = color;
            ctx.setLineDash([3, 3]);
            ctx.lineDashOffset = -10;
        }
        //绘制棋子或者网格区域
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.moveTo(x + size, y + Math.sqrt(3) * size);
        ctx.lineTo(x + (size * 2), y);
        ctx.lineTo(x + size, y - Math.sqrt(3) * size);
        ctx.lineTo(x - size, y - Math.sqrt(3) * size);
        ctx.lineTo(x - (size * 2), y);
        ctx.lineTo(x - size, y + Math.sqrt(3) * size);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        //调试判断面积的圆
        // ctx.beginPath();
        // ctx.arc(x, y, Math.sqrt(3) * size, 0, 2 * Math.PI);
        // ctx.closePath();
        // ctx.stroke();
    }
    getLayout(chess) {
        const {x, y, size, id} = chess,
            newLayout = [
                {
                    x: x,
                    y: y + Math.sqrt(3) * 2 * size,
                    num: 1,
                    reside: id
                }, {
                    x: x + 3 * size,
                    y: y + Math.sqrt(3) * size,
                    num: 2,
                    reside: id
                }, {
                    x: x + 3 * size,
                    y: y - Math.sqrt(3) * size,
                    num: 3,
                    reside: id
                }, {
                    x: x,
                    y: y - Math.sqrt(3) * 2 * size,
                    num: 4,
                    reside: id
                }, {
                    x: x - 3 * size,
                    y: y - Math.sqrt(3) * size,
                    num: 5,
                    reside: id
                }, {
                    x: x - 3 * size,
                    y: y + Math.sqrt(3) * size,
                    num: 6,
                    reside: id
                }
            ];
        let layout = this.filterLayout(newLayout,id);
        layout.forEach((layout) => {
            this.chess.layout.push(this.createChess(layout));
        });
    }
    filterLayout(newLayout,id) {
        //删除移动棋子的旧布局
        this.chess.layout = this.chess.layout.filter((ol)=>{
            let _findIndex = ol.isResideBe(id);
            //删除已存在的
            if (_findIndex >= 0 && ol.reside.length > 1) {
                ol.filterResideLayout(id);
                return true;
            } else if (_findIndex == 0 && ol.reside.length == 1) {
                return false;
            } else {
                return true;
            }
        });
        //过滤新棋子
        let _filterLayout = newLayout.filter((nl) => {
            let res = true;
            this.chess.layout.forEach((ol) => {
                //位置相同,是存入reside
                if (ol.isSame(nl)) {
                    ol.reside.push(nl.reside);
                    res =  false;
                }
            })
            return res;
        });
        return _filterLayout;
    }
    setLimit(x, y) {
        this.chess.layout.forEach((layout) => {
            if (layout.isYou(x, y, 15)) {
                this.chess.previewChess.move(layout.x, layout.y);
                this.correctPosition = true;
            }
        });
    }
}


export default Canvas;