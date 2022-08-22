import React, { useEffect , useState} from 'react';
import Timer from '../Timer';
import * as S from './styled';

export default function GameOver(props) {
  const[time, setTime] = useState(0);
  let interval = null;

  useEffect(()=>{
    if(!props.gameOver){
      start();
    }else{
      clearInterval(interval);
    }

    return ()=>{
      clearInterval(interval)
    }

  },[props.gameOver])

  function start(){
    resetTimer();
    interval = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);
  }

  function resetTimer(){
    setTime(0);
  }

  return (
    
    props.gameOver?<S.WrapperGameOver>
                    <div>
                        Parabéns você completou o jogo!
                        <Timer time={time}></Timer>
                    </div>
                    <button id="restart" onClick={props.restart}>Jogar Novamente</button>
                </S.WrapperGameOver>
                : <></>
  )
}
