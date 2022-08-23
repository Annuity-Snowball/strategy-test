import React,{useState} from 'react'
import circle from '../img/circle.png'
export default function BoxModel(props) {
    const [strategy_nums,setStrategy_num]=useState([0,1,2,3]);
    const [period,setPeriod]=useState("20년");
    const [money,setMoney]=useState("20만원");
    const style={
        width : '300px',
        height : '600px',
        boxShadow : '0px 0px 3px 2px beige',
        borderRadius : '30px',
        background : props.color,
        float : 'left',
        marginLeft : '5%',
        marginTop : "3%",
        padding : '15px',
        
      };
  return (
    <>
      <div style={style}>
        <br/>
        <br/>
        <br/>
        <h1 style={{fontSize : '25px'}}>눈굴러가요의<br/>추천 포트폴리오<br/>첫번째!</h1>
        <br/><br/>
        <h1 style={{fontSize : '20px'}}>전략 목록</h1>
        <div style={{ height : '30px',position : 'relative',marginTop : '5px',marginBottom : '5px'}}>
        {strategy_nums.map( (strategy_num) =>(
          <>
          <img className="strategycircle"style={{width : '30px',
        position : 'absolute',
        top : 0,
        left : (strategy_num*15)
        }}
        src={circle} alt="원"/>
        </>
        ))}
        </div>
        <div style={{height : '30px',display :'flex',alignItems : 'center'}}>
        <h1 style={{fontSize : '20px',width : '250px'}}>세제 혜택</h1>
        <input style={{width : '17px',height : '17px'}}type="checkbox"/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div style={{height : '30px',display :'flex',alignItems : 'center'}}>
        <h1 style={{fontSize : '20px',width : '220px'}}>수령 기간</h1>
        <div style={{width : '100px',height : '17px',textDecoration : 'underline',textAlign :'right'}}>{period}</div>
        </div>
        <div style={{height : '30px',display :'flex',alignItems : 'center'}}>
        <h1 style={{fontSize : '20px',width : '220px'}}>수령 금액</h1>
        <div style={{width : '100px',height : '17px',textDecoration : 'underline',textAlign :'right'}}>{money}</div>
        </div>
      </div>
    </>
  )
}
