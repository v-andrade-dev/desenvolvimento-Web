
const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";


startGame();
function startGame(){
    initializeCards(game.createCards());
}

function initializeCards(){
    let gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = '';

    game.cards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);

    })
}

function createCardContent(card, cardElement){
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, element){

    let cardFace = document.createElement('div');
    cardFace.classList.add(face);

    if(face === FRONT){
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "./assets/images/" + card.icon + ".png";
        cardFace.appendChild(iconElement);
    
    }else{
        cardFace.innerHTML = "&lt/&gt";
    }

    element.appendChild(cardFace);
}

function flipCard(){

    if(game.setCard(this.id)){
        
        this.classList.add('flip');
        if(game.secondCard){
        if(game.checkMatch()){
            game.clearCards();
            if(game.gameOver()){
                setTimeout(()=>{
                    let gameOverLayer = document.getElementById("gameOver");
                    gameOverLayer.style.display = 'flex';
                }, 1000);
            }

        }else{
            setTimeout(()=>{

                let firstCardView = document.getElementById(game.firstCard.id);
                let secondCardView = document.getElementById(game.secondCard.id);

                firstCardView.classList.remove('flip');
                secondCardView.classList.remove('flip');
                game.unflipCards();
            }, 1000)        
        }
        }
    }
}

function restart(){
    game.clearCards();
    startGame();
    let gameOverLayer = document.getElementById("gameOver");
    gameOverLayer.style.display = 'none';
}