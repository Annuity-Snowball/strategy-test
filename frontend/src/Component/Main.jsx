import React,{useState} from 'react'
import styled from 'styled-components';
import { ReactComponent as Most } from "../img/image.svg"
import { ReactComponent as Sub1 } from "../img/sub1.svg"
import { ReactComponent as Sub2 } from "../img/sub2.svg"
import { ReactComponent as Sub3 } from "../img/sub3.svg"
import { ReactComponent as Sub4 } from "../img/sub4.svg"
import { ReactComponent as WhiteArrow } from "../img/whitearrow.svg"
import { ReactComponent as BlackArrow } from "../img/blackarrow.svg"

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="current"
  height="current"
  viewBox="0 0 24 24"
>
  <path fill="current" fill-rule="evenodd" d="...." />
</svg>

const MainLayout = styled.div`
 max-width : 1200px;
 margin : 0 auto;
 display : flex;
 flex-direction: column;
`;

const What = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 33px;
letter-spacing: -1px;
display: flex;
flex-direction: row;
margin-top : 43px;
margin-bottom : ${props => props.bottomsize};
`

const WhatDetail = styled.div`
height: 340px;
display : flex;

`
const Title = styled.div`
  width : 44%;
  display: flex;
  flex-direction: column;
  align-items : center;
  background: #FFFFFF;
  border: 1px solid #E7E7E7;
  border-radius: 7px;
  padding-top : 12px;
  gap :8px;
`
const SubTitle = styled.div`
  width : 56%;
  display: flex;
  flex-wrap: wrap;
  gap : 20px;
  padding-left : 20px;
  box-sizing: border-box;
`
const SubNews = styled.div`
  width : calc( (100% - 40px) / 2);
  height: 160px;
  background: #FFFFFF;
  border: 1px solid #E7E7E7;
  border-radius: 7px;
  padding : 18px;
  box-sizing: border-box;
  display : flex;
  flex-direction: row;
`
const TitleText = styled.div`
margin-top : 24px;
width : 93.1%;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #292929;
`;
const Date = styled.div`
width : 93.1%;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
color: #63B1A8;
`;
const MenuUl = styled.div`
width : auto;
height: 196px;
display : flex;
justify-content: space-between;
flex-wrap: wrap;
margin : 0px;
padding 0px;
margin-bottom : 56px;
`;
const Menu = styled.div`
  width: calc( (100% - 40px) / 3);
  display: flex;
  height : 52px;
  padding : 14px;
  padding-left : 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  border: 1px solid #E7E7E7;
  border-radius: 5px;
  background: #FFFFFF;
  color: #292929;
  box-sizing: border-box;
  align-items : center;
  position : relative;
  &:hover{
    background : #66C6A3;
    border: 1px solid #389774;
    color: #FFFFFF;
    .black{
      display:none;
    }
    .white{
      display:block;
    }
  }
`;
const TitleText1 = styled.div`
width : 105px;
margin-left : 12px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #292929;
`;

export default function Main() {
  return (
    <MainLayout>
      <What bottomsize="3px"><div>What is</div>&nbsp;<div style={{color: "#FF8540", fontWeight: "700"}}>Annuity</div><div style={{fontWeight: "700"}}>?</div></What>
      <WhatDetail>

        <Title><Most width = "93.1%"/><TitleText>연금은 당신의 인생에 큰 도움이 될 것입니다! 그런데 이 페이지는 사실 애니메이션으로 대체될 것입니다...</TitleText><Date>Jun 21, 2022 at 04:07 am KR</Date></Title>
        <News/>
      </WhatDetail>
      <What bottomsize="8px"><div>How do I use</div>&nbsp;<div style={{color: "#66C6A3", fontWeight: "700"}}>Snowball</div><div style={{fontWeight: "700"}}>?</div></What>
      <MenuUl>
        <Menu>ETF란 무엇인가? <div className='white'><WhiteArrow/></div><div className='black'><BlackArrow/></div></Menu>
        <Menu>연금을 알차게 사용하는 방법 <div className='white'><WhiteArrow/></div><div className='black'><BlackArrow/></div></Menu>
        <Menu>왜 연금 스노우볼을 사용해야하는가? <div className='white'><WhiteArrow/></div><div className='black'><BlackArrow/></div></Menu>
        <Menu>연금스노우볼 조직도 <div className='white'><WhiteArrow/></div><div className='black'><BlackArrow/></div></Menu>
        <Menu>공지사항 <div className='white'><WhiteArrow/></div><div className='black'><BlackArrow/></div></Menu>
        <Menu>고객센터 <div className='white'><WhiteArrow/></div><div className='black'><BlackArrow/></div></Menu>
        <Menu>문의사항 <div className='white'><WhiteArrow/></div><div className='black'><BlackArrow/></div></Menu>
        <Menu>우리가 사용하는 기술 <div className='white'><WhiteArrow/></div><div className='black'><BlackArrow/></div></Menu>
        <Menu>About US <div className='white'><WhiteArrow/></div><div className='black'><BlackArrow/></div></Menu>
      </MenuUl>
    </MainLayout>
    
  )
}


function News()
{
  return(
    <>
    <SubTitle>
      <SubNews><Sub1/><TitleText1>이번 주 연금 복권 당첨자 전액 아누티 스노우볼 사용한다 밝혀!</TitleText1></SubNews>
      <SubNews><Sub2/><TitleText1>이번 주 연금 복권 당첨자 전액 아누티 스노우볼 사용한다 밝혀!</TitleText1></SubNews>
      <SubNews><Sub3/><TitleText1>이번 주 연금 복권 당첨자 전액 아누티 스노우볼 사용한다 밝혀!</TitleText1></SubNews>
      <SubNews><Sub4/><TitleText1>이번 주 연금 복권 당첨자 전액 아누티 스노우볼 사용한다 밝혀!</TitleText1></SubNews>
    </SubTitle>
    </>
  );
}
