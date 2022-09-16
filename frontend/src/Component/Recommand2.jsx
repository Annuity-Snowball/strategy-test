import React from 'react'
import BoxModel from './BoxModel';
export default function Recommand2(props) {
  return (
    <div className='p_insert_body'>
      <h1 style={{fontSize:"50px"}}>눈굴러가요의 추천!</h1>
      <BoxModel color="rgb(242,231,254)" sequence="첫" money={props.money} period={props.period}/>
      <BoxModel color="rgb(219,178,255)" sequence="두"money={props.money} period={props.period}/>
      <BoxModel color="rgb(187,134,252)" sequence="세"money={props.money} period={props.period}/>
      <BoxModel color="rgb(152,94,255)" sequence="네"money={props.money} period={props.period}/>
      <h1 style={{fontSize:"50px",clear : 'both'}}>다른사용자의 Pick!</h1>
      <BoxModel color="rgb(200,255,244)" sequence="첫"money={props.money} period={props.period}/>
      <BoxModel color="rgb(112,239,222)" sequence="두"money={props.money} period={props.period}/>
      <BoxModel color="rgb(3,218,197)" sequence="세"money={props.money} period={props.period}/>
      <BoxModel color="rgb(0,196,180)" sequence="네"money={props.money} period={props.period}/>
    </div>
  )
}
