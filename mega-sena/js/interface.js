window.addEventListener('DOMContentLoaded', start);


function start(){
    newGame();
}

function newGame(){
    game.currentGame = [];
    game.savedGame = [];
    document.querySelector('#megasena-savedgames').innerHTML = '';
    renderBoard();
    renderButtons();
    renderSavedGames();
}

function resetGame(){
    game.currentGame = [];
    renderBoard();
}

function renderBoard(){
    let board = document.querySelector('#megasena-board');
    board.innerHTML = '';
    game.createBoard();
    let ulNumbers = document.createElement('ul');
    for(let i in game.board){
        ulNumbers.innerHTML+= `<li class="li-numbers">${game.board[i]<10 ?'0':''}${game.board[i]}</li>`;
    }

    board.appendChild(ulNumbers);
    let numbers = document.querySelectorAll('.li-numbers');
    numbers.forEach(number=>{
        number.addEventListener('click', handleClickNumber)})
}

function renderButtons(){
    let divButtons = document.querySelector('#megasena-buttons');
    divButtons.innerHTML = `<button class="button">Novo Jogo</button>
                            <button class="button">Resetar Jogo</button>
                            <button class="button">Jogo Aleatório</button>
                            <button class="button">Salvar Jogo</button>`;

    let newGameButton = document.querySelectorAll('.button')[0];
    newGameButton.addEventListener('click', newGame);                                           

    let resetButton = document.querySelectorAll('.button')[1];
    resetButton.addEventListener('click', resetGame);

    let randomGameButton = document.querySelectorAll('.button')[2];
    randomGameButton.addEventListener('click', randomGame);

    let saveButton = document.querySelectorAll('.button')[3];
    saveButton.addEventListener('click', renderSavedGames);
}

function renderSavedGames(){
    game.saveGame(game.currentGame);
    let divSavedGames = document.querySelector('#megasena-savedgames');
    divSavedGames.innerHTML=`<h2>Jogos Salvos</h2>`;
    let ulSavedGame = document.createElement('ul');
    for(let i in game.savedGame){
        ulSavedGame.innerHTML+= `<li class="li-games">${game.savedGame[i]}</li>`;
    }
    divSavedGames.appendChild(ulSavedGame);
    resetGame();
    renderBoard();
}


function handleClickNumber(event){
    let number = Number(event.target.innerText);
    if(game.gameHasNumber(number)){
        game.removeNumber(number);
        event.target.classList.remove('selected');
    }else if(game.currentGame.length!=6){
            event.target.classList.add('selected');
        }
        if(event.target.classList.contains('selected')){
            game.addNumber(number);
        }
}

function randomGame(){
    resetGame();
    while(game.currentGame.length!=6){
        game.addNumber(Math.ceil(Math.random()*60));
    }
    for(let i of game.currentGame){
       document.querySelectorAll('.li-numbers')[i-1].classList.add('selected');
    }
    
}


