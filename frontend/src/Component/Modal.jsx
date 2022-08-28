import React,{useState} from 'react'
import {createPortal} from "react-dom"
import styled from 'styled-components';
import Modal2 from './Modal2';
export default function Modal() {
  const [isopen,setIsopen]=useState(false);

  const OnClick = () =>{
    setIsopen(true);
  }
  return (
    <AppWrap>
    <button onClick={OnClick}>클릭</button>
    {
      isopen && (<Modal2 open={isopen}
           onClose={ () => {setIsopen(false);}}
          />)}
    </AppWrap>
  )
}
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
const AppWrap =styled.div`

text-align :center;
margin : 50px auto;
`;