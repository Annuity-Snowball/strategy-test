import React,{useState} from 'react'
import styled from 'styled-components';
import {Route,Routes,NavLink } from "react-router-dom";

const Frame =styled.div`
            width: 400px;
            margin: 0 auto;
            div{
                text-align: left;
                margin-bottom: 20px;
            }
            button{
                text-align: center;
            }
`
const Button =styled.button`
        border-radius: 5px;
        width: 300px;
        border: none;
        letter-spacing: .5em;
        font-size: 1.2em;
        background-color:black;
        color: rgb(112,239,222);
        height: 40px;
        margin-left: 50px;
        margin-bottom : 50px;
        &:active{
        color: white;
        background-color :'black';
        }
`
const Personalinformation =styled.input`

width: 98%; 
margin: 0px; 
height: 46px; 
padding: 0px;
`
const PhoneNumber =styled.input`

width: 28%; margin: 0px 5px; height: 46px; padding: 0px;
`
const Address =styled.input`
width: 98%; margin: 0px; height: 46px; padding: 0px; margin-bottom: 10px;
`
const DetailAddress =styled.input`
width: 98%; margin: 0px; height: 46px; padding: 0px;
`


export default function Singup() {

const handleSubmit = (e) =>{
    e.preventDefault(); //전송시 새로고침 방지
}
  return (
    <>
            <div style={{textAlign:'center'}}><h1 style={{fontSize :'50px'}}>JOIN</h1></div>
            <div style={{textAlign:'center'}}>Hello we are MiddleNote</div>
            <br/>
            <br/>
            <Frame>
                <form method="POST" onSubmit={handleSubmit}>
                <div>
                    <label for="name" class="after">E-Mail *</label>
                    <Personalinformation type="text"/>
                </div>
                <div>
                    <label for="name" class="after">Password *</label>
                    <Personalinformation type="text"/>
                </div>
                <div>
                    <label for="name" class="after">Check Password*</label>
                    <Personalinformation type="text"/>
                </div>
                <div>
                    <label for="name" class="after">Name *</label><br/>
                    <Personalinformation type="text"/>
                </div>
                <div>
                    <label class="after" >성별 *</label><br/>
                    <input id="man" name="gender" type="radio" value="man"/>
                    <label for="man" id="man">남자</label>
                    <input id="women" name="gender" type="radio" value="women"/>
                    <label for="women" id="women">여자</label>
                </div>
                <div>
                    <label class="after" >Phone Number *</label><br/>
                    <PhoneNumber id="phone" name="phone" type="text"/>- 
                    <PhoneNumber id="phone" name="phone" type="text"/>- 
                    <PhoneNumber id="phone" name="phone" type="text"/>
                </div>
                <div>
                    <label class="after" >Address *</label><br/>
                    <Address id="address" name="address" type="text"/><br/>
                    <DetailAddress id="detail_address"/>
                </div>
                <NavLink to="/"><Button type="submit">Sign up</Button></NavLink>
                </form>
            </Frame>
    </>
  );
}
