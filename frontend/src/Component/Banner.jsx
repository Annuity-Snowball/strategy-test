import React from 'react'
import {Route,Routes,NavLink } from "react-router-dom";
import '../App.css';
import '../Banner.css';
export default function Banner() {

    const Title = (props) => {
        return (
          <NavLink to="/"><h1 className='logo'>{props.title}</h1></NavLink>
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
                <NavLink to="/login"><li className="Loginbanner">Log In</li></NavLink>
                <NavLink to="/signup"><li className="Signupbanner">Sign up</li></NavLink>
              </ul>
            </nav>
    </>
  )
}
