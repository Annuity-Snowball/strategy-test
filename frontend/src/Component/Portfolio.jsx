import React,{useState,useEffect} from 'react'
import '../css/App.css';
import First from './First';
export default function Portfolio() {
    const [click,setClick]=useState(false);
    const handlePortfolioinsert = () =>{
        setClick( (prev) => !prev );
      }

  return (
    <><First/></>
  )
}
