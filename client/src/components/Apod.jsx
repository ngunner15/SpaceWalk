import React, { useState } from 'react';
import axios from 'axios';

export default function Apod(props) {
  const [data, setData] = useState({});
  const [date, setDate] = useState("");
  const api = 'IkM9PBhHgGHbzBvRtKGk8gOaPaLGZZ0qVSeZH0eJ';

  const search = async (evt) => {
    if (date === "") {
      let res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api}`);
      setData(res.data);
    } else if (evt.key === "Enter") {
      let res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api}&date=${date}`)
      .then(setDate(""));
      setData(res.data);
    }
  }

  return (
    <div>
      <h1>I am APOD</h1>
      <label for="date">Select date:</label>
      <input
        type="date"
        id="date"
        min="2010-01-01"
        max="2021-02-17"
        value={date}
        onChange={e => setDate(e.target.value)}
        onKeyPress={search}
      />
      <button onClick={search}>Show Today's Picture</button>
      {(data.media_type === "video") ? (
        <div>
          {/* URL link: {data.url} */}
          <video width="750" height="500" controls >
          <source src={data.url} type="video/mp4"/>
          </video>
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