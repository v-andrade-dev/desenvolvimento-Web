import React from 'react'
import CardElement from '../CardElement'
import * as S from './styled'

export default function GameBoard(props) {

  return (
    <S.WrapperBoard>
        {props.cards.map((card, index)=>
          <CardElement handleFlip={props.handleFlip} key={index} card={card}></CardElement>
        )}    
    </S.WrapperBoard>
  )
}
