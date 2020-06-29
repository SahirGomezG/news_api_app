
import { fetchArticlesSuccess } from './getAction';

const fetchNews = () => {
    const api_key = '1800b5e6bc9b483d9e7422c502458a91';
    return (dispatch) => {
        fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='+ api_key)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchArticlesSuccess(res.articles));
            return res.articles;
        })
        .catch(error => {
            console.log(error);
        })
    }   
}

export default fetchNews;

