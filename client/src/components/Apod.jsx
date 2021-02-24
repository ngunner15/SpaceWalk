import React, { useState } from 'react';
import '../apod.css';
import axios from 'axios';
import Navbar from './Navbar';

export default function Apod(props) {
  const [data, setData] = useState({});
  const [date, setDate] = useState('');

  const search = () => {
    if (date === '') {
      axios.get(`/getPictureOfDay`).then((result) => {
        // console.log(result);
        setData(result.data);
      });
    } else {
      axios.get(`/getPictureOfDate/${date}`).then((result) => {
        // console.log(result);
        setData(result.data);
        setDate('');
      });
    }
  };

  return (
    <div className='App'>
    <Navbar />
    <div className='main-page'>
      <div className='title'>
        <h1>🚀 Picture Of The Day 🚀</h1>
      </div>
      <div className='container'>
        <div className='container-date'>
        <label htmlFor='date'>Select date: </label>
        <input
          type='date'
          id='date'
          min='2010-01-01'
          max='2021-02-17'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          onSelect={search}
        />
        </div>
      </div>

      <button className='apod-button' onClick={search}>
        Todays Picture
      </button>
      {data.media_type === 'video' ? (
        <div className="apod-video">
          <p>Today you get to see a video!!!</p>
          <a href={data.url} target="_blank">Click here</a>
        </div>
      ) : (
        <div className="apod-image">
          <p>{data.explanation}</p>
          <img src={data.url}></img>
        </div>
      )}
    </div>
    </div>
  );
}
