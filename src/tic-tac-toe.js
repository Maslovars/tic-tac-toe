class TicTacToe {

    symbols = ["x", "o"];

    constructor() {
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.currentPlayerSymbol = this.symbols[0];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.matrix[rowIndex][columnIndex]) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.currentPlayerSymbol = this.symbols.reverse()[0];
            console.log(this.matrix);
        }
    }

    isFinished() {
        if (this.isDraw() || this.getWinner() != null) {
            return true;
        }
        return false;
    }

    getWinner() {
        if (
            (this.matrix[0][0] == this.matrix[0][1] &&
                this.matrix[0][0] == this.matrix[0][2] &&
                this.matrix[0][0] == "x") ||
            (this.matrix[0][0] == this.matrix[1][0] &&
                this.matrix[0][0] == this.matrix[2][0] &&
                this.matrix[0][0] == "x") ||
            (this.matrix[0][0] == this.matrix[1][1] &&
                this.matrix[0][0] == this.matrix[2][2] &&
                this.matrix[0][0] == "x") ||
            (this.matrix[0][1] == this.matrix[1][1] &&
                this.matrix[0][1] == this.matrix[2][1] &&
                this.matrix[0][1] == "x") ||
            (this.matrix[0][2] == this.matrix[1][2] &&
                this.matrix[0][2] == this.matrix[2][2] &&
                this.matrix[0][2] == "x") ||
            (this.matrix[1][0] == this.matrix[1][1] &&
                this.matrix[1][0] == this.matrix[1][2] &&
                this.matrix[1][0] == "x") ||
            (this.matrix[2][0] == this.matrix[2][1] &&
                this.matrix[2][0] == this.matrix[2][2] &&
                this.matrix[2][0] == "x") ||
            (this.matrix[2][0] == this.matrix[1][1] &&
                this.matrix[2][0] == this.matrix[0][2] &&
                this.matrix[2][0] == "x")
        ) {
            return "x";
        } else if (
            (this.matrix[0][0] == this.matrix[0][1] &&
                this.matrix[0][0] == this.matrix[0][2] &&
                this.matrix[0][0] == "o") ||
            (this.matrix[0][0] == this.matrix[1][0] &&
                this.matrix[0][0] == this.matrix[2][0] &&
                this.matrix[0][0] == "o") ||
            (this.matrix[0][0] == this.matrix[1][1] &&
                this.matrix[0][0] == this.matrix[2][2] &&
                this.matrix[0][0] == "o") ||
            (this.matrix[0][1] == this.matrix[1][1] &&
                this.matrix[0][1] == this.matrix[2][1] &&
                this.matrix[0][1] == "o") ||
            (this.matrix[0][2] == this.matrix[1][2] &&
                this.matrix[0][2] == this.matrix[2][2] &&
                this.matrix[0][2] == "o") ||
            (this.matrix[1][0] == this.matrix[1][1] &&
                this.matrix[1][0] == this.matrix[1][2] &&
                this.matrix[1][0] == "o") ||
            (this.matrix[2][0] == this.matrix[2][1] &&
                this.matrix[2][0] == this.matrix[2][2] &&
                this.matrix[2][0] == "o") ||
            (this.matrix[2][0] == this.matrix[1][1] &&
                this.matrix[2][0] == this.matrix[0][2] &&
                this.matrix[2][0] == "o")
        ) {
            return "o";
        } else return null;
    }

    noMoreTurns() {
        const turn = this.matrix.flat().includes(null);
        return !turn;
    }

    isDraw() {
        if (!this.getWinner() && this.noMoreTurns()) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
