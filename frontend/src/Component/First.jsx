import React,{useState,useEffect} from 'react'
import arrow from '../img/arrow.png'

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
    const style = {
        width : '300px',
        height : '500px',
        display : 'inline-block',
        verticalAlign: 'middle',
        boxShadow : '0px 0px 3px 2px gray',
        }
    const imgstyle ={
        width : '50px',
        display : 'inline-block',
        marginLeft : '10px',

    }
        return (
        <>
        <div style={style}>
            <div className='strategytitle'>
            <div className="strategyname">
                전략명
            </div>
            <div className="strategynum">
                개수
            </div>
            <div className="strategyrate">
                <input className='percent' disabled={true}></input>%
            </div>
            </div>
            {strategy_lists.map( (strategy_list) =>(
                <div className='strategytitle'>
                <div className="strategyname">
                    {strategy_list.strategyName}
                </div>
                <div className="strategynum">
                    {strategy_list.strategynum}개
                </div>
                <div className="strategyrate">
                    <input className='percent' disabled={true} defaultValue={strategy_list.rate}></input>%
                </div>
                </div>
            ))}
            <div className='btn insert' onClick={handlePortfolioinsert}>
                + 전략추가하기
            </div>
        </div>
        {click1 ? (
        <Second/>
        ) : null}
        </>
        );

        function Second(props) {
            const [click,setClick]=useState(false);
            const [select,setSelect]=useState("자산직접선택");

            const [tab,setTab]=useState("");
            const style = {
                width : '250px',
                height : '500px',
                display : 'inline-block',
                verticalAlign: 'middle',
                boxShadow : '0px 0px 3px 2px gray',
                marginLeft : '10px',
                }
            const imgstyle ={
                width : '50px',
                display : 'inline-block',
                marginLeft : '10px'
            }
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
                <button><img style={imgstyle} alt="화살표" src={arrow}/></button>
                <div style={style}>
                    <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="자산직접선택" 
                    onClick={(e) => { setTab( (prev) => { if(prev !== 'curr'){return 'curr'}else{return""}});

                    setSelect(e.target.innerText);}}>
                        자산직접선택
                    </div>
                    <div className={`btn ${ tab ==='prev' ? 'active' : ''}`} name="기준입력" 
                    onClick={ (e) => {setTab((prev) => { if(prev !== 'prev'){return 'prev'}else{return""}}); 
                    setSelect(e.target.innerText);}}>
                        기준입력
                    </div>
                </div>
                {click ? (
                <Third/>
                ) : null}
                </>
                );
        }
        function Third() {

            const [click,setClick]=useState(false);
            const [select,setSelect]=useState("벨류지표");
            const [tab,setTab]=useState("");
        
            const handlePortfolioinsert = () =>{
                setClick( (prev) => !prev );
              }
              const style = {
                width : '250px',
                height : '500px',
                display : 'inline-block',
                verticalAlign: 'middle',
                boxShadow : '0px 0px 3px 2px gray',
                marginLeft : '10px',
                }
            const imgstyle ={
                width : '50px',
                display : 'inline-block',
                marginLeft : '10px'
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
                <button onClick={handlePortfolioinsert}><img style={imgstyle} alt="화살표" src={arrow}/></button>
                <div style={style}>
                    <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="벨류지표" onClick={ (e) => {setTab((prev) => { if(prev !== 'curr'){return 'curr'}else{return""}}); setSelect(e.target.innerText);}}>
                        벨류지표
                    </div>
                    <div className={`btn ${ tab ==='prev1' ? 'active' : ''}`} name="펀더멘탈지표" onClick={ (e) => {setTab((prev) => { if(prev !== 'prev1'){return 'prev1'}else{return""}}); setSelect(e.target.innerText);}}>
                        펀더멘탈지표
                    </div>
                    <div className={`btn ${ tab ==='prev2' ? 'active' : ''}`} name="모멘텀지표" onClick={ (e) => {setTab((prev) => { if(prev !== 'prev2'){return 'prev2'}else{return""}}); setSelect(e.target.innerText);}}>
                        모멘텀지표
                    </div>
                </div>
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
              const style = {
                width : '250px',
                height : '500px',
                display : 'inline-block',
                verticalAlign: 'middle',
                boxShadow : '0px 0px 3px 2px gray',
                marginLeft : '10px',
                }
            const imgstyle ={
                width : '50px',
                display : 'inline-block',
                marginLeft : '10px'
            }
          return (
            <>
                <button onClick={handlePortfolioinsert}><img style={imgstyle} alt="화살표" src={arrow}/></button>
                <div style={style}>
                  <div className='btn name'>
                    {props.name}
                  </div>
                <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="PER" onClick={ (e) => {setSelect(e.target.innerText); setTab((prev) => { if(prev !== 'curr'){return 'curr'}else{return""}}); }}>
                        PER
                    </div>
                    <div className={`btn ${ tab ==='prev1' ? 'active' : ''}`} name="PBR" onClick={ (e) => {setSelect(e.target.innerText); setTab((prev) => { if(prev !== 'prev1'){return 'prev1'}else{return""}}); }}>
                        PBR
                    </div>
                    <div className={`btn ${ tab ==='prev2' ? 'active' : ''}`} name="등등...." onClick={ (e) => {setSelect(e.target.innerText); setTab((prev) => { if(prev !== 'prev2'){return 'prev2'}else{return""}});}}>
                        등등....
                    </div>
                </div>
                <A/>
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
                if(sum<=100)
                {
                    const newStrategy={
                        id : nextId,
                        strategyName : name,
                        strategynum : num,
                        rate : rate,}
                    const newStrategys=[...strategy_lists];
                    newStrategys.push(newStrategy);
                    setList(newStrategys);
                    setSum(newsum+rate);
                }
                else{
                    alert("100퍼를 맞춰주세요");
                }
            }
              const style = {
                width : '430px',
                height : '500px',
                display : 'inline-block',
                verticalAlign: 'middle',
                boxShadow : '0px 0px 3px 2px gray',
                marginLeft : '10px',
                }
            const imgstyle ={
                width : '50px',
                display : 'inline-block',
                marginLeft : '10px'
            }
          return (
            <>
                <button onClick={handlePortfolioinsert}><img style={imgstyle} alt="화살표" src={arrow}/></button>
                <div style={style}>
                <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="PBR 고" onClick={ (e) => {setTab('curr');}}>
                    <form onSubmit={handleSubmit}>
                        <input name="name" style={{width : '30%'}} defaultValue={"PBR 고"}></input> <input style={{width : '30%'}} name="num" placeholder='몇개를 담겠습니까?'defaultValue=""></input><input name="percent"style={{width : '30%'}}placeholder='몇퍼로 하시겠습니까?' defaultValue=""></input><button>전송</button>
                    </form>
                    </div>
                    <div className={`btn ${ tab ==='prev1' ? 'active' : ''}`} name="PBR 저" onClick={ (e) => {setTab('prev1'); }}>
                    <form onSubmit={handleSubmit}>
                    <input name="name" style={{width : '30%'}} defaultValue={"PBR 저"}></input> <input style={{width : '30%'}} name="num" placeholder='몇개를 담겠습니까?'defaultValue=""></input><input name="percent"style={{width : '30%'}}placeholder='몇퍼로 하시겠습니까?' defaultValue=""></input><button>전송</button>
                    </form>
                    </div>
                    <div className={`btn ${ tab ==='prev2' ? 'active' : ''}`} name="전략명" onClick={ (e) => {setTab('prev2');  setClick( (prev) => !prev );}}>
                        수치사용자입력(클릭)
                    </div>
                    {click ?
                    <>
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
                </div>
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
                const rate= event.target.percent.value;
                const name = event.target.name.value;
                const newsum=sum+rate;
                if(sum<=100)
                {
                    const newStrategy={
                        id : nextId,
                        strategyName : name,
                        strategynum : num,
                        rate : rate,}
                    const newStrategys=[...strategy_lists];
                    newStrategys.push(newStrategy);
                    setList(newStrategys);
                    setSum(newsum+rate);
                }
                else{
                    alert("100퍼를 맞춰주세요");
                }
            }
              const style = {
                width : '430px',
                height : '500px',
                display : 'inline-block',
                verticalAlign: 'middle',
                boxShadow : '0px 0px 3px 2px gray',
                marginLeft : '10px',
                }
            const imgstyle ={
                width : '50px',
                display : 'inline-block',
                marginLeft : '10px'
            }
          return (
            <>
                <button onClick={handlePortfolioinsert}><img style={imgstyle} alt="화살표" src={arrow}/></button>
                <div style={style}>
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
                </div>
                </>
          )
        }
}