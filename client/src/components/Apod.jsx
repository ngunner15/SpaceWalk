import React, { useState } from 'react';
import axios from 'axios';

export default function Apod(props) {
  const [data, setData] = useState({});
  const [date, setDate] = useState("");

  const search = async () => {
    if (date === "") {
      axios.get(`/getPictureOfDay`)
      .then(result => {
        // console.log(result);
        setData(result.data);
      });
    } else {
      axios.get(`/getPictureOfDate/${date}`)
      .then(result => {
        // console.log(result);
        setData(result.data);
        setDate("");
      });
    }
  }

  return (
    <div>
      <h1>I am APOD</h1>
      <label htmlFor="date">Select date:</label>
      <input
        type="date"
        id="date"
        min="2010-01-01"
        max="2021-02-17"
        value={date}
        onChange={e => setDate(e.target.value)}
        onSelect={search}
      />
      <button onClick={search}>Show Today's Picture</button>
      {(data.media_type === "video") ? (
        <div>
          <p>Today you get to see a video!!!</p>
          <a href={data.url}>Click here</a>
        </div>
      ) : (
        <div>
          <p>{data.explanation}</p>
          <img src={data.hdurl}></img>
        </div>
      )}
      
    </div>
  );
}