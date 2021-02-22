import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import { Stars } from '@react-three/drei';
import CameraControls from './CameraControls';
import RenderPlanet from './RenderPlanet';
import axios from 'axios';
import Navbar from '../Navbar';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export default function Mars(props) {
  const [data, setData] = useState({});

  const handle = useFullScreenHandle();

  useEffect(() => {
    const planet = 'mars';
    axios.get(`/getPlanetDetails/${planet}`).then((result) => {
      setData(result.data);
    });
  }, []);

  function getWeather() {
    axios.get(`/getMarsWeather`).then((result) => {
      const { sol_keys, validity_checks, ...solData } = result.data;
      console.log(solData);
    });
  }
  getWeather();

  return (
    <div className='App'>
      <Navbar />
      <FullScreen handle={handle}>
        <main>
          <div className='container-right'>
            <h2>Planet Information:</h2>
            <div className='planet-details'>
              <div>Moons:</div>
              <div>Min Temp: -129°C</div>
              <div>Max Temp: 20°C</div>
              <div>Perihelion:{data.perihelion}km</div>
              <div>Aphelion:{data.aphelion}km</div>
              <div>Eccentricity:{data.eccentricity}</div>
              <div>
                Gravity:{data.gravity}m/s<sup>2</sup>
              </div>
              <div>
                Density:{data.density}g/cm<sup>3</sup>
              </div>
              <div>Equatorial Radius:{data.equaRadius}km</div>
              <div>Polar Radius:{data.polarRadius}km</div>
              <div>Sideral Orbit:{data.sideralOrbit}days</div>
              <div>Sideral Rotation:{data.sideralRotation}hours</div>
              <div>Axial Tilt:{data.axialTilt}°</div>
            </div>
            <button className="fullscreen-button" onClick={handle.enter}>
              FullScreen Mode
            </button>
          </div>
          <div className='container-left'>
            <Canvas className='planet-model'>
              <CameraControls zoomedInDistance={170} zoomedOutDistance={280} />
              {/* <directionalLight intensity={0.5} /> */}
              <ambientLight intensity={0.6} />
              <Suspense>
                <RenderPlanet planets='mars' />
              </Suspense>
              <Stars
                radius={150} // Radius of the inner sphere (default=100)
                depth={70} // Depth of area where stars should fit (default=50)
                count={4000} // Amount of stars (default=5000)
                factor={5} // Size factor (default=4)
              />
            </Canvas>
          </div>
        </main>
      </FullScreen>
    </div>
  );
}
