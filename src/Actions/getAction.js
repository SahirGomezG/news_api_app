import { GET_NEWS } from './types';

export const getNews = () => {
    return (dispatch) => {
        console.log("getting news");
        dispatch({
            type: GET_NEWS
        })
    }
}