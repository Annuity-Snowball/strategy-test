import React,{useState} from 'react'
import '../Portfolio.css';
export default function Fourth() {
    const [click,setClick]=useState(false);

    const handlePortfolioinsert = () =>{
        console.log(click);
        setClick( (prev) => !prev );
      }
      const style = {
        width : '300px',
        height : '500px',
        display : 'inline-block',
        verticalAlign: 'middle',
        boxShadow : '0px 0px 3px 2px gray',
        marginLeft : '10px',
        }
    const imgstyle ={
        width : '50px',
        display : 'inline-block',
        marginLeft : '10px'
    }
  return (
    <>
        <div style={style}>
        <input defaultValue={"PER"}/>
        <input defaultValue={"PBR"}/>
        <input defaultValue={"등등...."}/>
        </div>
        </>
  )
}
