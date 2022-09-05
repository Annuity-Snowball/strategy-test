import React from 'react'

export default function list() {
    const style ={
        width : '200px',
        height : '200px',
        borderRadius : '20%',
        backgroundColor : 'rgb(240,240,240)',
        padding : '3%',
        float : 'left',
        marginRight : '3%',
        marginBottom : '3%',
        fontWeight : 'bold',
      }
  return (
        <div style={style}>
        <h3>눈굴러가요의<br/>추천 포트폴리오<br/>첫번째!</h3>
        <br/>
        <br/>
        <div style={{height : '30px',display :'flex',alignItems : 'center'}}>
        <h1 style={{fontSize : '15px',width : '220px'}}>수령 기간</h1>
        <div style={{width : '100px',height : '17px',textDecoration : 'underline',textAlign :'right'}}>20년</div>
        </div>
        <div style={{height : '30px',display :'flex',alignItems : 'center'}}>
        <h1 style={{fontSize : '15px',width : '220px'}}>수령 금액</h1>
        <div style={{width : '100px',height : '17px',textDecoration : 'underline',textAlign :'right'}}>20만원</div>
        </div>
        </div>
  )
}
