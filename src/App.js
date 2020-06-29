import React, { useState, useEffect } from 'react';
import './App.css';

import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import News from './Components/News';
import Pagination from './Components/Pagination';

import { fetchNews } from './Actions/fetchNews';

const api_key = '1800b5e6bc9b483d9e7422c502458a91';
//const api_key = process.env.development.API_NEWS_KEY;

const App = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(10);

  //const dispatch = useDispatch();
  //const gethNews = () => dispatch(fetchNews());

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
    //fetchNews();
  }, []);

  //Get current articles
  const indexOfLastNew = currentPage * newsPerPage;
  const indexOfFirstNew = indexOfLastNew - newsPerPage;
  const currentArticles = articles.slice(indexOfFirstNew, indexOfLastNew);

  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Provider store={store}>
      <div className='container mt-5'>
        <h1 className='text-primary mb-3'>News</h1>
        <News news={currentArticles} />
        <Pagination
          newsPerPage={newsPerPage}
          totalNews={articles.length}
          paginate={paginate}
        />
      </div>
    </Provider>
  );
};
export default App;

