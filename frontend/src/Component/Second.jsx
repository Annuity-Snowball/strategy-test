import React,{useState,useEffect} from 'react'
import arrow from '../img/arrow.png'
import Third from './Third'
import '../Portfolio.css';
export default function Second(props) {
    const [click,setClick]=useState(false);
    const [select,setSelect]=useState("자산직접선택");
    const [tab,setTab]=useState("curr");
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
