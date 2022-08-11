import React,{useState} from 'react'
import Fourth from './Fourth';
import arrow from '../img/arrow.png'
import '../Portfolio.css';
export default function Third() {

    const [click,setClick]=useState(false);

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
        <div style={style}>
        <input defaultValue={"벨류지표"}/>
        <input defaultValue={"펀더멘탈지표"}/>
        <input defaultValue={"모멘텀지표"}/>
        </div>
        <button onClick={handlePortfolioinsert}><img style={imgstyle} alt="화살표" src={arrow}/></button>
        {click ? (
        <Fourth/>
        ) : null}
        </>
  )
}
