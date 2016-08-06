import ChessClass from './chessClass';

export default class Chess extends ChessClass {
    constructor(chess) {
        super(chess);
        this.color =  'rgba(140,158,255,0.7)';
    }
    isSame(newChess, deviation=2) {
        return this.x <= newChess.x + deviation && this.x >= newChess.x - deviation && this.y <= newChess.y + deviation && this.y >= newChess.y - deviation;
    }
}

