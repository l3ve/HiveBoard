class Canvas {
    constructor() {
        this.canvas = document.querySelector(`#canvas`);
        this.ctx = canvas.getContext('2d');
        this.begin = false;
        this.canvas.setAttribute('width', document.querySelector('.game-box').offsetWidth + 'px');
        this.canvas.setAttribute('height', document.querySelector('.game-box').offsetHeight - 140 + 'px');
        this.ctx.strokeStyle = "#000";
        this.ctx.lineWidth = 1;
        this.chess = {
            size: 30
        };
        this.drawBegin = this.drawBegin.bind(this);
        this.moveTo = this.moveTo.bind(this);
        this.drawEnd = this.drawEnd.bind(this);
    }
    init() {
        this.listenerEvent();
    }
    listenerEvent() {
        this.canvas.addEventListener("mouseup", this.drawEnd, false);
    }
    removeListenerEvent() {
        this.canvas.removeEventListener("mouseup", this.drawEnd);
    }
    clear(w = this.canvas.width, h = this.canvas.height) {
        this.ctx.clearRect(0, 0, w, h);
    }
    moveTo(e) {
        if (this.begin) {
            this.ctx.lineTo(e.offsetX, e.offsetY);
            this.ctx.stroke();
        }
    }
    drawBegin(e) {
        this.begin = true;
        this.ctx.beginPath();
        this.ctx.moveTo(e.offsetX, e.offsetY);
    }
    drawEnd(e) {
        const x = e.offsetX,
            y = e.offsetY,
            size = this.chess.size;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.moveTo(x + size, y + Math.sqrt(3) * size);
        this.ctx.lineTo(x + (size * 2), y);
        this.ctx.lineTo(x + size, y - Math.sqrt(3) * size);
        this.ctx.lineTo(x - size, y - Math.sqrt(3) * size);
        this.ctx.lineTo(x - (size * 2), y);
        this.ctx.lineTo(x - size, y + Math.sqrt(3) * size);
        this.ctx.closePath();
        this.ctx.stroke();
    }

}


export default new Canvas();