import React, { useState, useEffect } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';
import Articles from './Components/Articles';


const App = () => {
  
  return (
    <Provider store={store}>
      <div className='container mt-5'>
        <h1 className='text-primary mb-3'>News</h1>
        <Articles/>
      </div>
    </Provider>
  );
};
export default App;
