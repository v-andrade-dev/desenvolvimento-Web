import { useEffect, useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import game from './game/index';

function App() {

  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([]);
  

  
  useEffect(()=>{
    setCards(game.createCards());

  },[])


  function restart(){
    setGameOver(false);
    setCards(game.createCards())
    
  }

  function handleFlip(card){
    if(game.setCard(card.id)){
      if(game.secondCard){
          if(game.checkMatch()){
              game.clearCards();
              if(game.checkGameOver()){
                setGameOver(true);
                
              }
          }else{
              setTimeout(()=>{
                  game.unflipCards();
                  setCards([...game.cards]);
              }, 1000);
          }
      }    
    }
    setCards([...game.cards]);
  }
  

  return (
    <>
      <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      <GameOver gameOver={gameOver} restart={restart}></GameOver>
    </>

  );
}

export default App;
