import React,{useEffect, useState} from 'react'
import {Route,Routes,NavLink, Link } from "react-router-dom";
import '../css/App.css';
import Modal from './Modal';
import styled from 'styled-components';
import { ReactComponent as Logo } from "../img/Logo.svg";
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="current"
  height="current"
  viewBox="0 0 24 24"
>
  <path fill="current" fill-rule="evenodd" d="...." />
</svg>

const SubTitle = styled.div`
width : auto;
display : flex;
flex-direction: row;
gap: 37px;
`;
const Login =styled.button`
font-weight: 400;
font-size: 12px;
line-height: 15px;
background: #66C6A3;
color: #000000;
border : none;
`;
const Signup =styled.button`
margin-right : 37px;
font-weight: 400;
font-size: 12px;
line-height: 15px; 
background: #66C6A3;
padding:  0px;
color: #000000;
border : none;
`;
const Hello =styled.button`
font-weight: 400;
font-size: 12px;
line-height: 15px;
background: #66C6A3;
color: #000000;
border : none;
`;
export default function Banner() {
  const [isopen,setIsopen]=useState(false);

  const OnClick = () =>{
    setIsopen(true);
  }
  const handleLogout = () =>{
    localStorage.clear();
    window.location.replace('http://localhost:3000/');
  }
  return (
    <>
            <div className='headertop'>
            <SubTitle>
              {
                localStorage.getItem('token') === null ? (<>
                <Link to="/login"><Login>LOGIN</Login></Link>
                <Link to="/join"><Signup>SIGNUP</Signup></Link></>) : (<><Hello>{localStorage.getItem("nickname")}님!  환영합니다!</Hello><Signup onClick={handleLogout}>로그아웃</Signup></>)
              }
            </SubTitle>
            </div>
            <nav className="header">
            <NavLink className='Logo'to="/"><Logo/></NavLink>
            <ul>
            <NavLink to="/"><li>우리는?</li></NavLink>
            <NavLink to="/insert"><li >스노우 등록</li></NavLink>
            <NavLink to="/myportfolio"><li>내 스노우</li></NavLink>
            <NavLink to="/shopping"><li>스노우샾</li></NavLink>
            </ul>
            </nav>


            {/* {
            isopen && (<Modal open={isopen}
           onClose={ () => {setIsopen(false);}}
          />)} */}
    </>
  )
}
