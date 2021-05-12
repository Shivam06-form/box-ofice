
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import { render } from '@testing-library/react';
import React,{useState} from 'react';
import { createRenderer } from 'react-dom/test-utils';
import MainPageLayout from '../MainPageLayout';
import{apiGet} from '../misc/config'; 



const Home = () => {
const [input ,setInput] = useState(' ');

const [results,setResults]= useState(null);

const onSearch  = () =>{
  apiGet(`http://api.tvmaze.com/search/shows?q=${input}`).then(result =>{
    setResults(result); 
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

const renderResultS = ()=>{

  if(results && results.length === 0 ){
    return<div>No results</div>
  }

  if(results && results.length > 0){
   return <div>{results.map((itme)=>(
   <div key={itme.show.id}>{itme.show.name}</div> ) )} </div> 
  }

   return null ;


}


return (
  <MainPageLayout>
      <input type = "text" onChange={onInputChange} onKeyDown={onKeyDown}  value={input}/>
       <button type="button" onClick={onSearch}>Search
       </button>
       {renderResultS()}
    </MainPageLayout>
      
  );
     
    
  
};

export default Home;
