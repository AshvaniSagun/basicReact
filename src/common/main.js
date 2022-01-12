import React from "react";
import { Route, Routes } from "react-router-dom";
import { GetRequest} from '../getApi/GetRequest';
import { Home } from '../home/home';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Routes>
      <Route  path="/" element={ <Home/>} />
      <Route  path="/getApi" element={<GetRequest/>} />
    </Routes>
  </main>
);

export default Main;