import React,{useState} from 'react'
import styled from 'styled-components';
import { ReactComponent as Ten } from "../img/ten.svg";
import { ReactComponent as Search } from "../img/Search.svg"
import BoxModel from './BoxModel';
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="current"
  height="current"
  viewBox="0 0 24 24"
></svg>

const HeaderLayout = styled.div`
 max-width : 1440px;
 margin : 0 auto;
 display : flex;
 height: 348px;
 flex-direction: column;
 background: #F5F5F5;
`;
const SubHeaderLayout = styled.div`
 max-width : 1200px;
 width : 1200px;
 margin : 0 auto;
 display : flex;
 flex-direction: column;
 gap : 15px;
`;
const HeaderInput = styled.div`
  height: 166px;
  padding 57px 249px 57px 190px;
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

const TextC = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 33px;
letter-spacing: -1px;
color: #000000;
span{
  font-weight: 600;
  color: #FF7759;
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
const Frame = styled.form`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 22px;
letter-spacing: -1px;
color: #000000;
display : flex;
height: 52px;
flex-direction : row;
align-items : center;
gap : 10px;
`;
const Input = styled.input`
width: 98px;
height: 32px;
background: #F9F9FD;
border: 0.5px solid #C9C6E1;
border-radius: 5px;
padding : 10px;
box-sizing: border-box;
text-align : right;
`;
const Button = styled.button`
display : flex;
gap : 23px;
align-items : center;
justify-content : center;
width: 181px;
height: 52px;
background: #FF7759;
border-radius: 7px;
border : none;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
letter-spacing: -1px;
color: #FFFFFF;
margin-left : auto;
`;
const MainLayout = styled.div`
 max-width : 1200px;
 margin : 0 auto;
 display : flex;
 flex-direction: column;
`;
const Frame1 = styled.div`
display : flex;
gap : 30px;
flex-wrap: wrap;
`;
const Frame2 = styled.div`
display : flex;
gap : 30px;
flex-wrap: wrap;
margin-bottom : 73px;
`;
export default function Portfolioshop() {
  const [list,setList]=useState(0);
  return (
    <>
    <HeaderLayout>
    <SubHeaderLayout>
    <Title><Text>포트폴리오 <span>SHOP</span></Text><Text1>등록된 포트폴리오가 {list}개 있습니다.</Text1></Title>
    <HeaderInput>
      <Frame>수령기간<Input placeholder="년"></Input>월수령금액<Input placeholder="만원"></Input> 납입기간<Input placeholder="년"></Input><Button>검색<Search/></Button></Frame>
    </HeaderInput>
    </SubHeaderLayout>
    </HeaderLayout>
    <MainLayout>
    <Title><TextC><span>HOT </span>PORTFOLIO</TextC><Text1>눈굴러가요의 추천 포트폴리오</Text1></Title>
    <Frame1>
    <BoxModel/><BoxModel/><BoxModel/>
    </Frame1>
    <Title><TextC><span>SNOW </span>PICK</TextC><Text1>스노우 피플이 가장 많이 선택한 픽~!</Text1></Title>
    <Frame1>
    <BoxModel/><BoxModel/><BoxModel/>
    </Frame1>
    <Title><TextC><span>ALL </span>PORTFOLIO</TextC><Text1>모든 포트폴리오</Text1></Title>
    <Frame2>
    <BoxModel/><BoxModel/><BoxModel/>
    </Frame2>
    </MainLayout>
    </>
  )
}
