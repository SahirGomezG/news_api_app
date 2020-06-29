import { FETCH_NEWS } from './types';

export const fetchNews = () => {
    const api_key = '1800b5e6bc9b483d9e7422c502458a91';
        return function(dispatch){
            fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='+ api_key)
            .then(res => {
                //console.log(res);
                return res.json();
                
            })
            .then(res => {
              dispatch({type:"FETCH_NEWS", payload: res.articles});
            })
            .catch(err => {
                console.log(err);
            })
      
         }
      
}
