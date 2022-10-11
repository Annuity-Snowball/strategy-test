import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import {Route,Routes,NavLink } from "react-router-dom";
import { ReactComponent as Profile } from "../img/Profile.svg";
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="current"
  height="current"
  viewBox="0 0 24 24"
></svg>
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
const Title =styled.form`
max-width : 500px;
margin : 0 auto;
display : flex;
flex-direction: column;
align-items:center;
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
margin-bottom : 26px;
`;
const Login5 =styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;
text-align: center;
letter-spacing: -0.408px;
color: #66C6A3;
margin-top : 11px;
margin-bottom : 31px;
`;

const Frame1 = styled.div`
display : flex;
flex-direction: row;
width : 100%;
gap : 20px;
`;
const Frame2 = styled.div`
display : flex;
flex-direction: row;
gap : 4px;
`;
const NameFrame=styled.div`
width : calc( (100% - 20px) / 2);
height: 87px;
display : flex;
flex-direction: column;
gap : 8px;
`;
const EmailFrame=styled.div`
margin-top : 30px;
width : 100%;
display : flex;
flex-direction: column;
gap : 8px;
`;

const NicknameFrame= styled.div`
width : calc( (100% - 20px) / 2 );
height: 87px;
display : flex;
flex-direction: column;
gap : 8px;
`
const Req=styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 100%;
letter-spacing: -0.408px;
color: ${props=>props.color};
`
const Text1=styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 100%;
letter-spacing: -0.408px;
color: #2E2E2E;
`;
const Text2 =styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 16px;
letter-spacing: -0.408px;
color: ${props => props.color || "#66C6A3"};
`;
const Input = styled.input`
width : 100%;
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
`;
const Button=styled.button`
width: 240px;
height: 42px;
border-radius: 7px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
letter-spacing: -1px;
border : none;
margin-top: 72px;
background: ${props => props.background || "#66C6A3"};
color: ${props => props.color || "#FFFFFF"};
margin-left :auto;
margin-bottom : 87px;
transform:translate(-50%,0);
`;

export default function Singup() {
    const [name,setName]=useState("");
    const [nickname,setNickname]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [checkpassword,setCheckpassword]=useState("true");
    const [checkemail,setCheckemail]=useState("true");
    const [checknickname,setChecknickname]=useState("true");

    const handleName = (e) =>{
        setName(e.target.value);
    };
    const handleNickname= (e)=>{
        setNickname(e.target.value);
    };
    const handleEmail =(e)=>{
        setEmail(e.target.value);
    };
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    };
    const handlePasswordCheck = (e) =>{
        if(e.target.value === password)
        {
            setCheckpassword(true);
        }
        else{
            setCheckpassword(false);
        }
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const Reigster = new FormData();
        Reigster.append("name",name);
        Reigster.append("nickname", nickname);
        Reigster.append("email",email);
        Reigster.append("password",password);
        console.log(Reigster);
        try{
            await axios(
                {
                    method : "POST",
                    url : "http://ec2-43-201-61-246.ap-northeast-2.compute.amazonaws.com:8000/service_api/user/",
                    data : Reigster,
                    headers : {"Content-Type" : "multipart/form-data",},
                });
                alert("회원가입성공!");
                window.location.href="/";
        }catch(error){
            console.log(error);
            if(error.response.data.email[0] === "user with this email already exists.")
            {
                alert("이메일이 겹쳐요");
                setCheckemail(false);
            }
            else{
                setCheckemail(true);
            }
            if(error.response.data.nickname[0] === "user with this nickname already exists.")
            {
                alert("닉네임이 겹쳐요");
                setChecknickname(false);
            }
            else{
                setChecknickname(true);
            }
            alert("에러");
        }
        
    }
  return (
    <>
    <div className='LoginLayout'>
        <div className='Logintitle'>
            <Login1>회원가입</Login1>
            <Login2>SIGN UP OUR MEMBERSHIP</Login2>
        </div>
    </div>
    <Title onSubmit={handleSubmit}>
            <Login3>가입정보입력</Login3>
            <Login4>아래의 필수 정보를 입력하시면 가입이 완료됩니다.</Login4>
            <Profile/>
            <Login5>프로필 사진 변경</Login5>
            <Frame1>
                <NameFrame>
                    <Frame2>
                    <Text1>이름</Text1><Req color="#F53A5C">(필수)</Req>
                    </Frame2>
                    <Input name="name" placeholder='본명을 입력하세요' onChange={handleName}></Input>
                    <Text2>한글, 영문 대소문자만 가능합니다</Text2>
                </NameFrame>
                <NicknameFrame>
                    <Frame2>
                    <Text1>닉네임</Text1><Req color="#F53A5C;">(필수)</Req>
                    </Frame2>
                    <Input nickname="nickname" placeholder='원하시는 닉네임을 입력하세요' onChange={handleNickname}></Input>
                    {checknickname ? (<Text2>4~13자리의 한글,영문 대소문자, 숫자 사용가능</Text2>) : (<Text2 color="#F53A5C">다시입력해주세요</Text2>)}
                </NicknameFrame>
            </Frame1>
            <EmailFrame>
                <Frame2>
                <Text1>이메일</Text1><Req color="#F53A5C;">(필수)</Req>
                </Frame2>
                <Input email="email" placeholder='이메일을 입력하세요' onChange={handleEmail}></Input>
                {checkemail ? (<Text2>한글, 영문 대소문자만 가능합니다</Text2>) : (<Text2 color="#F53A5C">다시입력해주세요</Text2>)}
            </EmailFrame>
            <EmailFrame>
                <Frame2>
                <Text1>비밀번호 입력</Text1><Req color="#F53A5C;">(필수)</Req>
                </Frame2>
                <Input password="password" placeholder='비밀번호 입력' onChange={handlePassword}></Input>
                <Input placeholder='비밀번호 확인' onChange={handlePasswordCheck}></Input>
                {checkpassword ? (<Text2>비밀번호 확인완료</Text2>) : (<Text2 color="#F53A5C;">비밀번호를 확인해주세요</Text2>)}
            </EmailFrame>
            <Button >가입완료</Button>
    </Title>
    </>
  );
}
