import ChessClass from './chessClass';

export default class Chess extends ChessClass {
    constructor(chess) {
        super(chess);
        this.color = 'rgba(0,0,0,1)';
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

