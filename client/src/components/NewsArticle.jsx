import React from "react";
import '../news.css';

export default function NewsArticle({ data }) {
  return (
    <div className="news">
      <div className="news-content">
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__url"><a href={data.url} target="_blank">Read Full Article...</a></span> <br />
      <span className="news__published">{data.date}</span>
      </div>
      {data.image ? (<img className="news-image" src={data.image} alt="Article Image"></img>) : ("")}
    </div>
  );
}