import React,{useState} from 'react'
import arrow from '../img/arrow.png'
import '../Portfolio.css';
export default function Fourth(props) {
    const [click,setClick]=useState(false);
    const [select,setSelect]=useState("PER");
    const [tab,setTab]=useState("curr");

    const handlePortfolioinsert = () =>{
        console.log(click);
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
          <div className='btn name'>
            {props.name}
          </div>
        <div className={`btn ${ tab ==='curr' ? 'active' : ''}`} name="PER" onClick={ (e) => {setTab('curr'); setSelect(e.target.innerText);setClick( (prev) => !prev );}}>
                PER
            </div>
            <div className={`btn ${ tab ==='prev1' ? 'active' : ''}`} name="PBR" onClick={ (e) => {setTab('prev1'); setSelect(e.target.innerText); setClick( (prev) => !prev );}}>
                PBR
            </div>
            <div className={`btn ${ tab ==='prev2' ? 'active' : ''}`} name="등등...." onClick={ (e) => {setTab('prev2'); setSelect(e.target.innerText); setClick( (prev) => !prev );}}>
                등등....
            </div>
        </div>
        </>
  )
}
