/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import React,{useState} from 'react';
import MainPageLayout from '../MainPageLayout';



const Home = () => {
const [input ,setInput] = useState(' ');


const onSearch  = () =>{
  // https://api.tvmaze.com/search/shows?q=men
fetch(`http://api.tvmaze.com/search/shows?q=${input}`).then(r=>r.json()).then(result=>{
  console.log(result);
});

};

const onInputChange = ev =>{
  setInput(ev.target.value);
};

const onKeyDown = (ev) => {
  if(ev.keyCode === 13){
   
    onSearch ()
  }


};


return (
  <MainPageLayout>
      <input type = "text" onChange={onInputChange} onKeyDown={onKeyDown}  value={input}/>
       <button type="button" onClick={onSearch}>Search</button>
    </MainPageLayout>
      
  );
     
    
  
};

export default Home;
