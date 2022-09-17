import React,{useState,useEffect} from 'react'
import data from './Table.json'
import '../css/App.css'
import styled from 'styled-components';
const Frame = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
letter-spacing: -0.5px;
color: #292929;
`;
const Text = styled.div`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 33px;
letter-spacing: -1px;
margin-right : 20px;
color: #000000;
span{
  font-weight: 600;
}
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
const Title = styled.div`
  display : flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top:73px;
  margin-bottom : 37px;
  a{
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: -1px;
      text-decoration-line: underline;
      color: #389774;
  }
`;
export default function PrintPF(props) {
    const [contents,setContent]=useState(data);
    const [total,setTotal]=useState(3800);
    useEffect( () =>{
        console.dir(props.data.data);
    })
  return (
    <>
    <Title><Text>포트폴리오 <span>결과보기</span></Text><Text1>등록된 포트폴리오의 분석 결과를 아래에서 보실수 있습니다.</Text1></Title>
    <Frame>
        <table border={"1"}>
            <caption >총 납입 금액 : { `${props.data.data.no_tax.portfolio_result.투입한_금액}`}원</caption>
            <thead>
                <th>비교군</th>
                <th>세제혜택x</th>
                <th>세제혜택o</th>
            </thead>
            <tbody>
                {/* <tr>
                <td >{props.data.data}</td>
                <td >{content.notbenefit}</td>
                <td >{content.taxbenefit}</td>
                </tr> */}
            </tbody>
        </table>
    </Frame>
    </>
  )
}
