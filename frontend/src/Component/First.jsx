import { border } from '@chakra-ui/react';
import React,{useState,useEffect} from 'react'
import PortfolioPrint from './PrintPF';
import X from '../img/x.png'
import styled from 'styled-components';
import Graph from './Graph';
import Graph2 from './Graph2';
import { ReactComponent as Ten } from "../img/ten.svg";
import { ReactComponent as BlackArrow } from "../img/blackarrow.svg"
import { ReactComponent as WhiteArrow } from "../img/whitearrow.svg"
import axios from 'axios'
import WayPF from "./WayPF"
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const InputFrame = styled.div`
display : flex;
flex-direction: row;
gap : 10px;
align-items : center;
`;
const Frame = styled.div`
width : 17.9%;
height: 428px;
display : flex;
padding : 14px 14px 0px 14px;
flex-direction: column;
align-items : center;
background: #FFFFFF;
border: 1px solid #E7E7E7;
border-radius: 7px;
box-sizing: border-box;
`;
const Input1 = styled.input`
    width : 100%;
    height : 36px;
    padding: 16px 10px 16px 0px;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -0.5px;
    color: #282828;
    display: flex;
    align-items: center;
    border : none;
`;
const Text = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: -0.5px;
color: #282828;
margin-top : 16px;
margin-left : auto;
`;
const Text2 = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: -0.5px;
color: #282828;
margin-top : 23px;
`;
const Text3 =styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 100%;
text-align: center;
letter-spacing: -0.5px;
color: #9D9D9D;
margin-top : 24px;
`;
const Span =styled.span`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 100%;
text-align: center;
letter-spacing: -0.5px;
color: #F53A5C;
`;
const Wrap = styled.div`
    display : flex;
    flex-direction: column;
    width : 46px;
    height : 36px;
`;
const Input = styled.input`
    width : 100%;
    height : 36px;
    padding: 16px 10px;
    background: #F9F9FD;
    color: #C4C0DD;
    border: 0.5px solid #C9C6E1;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -0.5px;

`;
const HiddenText =styled.div`
padding : 5px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 100%;
text-align: center;
letter-spacing: -0.5px;
border: 0.5px solid #C9C6E1;
border-radius: 5px;
color: #9D9D9D;
width : 170px;
display : ${props => props.display}
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 9px;
  border-top: 2px solid #66C6A3;
  border-bottom: 1px solid #66C6A3;
  box-sizing: border-box;
  padding : 9px 0px;
`;
const Title1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  padding : 9px 0px;
`;
const SgyButton = styled.div`
margin-top : 12px;
display : flex;
gap : 14px;
justify-content: center;
width : 82%;
height: 37px;
background: #484848;
border-radius: 30px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 100%;
display: flex;
align-items: center;
letter-spacing: -0.5px;
color: #FFFFFF;
`;
const Button = styled.div`
display : flex;
align-items : center;
justify-content : center;
margin-top : auto;
width : calc(100% + 28px);
background: #66C6A3;
border-radius: 0px 0px 7px 7px;
border : none;
height: 40px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 19px;
color: #FFFFFF;
`;
const Button1 = styled.button`
width: 72px;
height: 36px;
background: #636363;
border-radius: 7px;
border : none;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: -0.5px;
color: #FFFFFF;
`
const Frame2 = styled.div`
width : 16.66%;
height: 426px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 100%;
letter-spacing: -0.5px;
color: #282828;
background: #FFFFFF;
border: 1px solid #E7E7E7;
border-radius: 7px;
box-sizing: border-box;
display : flex;
flex-direction: column;
align-items: center;
`;
const NextFrame = styled.div`
width : 16.66%;
height: 426px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 100%;
letter-spacing: -0.5px;
color: #282828;
background: #FFFFFF;
border: 1px dashed grey;
border-radius: 7px;
box-sizing: border-box;
display : flex;
flex-direction: column;
align-items: center;
`;
const FormFrame = styled.form`
width : 90%;
height : 96px;
display : flex;
flex-direction: column;
justify-content : center;
gap : 8px;
border-bottom: 1px solid #E7E7E7;
`;

const Flex = styled.div`
display : flex;
flex-direction: row;
justify-content : space-between;
align-items : center;
font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: #C4C0DD;
    letter-spacing: -0.5px;
`;
export default function First() {
    const [click1,setClick1]=useState(false);
    const [show,setShow]=useState(false);
    const [strategy_lists,setList]=useState([]);
    const [nextId,setNextId]=useState(1);
    const [sum,setSum]=useState(0);
    const [isOpen,setIsOpen]=useState(false);
    const [portfolio_name,setPortfolio_name]=useState("");
    const [tabledata,setTabledata]=useState("");
    useEffect ( () =>{
        setClick1(false);
        setNextId(strategy_lists.length);
        console.log(nextId);
    },[strategy_lists,tabledata])
    // 로그인을 하면 jwt를 줄건데
    // 그걸 니가 세션에 저장해야하고
    // 그 토큰에 유저 정보가 들어가있음
    // 그리고 모든 리퀘스트에 세션에 들어가있는 토큰을 보내줘야함 -> 토큰을 내가 보낸느거야
    // 생성은 내가 함
    //새로실행되는게 아니라면 state 초기값은 그대로다.
    //map은 리스트가 수정되면 랜더링관계없이 새로 생성해주는듯?
    const handlePortfolioinsert = () =>{
        setClick1( (prev) => (!prev) );
      }
    const handleClick = () =>{
        setIsOpen(true);
    }
        return (
            <>
        <InputFrame>
        <Frame>
            <Input name="portfolio_name" placeholder='포트폴리오 제목을 입력하세요' onChange={ (e) => setPortfolio_name(e.target.value)}/>
            <Text>전략 총 {strategy_lists.length}개</Text>
            <Title>
            <div className="strategyname">전략명</div>
            <div className="strategynum">개수</div>
            <div className="strategyrate">%</div>
            </Title>
            {strategy_lists.map( (strategy_list) =>(
                <Title1 key={strategy_list.id}>
                <div className="strategyname">{strategy_list.productName}</div>
                <div className="strategynum">{strategy_list.productNumber}</div>
                <div className="strategyrate">{strategy_list.productRate}</div>
                </Title1>
            ))}
            { strategy_lists.length ? null : <Text2>등록된 전략이 없습니다.</Text2>}
            <SgyButton onClick={handlePortfolioinsert}>새 전략 추가<Ten/></SgyButton>
            <Text3>100% 전략을 더 채우시면 포트폴리오를<br/>제출 하실 수 있습니다.</Text3>
            <Button onClick={handleClick}>제출</Button>
        </Frame>
        {isOpen && (<Modal open={isOpen}
                    onClose={()=>{setIsOpen(false);
                    }}
        />)}
        <BlackArrow width="24px"/>
        {click1 ? <Second/> : null}
        </InputFrame>
        {show ? (<PortfolioPrint data={tabledata}/>) :null}
        {show ? (<Graph data={tabledata}/> ) :null}
        {show ? (<Graph2 data={tabledata}/>) :null}
        {show ? (<WayPF data={tabledata}/>) : null}
        </>
        );
        function Second(props) {
            const [click,setClick]=useState(false);
            const [select,setSelect]=useState("");
            const [tab,setTab]=useState("");
            useEffect( () =>{
                setClick( (prev) => {if(tab === ''){
                    return false }
                    else{
                        return true
                    }} )
                },[tab])
            //내가 알기론 useEffect는 컴포넌트당 한개인데 함수로 선언하면 함수 렌더링후 실행하는건지 몹시 궁금하다.
            //tab을 먼저 수정한 후에 click값을 수정하게 진행
                return (
                <>
                <Frame2>
                    <div className='btn name'>
                    자산선택
                    <Span>2개중 하나 선택해주세요</Span>
                    </div>
                    <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="자산직접선택" 
                    onClick={(e) => { setTab( (prev) => { if(prev !== 'curr'){return 'curr'}else{return""}});setSelect(e.target.innerText);}}>
                        자산직접선택
                    {tab === 'curr' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev' ? 'active' : ''}`} name="기준입력" 
                    onClick={ (e) => {setTab((prev) => { if(prev !== 'prev'){return 'prev'}else{return""}});setSelect(e.target.innerText);}}>
                        기준입력
                        {tab === 'prev' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                </Frame2>
                <BlackArrow width="24px"/>
                { (click && select==="기준입력")? (
                <Third first={select}/>
                ) : null}
                { (click && select==="자산직접선택")? (
                <Asset first={select}/>
                ) : null}
                </>
                );
        }
        function Asset(props) {

            const [click,setClick]=useState(false);
            const [select,setSelect]=useState("");
            const [tab,setTab]=useState("");
        
            const handlePortfolioinsert = () =>{
                setClick( (prev) => !prev );
              }
            useEffect( () =>(
                setClick( (prev) => {if(tab === ''){
                    return false }
                    else{
                        return true
                    }} )
            ),[tab])
          return (
            <>
                <Frame2>
                <div className='btn name'>
                전략종류
                <Span>3개중 하나 선택해주세요</Span>
                </div>
                    <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="ETF" onClick={ (e) => {setTab((prev) => { if(prev !== 'curr'){return 'curr'}else{return""}});setSelect(e.target.innerText);}}>
                        ETF{tab === 'curr' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev1' ? 'active' : ''}`} name="리츠" onClick={ (e) => {setTab((prev) => { if(prev !== 'prev1'){return 'prev1'}else{return""}});setSelect(e.target.innerText);}}>
                        리츠{tab === 'prev1' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev2' ? 'active' : ''}`} name="예금" onClick={ (e) => {setTab((prev) => { if(prev !== 'prev2'){return 'prev2'}else{return""}});setSelect(e.target.innerText);}}>
                        예금{tab === 'prev2' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                </Frame2>
                {/* {click ? (
                <Asset1 name={select} first={props.first} second={select}/>
                ) : null} */}
                </>
          )
        }

        function Third(props) {

            const [click,setClick]=useState(false);
            const [select,setSelect]=useState("");
            const [tab,setTab]=useState("");
        
            const handlePortfolioinsert = () =>{
                setClick( (prev) => !prev );
              }
            useEffect( () =>(
                setClick( (prev) => {if(tab === ''){
                    return false }
                    else{
                        return true
                    }} )
            ),[tab])
          return (
            <>
                <Frame2>
                <div className='btn name'>
                전략종류
                <Span>3개중 하나 선택해주세요</Span>
                </div>
                    <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="벨류지표" onClick={ (e) => {setTab((prev) => { if(prev !== 'curr'){return 'curr'}else{return""}});setSelect(e.target.innerText);}}>
                        벨류지표{tab === 'curr' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev1' ? 'active' : ''}`} name="펀더멘탈지표" onClick={ (e) => {setTab((prev) => { if(prev !== 'prev1'){return 'prev1'}else{return""}});setSelect(e.target.innerText);}}>
                        펀더멘탈지표{tab === 'prev1' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev2' ? 'active' : ''}`} name="모멘텀지표" onClick={ (e) => {setTab((prev) => { if(prev !== 'prev2'){return 'prev2'}else{return""}});setSelect(e.target.innerText);}}>
                        모멘텀지표{tab === 'prev2' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                </Frame2>
                <BlackArrow width="24px"/>
                { (click && select==="벨류지표")? (
                <Fourth name={select} first={props.first} second={select}/>
                ) : null}
                { (click && select==="펀더멘탈지표")? (
                <Funder name={select} first={props.first} second={select}/>
                ) : null}
                { (click && select==="모멘텀지표")? (
                <Momantom name={select} first={props.first} second={select}/>
                ) : null}
                </>
          )
        }
        function Momantom(props) {
            const [click,setClick]=useState(false);
            const [select,setSelect]=useState("");
            const [tab,setTab]=useState("");
            useEffect( () =>(
                setClick( (prev) => {if(tab === ''){
                    return false }
                    else{
                    return true
                    }})
            ),[tab])
            const handlePortfolioinsert = () =>{
                setClick( (prev) => !prev );
              }
          return (
            <>
                <Frame2>
                  <div className='btn name'>
                    {props.name}
                    <Span>2개중 하나 선택해주세요</Span>
                  </div>
                <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="이동평균선돌파" onClick={ (e) => { setTab((prev) => { if(prev !== 'curr'){return 'curr'}else{return""}}); setSelect(e.target.innerText);}}>
                        이동평균선돌파{tab === 'curr' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev1' ? 'active' : ''}`} name="시장대비상승" onClick={ (e) => { setTab((prev) => { if(prev !== 'prev1'){return 'prev1'}else{return""}});setSelect(e.target.innerText); }}>
                        시장대비상승{tab === 'prev1' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                </Frame2>
                {/* <BlackArrow width="24px"/>
                <A first={props.first} second={props.second} third={select}/> */}
                </>
          )
        }
        function Funder(props) {
            const [click,setClick]=useState(false);
            const [select,setSelect]=useState("");
            const [tab,setTab]=useState("");
            useEffect( () =>(
                setClick( (prev) => {if(tab === ''){
                    return false }
                    else{
                    return true
                    }})
            ),[tab])
            const handlePortfolioinsert = () =>{
                setClick( (prev) => !prev );
              }
          return (
            <>
                <Frame2>
                  <div className='btn name'>
                    {props.name}
                    <Span>5개중 하나 선택해주세요</Span>
                  </div>
                <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="ROE" onClick={ (e) => { setTab((prev) => { if(prev !== 'curr'){return 'curr'}else{return""}}); setSelect(e.target.innerText);}}>
                        ROE{tab === 'curr' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev1' ? 'active' : ''}`} name="ROA" onClick={ (e) => { setTab((prev) => { if(prev !== 'prev1'){return 'prev1'}else{return""}});setSelect(e.target.innerText); }}>
                        ROA{tab === 'prev1' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev2' ? 'active' : ''}`} name="영업이익률" onClick={ (e) => { setTab((prev) => { if(prev !== 'prev2'){return 'prev2'}else{return""}});setSelect(e.target.innerText); }}>
                        영업이익률{tab === 'prev2' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev3' ? 'active' : ''}`} name="부채비율" onClick={ (e) => { setTab((prev) => { if(prev !== 'prev3'){return 'prev3'}else{return""}});setSelect(e.target.innerText); }}>
                        부채비율{tab === 'prev3' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev4' ? 'active' : ''}`} name="유동비율" onClick={ (e) => { setTab((prev) => { if(prev !== 'prev4'){return 'prev4'}else{return""}});setSelect(e.target.innerText); }}>
                        유동비율{tab === 'prev4' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                </Frame2>
                {/* <BlackArrow width="24px"/>
                <A first={props.first} second={props.second} third={select}/> */}
                </>
          )
        }
        function Fourth(props) {
            const [click,setClick]=useState(false);
            const [select,setSelect]=useState("");
            const [tab,setTab]=useState("");
            useEffect( () =>(
                setClick( (prev) => {if(tab === ''){
                    return false }
                    else{
                    return true
                    }})
            ),[tab])

            const A = (props) =>{
                if( select==="PBR")
                {
                    return click ? (<PBR first={props.first} second={props.second} third={select}/>) : null;
                }
                else if(select==="PER"){
                    return click ? (<PER first={props.first} second={props.second} third={select}/>) : null;
                }
                else if(select==="PSR"){
                    return click ? (<PSR first={props.first} second={props.second} third={select}/>) : null;
                }
            }
            const handlePortfolioinsert = () =>{
                setClick( (prev) => !prev );
              }
          return (
            <>
                <Frame2>
                  <div className='btn name'>
                    {props.name}
                    <Span>3개중 하나 선택해주세요</Span>
                  </div>
                <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="PER" onClick={ (e) => { setTab((prev) => { if(prev !== 'curr'){return 'curr'}else{return""}}); setSelect(e.target.innerText);}}>
                        PER{tab === 'curr' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev1' ? 'active' : ''}`} name="PBR" onClick={ (e) => { setTab((prev) => { if(prev !== 'prev1'){return 'prev1'}else{return""}});setSelect(e.target.innerText); }}>
                        PBR{tab === 'prev1' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev2' ? 'active' : ''}`} name="PBR" onClick={ (e) => { setTab((prev) => { if(prev !== 'prev2'){return 'prev2'}else{return""}});setSelect(e.target.innerText); }}>
                        PSR{tab === 'prev2' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                </Frame2>
                <BlackArrow width="24px"/>
                <A first={props.first} second={props.second} third={select}/>
                </>
          )
        }
        // function Asset1(props) {
        //     const [click,setClick]=useState(false);
        //     const [select,setSelect]=useState("");
        //     const [tab,setTab]=useState("");
        //     useEffect( () =>(
        //         setClick( (prev) => {if(tab === ''){
        //             return false }
        //             else{
        //             return true
        //             }})
        //     ),[tab])

        //     const A = (props) =>{
        //         if( select==="PBR")
        //         {
        //             return click ? (<PBR first={props.first} second={props.second} third={select}/>) : null;
        //         }
        //         else if(select==="PER"){
        //             return click ? (<PER first={props.first} second={props.second} third={select}/>) : null;
        //         }
        //     }
        //     const handlePortfolioinsert = () =>{
        //         setClick( (prev) => !prev );
        //       }
        //   return (
        //     <>
        //         <Frame2>
        //           <div className='btn name'>
        //             {props.name}
        //             <Span>2개중 하나 선택해주세요</Span>
        //           </div>
        //             <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="PER" onClick={ (e) => { setTab((prev) => { if(prev !== 'curr'){return 'curr'}else{return""}}); }}>
        //                 PER{tab === 'curr' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
        //             </div>
        //             <div className={`btn ${ tab ==='prev1' ? 'active' : ''}`} name="PBR" onClick={ (e) => {setTab((prev) => { if(prev !== 'prev1'){return 'prev1'}else{return""}}); }}>
        //                 PBR{tab === 'prev1' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
        //             </div>
        //         </Frame2>
        //         <A first={props.first} second={props.second} third={select}/>
        //         </>
        //   )
        // }
        function PBR(props) {
            const [click,setClick]=useState(false);
            const [select,setSelect]=useState("PBR");
            const [tab,setTab]=useState("");
            const [hide,setHide]=useState("false");
            const [upperset,setUpper]=useState(0);
            const [lowerset,setLower]=useState(0);
            const handlePortfolioinsert = () =>{
                setClick( (prev) => !prev );
              }
            useEffect( () =>{
                setHide(false);
            },[])
              const handleSubmit = (event) =>{
                event.preventDefault();
                const number =event.target.num.value;
                const rate = event.target.percent.value;
                const name = event.target.name.value;
                const upper =upperset;
                const lower= lowerset;
                    const newStrategy={
                        "id" : nextId,
                        "productName" : name,
                        "productNumber" : parseInt(number),
                        "productRate" : parseInt(rate),
                        "productStartRate" : upper,
                        "productEndRate" : lower,
                    
                    }
                // setList( (current)=>[newStrategy, ...current]);
                    console.log(strategy_lists);
                    const newStrategys=[...strategy_lists];
                    newStrategys.push(newStrategy);
                    setList(newStrategys);
                    console.log(newStrategys);
            }
          return (
            <>
                <Frame2>
                <div className='btn name'>
                전략등록하기
                <Span>3개중 하나 선택해주세요</Span>
                </div>
                    <FormFrame onSubmit={handleSubmit}>
                    <Input1 name="name" placeholder="PBR 고" disabled={true} value="PBR 고"></Input1><Flex><Wrap><Input onMouseEnter={() => {setHide(true)}} onMouseLeave={() => {setHide(false)}} style={{width : '46px'}} name="num" placeholder='수량'defaultValue=""></Input><HiddenText display={hide ? "block" : "none"}>전략수량을 입력해주세요</HiddenText></Wrap><Input name="percent"style={{width : '46px'}}placeholder='%'></Input><Button1 style={{width : '72px'}}>등록</Button1></Flex>
                    </FormFrame>
                    <FormFrame onSubmit={handleSubmit}>
                    <Input1 name="name" placeholder="PBR 저" disabled={true} value="PBR 저"></Input1><Flex><Input style={{width : '46px'}} name="num" placeholder='수량'defaultValue=""></Input><Input name="percent"style={{width : '46px'}}placeholder='%'></Input><Button1 style={{width : '72px'}}>등록</Button1></Flex>
                    </FormFrame>
                    <FormFrame onSubmit={handleSubmit} style={{height : "130px"}}>
                    <Input1 name="name" disabled={true} value="PBR범위 입력"style={{marginLeft : "0px",marginTop : '0px'}}></Input1>
                    <Flex><Input name="upper" style={{width : '46px'}}onChange={(e)=>{setUpper(e.target.value);}}/>이상<Input name="lower" style={{width : '46px'}} onChange={(e)=>{setLower(e.target.value);}}/>이하</Flex>
                    <Flex><Input style={{width : '46px'}} name="num" placeholder='수량'defaultValue=""></Input><Input name="percent"style={{width : '46px'}}placeholder='%'></Input><Button1 style={{width : '72px'}}>등록</Button1></Flex>
                    </FormFrame>
                </Frame2>
                </>
          )
        }
        function PER(props) {
            const [click,setClick]=useState(false);
            const [select,setSelect]=useState("PER");
            const [tab,setTab]=useState("");
            const [hide,setHide]=useState("false");
            const [upperset,setUpper]=useState(0);
            const [lowerset,setLower]=useState(0);
            const handlePortfolioinsert = () =>{
                setClick( (prev) => !prev );
              }
            useEffect( () =>{
                setHide(false);
            },[])
              const handleSubmit = (event) =>{
                event.preventDefault();
                const number =event.target.num.value;
                const rate = event.target.percent.value;
                const name = event.target.name.value;
                const upper =upperset;
                const lower= lowerset;
                const newStrategy={
                    "id" : nextId,
                    "productName" : name,
                    "productNumber" : parseInt(number),
                    "productRate" : parseInt(rate),
                    "productStartRate" : upper,
                    "productEndRate" : lower,
                
                }
                // setList( (current)=>[newStrategy, ...current]);
                    console.log(strategy_lists);
                    const newStrategys=[...strategy_lists];
                    newStrategys.push(newStrategy);
                    setList(newStrategys);
                    console.log(newStrategys);
            }
          return (
            <>
                <Frame2>
                <div className='btn name'>
                전략등록하기
                <Span>3개중 하나 선택해주세요</Span>
                </div>
                    <FormFrame onSubmit={handleSubmit}>
                    <Input1 name="name" placeholder="PER 고" disabled={true} value="PER 고"></Input1><Flex><Wrap><Input onMouseEnter={() => {setHide(true)}} onMouseLeave={() => {setHide(false)}} style={{width : '46px'}} name="num" placeholder='수량'defaultValue=""></Input><HiddenText display={hide ? "block" : "none"}>전략수량을 입력해주세요</HiddenText></Wrap><Input name="percent"style={{width : '46px'}}placeholder='%'></Input><Button1 style={{width : '72px'}}>등록</Button1></Flex>
                    </FormFrame>
                    <FormFrame onSubmit={handleSubmit}>
                    <Input1 name="name" placeholder="PER 저" disabled={true} value="PER 저"></Input1><Flex><Input style={{width : '46px'}} name="num" placeholder='수량'defaultValue=""></Input><Input name="percent"style={{width : '46px'}}placeholder='%'></Input><Button1 style={{width : '72px'}}>등록</Button1></Flex>
                    </FormFrame>
                    <FormFrame onSubmit={handleSubmit} style={{height : "130px"}}>
                    <Input1 name="name" disabled={true} value="PER범위 입력"style={{marginLeft : "0px",marginTop : '0px'}}></Input1>
                    <Flex><Input name="upper" style={{width : '46px'}}onChange={(e)=>{setUpper(e.target.value);}}/>이상<Input name="lower" style={{width : '46px'}} onChange={(e)=>{setLower(e.target.value);}}/>이하</Flex>
                    <Flex><Input style={{width : '46px'}} name="num" placeholder='수량'defaultValue=""></Input><Input name="percent"style={{width : '46px'}}placeholder='%'></Input><Button1 style={{width : '72px'}}>등록</Button1></Flex>
                    </FormFrame>
                </Frame2>
                </>
          )
        }
        function PSR(props) {
            const [click,setClick]=useState(false);
            const [select,setSelect]=useState("PSR");
            const [tab,setTab]=useState("");
            const [hide,setHide]=useState("false");
            const [upperset,setUpper]=useState(0);
            const [lowerset,setLower]=useState(0);
            const handlePortfolioinsert = () =>{
                setClick( (prev) => !prev );
              }
            useEffect( () =>{
                setHide(false);
            },[])
              const handleSubmit = (event) =>{
                event.preventDefault();
                const number =event.target.num.value;
                const rate = event.target.percent.value;
                const name = event.target.name.value;
                const upper =upperset;
                const lower= lowerset;
                const newStrategy={
                    "id" : nextId,
                    "productName" : name,
                    "productNumber" : parseInt(number),
                    "productRate" : parseInt(rate),
                    "productStartRate" : upper,
                    "productEndRate" : lower,
                
                }
                // setList( (current)=>[newStrategy, ...current]);
                    console.log(strategy_lists);
                    const newStrategys=[...strategy_lists];
                    newStrategys.push(newStrategy);
                    setList(newStrategys);
                    console.log(newStrategys);
            }
          return (
            <>
                <Frame2>
                <div className='btn name'>
                전략등록하기
                <Span>3개중 하나 선택해주세요</Span>
                </div>
                    <FormFrame onSubmit={handleSubmit}>
                    <Input1 name="name" placeholder="PSR 고" disabled={true} value="PSR 고"></Input1><Flex><Wrap><Input onMouseEnter={() => {setHide(true)}} onMouseLeave={() => {setHide(false)}} style={{width : '46px'}} name="num" placeholder='수량'defaultValue=""></Input><HiddenText display={hide ? "block" : "none"}>전략수량을 입력해주세요</HiddenText></Wrap><Input name="percent"style={{width : '46px'}}placeholder='%'></Input><Button1 style={{width : '72px'}}>등록</Button1></Flex>
                    </FormFrame>
                    <FormFrame onSubmit={handleSubmit}>
                    <Input1 name="name" placeholder="PSR 저" disabled={true} value="PSR 저"></Input1><Flex><Input style={{width : '46px'}} name="num" placeholder='수량'defaultValue=""></Input><Input name="percent"style={{width : '46px'}}placeholder='%'></Input><Button1 style={{width : '72px'}}>등록</Button1></Flex>
                    </FormFrame>
                    <FormFrame onSubmit={handleSubmit} style={{height : "130px"}}>
                    <Input1 name="name" disabled={true} value="PSR범위 입력"style={{marginLeft : "0px",marginTop : '0px'}}></Input1>
                    <Flex><Input name="upper" style={{width : '46px'}}onChange={(e)=>{setUpper(e.target.value);}}/>이상<Input name="lower" style={{width : '46px'}} onChange={(e)=>{setLower(e.target.value);}}/>이하</Flex>
                    <Flex><Input style={{width : '46px'}} name="num" placeholder='수량'defaultValue=""></Input><Input name="percent"style={{width : '46px'}}placeholder='%'></Input><Button1 style={{width : '72px'}}>등록</Button1></Flex>
                    </FormFrame>
                </Frame2>
                </>
          )
        }
        function Modal( {onClose}) {
            const [start,setStart]=useState("");
            const [end,setEnd]=useState("");
            const [money,setMoney]=useState("");
            const [startmoney,setStartmoney]=useState("");
            const handleClose =() =>{
              onClose?.();
            };
            useEffect( ( )=>{

            },[])

            const handleSubmit = async (event) =>{
                event.preventDefault();
                onClose?.();
                const Reigster =
                    {
                        "id": 1,
                        "name": portfolio_name,
                        "startDate": start,
                        "endDate": end,
                        "rebalancing_duration": 3,
                        "InputMoney": parseInt(money),
                        "startMoney": parseInt(startmoney),
                        "inputWay":0,
                        "strategy_number": parseInt(strategy_lists.length),
                        "straegies" : strategy_lists,
                            // {
                            //     "id":String(strategy_lists[0].temp_id),
                            //     "productName":strategy_lists[0].name,
                            //     "productNumber":strategy_lists[0].number,
                            //     "productRate":strategy_lists[0].rate,
                            //     "productStartRate":strategy_lists[0].upper,
                            //     "productEndRate":strategy_lists[0].lower
                            // },
                            // {
                            //     "id":String(strategy_lists[1].temp_id),
                            //     "name":strategy_lists[1].name,
                            //     "number":strategy_lists[1].number,
                            //     "rate":strategy_lists[1].rate,
                            //     "upper":strategy_lists[1].upper,
                            //     "lower":strategy_lists[1].lower
                            // }
                    };
                console.log(Reigster);
                const result = await axios.post(
                    'http://ec2-43-201-61-246.ap-northeast-2.compute.amazonaws.com:8000/port_api/portfolio_info/allinone/create/', Reigster);
                setTabledata(result);
                console.log(result);
                setShow(true);
            };
            return (
              <>
              <Overlay >
                <ModalWrap onSubmit={handleSubmit}>
                  <ModelTitleText>포트폴리오 등록</ModelTitleText>
                  <ModalFrame><span>투자시작일</span><ModalInput name="start_date" placeholder="ex) 2011-11-11" onChange={(e) => {setStart(e.target.value)}}/></ModalFrame>
                  <ModalFrame><span>투자종료일</span><ModalInput name="end_date" placeholder="ex) 2019-11-11" onChange={(e) => {setEnd(e.target.value)}}/></ModalFrame>
                  <ModalFrame><span>초기금액</span><ModalInput name="start_money" placeholder="ex) 30000" onChange={(e) => {setStartmoney(e.target.value)}}/></ModalFrame>
                  <ModalFrame><span>납입금액 </span><ModalInput name="input_money" placeholder="ex) 60000" onChange={(e) => {setMoney(e.target.value)}}/></ModalFrame>
                  <div style={{width : "100%", display : "flex", flexDirection : "row", marginTop:"auto"}}><Button11 onClick={handleClose}>취소</Button11><Button12 type="submit">완료</Button12></div>
                </ModalWrap>
              </Overlay>
              </>
            )
          }
}
const Overlay = styled.div`
position : fixed;
width : 100%;
height : 100%;
top : 0;
bottom: 0;
left : 0;
right : 0;
background: rgba(0, 0, 0, 0.8);
text-align :center;
`;
const ModalWrap = styled.form`
width : 600px;
height : fit-content;
position : absolute;
top : 50%;
left : 50%;
transform: translate(-50%, -50%);
width: 352px;
height: 379px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 7px;
display : flex;
flex-direction: column;
gap : 22px;
align-items : center;
z-index : 99px;
`; 
const ModelTitleText =styled.div`
display : flex;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 33px;
margin-top : 24px;
color: #000000;
`;
const ModalFrame = styled.div`
width : 78.24%;
display : flex;
flex-direction: row;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
color: #000000;
align-items : center;
height: 36px;
span{
    font-weight: 600;
}
`;
const ModalInput = styled.input`
display : flex;
flex-direction: row;
align-items: center;
padding: 16px 10px;
height: 36px;
width: 171px;
gap: 10px;
background: #F9F9FD;
border: 0.5px solid #C9C6E1;
border-radius: 5px;
box-sizing : border-box;
margin-left : auto;
`;
const Button11 =styled.div`
width : 30%;
height: 58px;
background: #6C6C6C;
border-radius: 0px 0px 0px 7px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 19px;
color: #DCDCDC;
display : flex;
justify-content : center;
align-items : center;
border : none;
`;
const Button12 =styled.button`
width : 70%;
height: 58px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 19px;
color: #FFFFFF;
background: #66C6A3;
border-radius: 0px 0px 7px 0px;
border : none;
`;