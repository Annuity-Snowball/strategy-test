import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import { ReactComponent as Ten } from "../img/ten.svg";
import { ReactComponent as Green } from "../img/green.svg"
import ModalContainer from './ModalContainer';
import axios from 'axios';
import Graph from './Graph';
import Graph2 from './Graph2';
import WayPF from "./WayPF";
import PortfolioPrint from './PrintPF';
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="current"
  height="current"
  viewBox="0 0 24 24"
>
  <path fill="current" fill-rule="evenodd" d="...." />
</svg>

const BoxModeL = styled.div`
display : flex;
flex-direction: column;
width : calc( (100% - 60px) / 3);
height: 273px;
background: #FFFFFF;
border: 1px solid #CECECE;
border-radius: 7px;
box-sizing : border-box;
padding : 35px 24px 35px 24px;
gap : 8px;
`;

const Text1 = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 19px;
letter-spacing: -1px;
color: #7C7C7C;
`;
const TextP = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 33px;
letter-spacing: -1px;
margin-bottom : 37px;
color: #000000;
span{
  font-weight: 600;
}
`;
const Frame2 = styled.div`
display : flex;
flex-direction: row;
justify-content : space-between;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 19px;
letter-spacing: -1px;
color: #7C7C7C;
`;
const Round = styled.div`
display : flex;
flex-direction : row;
gap : 4px;
`;
const Text2 = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 25px;
letter-spacing: -1px;
color: #282828;
`;
export default function BoxModel(props) {
    const [period,setPeriod]=useState(props.period);
    const [money,setMoney]=useState(props.money);
    const [isOpen,setIsOpen]=useState(false);
    const [tabledata,setTabledata]=useState("");
    const [show,setShow]=useState(false);
    useEffect(() => {
      {isOpen ? (document.body.style= `overflow: hidden`) : (document.body.style = `overflow: auto`)}
    }, [isOpen])
    const handleClick = async (event)=>{
      setIsOpen(true);
        // onClose?.();
        // setList([]);
        const Reigster = [
            {
                "portfolio_name": "test",
                "strategy_number": "2",
                "start_date": "2019-01-01",
                "end_date": "2020-05-01",
                "rebalancing_duration": "3",
                "input_money": "500000",
                "input_way": "0",
                "user_id": 1
            },
            {
                "temp_id": "0",
                "first_group":"자산직접선택",
                "second_group":"벨류지표",
                "third_group":"PER",
                "name":"PER 저",
                "number":"2",
                "rate":"30",
                "upper":"0",
                "lower":"0"
            },
            {
              "temp_id": "1",
              "first_group":"자산직접선택",
              "second_group":"벨류지표",
              "third_group":"PBR",
              "name":"PBR 고",
              "number":"3",
              "rate":"70",
              "upper":"0",
              "lower":"0"
            }
        ]
        console.log(Reigster);
        // const jstest = JSON.stringify(Reigster);
        const result = await axios.post(
            'http://ec2-43-201-61-246.ap-northeast-2.compute.amazonaws.com:8000/port_api/portfolio_info/allinone/create/', Reigster);
        console.log(result);
        setTabledata(result);
        setShow(true);
    }
  return (
    <>
    <BoxModeL>
            <Text1>닉네임 : {props.name}</Text1>
            <TextP onClick={handleClick}>{props.name}님의 포트폴리오</TextP>
            <Frame2>전략개수 <Round><Green/><Green/><Green/><Green/><Green/></Round></Frame2>
            <Frame2>수령금액 /기간 <Text2>{props.money} 원 / {props.period} 년</Text2></Frame2>
            <Frame2>수익률 <Text2>{props.rate} %</Text2></Frame2>
            {isOpen && (<Modal open={isOpen}
      onClose={()=>{setIsOpen(false);
      }}
/>)}
    </BoxModeL>
  </>
  )


  function Modal({onClose}){

    const handleClose =() =>{
      onClose?.();
    }
    return (
      <>
      <ModalContainer>
        <Overlay>
          <ModalWrap>
          <div style={{width : "100%", display : "flex", flexDirection : "row",justifyContent:"flex-end"}}><Button11 onClick={handleClose}>닫기</Button11></div>
          {show ? (<PortfolioPrint data={tabledata}/>) :null}
          {show ? (<Graph data={tabledata}/> ) :null}
          {show ? (<Graph2 data={tabledata}/>) :null}
          {show ? (<WayPF data={tabledata}/>) : null}
          </ModalWrap>
        </Overlay>
      </ModalContainer>
      </>
    )
  }
}

const Overlay = styled.div`
position : fixed;
width : 100%;
height : 100%;
top : 0;
bottom: 0;
left : 0;
right : 0;
background: rgba(0, 0, 0, 0.8);
`;
const ModalWrap = styled.div`
max-width : 1400px;
margin : 0 auto;
background: #FFFFFF;
display : flex;
flex-direction: column;
gap : 22px;
z-index : 99px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 7px;
max-height: 100%;
overflow:scroll;
`; 
const Button11 =styled.div`
width : 10%;
height: 58px;
background: #6C6C6C;
border-radius: 0px 0px 7px 7px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 19px;
color: #DCDCDC;
display : flex;
justify-content : center;
align-items : center;
border : none;
`;
