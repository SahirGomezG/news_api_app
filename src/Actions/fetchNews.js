
import fetchArticles from './getAction';

const fetchNews = () => {
    return (dispatch) => {
        fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1800b5e6bc9b483d9e7422c502458a91')
        .then(response => { 
            return response.json()})
        .then(data => {          
            dispatch(fetchArticles(data.articles));
        })
        .catch(error => {
            console.log(error);
        })
    }   
}

export default fetchNews;

