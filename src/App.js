/* eslint-disable react/jsx-boolean-value */
import React from "react";
import {Switch , Route } from 'react-router-dom';
import Navs from "./components/Navs";
import Home from "./components/pages/Home";
import Starred from "./components/pages/Starred";

function App() {
  return(
    <div>
      <Navs/>

  <Switch>
   <Route exact path="/">
   <Home/>
     </Route>

     <Route exact path="/starred">
     <Starred/>
     </Route>

     
     <Route>
    Not Found
     </Route>
   </Switch>
   </div> 
  );
}

export default App;
