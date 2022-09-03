import React,{useState,useEffect} from 'react'
import circle from '../img/circle.png'
export default function BoxModel(props) {
    const [strategy_nums,setStrategy_num]=useState([0,1,2,3]);
    const [period,setPeriod]=useState(props.period);
    const [money,setMoney]=useState(props.money);
    const style={
        width : '300px',
        height : '600px',
        borderRadius : '30px',
        background : props.color,
        float : 'left',
        marginRight : '5%',
        marginBottom : "3%",
        padding : '15px',
      };
      useEffect ( () =>{
        setPeriod(props.period);
        setMoney(props.money);
      },[])
  return (
    <>
      <div style={style}>
        <br/>
        <br/>
        <br/>
        {/* 반복문안에 반복문을 넣어야할듯 */}
        <h1 style={{fontSize : '25px'}}>눈굴러가요의<br/>추천 포트폴리오<br/>{props.sequence}번째!</h1>
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
        <div style={{width : '100px',height : '17px',textDecoration : 'underline',textAlign :'right'}}>{period}년</div>
        </div>
        <div style={{height : '30px',display :'flex',alignItems : 'center'}}>
        <h1 style={{fontSize : '20px',width : '220px'}}>수령 금액</h1>
        <div style={{width : '100px',height : '17px',textDecoration : 'underline',textAlign :'right'}}>{money}만원</div>
        </div>
      </div>
    </>
  )
}
