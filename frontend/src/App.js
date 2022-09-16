import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {createPortal} from "react-dom";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Banner from './Component/Banner';
import Insert from './Component/Insert';
import NotFound from './Component/NotFound';
import Main from './Component/Main';
import Recommand from './Component/Recommand';
import Shop from './Component/Portfolioshop';
import Notice from './Component/Notice';
import Singup from './Component/Singup';
function App() {
  return (
    <BrowserRouter>
    <Banner />
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/insert" element={<Insert />}></Route>
      <Route path="/Recommand" element={<Recommand />}></Route>
      <Route path="/shopping" element={<Shop />}></Route>
      <Route path="/notice" element={<Notice />}></Route>
      <Route path="/signup" element={<Singup />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
