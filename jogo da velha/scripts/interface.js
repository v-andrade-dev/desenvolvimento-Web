
//inicia o jogo com carregamento da pagina
document.addEventListener('DOMContentLoaded', ()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);

    })
})


function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (!square.children.length) {
        if (rng == true) {
          // faço o primeiro movimento
          handleMove(position);
          setTimeout(score, 10);
          // aqui eu verifico se há algum espaço no array board, se não há ele
          // desconsiderará essa parte, e vai direto para o updateSquare no final da função
          if (board.indexOf("") != -1) {
            // aqui ele atualiza o tabuleiro com a primeira jogava
            updateSquare(position);
            //faz todo o processo da jogada automática
            let n = rngMove();
    
            while (board[n] != "") {
              n = rngMove();
            }
    
            position = n;
            // depois de fazer o processo da jogada automática ele vai para o  updateSquare no final da função
            // para atualizar o tabuleiro com a jogada automática
            if (handleMove(position)) {
              setTimeout(score, 10);
            }
          }
        } else if (handleMove(position)) {
          setTimeout(score, 10);
        }
    
        updateSquare(position);
    }
}
    
//atualiza a div especifica com o simbolo
function updateSquare(position){
    
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}

//limpar o tabuleiro
function cleanSquares(){

    let squares = document.querySelectorAll(".square");
    restartGame();
    squares.forEach((square) => {
        square.innerHTML = ``;
        square.style.backgroundColor = "beige";
    })
}

// placar
function score(){
    let score = document.getElementById("score");
    score.innerHTML = `<p>${winsO+" : "} ${winsX} </p>`;
}

//resetar o placar
function resetScore(){
    winsO = 0;
    winsX = 0;
    let score = document.getElementById("score")
    score.innerHTML = `<p>${winsO+" : "} ${winsX} </p>`;
}

// função para ativar rng, reseta o placar e inicia um novo jogo
function rngActive(){ 
    rng = true;
    console.log("rng ativada - rng = "+rng );
    cleanSquares();
    resetScore();
}

// função para desativar rng, reseta o placar e inicia um novo jogo
function rngDisable(){
    rng = false;
    console.log("rng desativada - rng = "+rng );
    cleanSquares();
    resetScore();
}

//Botão de restart game
document.getElementById("restart").addEventListener("click", cleanSquares);

//Botão de reset do placar
document.getElementById("resetScore").addEventListener("click", resetScore);


