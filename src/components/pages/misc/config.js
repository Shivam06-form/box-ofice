const API_BASED_URL ='http://api.tvmaze.com';

export async function apiGet(queryString){

    const responce = await fetch(`${API_BASED_URL}${queryString}`).then(r=>r.json())
    
  return responce ;

}