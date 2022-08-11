import React,{useState,useEffect} from 'react'
import '../App.css';
import '../Portfolio.css';
import First from './First';
export default function Portfolio() {
    const [click,setClick]=useState(true);

    const handlePortfolioinsert = () =>{
        setClick( (prev) => !prev );
      }

  return (
    <>
    <div className="p_insert_body">
    <h1 style={{fontSize:"50px"}}>포트폴리오 입력</h1>
    <br/>
    <button className="add" onClick={handlePortfolioinsert}>+ 포트폴리오 추가</button>
    <br/>
    <br/>
    {click ? (
        <First/>
        ) : null}
    </div>
    </>
  )
}
