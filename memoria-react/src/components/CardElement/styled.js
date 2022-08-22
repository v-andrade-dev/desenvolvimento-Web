import styled from "styled-components";

export const WrapperCard = styled.div`
.card{
  width: 150px;
  height: 150px;
  position: relative;

  transform-style: preserve-3d;
  transition: transform .5s;
}

.card-back, .card-front{
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0,0,0,0.45);
  backface-visibility: hidden;
}

.card-front{
  background-color: #101c2c;
  transform: rotateY(180deg);
}

.card-back{
  color: #101c2c;
  background-color: #05c3ff;
  font-size: 30px;
  font-weight: bold;
 }

.flip{
  transform: rotateY(180deg);
} 

`
  
