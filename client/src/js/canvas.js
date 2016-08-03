import Chess from './chess';

class Canvas {
    constructor(canvasId) {
        this.canvas = document.querySelector(`#${canvasId}`);
        this.ctx = canvas.getContext('2d');
        this.yourTurn = true;
        this.canvas.setAttribute('width', document.querySelector('.game-box').offsetWidth + 'px');
        this.canvas.setAttribute('height', document.querySelector('.game-box').offsetHeight - 140 + 'px');
        this.chess = {
            previewChess: '',
            firstPosition: {
                x:0,
                y:0
            },
            allChess: []
        };
        this.layout = [];
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
        this.clear();
        this.chess.allChess.forEach((chess) => {
            this.drawChess(chess);
        });
        this.drawChess(this.chess.previewChess);
        requestAnimationFrame(() => this.updata());
    }
    clear(w = this.canvas.width, h = this.canvas.height) {
        this.ctx.clearRect(0, 0, w, h);
    }
    saveChess(chess) {
        this.chess.allChess.push(chess)
    }
    handleClick(e) {
        const type = document.querySelector('.room').value;
        switch (type) {
            case '1':
                this.selectChess(e);
                break;
            case '2':
                this.setChess(e);
                break;
            default:
                this.setChess(e);
                break;
        }
    }
    selectChess(e) {
        if (this.selectEnd) {
            const newChess = this.chess.allChess.filter((chess) => {
                if (chess.isYou(e.offsetX, e.offsetY)) {
                    this.chess.firstPosition = {
                        x: e.offsetX,
                        y: e.offsetY
                    };
                    this.chess.previewChess = chess;
                    this.selectEnd = false;
                    console.log(1);
                    this.canvas.addEventListener("mousemove", this.previewChess, false);
                    this.canvas.addEventListener("contextmenu", this.reset, false);
                    return false;
                } else {
                    return true;
                }
            });
            this.chess.allChess = newChess;
        } else {
            this.chess.allChess.push(this.chess.previewChess);
            this.reset(null, false);
        }
    }
    setChess(e) {
        const para = {
            x: e.offsetX,
            y: e.offsetY,
            type: 1,
            reside: 1
        },
            chess = new Chess(para);
        this.saveChess(chess);
    }
    previewChess(e) {
        this.chess.previewChess.move(e.offsetX, e.offsetY);
    }
    reset(e, b = true) {
        this.removeListenerEvent();
        this.selectEnd = true;
        if (b) {
            this.chess.previewChess.move(this.chess.firstPosition.x,this.chess.firstPosition.y);
            this.chess.allChess.push(this.chess.previewChess);
        }
        this.chess.previewChess = '';
    }
    drawChess(chess) {
        const {x, y, size} = chess,
            ctx = this.ctx;
        // ctx.save();
        // ctx.lineWidth = 1;
        // ctx.strokeStyle = "#000";
        //绘制棋子
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
        //调试判断面积的圆
        ctx.beginPath();
        ctx.arc(x, y, Math.sqrt(3) * size, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
    }

}


export default Canvas;