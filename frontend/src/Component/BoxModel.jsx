import React from 'react'

export default function BoxModel(props) {
    const style={
        width : '300px',
        height : '600px',
        boxShadow : '0px 0px 3px 2px beige',
        borderRadius : '30px',
        background : props.color,
        float : 'left',
        marginLeft : '5%',
        marginTop : "3%",
        padding : '15px'
        
      };
  return (
    <>
      <div style={style}>
        <br/>
        <br/>
        <br/>
        <h1>눈굴러가요의<br/>추천 포트폴리오<br/>첫번째!</h1>
        <br/><br/>
        <h1>전략목록?</h1>
      </div>
    </>
  )
}
