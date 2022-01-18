import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from '../home/home'; //Example of named export.
import  GetRequest from '../getApi/GetRequest';
import Topics from '../../components/topics/Topics';  //Its an ES6 feature called default export.

//The / route will only match when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Routes>
      <Route  path="/" element={ <Home/>} />
      <Route  path="/topics" element={<Topics/>} />
      <Route  path="/getApi" element={<GetRequest/>} />
    </Routes>
  </main>
);

export default Main;