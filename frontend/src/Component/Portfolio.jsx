import React,{useState,useEffect} from 'react'
import '../css/App.css';
import First from './First';
export default function Portfolio() {
    const [click,setClick]=useState(false);
    const [portfolio_lists,setPortfolio_lists]=useState(["20년 만기 퇴직 연금","22년 문노인 노후연금저축"]);

    const handlePortfolioinsert = () =>{
        setClick( (prev) => !prev );
      }

  return (
    <>
    <div className="p_insert_body">
    <h1 style={{fontSize:"50px"}}>포트폴리오 입력</h1>
    <br/>
    <button className="add" onClick={handlePortfolioinsert}>+ 포트폴리오 추가 </button>
    {
      portfolio_lists.map( (portfolio_list,index) =>(
        <>
        <> </><div style={{display : "inline-block"}}> | # {portfolio_list}</div>
        </>
      ))
    }
    <br/>
    <br/>
    {click ? (
        <First/>
        ) : null}
    </div>
    </>
  )
}
