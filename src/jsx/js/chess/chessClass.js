import uuid from '../uuid';

export default class ChessClass {
    constructor(chess) {
        this.id = uuid();
        this.type = chess.type || '99';
        this.size = chess.size || 15;
        this.x = chess.x || -999;
        this.y = chess.y || -999;
        this.reside = chess.reside || 0;
    }
    setColor(color) {
        this.color = color;
    }
    isYou(x, y, deviation=10) {
        const radius = Math.sqrt(3) * this.size - deviation;
        return x <= this.x + radius && x >= this.x - radius && y <= this.y + radius && y >= this.y - radius;
    }
}
