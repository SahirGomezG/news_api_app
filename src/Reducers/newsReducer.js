import { FETCH_NEWS, GET_NEWS } from "../Actions/types";

const initialState = {
    myNews:[]
}

const newsReducer = (state = initialState , action) => {
    switch(action.type) {
        case FETCH_NEWS:  
            return {
                ...state, 
                myNews: action.payload
            }
        default:
            return state;
    }
}


export default newsReducer;