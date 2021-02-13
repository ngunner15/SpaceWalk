import React, { useState } from 'react';
import axios from 'axios';
import dateBuilder from '../helpers/DateHelper'

export default function Earth(props) {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      axios.get(`/getEarthWeather/${city}`)
        .then(result => {
          console.log(result);
          setWeather(result.data);
          setCity('');
          // console.log(result.data);
        });
    }
  }

  return (
    <main>
      <h1>I am Earth</h1>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setCity(e.target.value)}
          value={city}
          onKeyPress={search}
        />
      </div>
      {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date)}</div>
          </div>

          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°C
        </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
      ) : ('')}

    </main>
  )
}