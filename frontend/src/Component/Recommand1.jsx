import React,{useState,useEffect} from 'react'
import '../App.css';
import '../Recommand.css'
import Recommand2 from './Recommand2'
export default function Recommand1() {
    const [getperiod,setPeriod]=useState("");
    const [getmoney,setGetmoney]=useState("");
    const [paiement,setPaiement]=useState("");
    const [click,setClick]=useState(false);
    const style={
        width : '600px',
        height : '70px',
        boxShadow : '0px 0px 2px 2px gray',
        display : 'inline-block',
    }
    function handleOnchange(event)
    {
        if(event.target.name==="수령기간")
        {
            setPeriod(event.target.value);
        }
        else if(event.target.name==="월수령금액")
        {
            setGetmoney(event.target.value);
        }
        else{
            setPaiement(event.target.value);
        }
    }
    function handleSubmit(event){
        alert(`납입금액 : ${getperiod}  월수령금액 : ${getmoney} 납입기간 : ${paiement}`);
        setClick(true);
        event.preventDefault(); //전송시 새로고침 방지
    }
  return (
    <>
    <div className="p_insert_body">
        <h1 style={{fontSize:"50px"}}>포트폴리오 입력</h1>
        <br/>
        <form onSubmit={handleSubmit}>
        <div style={style}>
            <div className="recommand_inquire">
            <label >수령기간 : </label>
            <input className="recommandinput"name="수령기간" value={getperiod} onChange={handleOnchange}></input>
            <label >월수령금액 : </label>
            <input  className="recommandinput" name="월수령금액" value={getmoney} onChange={handleOnchange}></input>
            <label>납입기간 : </label>
            <input className="recommandinput" name="납입기간" value={paiement} onChange={handleOnchange}></input>
            </div>
        </div>
        <button className="button" type='submit'>조회하기</button>
        </form>
    </div>
    {click ? (<Recommand2 period={getperiod} money={getmoney}/>) : null}
    </>
  )
}
