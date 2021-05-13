/* eslint-disable react/jsx-boolean-value */
import React from "react";
import {Switch , Route } from 'react-router-dom';

import Home from "./components/pages/Home";
import Show from "./components/pages/show";
import Starred from "./components/pages/Starred";

function App() {
  return(
  

  <Switch>
   <Route exact path="/">
   <Home/>
     </Route>

     <Route exact path="/starred">
     <Starred/>
     </Route>
     <Route exact path="/show/:id">
       <Show/>
     </Route>
  

     
     <Route>
    Not Found
     </Route>
   </Switch>

  );
}

export default App;
