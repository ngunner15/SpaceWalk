import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import dateBuilder from '../helpers/DateHelper';
import { Canvas } from "react-three-fiber";
import {  Stars } from "@react-three/drei";
import CameraControls from './CameraControls';
import RenderPlanet from './RenderPlanet';

export default function Earth(props) {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    const planet = "earth"
    axios.get(`/getPlanetDetails/${planet}`)
    .then(result => {
      setData(result.data);
    });
  }, [])

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
      <div className="planet-details">
        <h2>I am Earth</h2>
        <div>Moons:</div>
        <div>Perihelion:{data.perihelion}km</div>
        <div>Aphelion:{data.aphelion}km</div>
        <div>Eccentricity:{data.eccentricity}</div>
        <div>Gravity:{data.gravity}m/s<sup>2</sup></div>
        <div>Density:{data.density}g/cm<sup>3</sup></div>
        <div>Equatorial Radius:{data.equaRadius}km</div>
        <div>Polar Radius:{data.polarRadius}km</div>
        <div>Sideral Orbit:{data.sideralOrbit}days</div>
        <div>Sideral Rotation:{data.sideralRotation}hours</div>
        <div>Axial Tilt:{data.axialTilt}°</div>
        <div>Enter a city's name:</div>
        <div className="search">
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
            <div className="location-data">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">
                {dateBuilder(new Date)}
              </div>
            </div>

            <div className="weather-data">
              <div className="min-temperature">
                Min temp: {Math.round(weather.main.temp_min)}°C
              </div>
              <div className="max-temperature">
                Max temp: {Math.round(weather.main.temp_max)}°C
              </div>
              <div className="weather-type">
                {weather.weather[0].main}
              </div>
            </div>
          </div>
        ) : ('')}
      </div>
      <Canvas className="planet-model">
        <CameraControls zoomedInDistance={175} zoomedOutDistance={300} />
        {/* <directionalLight intensity={0.5} /> */}
        <ambientLight intensity={0.6} />
        <Suspense>
          <RenderPlanet planets="earth" />
        </Suspense>
        <Stars
          radius={150} // Radius of the inner sphere (default=100)
          depth={70} // Depth of area where stars should fit (default=50)
          count={4000} // Amount of stars (default=5000)
          factor={5} // Size factor (default=4)
        />
      </Canvas>
    </main>
  )
}