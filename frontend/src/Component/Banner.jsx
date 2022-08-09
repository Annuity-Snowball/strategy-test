import React from 'react'
import '../App.css';
import '../Banner.css';
export default function Banner() {

    const Title = (props) => {
        return (
          <h1 className='logo'>{props.title}</h1>
        );
      }
      
  return (
    <>
            <nav className="App">
              <Title title="Annuity snowball"/>
              <ul className="banner">
                <a href=""><li>우리는?</li></a>
                <a href=""><li>포트폴리오 등록</li></a>
                <a href=""><li>포트폴리오 추천</li></a>
                <a href=""><li>프트폴리오 쇼핑</li></a>
                <a href=""><li>공지사항</li></a>
                <a href=""><li className="Loginbanner">Log In</li></a>
                <a href=""><li className="Signupbanner">Sign up</li></a>
              </ul>
            </nav>
    </>
  )
}
