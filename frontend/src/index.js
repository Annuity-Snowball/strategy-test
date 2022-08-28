import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {createPortal} from "react-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Banner from './Component/Banner';
import Insert from './Component/Insert';
import NotFound from './Component/NotFound';
import Main from './Component/Main';
import Recommand from './Component/Recommand';
import Shop from './Component/Portfolioshop';
import Notice from './Component/Notice';
import Modal from './Component/Modal';
const root = ReactDOM.createRoot(document.getElementById('root')); //rgb(112,239,222)
root.render(
    <BrowserRouter>
    <Banner />
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/insert" element={<Insert />}></Route>
      <Route path="/Recommand" element={<Recommand />}></Route>
      <Route path="/shopping" element={<Shop />}></Route>
      <Route path="/notice" element={<Notice />}></Route>
      <Route path="/login" element={<Modal/>}></Route>
      <Route path="/signup" element={<Notice />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
