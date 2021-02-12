import React, {useState} from 'react';
import axios from 'axios';

const api = {
  key: "43197e8edd946d801bfee7217d527143",
  base: "https://api.openweathermap.org/data/2.5/"
}
export default function Earth(props) {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      axios.get(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(result => {
          setWeather(result.data);
          setQuery('');
          console.log(result.data);
        });
    }
  }

const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return`${day} ${date} ${month} ${year}`
}

  return (
  <main>
    <h1>I am Earth</h1>
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
    </div>
  {(typeof weather.main != "undefined") ? (
    <div>
      <div className="location-box">
        <div className="location">{weather.name}, {weather.sys.country}</div>
        <div className="date">{dateBuilder(new Date())}</div>
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