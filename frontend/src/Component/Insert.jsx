import React from 'react'
import Portfolio from './Portfolio';
import PortfolioPrint from './PrintPF';
import styled from 'styled-components';
import {Link } from "react-router-dom";
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
margin-right : 20px;
color: #000000;
span{
  font-weight: 600;
}
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
const Title = styled.div`
  display : flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top:73px;
  margin-bottom : 37px;
  a{
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: -1px;
      text-decoration-line: underline;
      color: #389774;
  }
`;
export default function Insert() {
  return (
    <MainLayout>
    <Title><Text>새 포트폴리오 <span>등록하기</span></Text><Text1>등록된 포트폴리오는 ‘내포트폴리오'에서 확인하실 수 있습니다.</Text1>&nbsp;<Link className="abc" to="/myportfolio">바로가기</Link></Title>
    <Portfolio />
    </MainLayout>
  )
}
