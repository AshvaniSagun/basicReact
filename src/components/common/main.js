import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from '../home/home'; //Example of named export.
import  GetRequest from '../getApi/GetRequest';
import Editor from '../editor/Editor';  //Its an ES6 feature called default export.
import About from '../about/About';
import Chip from '../chip/chip';

//The / route will only match when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Routes>
      <Route  path="/" element={ <Home/>} />
      <Route  path="/editor" element={<Editor/>} />
      <Route  path="/getApi" element={<GetRequest/>} />
      <Route  path="/about" element={<About/>} />
      <Route  path="/chip" element={<Chip/>} />
    </Routes>
  </main>
);

export default Main;