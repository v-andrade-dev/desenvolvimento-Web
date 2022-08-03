import React, { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import GameOver from './components/GameOver';
import game from './game/game';

export default function MemoryGame(){


    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        setCards(game.createCards())
    },[])

    function restart(){
        game.clearCards();
        setCards(game.createCards());
        setGameOver(false);
    }


    function handleFlip(card){
        
        // if(game.setCard(card.id)){
            
        //     if(game.secondCard){
        //         if(game.checkMatch()){
        //         game.clearCards();
        //         if(game.gameOver()){
        //             setGameOver(true);
        //         }

        //     }else{
        //         setTimeout(()=>{

        //             game.unflipCards();
        //             setCards([...game.cards]);

        //         }, 1000)        
        //     }
        //     }

        // }
        game.flipCard(card.id, ()=>{setGameOver(true)},()=>{setCards([...game.cards])})

        setCards([...game.cards]);

    }

    return(
        <div>
            <GameBoard cards={cards} handleFlip={handleFlip}></GameBoard>
            <GameOver show={gameOver} handleRestart={restart}></GameOver>
        </div>
    )
}