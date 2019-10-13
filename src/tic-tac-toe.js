

class TicTacToe {
    constructor() {
        this.matrix=[[null,null,null],[null,null,null],[null,null,null]];
        this.currentSymbol='x';
        this.gameIsFinished=false;
        this.winnerSymbol=null;
        this.noTurns=false;
        this.Draw=false;
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
        
    }

     

    nextTurn(rowIndex, columnIndex) {
        if(this.matrix[rowIndex][columnIndex]!=null)return;
        this.matrix[rowIndex][columnIndex]=this.currentSymbol;
        this.currentSymbol=(this.currentSymbol=='x')?'o' : 'x';

        if((this.matrix[0][0]==this.matrix[0][1]) &&(this.matrix[0][0]==this.matrix[0][2])){
            this.winnerSymbol=this.matrix[0][1];
            if(this.winnerSymbol) this.gameIsFinished=true;
            

        }
        if((this.matrix[1][0]==this.matrix[1][1]) &&(this.matrix[1][0]==this.matrix[1][2])){
            this.winnerSymbol=this.matrix[1][1];
            if(this.winnerSymbol) this.gameIsFinished=true;
            

        }
        if((this.matrix[2][0]==this.matrix[2][1]) &&(this.matrix[2][0]==this.matrix[2][2])){
            this.winnerSymbol=this.matrix[2][1];
            if(this.winnerSymbol) this.gameIsFinished=true;
            

        }
        if((this.matrix[0][0]==this.matrix[1][0]) &&(this.matrix[0][0]==this.matrix[2][0])){
            this.winnerSymbol=this.matrix[1][0];
            if(this.winnerSymbol) this.gameIsFinished=true;
           

        }
        if((this.matrix[0][1]==this.matrix[1][1]) &&(this.matrix[0][1]==this.matrix[2][1])){
            this.winnerSymbol=this.matrix[1][1];
            if(this.winnerSymbol) this.gameIsFinished=true;
            

        }
        if((this.matrix[0][2]==this.matrix[1][2]) &&(this.matrix[0][2]==this.matrix[2][2])){
            this.winnerSymbol=this.matrix[1][2];
            if(this.winnerSymbol) this.gameIsFinished=true;
            

        }
        if((this.matrix[0][0]==this.matrix[1][1]) &&(this.matrix[0][0]==this.matrix[2][2])){
            this.winnerSymbol=this.matrix[1][1];
            if(this.winnerSymbol)this.gameIsFinished=true;
            

        }
        if((this.matrix[0][2]==this.matrix[1][1]) &&(this.matrix[0][2]==this.matrix[2][0])){
            this.winnerSymbol=this.matrix[1][1];
            if(this.winnerSymbol)this.gameIsFinished=true;
            

        }

        

        this.noTurns=true;
        for(let i=0;i<3;i++)
            for(let j=0;j<3;j++) if(this.matrix[i][j]==null) this.noTurns=false;

        if((this.noTurns) && (this.winnerSymbol==null)) {this.Draw=true;
            this.gameIsFinished=true;
        }


    }

    isFinished() {
        return this.gameIsFinished;


    }

    getWinner() {
        return this.winnerSymbol;

    }

    noMoreTurns() {
        return this.noTurns;
    }

    isDraw() {
        return this.Draw;

    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
