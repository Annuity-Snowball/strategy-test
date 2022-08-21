import React,{useState} from 'react'
import arrow from '../img/arrow.png'

export default function First() {
    const [click1,setClick]=useState(false);

    const [strategy_lists,setList]=useState(
        [
            {   id : 1,
                strategyName : 'PER 저',
                strategynum : 3,
                rate : 20,
            },
            {   id : 2,
                strategyName : 'PER 고',
                strategynum : 5,
                rate : 30,
            },
        ]
    );

    const handlePortfolioinsert = () =>{
        setClick( (prev) => !prev );
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
                return (
                <>
                <button><img style={imgstyle} alt="화살표" src={arrow}/></button>
                <div style={style}>
                    <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="자산직접선택" onClick={ (e) => {setTab('curr'); setSelect(e.target.innerText);setClick( (prev) => !prev );}}>
                        자산직접선택
                    </div>
                    <div className={`btn ${ tab ==='prev' ? 'active' : ''}`} name="기준입력" onClick={ (e) => {setTab('prev'); setSelect(e.target.innerText); setClick( (prev) => !prev );}}>
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
                console.log(click);
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
                    <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="벨류지표" onClick={ (e) => {setTab('curr'); setSelect(e.target.innerText);setClick( (prev) => !prev );}}>
                        벨류지표
                    </div>
                    <div className={`btn ${ tab ==='prev1' ? 'active' : ''}`} name="펀더멘탈지표" onClick={ (e) => {setTab('prev1'); setSelect(e.target.innerText); setClick( (prev) => !prev );}}>
                        펀더멘탈지표
                    </div>
                    <div className={`btn ${ tab ==='prev2' ? 'active' : ''}`} name="모멘텀지표" onClick={ (e) => {setTab('prev2'); setSelect(e.target.innerText); setClick( (prev) => !prev );}}>
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
            const [select,setSelect]=useState("PER");
            const [tab,setTab]=useState("");
        
            const handlePortfolioinsert = () =>{
                console.log(click);
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
                <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="PER" onClick={ (e) => {setTab('curr'); setClick( (prev) => !prev );}}>
                        PER
                    </div>
                    <div className={`btn ${ tab ==='prev1' ? 'active' : ''}`} name="PBR" onClick={ (e) => {setTab('prev1');  setClick( (prev) => !prev );}}>
                        PBR
                    </div>
                    <div className={`btn ${ tab ==='prev2' ? 'active' : ''}`} name="등등...." onClick={ (e) => {setTab('prev2');  setClick( (prev) => !prev );}}>
                        등등....
                    </div>
                </div>
                {
                        click ? <Five/> : null
                }
                </>
          )
        }
        function Five(props) {
            const [click,setClick]=useState(false);
            const [select,setSelect]=useState("PER");
            const [tab,setTab]=useState("");
        
            const handlePortfolioinsert = () =>{
                setClick( (prev) => !prev );
              }
              const style = {
                width : '300px',
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
                <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="PER" onClick={ (e) => {setTab('curr');}}>
                        PER 저 <input style={{width : '50%'}}placeholder='몇개를 담겠습니까?'></input>
                    </div>
                    <div className={`btn ${ tab ==='prev1' ? 'active' : ''}`} name="PBR" onClick={ (e) => {setTab('prev1'); }}>
                        PER 고 <input style={{width : '50%'}}placeholder='몇개를 담겠습니까?'></input>
                    </div>
                    <div className={`btn ${ tab ==='prev2' ? 'active' : ''}`} name="등등...." onClick={ (e) => {setTab('prev2');  setClick( (prev) => !prev );}}>
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
                    </>
                    : null}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <button>전송</button>
                </div>
                </>
          )
        }
}