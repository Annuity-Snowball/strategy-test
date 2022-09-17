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
margin-bottom : 73px;
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
const Table = styled.table`
  background: #FFFFFF;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #E7E7E7;
  border-collapse : collapse;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 33px;
  letter-spacing: -1px;
`;
const Th = styled.th`
text-align: left;
padding: 8px;
font-size: 12px;
`;
const Td = styled.td`
text-align: left;
padding: 8px;
font-weight: 300;
font-size: 15px;
;`
export default function PrintPF(props) {
    const [contents,setContent]=useState(data);
    const [total,setTotal]=useState(3800);
  return (
    <>
    <Title><Text>세제혜택o <span>수령방법</span></Text></Title>
    <Frame>
        <Table border={"1"}>
            <thead>
                <Th></Th>
                { Object.keys(props.data.data.yes_tax.portfolio_receipt[0]).map( (x)=>(
                  <Th>{x}</Th>
                ))}
            </thead>
            <tbody>
                <tr>
                <Td>A방안</Td>
                { Object.values(props.data.data.yes_tax.portfolio_receipt[0]).map( (x)=>(
                  <Td>{x} 원</Td>
                ))}
                </tr>
                <tr>
                <Td >B방안</Td>
                { Object.values(props.data.data.yes_tax.portfolio_receipt[1]).map( (x)=>(
                  <Td>{x} 원</Td>
                ))}
                </tr>
            </tbody>
        </Table>
    </Frame>
    </>
  )
}
