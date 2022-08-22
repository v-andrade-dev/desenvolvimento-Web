import React from 'react';
import * as S from './styled';

export default function CardElement(props) {

  return (
    <S.WrapperCard>
      <div onClick={()=>props.handleFlip(props.card)} 
          id={props.card.id} className={`card ${props.card.flipped ? 'flip' : '' }`}>
          <div className='card-front'>
              <img className='icon' src={`assets/images/${props.card.icon}.png`} alt={props.card.icon}></img>
          </div>
          <div className='card-back'>
              {'</>'}
          </div>
      </div>
    </S.WrapperCard>
  )
}
