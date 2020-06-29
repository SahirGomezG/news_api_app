/*import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;*/

import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import rootReducer from './Reducers';


//--- MIDDLEWARE
// add middleware inside this function
const middleware= applyMiddleware(thunk);


//--- STORE
const store= createStore(rootReducer, middleware);

export default store;