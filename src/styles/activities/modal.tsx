import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const ModalBox = styled('div')`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.3);
  z-index: 1;
`
const MODAL_ANIMATION = keyframes`
  0% {
    display: none;
    transform: translateY(1000px);
    width: 100px;
    height: 100px;
  }
  100% {
    background-color: whitesmoke; 
    transform: translateY(0);
    width: 1100px;
    height: 650px;
  }
`
export const Modal = styled('div')`
  position: relative;
  display: grid;
  grid-template-columns: 750px auto;
  border-radius: 20px;
  animation: ${MODAL_ANIMATION} 0.3s linear forwards;
`
export const Picture = styled('img')`
  width: 100%;
`
export const Description = styled('div')`
border-left: 1px solid rgba(0,0,0,0.3);
`
export const CloseBtn = styled('button')`
  position: absolute;
  top: 5px;
  right: 8px;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  width: 30px;
  height: 30px;
  font-size: 25px;
  color: rgba(0,0,0,0.4);
  cursor: pointer;
  &:hover {
    color: black;
  }
`
const url = styled('div')`
  background-image: url('https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1');
`