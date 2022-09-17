import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import { ReactComponent as Ten } from "../img/ten.svg";
import { ReactComponent as Green } from "../img/green.svg"
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="current"
  height="current"
  viewBox="0 0 24 24"
>
  <path fill="current" fill-rule="evenodd" d="...." />
</svg>

const BoxModeL = styled.div`
display : flex;
flex-direction: column;
width : calc( (100% - 60px) / 3);
height: 273px;
background: #FFFFFF;
border: 1px solid #CECECE;
border-radius: 7px;
box-sizing : border-box;
padding : 35px 24px 35px 24px;
gap : 8px;
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
const TextP = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 33px;
letter-spacing: -1px;
margin-bottom : 37px;
color: #000000;
span{
  font-weight: 600;
}
`;
const Frame2 = styled.div`
display : flex;
flex-direction: row;
justify-content : space-between;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 19px;
letter-spacing: -1px;
color: #7C7C7C;
`;
const Round = styled.div`
display : flex;
flex-direction : row;
gap : 4px;
`;
const Text2 = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 25px;
letter-spacing: -1px;
color: #282828;
`;
export default function BoxModel(props) {
    const [period,setPeriod]=useState(props.period);
    const [money,setMoney]=useState(props.money);

  return (
    <BoxModeL>
            <Text1>닉네임 : </Text1>
            <TextP>첫번째 포트폴리오</TextP>
            <Frame2>전략개수 <Round><Green/><Green/><Green/><Green/><Green/></Round></Frame2>
            <Frame2>수령금액 /기간 <Text2>200,000 원 / 20 년</Text2></Frame2>
            <Frame2>수익률 <Text2>200 %</Text2></Frame2>
    </BoxModeL>
  )
}
