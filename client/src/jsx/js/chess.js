import uuid from './uuid';

export default class Chess {
    constructor(chess) {
        this.id = uuid();
        this.type = chess.type || '99';
        this.size = chess.size || 15;
        this.x = chess.x || 0;
        this.y = chess.y || 0;
        this.color = this.type == '99' ? 'rgba(140,158,255,0.7)' : 'rgba(0,0,0,1)';
        this.reside = chess.reside || 0;
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    setColor(color) {
        this.color = color;
    }
    isYou(x, y, deviation=10) {
        const radius = Math.sqrt(3) * this.size - deviation;
        return x <= this.x + radius && x >= this.x - radius && y <= this.y + radius && y >= this.y - radius;
    }
}
