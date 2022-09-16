import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Banner from './Component/Banner';
import Insert from './Component/Insert';
import NotFound from './Component/NotFound';
import Main from './Component/Main';
import Shop from './Component/Portfolioshop';
import Notice from './Component/Notice';
import Singup from './Component/Singup';
import Footer from './Component/Footer';
import LoginPage from './Component/LoginPage';
import Join_agree from './Component/Join_agree';
import Myportfolio from './Component/Myportfolio';
function App() {
  return (
    <BrowserRouter>
    <Banner />
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/join" element={<Join_agree />}></Route>
      <Route path="/insert" element={<Insert />}></Route>
      <Route path="/myportfolio" element={<Myportfolio/>}></Route>
      <Route path="/shopping" element={<Shop />}></Route>
      <Route path="/notice" element={<Notice />}></Route>
      <Route path="/signup" element={<Singup />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
