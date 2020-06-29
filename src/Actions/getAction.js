import { GET_NEWS } from './types';
import { FETCH_NEWS } from './types';

export default function fetchArticles(articles){
    return {
        type: FETCH_NEWS,
        payload: articles
    }
}