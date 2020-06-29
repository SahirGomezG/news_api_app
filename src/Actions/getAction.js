import { GET_NEWS } from './types';
import { FETCH_NEWS } from './types';

/*export const getNews = () => {
    return (dispatch) => {
        console.log("getting news");
        dispatch({
            type: GET_NEWS
        })
    }
}*/

export const fetchArticlesSuccess = (articles) => {
    return {
        type: FETCH_NEWS,
        payload: articles
    }
}