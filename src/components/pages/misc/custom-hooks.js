import {usePersistedReducer,useEffect} from 'react'
  function showReducer(pervState,action){
    switch(action.type){

   case 'ADD':{
     return[...pervState,action,showId]
   }
    case'REMOVE':{
      return pervState.filter((showId)=> showId !== action.showId);
    }
     
    default: return pervState;

  }
 
}
function usePersistedReducer( reducer,initialState,key){
  
   const [state, dispatch] = useReducer(reducer, initialState,(initial)=>{
    const presisted = localStorage.getItem(key);

    return presisted ? JSON.parse(presisted): initial;
});

useEffect(()=>{
 localStorage.setItem(key.JSON.stringify(state))
},[state,key])
   
return[state,dispatch];
}

export function useShows(key = 'show'){

  return usePersistedReducer(showReducer,[],key);
}
