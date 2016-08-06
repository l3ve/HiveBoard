import ChessClass from './chessClass';

export default class Layout extends ChessClass {
    constructor(chess) {
        super(chess);
        this.color = 'rgba(140,158,255,0.7)';
        this.reside = [chess.reside] || ['0'];
    }
    isSame(newChess, deviation = 2) {
        return this.x <= newChess.x + deviation && this.x >= newChess.x - deviation && this.y <= newChess.y + deviation && this.y >= newChess.y - deviation;
    }
    isResideBe(nlr) {
        return this.reside.find((olr) => {
            return olr == nlr;
        })
    }
    filterResideLayout(nlr) {
        this.reside = this.reside.filter((or) => {
            return or != nlr;
        })
    }
}