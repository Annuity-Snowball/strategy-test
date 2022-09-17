import React,{useState} from 'react'
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
export default function PrintPF() {
    const [contents,setContent]=useState(data);
    const [total,setTotal]=useState(3800);
  return (
    <Frame>
        <table border={"1"}>
            <caption >총 납입 금액 : { `${total}`}만원</caption>
            <thead>
                <th>비교군</th>
                <th>세제혜택x</th>
                <th>세제혜택o</th>
            </thead>
            <tbody>
                {
                contents.map( (content,index) => (
                <tr key={index}>
                <td >{content.type}</td>
                <td >{content.notbenefit}</td>
                <td >{content.taxbenefit}</td>
                </tr>
                    ))}
            </tbody>
        </table>
    </Frame>
  )
}
