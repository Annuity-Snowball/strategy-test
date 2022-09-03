import React,{useState,useEffect} from 'react'
import '../css/App.css';
import '../css/Recommand.css'
import Button from '@mui/material/Button';
import Recommand2 from './Recommand2'
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

const Label = styled.label`
    color: rgb(112,239,222);
    font-weight: bold;
    margin-left: 25px;
`
export default function Recommand1() {
    const [getperiod,setPeriod]=useState("");
    const [getmoney,setGetmoney]=useState("");
    const [paiement,setPaiement]=useState("");
    const [click,setClick]=useState(false);
    const style={
        width : '1000px',
        height : '70px',
        boxShadow: '1px 1px 3px 1px #dadce0',
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
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                    <Label >수령기간 : </Label>
                    <input className="recommandinput"name="수령기간" value={getperiod} onChange={handleOnchange}></input>
                    </Grid>
                    <Grid item xs={4}>
                    <Label >월수령금액 : </Label>
                        <input  className="recommandinput" name="월수령금액" value={getmoney} onChange={handleOnchange}></input>
                    </Grid>
                    <Grid item xs={4}>
                    <Label>납입기간 : </Label>
                            <input className="recommandinput" name="납입기간" value={paiement} onChange={handleOnchange}></input>
                    </Grid>
                </Grid>
            </div>
        </div>
        <Button variant="contained" style={{marginLeft: '30px',
    padding: '7px',}}type='submit'>조회하기</Button>
        </form>
    </div>
    {click ? (<Recommand2 period={getperiod} money={getmoney}/>) : null}
    </>
  )
}
