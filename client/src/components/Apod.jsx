import React, { useState } from 'react';
import axios from 'axios';

export default function Apod(props) {
  const [data, setData] = useState({});
  const api = 'IkM9PBhHgGHbzBvRtKGk8gOaPaLGZZ0qVSeZH0eJ';

  const search = async () => {
    let res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api}`);

    setData(res.data);
  }

  return (
    <div>
      <h1>I am APOD</h1>
      <button onClick={search}>Show Picture</button>
      {(data.media_type === "video") ? (
        <div>
          URL link: {data.url}
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