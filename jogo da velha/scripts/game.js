// inicia as variaveis

let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let winsO = 0;
let winsX = 0;
let rng = false;

let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function rngMove(){
    
    let n = Math.floor((Math.random()*10));
    return n;
}

function handleMove(position){

    if(gameOver){
        return;
    }

    if(board[position]==''){
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if(!gameOver){
            if (playerTime == 0){
                playerTime = 1;

            }else{
                playerTime = 0;
            }
        }
        
    }

    return gameOver;
}

function isWin(){
    
    for(let i  = 0; i<winStates.length; i++){

        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(board[pos1] ==  board[pos2] && 
            board[pos1] == board[pos3] && board[pos1] != ''){

            document.getElementById(seq[0].toString()).style.backgroundColor = "green";
            document.getElementById(seq[1].toString()).style.backgroundColor = "green";
            document.getElementById(seq[2].toString()).style.backgroundColor = "green";
            
            if(board[pos1] == "o"){
                winsO++;
            }else if(board[pos1] == "x"){
                winsX++;
            }

            return true;

        }
    }   
    
    return false;
}

function restartGame(){

    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    symbols = ['o', 'x'];
    gameOver = false;

}


