
let game = {
    board: [],
    currentGame: [],
    savedGame: [],



    createBoard(){
        this.board = [];
        for(let i=1; i<=60; i++){
            this.board.push(i);
        }
    },
    
    addNumber(number){
        if(this.currentGame.length < 6) {
            if(!this.gameHasNumber(number)){
                this.currentGame.push(number);
            }
        }
    },
    
    saveGame(array){
        if(array.length === 6){
            this.savedGame.push(array);
        }
    },
    
    gameHasNumber(number){
        if(this.currentGame.includes(number)){
            return true;
        }else{
            return false;
        }
    },
    
    removeNumber(number){
        let newGame = this.currentGame.filter(n => n != number)
        this.currentGame = newGame;
        return this.currentGame;
    }
    
}



