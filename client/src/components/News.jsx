import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import NewsArticle from './NewsArticle';
import '../news.css';

export default function News(props) {
  const [data, setData] = useState({
    articles: [],
    isLoading: false
  });

  useEffect(() => {
    axios.get(`/getNews`)
      .then(response => {
        return response.data.articles.map(article => ({
          date: article.publishedAt,
          title: article.title,
          url: article.url,
          description: article.description,
          image: article.urlToImage
        }));
      })
      .then(articles => {
        setData({
          articles,
          isLoading: true
        });
      })
  }, []);
  console.log(data);

  return (
    <div className="App">
      <Navbar />
      <h1>News</h1>
      <div className="news-container">
        {data.isLoading ? (
          data.articles.map(article => {
            return <NewsArticle data={article} key={article.url} />
          })
        ) : (
            <p>Loading...</p>
          )}
      </div>
    </div>
  )
}