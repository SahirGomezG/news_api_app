import React, { useState, useEffect } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';
import Articles from './Components/Articles';

const api_key = '1800b5e6bc9b483d9e7422c502458a91';
//const api_key = process.env.development.API_NEWS_KEY;

const App = () => {
  
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='+ api_key)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setArticles(data.articles);
      });
    };

    fetchArticles();

  }, []);


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
