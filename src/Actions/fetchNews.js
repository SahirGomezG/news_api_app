
import fetchArticles from './getAction';

const fetchNews = () => {
    const api_key = process.env.REACT_APP_API_NEWS_KEY;

    return (dispatch) => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey='+api_key)
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

