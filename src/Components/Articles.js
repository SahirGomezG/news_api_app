import React, { Component } from 'react';
import Pagination from './Pagination';

import { connect } from 'react-redux';
import fetchNews from '../Actions/fetchNews';


class Articles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [], 
            currentPage: 1,
            newsPerPage: 5
        };
    }

    componentDidMount() {
        this.props.fetchNews();
    }

    //Change page
    paginate = pageNumber => { 
        this.setState({currentPage: pageNumber})
    }
 
    render() {
        console.log(this.props);
        const indexOfLastNew = this.state.currentPage * this.state.newsPerPage;
        const indexOfFirstNew = indexOfLastNew - this.state.newsPerPage;
        const currentArticles = this.props.newsProps.myNews.slice(indexOfFirstNew, indexOfLastNew);
        return (
            <ul className='list-group mb-4'>
                {currentArticles.map((article,index) => (
                    <li key={index} className='list-group-item'>
                        <div><a href={article.url} target="_blank">{article.title}</a></div>
                        <div><img src={article.urlToImage} style={{width: '30vw'}}/></div>
                    </li>        
                ))}
                <Pagination
                    newsPerPage={this.state.newsPerPage}
                    totalNews={this.props.newsProps.myNews.length}
                    paginate={this.paginate}
                />
            </ul>     
        )
    }
}

const mapStateToProps = state => ({
  newsProps: state.newsState
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNews: () => dispatch(fetchNews())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);

