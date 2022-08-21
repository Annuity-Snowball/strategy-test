import React from 'react'

export default function list() {
    const style ={
        width : '350px',
        height : '350px',
        borderRadius : '20%',
        boxShadow : '0px 0px 2px 2px gray',
        backgroundColor : 'grey',
        padding : '3%',
        float : 'left',
        marginLeft : '3%',
        marginTop : '1%'
      }
  return (
        <div style={style}>
        <h1>눈굴러가요의<br/>추천 포트롤리오<br/>첫번째!</h1>
        <br/>
        <br/>
        <span>수령기간         20년</span>
        <span>수령금액         20만원</span>
        </div>
  )
}
