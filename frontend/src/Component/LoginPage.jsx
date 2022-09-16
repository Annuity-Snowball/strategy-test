import React from 'react'
import styled from 'styled-components';
import { ReactComponent as KaKao } from "../img/Kakao.svg";
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="current"
  height="current"
  viewBox="0 0 24 24"
>
  <path fill="current" fill-rule="evenodd" d="...." />
</svg>
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
const Login3 =styled.div`
margin-top : 51px;
font-family: 'Roboto';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 100%;
text-align: center;
letter-spacing: -0.408px;
color: #3E3E3E;
flex: none;
order: 0;
flex-grow: 0;
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
margin-bottom : 30px;
`;
const Login5 =styled.button`
width : 350px;
height : 44px;
padding: 16px 10px;
gap: 10px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 100%;
color: #FFFFFF;
background: #66C6A3;
border-radius: 5px;
border : none;
color: #FFFFFF;
margin-bottom : 16px;
`;
const Login6 =styled.div`
width : 350px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 100%;
display : flex;
justify-content: space-between;
`;
const Kakao =styled.button`
width : 350px;
height: 46px;
box-sizing: border-box;
line-height: 100%;
background: #FDD10E;
border-radius: 32px;
letter-spacing: 0.1px;
color: #000000;
display : flex;
gap : 8px;
align-items: center;
justify-content: center;
border :none;
margin-top : 31px;
margin-bottom : 30px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
`;

const Input = styled.input`
width : 350px;
height : 44px;
padding: 16px 10px;
background: #F9F9FD;
border: 0.5px solid #C9C6E1;
border-radius: 5px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 100%;
color: #C4C0DD;
box-sizing: border-box;
margin-bottom : 8px;
`;

const Title =styled.div`
max-width : 500px;
margin : 0 auto;
display : flex;
flex-direction: column;
align-items:center;
`;
export default function LoginPage() {
  return (
    <>
    <div className='LoginLayout'>
        <div className='Logintitle'>
            <Login1>로그인</Login1>
            <Login2>LOG-IN</Login2>
        </div>
    </div>
    <Title>
            <Login3>회원 로그인</Login3>
            <Login4>가입시 입력한 정보로 로그인 하세요</Login4>
            <Input placeholder='닉네임를 입력하세요'/>
            <Input placeholder='비밀번호를 입력하세요'/>
            <Login5>로그인</Login5>
            <Login6><div>회원가입</div><div>비밀번호찾기</div></Login6>
            <Kakao><KaKao/>카카오톡으로 시작</Kakao>
    </Title>
    </>
  );
}
