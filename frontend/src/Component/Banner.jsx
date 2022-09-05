import React,{useState} from 'react'
import {Route,Routes,NavLink } from "react-router-dom";
import '../css/App.css';
import Logo from '../img/Logo.png'
import Modal from './Modal';
import styled from 'styled-components';

const Button =styled.button`
  color: rgb(112,239,222);
  background-color : black;
  font-size : 16px;
  border : none;
  padding : 0px;
`;
export default function Banner() {
  const imgstyle ={
    width : '50px',
    display : 'inline-block',
    marginBottom : '20px',
}
  const [isopen,setIsopen]=useState(false);

  const OnClick = () =>{
    setIsopen(true);
  }
  const Title = (props) => {
        return (
          <NavLink style={{verticalAlign:'middle'}}to="/"><img src={Logo} style={imgstyle}/><h1 className='logo'>{props.title}</h1></NavLink>
        );
      }
  return (
    <>
            <nav className="App">
              <Title title="Annuity snowball"/>
              <ul className="banner">
                <NavLink to="/"><li>우리는?</li></NavLink>
                <NavLink to="/insert"><li >포트폴리오 등록</li></NavLink>
                <NavLink to="/Recommand"><li>포트폴리오 추천</li></NavLink>
                <NavLink to="/shopping"><li>프트폴리오 쇼핑</li></NavLink>
                <NavLink to="/notice"><li>공지사항</li></NavLink>
                 <li className="Loginbanner"><Button onClick={OnClick}>Log In</Button></li>
                <NavLink to="/signup"><li className="Signupbanner">Sign up</li></NavLink>
              </ul>
            </nav>
            {
            isopen && (<Modal open={isopen}
           onClose={ () => {setIsopen(false);}}
          />)}
    </>
  )
}
