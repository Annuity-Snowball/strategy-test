import React from 'react'
import BoxModel from './BoxModel';
export default function Recommand2() {
  return (
    <div className='p_insert_body'>
      <h1 style={{fontSize:"50px"}}>눈굴러가요의 추천!</h1>
      <BoxModel color="rgb(242,231,254)"/>
      <BoxModel color="rgb(219,178,255)"/>
      <BoxModel color="rgb(187,134,252)"/>
      <BoxModel color="rgb(152,94,255)"/>
      <h1 style={{fontSize:"50px",clear : 'both'}}>다른사용자의 Pick!</h1>
      <BoxModel color="rgb(200,255,244)"/>
      <BoxModel color="rgb(112,239,222)"/>
      <BoxModel color="rgb(3,218,197)"/>
      <BoxModel color="rgb(0,196,180)"/>
    </div>
  )
}
