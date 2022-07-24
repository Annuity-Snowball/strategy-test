import logo from './logo.svg';
import './App.css';


const Title = (props) => {

  return (
    <h1 className='logo'>{props.title}</h1>
  );
}

const App = () =>(
  <>
    <div className="App">
      <Title title="SnowBall"/>
      <nav>
      <ul className="banner">
        <li>우리는?</li>
        <li>포트폴리오 등록</li>
        <li>포트폴리오 추천</li>
        <li>프트폴리오 쇼핑</li>
        <li>공지사항</li>
        <li className="Loginbanner">Log In</li>
        <li className="Signupbanner">Sign up</li>
      </ul>
      </nav>
    </div>

    <h1>포트폴리오 입력</h1>
    <br></br>
    <form>
    <input type="text" placeholder="이름을 입력하세요"/>
    <input type="text" placeholder="별명을 입력하세요"/>
    <input type="text" placeholder="나이을 입력하세요"/>
    <button type="submit">전송</button>
    </form>
  </>
);
export default App;
