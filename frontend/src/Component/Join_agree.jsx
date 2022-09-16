import { Checkbox, Input } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';

const Login1 =styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 30px;
line-height: 41px;
letter-spacing: -1px;
color: #000000;
`;
const Login2 =styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 25px;
letter-spacing: -1px;
color: #000000;
`;
const Title =styled.div`
     max-width : 500px;
     margin : 0 auto;
     display : flex;
     flex-direction: column;
`;
const Login3 =styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 100%;
text-align: center;
letter-spacing: -0.408px;
color: #3E3E3E;
margin-top : 51px;
margin-bottom : 8px;
`;
const Login4 =styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
text-align: center;
letter-spacing: -0.408px;
color: #999999;
margin-bottom : 52px;
`;
const Login5 =styled.div`
width : 500px;
display : flex;
flex-direction : flex-start;
font-family: 'Roboto';
font-style: normal;
gap : 8px;
margin-bottom : 43px;
`;
const Login6 =styled.div`
width : 500px;
display : flex;
flex-direction : flex-start;
gap: ${props => props.gapsize};
font-family: 'Roboto';
font-style: normal;
margin-bottom : 9px;
`;
const Login7 =styled.div`
width : 500px;
display : flex;
flex-direction : flex-start;
font-family: 'Roboto';
font-style: normal;
margin-top : 30px;
margin-bottom : 10px;
`;
const Text=styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 100%;
letter-spacing: -0.408px;
color: #3E3E3E;
`;
const Text1=styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 100%;
letter-spacing: -0.408px;
color: #2E2E2E;
flex: none;
order: 1;
flex-grow: 0
`;
const Text2=styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 100%;
letter-spacing: -0.408px;
color: #2E2E2E;
`;
const CheckBox=styled.input`
display: inline-flex;
width: ${props => props.size};
height:${props => props.size};
margin : 0px;
`;
const Req=styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 100%;
letter-spacing: -0.408px;
color: ${props=>props.color};
flex: none;
order: 2;
flex-grow: 0;
`
const Textarea=styled.div`
width: 500px;
height: ${props => props.height};
background: #F8F8F8;
border: 1px solid #E6E6E6;
border-radius: 7px;
margin-bottom : 30px;
`;
const Button=styled.button`
width: 240px;
height: 42px;
background: #66C6A3;
border-radius: 7px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
letter-spacing: -1px;
border : none;
margin-top: 72px;
color: #FFFFFF;
margin-left :auto;
margin-bottom : 87px;
transform:translate(-50%,0);
`;
export default function Join_agree() {
  const handleButton = (e) =>{
    console.log("!");
    window.location.href="/signup";

}
  return (
    <>
    <div className='LoginLayout'>
        <div className='Logintitle'>
            <Login1>회원가입</Login1>
            <Login2>SIGN UP OUR MEMBERSHIP</Login2>
        </div>
    </div>
        <Title>
                <Login3>약관동의</Login3>
                <Login4>필수 약관에 모두 동의하셔야 가입버튼이 활성화 됩니다.</Login4>
                <Login5><CheckBox type="checkbox" size="20px"/><Text>전체동의</Text></Login5>
                <Login6 gapsize="7px"><CheckBox type="checkbox"/><Text1>서비스 이용약관 동의</Text1><Req color="#F53A5C">(필수)</Req></Login6>
                <Textarea rows="20" cols="50" disabled height="120px">
                </Textarea>
                <Textarea rows="20" cols="50" disabled height="120px"></Textarea>
                <Login7><Text2>마케팅 활용동의 및 광고 수신 동의</Text2></Login7>
                <Textarea rows="20" cols="50" disabled height="84px"></Textarea>
                <Login6 gapsize="7px"><CheckBox type="checkbox" size="16px"/><Text1>SMS</Text1><Req color="#90C17E">(선택)</Req></Login6>
                <Login6 gapsize="7px"><CheckBox type="checkbox" size="16px"/><Text1>서비스 이용약관 동의</Text1><Req color="#90C17E">(선택)</Req></Login6>
                <Button onClick={handleButton}>다음단계</Button>
        </Title>

    </>
  )
}
