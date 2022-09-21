import { Circle } from '@chakra-ui/react';
import React,{useState} from 'react'
import styled from 'styled-components';
import { ReactComponent as Ten } from "../img/ten.svg";
import { ReactComponent as Green } from "../img/green.svg"
import BoxModel from './BoxModel';
import Modal from './Modal';
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="current"
  height="current"
  viewBox="0 0 24 24"
>
  <path fill="current" fill-rule="evenodd" d="...." />
</svg>
export default function Myportfolio() {
    const [mylist,mylistSet]=useState(6);
    const [isOpen,setIsOpen]=useState(false);

    const handlebutton = (e) =>{
      window.location.href="/insert";
    }
    const handleClick = () =>{
      alert("123");
      isOpen(true);
    }
  return (
    <MainLayout>
    <Title><Text>내 <span>포트폴리오</span></Text><Text1>등록된 포트폴리오가 {mylist}개 있습니다.</Text1> <SgyButton onClick={handlebutton}>새 포트폴리오<Ten/></SgyButton></Title>
    <Frame>
      <BoxModel name="권자몬" money="600,000" rate="77.88" period="2"/>
      <BoxModel name="권자몬" money="300,000" rate="68.45" period="1"/>
      <BoxModel name="권자몬" money="100,000" rate="50.77" period="1"/>
      <BoxModel name="권자몬" money="400,000" rate="25.33" period="2"/>
      <BoxModel name="권자몬" money="700,000" rate="81.99" period="3"/>
      <BoxModel name="권자몬" money="800,000" rate="57.88" period="1"/>
    </Frame>
    </MainLayout>
  )
}
const MainLayout = styled.div`
 max-width : 1200px;
 margin : 0 auto;
 display : flex;
 flex-direction: column;
`;
const Text = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 33px;
letter-spacing: -1px;
color: #000000;
span{
  font-weight: 600;
}
`;
const Title = styled.div`
  display : flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top:73px;
  margin-bottom : 37px;
  gap : 10px;
`;
const Text1 = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 19px;
letter-spacing: -1px;
color: #7C7C7C;
`;
const Frame = styled.div`
display : flex;
gap : 30px;
flex-wrap: wrap;
margin-bottom : 73px;
`;
const SgyButton = styled.div`
display : flex;
width: 150px;
height: 38px;
gap : 31px;
justify-content: center;
height: 37px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 19px;
letter-spacing: -1px;
color: #FFFFFF;
background: #FF7759;
border-radius: 7px;
margin-left : auto;
align-items : center;
`;
