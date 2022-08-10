import React,{useState} from 'react'
import data from './Table.json'
import '../table.css'
export default function PrintPF() {
    const [contents,setContent]=useState(data);
  return (
    <div className="p_insert_body">
        <h1 style={{fontSize:"50px"}}>포트폴리오 출력</h1>
        <br/>
        <div className='app-container'>
        <table border={"1"}>
            <caption >총 납입 금액 : 3억 6천원만원</caption>
            <thead>
                <tr>
                <th>비교군</th>
                <th>세제해택x</th>
                <th>세제해택o</th>
                </tr>
            </thead>
            <tbody>
                {
                contents.map( (content) => (
                <tr>
                <td>{content.type}</td>
                <td>{content.notbenefit}</td>
                <td>{content.taxbenefit}</td>
                </tr>
                    ))}
            </tbody>
        </table>
        </div>
        <br/>

    </div>
  )
}
