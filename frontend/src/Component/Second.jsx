import React,{useState} from 'react'
import arrow from '../img/arrow.png'
import Third from './Third'
import '../Portfolio.css';
export default function Second(props) {
    const [click,setClick]=useState(false);
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
        <div style={style}>
        <input defaultValue={"자산직접 선택"}/>
        <input defaultValue={"기준입력"}/>
        <input disabled={true}/>
        </div>
        <button onClick={handlePortfolioinsert}><img style={imgstyle} alt="화살표" src={arrow}/></button>
        {click ? (
        <Third/>
        ) : null}
        </>
        );
}
