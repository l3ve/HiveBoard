export default class Chess {
    constructor(chess) {
        this.type = chess.type || 1;
        this.size = chess.size || 30;
        this.x = chess.x || 0;
        this.y = chess.y || 0;
        this.color = chess.color || '#000';
        this.reside = chess.reside || 0;
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    setColor(color) {
        this.color = color;
    }
    isYou(x, y) {
        const radius = Math.sqrt(3) * this.size - 10;
        return x <= this.x + radius && x >= this.x - radius && y <= this.y + radius && y >= this.y - radius;
    }
}
