import React from "react";
import { Route, Routes } from "react-router-dom";
import  GetRequest from '../getApi/GetRequest';
import { Home } from '../home/home';

//The / route will only match when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Routes>
      <Route  path="/" element={ <Home/>} />
      <Route  path="/getApi" element={<GetRequest/>} />
    </Routes>
  </main>
);

export default Main;