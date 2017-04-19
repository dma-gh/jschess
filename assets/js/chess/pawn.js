/* global Crafty */
/* global Piece */

function Pawn(x, y, board, color) {
    Piece.call(this, x, y, board, color);
    
    this.xOffset = -15;
    this.yOffset = -4;
    
    this.drawPiece = function() {
        this.element = Crafty.e("2D, Canvas, Tween, " + color + "_pawn")
            .attr({x: this.x * board.square_size + this.xOffset, y: this.y * board.square_size + this.yOffset, w: board.square_size, h: board.square_size});
    }
}