import React from 'react'

const News = ({news}) => {

    return (
        <ul className='list-group mb-4'>
          {news.map((article,index) => (
              <li key={index} className='list-group-item'>
                <div><a href={article.url} target="_blank">{article.title}</a></div>
                <div><img src={article.urlToImage} style={{width: '30vw'}}/></div>
              </li>        
          ))}
        </ul>
      );
}

export default News;
