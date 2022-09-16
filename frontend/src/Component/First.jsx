import { border } from '@chakra-ui/react';
import React,{useState,useEffect} from 'react'
import arrow from '../img/arrow.png'
import styled from 'styled-components';
import { ReactComponent as Ten } from "../img/ten.svg";
import { ReactComponent as BlackArrow } from "../img/blackarrow.svg"
import { ReactComponent as WhiteArrow } from "../img/whitearrow.svg"
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
const Input = styled.input`
    width : 100%;
    height : 36px;
    padding: 16px 10px;
    background: #F9F9FD;
    border: 0.5px solid #C9C6E1;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: #C4C0DD;
    letter-spacing: -0.5px;
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
const Button = styled.button`
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
`;
export default function First() {
    const [click1,setClick1]=useState(false);
    const [strategy_lists,setList]=useState([]);
    const [nextId,setNextId]=useState(1);
    const [sum,setSum]=useState(0);

    useEffect ( () =>{
        setClick1(false);
        setNextId(strategy_lists.length);
        console.log(nextId);
    },[strategy_lists])
    //새로실행되는게 아니라면 state 초기값은 그대로다.
    //map은 리스트가 수정되면 랜더링관계없이 새로 생성해주는듯?
    const handlePortfolioinsert = () =>{
        setClick1( (prev) => (!prev) );
      }
    const imgstyle ={
        width : '30px',
        display : 'inline-block',
        marginLeft : '20px',
    }
    const handlePortfolioproduce =(e) =>{

        if(sum !== 100)
        {
            alert("포트폴리오를 100퍼로 맞춰주세요");
        }
        else{
            alert("포트폴리오 등록 완료!");
            setList([]);
        }
    }
        return (
        <InputFrame>
        <Frame>
            <Input placeholder='포트폴리오 제목을 입력하세요'></Input>
            <Text>전략 총 {strategy_lists.length}개</Text>
            <Title>
            <div className="strategyname">전략명</div>
            <div className="strategynum">개수</div>
            <div className="strategyrate">%</div>
            </Title>
            {strategy_lists.map( (strategy_list) =>(
                <Title1 key={strategy_list.id}>
                <div className="strategyname">{strategy_list.strategyName}</div>
                <div className="strategynum">{strategy_list.strategynum}</div>
                <div className="strategyrate">{strategy_list.rate}</div>
                </Title1>
            ))}
            { strategy_lists.length ? null : <Text2>등록된 전략이 없습니다.</Text2>}
            <SgyButton onClick={handlePortfolioinsert}>새 전략 추가<Ten/></SgyButton>
            <Text3>100% 전략을 더 채우시면 포트폴리오를<br/>제출 하실 수 있습니다.</Text3>
            <Button>제출</Button>
        </Frame>
        <BlackArrow width="24px"/>
        {click1 ? <Second/> : null}
        </InputFrame>
        );
        function Second(props) {
            const [click,setClick]=useState(false);
            const [select,setSelect]=useState("");
            const [tab,setTab]=useState("");
            useEffect( () =>(
                setClick( (prev) => {if(tab === ''){
                    return false }
                    else{
                        return true
                    }} )
            ),[tab])
            //내가 알기론 useEffect는 컴포넌트당 한개인데 함수로 선언하면 함수 렌더링후 실행하는건지 몹시 궁금하다.
            //tab을 먼저 수정한 후에 click값을 수정하게 진행
                return (
                <>
                <Frame2>
                    <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="자산직접선택" 
                    onClick={(e) => { setTab( (prev) => { if(prev !== 'curr'){return 'curr'}else{return""}});
                    setSelect(e.target.innerText);}}>
                        자산직접선택
                    {tab === 'curr' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev' ? 'active' : ''}`} name="기준입력" 
                    onClick={ (e) => {setTab((prev) => { if(prev !== 'prev'){return 'prev'}else{return""}}); 
                    setSelect(e.target.innerText);}}>
                        기준입력
                        {tab === 'prev' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                </Frame2>
                <BlackArrow width="24px"/>
                { (click && select==="기준입력")? (
                <Third/>
                ) : null}
                { (click && select==="자산직접선택")? (
                <Asset/>
                ) : null}
                </>
                );
        }
        function Asset() {

            const [click,setClick]=useState(false);
            const [select,setSelect]=useState("벨류지표");
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
                    <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="ETF" onClick={ (e) => {setTab((prev) => { if(prev !== 'curr'){return 'curr'}else{return""}}); setSelect(e.target.innerText);}}>
                        ETF{tab === 'curr' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                </Frame2>
                <BlackArrow width="24px"/>
                {click ? (
                <Asset1 name={select}/>
                ) : null}
                </>
          )
        }

        function Third() {

            const [click,setClick]=useState(false);
            const [select,setSelect]=useState("벨류지표");
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
                    <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="벨류지표" onClick={ (e) => {setTab((prev) => { if(prev !== 'curr'){return 'curr'}else{return""}}); setSelect(e.target.innerText);}}>
                        벨류지표{tab === 'curr' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev1' ? 'active' : ''}`} name="펀더멘탈지표" onClick={ (e) => {setTab((prev) => { if(prev !== 'prev1'){return 'prev1'}else{return""}}); setSelect(e.target.innerText);}}>
                        펀더멘탈지표{tab === 'prev1' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev2' ? 'active' : ''}`} name="모멘텀지표" onClick={ (e) => {setTab((prev) => { if(prev !== 'prev2'){return 'prev2'}else{return""}}); setSelect(e.target.innerText);}}>
                        모멘텀지표{tab === 'prev2' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                </Frame2>
                <BlackArrow width="24px"/>
                {click ? (
                <Fourth name={select}/>
                ) : null}
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

            const A = () =>{
                if( select==="PBR")
                {
                    return click ? (<PBR/>) : null;
                }
                else if(select==="PER"){
                    return click ? (<PER/>) : null;
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
                  </div>
                <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="PER" onClick={ (e) => {setSelect(e.target.innerText); setTab((prev) => { if(prev !== 'curr'){return 'curr'}else{return""}}); }}>
                        PER{tab === 'curr' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev1' ? 'active' : ''}`} name="PBR" onClick={ (e) => {setSelect(e.target.innerText); setTab((prev) => { if(prev !== 'prev1'){return 'prev1'}else{return""}}); }}>
                        PBR{tab === 'prev1' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev2' ? 'active' : ''}`} name="등등...." onClick={ (e) => {setSelect(e.target.innerText); setTab((prev) => { if(prev !== 'prev2'){return 'prev2'}else{return""}});}}>
                        등등....{tab === 'prev2' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                </Frame2>
                <BlackArrow width="24px"/>
                <A/>
                </>
          )
        }
        function Asset1(props) {
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

            const A = () =>{
                if( select==="PBR")
                {
                    return click ? (<PBR/>) : null;
                }
                else if(select==="PER"){
                    return click ? (<PER/>) : null;
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
                  </div>
                <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="PER" onClick={ (e) => {setSelect(e.target.innerText); setTab((prev) => { if(prev !== 'curr'){return 'curr'}else{return""}}); }}>
                        PER{tab === 'curr' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev1' ? 'active' : ''}`} name="PBR" onClick={ (e) => {setSelect(e.target.innerText); setTab((prev) => { if(prev !== 'prev1'){return 'prev1'}else{return""}}); }}>
                        PBR{tab === 'prev1' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                    <div className={`btn ${ tab ==='prev2' ? 'active' : ''}`} name="등등...." onClick={ (e) => {setSelect(e.target.innerText); setTab((prev) => { if(prev !== 'prev2'){return 'prev2'}else{return""}});}}>
                        등등....{tab === 'prev2' ? (<div className='whitebtn'><WhiteArrow/></div>):(<div className='blackbtn'><BlackArrow/></div>)}
                    </div>
                </Frame2>
                {/* <A/> */}
                </>
          )
        }
        function PBR(props) {
            const [click,setClick]=useState(false);
            const [select,setSelect]=useState("PBR");
            const [tab,setTab]=useState("");
            const handlePortfolioinsert = () =>{
                setClick( (prev) => !prev );
              }
              const handleSubmit = (event) =>{
                event.preventDefault();
                const num =event.target.num.value;
                const rate = parseInt(event.target.percent.value);
                const name = event.target.name.value;
                const newsum=sum+rate;
                if(rate === 0 || rate === "")
                {
                    alert("다시입력해주세요");
                    return;
                }
                if(newsum<=100)
                {
                    const newStrategy={
                        id : nextId,
                        strategyName : name,
                        strategynum : num,
                        rate : rate,}
                    const newStrategys=[...strategy_lists];
                    newStrategys.push(newStrategy);
                    setList(newStrategys);
                    setSum(newsum);
                }
                else{
                    alert("100퍼를 맞춰주세요");
                }
            }
          return (
            <>
                <Frame2>
                <div className='btn name'>
                전략등록하기
                </div>
                    <FormFrame onSubmit={handleSubmit}>
                    <Input name="name" placeholder="PBR 고"></Input><Flex><Input style={{width : '46px'}} name="num" placeholder='수량'defaultValue=""></Input><Input name="percent"style={{width : '46px'}}placeholder='%'></Input><Button1 style={{width : '72px'}}>등록</Button1></Flex>
                    </FormFrame>
                    <FormFrame onSubmit={handleSubmit}>
                    <Input name="name" placeholder="PBR 저"></Input><Flex><Input style={{width : '46px'}} name="num" placeholder='수량'defaultValue=""></Input><Input name="percent"style={{width : '46px'}}placeholder='%'></Input><Button1 style={{width : '72px'}}>등록</Button1></Flex>
                    </FormFrame>
                    <FormFrame style={{height : "145px"}}>
                    <Text style={{marginLeft : "0px"}}>수치정보입력으로 등록하기</Text>
                    <Input name="name" placeholder="전락명"></Input>
                    <Input name="name" placeholder="수량"></Input>
                    <Flex><Input name="percent"style={{width : '46px'}}placeholder='%'></Input>~<Input name="percent"style={{width : '46px'}}placeholder='%'></Input><Button1 style={{width : '72px'}}>등록</Button1></Flex>
                    </FormFrame>
                    <Text3>3개중 하나 선택해주세요</Text3>
                </Frame2>
                </>
          )
        }
        function PER(props) {
            const [click,setClick]=useState(false);
            const [select,setSelect]=useState("PER");
            const [tab,setTab]=useState("");
        
            const handlePortfolioinsert = () =>{
                setClick( (prev) => !prev );
              }
              const handleSubmit = (event) =>{
                event.preventDefault();
                const num =event.target.num.value;
                const rate= parseInt(event.target.percent.value);
                if(rate === 0 )
                {
                    alert("퍼센트를 다시 입력해주세요");
                    return;
                }
                const name = event.target.name.value;
                const newsum=sum+rate;
                if(newsum<=100)
                {
                    const newStrategy={
                        id : nextId,
                        strategyName : name,
                        strategynum : num,
                        rate : rate,}
                    const newStrategys=[...strategy_lists];
                    newStrategys.push(newStrategy);
                    setList(newStrategys);
                    setSum(newsum);
                }
                else{
                    alert("100퍼를 맞춰주세요");
                }
            }
          return (
            <>
                <Frame2>
                <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="PER 고" onClick={ (e) => {setTab('curr');}}>
                    <form onSubmit={handleSubmit}>
                        <input name="name" style={{width : '30%'}} defaultValue={"PER 고"}></input> <input style={{width : '30%'}} name="num" placeholder='몇개를 담겠습니까?'defaultValue=""></input><input name="percent"style={{width : '30%'}}placeholder='몇퍼로 하시겠습니까?' defaultValue=""></input><button>전송</button>
                    </form>
                    </div>
                    <div className={`btn ${ tab ==='prev1' ? 'active' : ''}`} name="PER 저" onClick={ (e) => {setTab('prev1'); }}>
                    <form onSubmit={handleSubmit}>
                    <input name="name" style={{width : '30%'}} defaultValue={"PER 저"}></input> <input style={{width : '30%'}} name="num" placeholder='몇개를 담겠습니까?'defaultValue=""></input><input name="percent"style={{width : '30%'}}placeholder='몇퍼로 하시겠습니까?' defaultValue=""></input><button>전송</button>
                    </form>
                    </div>
                    <div className={`btn ${ tab ==='prev2' ? 'active' : ''}`} name="수치사용자입력" onClick={ (e) => {setTab('prev2');  setClick( (prev) => !prev );}}>
                        수치사용자입력(클릭)
                    </div>
                    {click ?
                    <>
                    <div className='btn'>
                    <input placeholder='전락명'></input>
                    </div>
                    <div className='btn'>
                    <input placeholder='몇퍼센트이상이하인지'></input>
                    </div>
                    <div className='btn'>
                    <input  placeholder='몇개를 담겠습니까?'></input>
                    </div>
                    <div className='btn'>
                    <input  placeholder='몇퍼로 하시겠습니까?'></input>
                    <button>전송</button>
                    </div>
                    </>
                    : null}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Frame2>
                </>
          )
        }
}