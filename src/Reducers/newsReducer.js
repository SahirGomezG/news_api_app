import { FETCH_NEWS, GET_NEWS } from "../Actions/types";

const initialState = {
    myNews:[],
    total: 0,
}

const newsReducer = (state = initialState , action) => {
    switch(action.type) {
        case FETCH_NEWS:  
            return {
                ...state, 
                myNews: action.payload,
            }
        default:
            return state;
    }
}


export default newsReducer;