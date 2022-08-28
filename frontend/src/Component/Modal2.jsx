import React,{useState} from 'react'
import {createPortal} from "react-dom"
import styled from 'styled-components';
import ModalContainer from './ModalContainer';
const Overlay = styled.div`
position : fixed;
width : 100%;
height : 100%;
top : 0;
bottom: 0;
left : 0;
right : 0;
background : rgba(0,0,0,0.2);
z-index:9999;
text-align :center;

`;
const ModalWrap = styled.div`

width : 600px;
height : fit-content;
border-radius : 15px;
background-color:#fff;
position : absolute;
top : 50%;
left : 50%;
transform: translate(-50%, -50%);
`; 
const CloseButton =styled.div`
float : right;
width : 40px;
height : 40px;
margin : 20px;
cursor : poiner;
i {
  color : #5d5d5d;
  font-size : 30px;
}
`;
const Contents =styled.div`

margin : 50px 30px;
h1{
  font-size:30px;
  font-weight : 600;
  margin-bottom : 60px;
}
`;
const Button =styled.button`
font-size : 14px;
padding : 10px 20px;
border : none;
background-color:#ababab;
color:white;
font-style : italic;
font-weight : 200;
cursor : pointer;
&:hover{
  background-color:#898989;
}
`;

export default function Modal2( {onClose}) {
  const handleClose =() =>{
    onClose?.();
  }
  return (
    <>
    <ModalContainer>
    <Overlay>
      <ModalWrap>
        <CloseButton onClick={handleClose}>
          <i className='fa-solid fa-xmark'></i>
        </CloseButton>
        <Contents><h1>This is Modal 창</h1></Contents>
        <Button onClick={handleClose}>제출완료</Button>
      </ModalWrap>
    </Overlay>
    </ModalContainer>
    </>
  )
}
