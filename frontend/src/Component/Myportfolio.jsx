import React,{useState} from 'react'
import styled from 'styled-components';
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
margin-right : 20px;
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
`;

const BoxModel = styled.div`
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
`
export default function Myportfolio() {
    const [mylist,mylistSet]=useState(0);
  return (
    <MainLayout>
    <Title><Text>내 <span>포트폴리오</span></Text><Text1>등록된 포트폴리오가 {mylist}개 있습니다.</Text1></Title>
    <Frame>
        <BoxModel>
            <Text1>닉네임</Text1>
            <Text>첫번째 포트폴리오</Text>
        </BoxModel>
        <BoxModel>123</BoxModel>
        <BoxModel>123</BoxModel>
        <BoxModel>123</BoxModel>
        <BoxModel>123</BoxModel>
        <BoxModel>123</BoxModel>
    </Frame>
    </MainLayout>
  )
}
