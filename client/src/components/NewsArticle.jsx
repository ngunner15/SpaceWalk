import React from "react";

export default function NewsArticle({ data }) {
  return (
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__url"><a href={data.url}>Read Full Article...</a></span> <br />
      <span className="news__published">{data.date}</span>
    </div>
  );
}