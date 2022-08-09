import React,{useState} from 'react'
import arrow from '../img/arrow.png'
import Second from './Second';
export default function First() {
    const [click,setClick]=useState(false);
    const handlePortfolioinsert = () =>{
        setClick( (prev) => !prev );
      }
    const style = {
        width : '300px',
        height : '500px',
        display : 'inline-block',
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
        <input defaultValue={"시그니엘 리츠"}/>
        <input defaultValue={"트럼프 타워 리츠"}/>
        <input defaultValue={"KODEX코스피 추종 레버리지*100"}/></div>
        <button onClick={handlePortfolioinsert}><img style={imgstyle} alt="화살표" src={arrow}/></button>
        {click ? (
        <Second/>
        ) : null}
        </>
        );
}
