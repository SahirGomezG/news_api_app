/*import { FETCH_NEWS } from "../Actions/types";

const initialState = {
    myNews:[]
}

export default (state = initialState , action) => {
    switch(action.type) {
        case FETCH_NEWS:  
            return {
                ...state, myNews: action.payload
            }
        default:
            return state;
    }
}*/

const newsReducer = (state = { myNews :[] }, action) => {
    if(action.type === "FETCH_NEWS"){         
        state= {...state, myNews: action.payload}
    }
        return state;
    };

export default newsReducer;