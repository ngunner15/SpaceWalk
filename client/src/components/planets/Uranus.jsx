import React, { Suspense, useState, useEffect } from 'react';
import axios from 'axios';
import { Canvas } from 'react-three-fiber';
import { Stars } from '@react-three/drei';
import CameraControls from './CameraControls';
import RenderPlanet from './RenderPlanet';
import Navbar from '../Navbar';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export default function Uranus(props) {
  const [data, setData] = useState({});
  const [description, setDescription] = useState({});

  const handle = useFullScreenHandle();

  useEffect(() => {
    const planet = 'uranus';
    axios.get(`/getPlanetDetails/${planet}`).then((result) => {
      setData(result.data);
    });
    axios.get(`/planets/7`).then((res) => {
      setDescription(res.data[0]);
    });
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <FullScreen handle={handle}>
        <main>
          <div className='container-right'>
            <h1>Planet Information:</h1>
            <div className='planet-details'>
              <div>Moons: 27</div>
              <div>Avg Temp: -195°C</div>
              <div>Perihelion: {data.perihelion}km</div>
              <div>Aphelion: {data.aphelion}km</div>
              <div>Eccentricity: {data.eccentricity}</div>
              <div>
                Gravity: {data.gravity}m/s<sup>2</sup>
              </div>
              <div>
                Density: {data.density}g/cm<sup>3</sup>
              </div>
              <div>Equatorial Radius: {data.equaRadius}km</div>
              <div>Polar Radius: {data.polarRadius}km</div>
              <div>Sideral Orbit: {data.sideralOrbit}days</div>
              <div>Sideral Rotation: {data.sideralRotation}hours</div>
              <div>Axial Tilt: {data.axialTilt}°</div>
              <div>Fun Fact: {description.description}</div>
            </div>
            <button className="fullscreen-button" onClick={handle.enter}>
                FullScreen
            </button>
          </div>
          <div className='container-left'>
            <Canvas className='planet-model'>
              <CameraControls zoomedInDistance={205} zoomedOutDistance={305} />
              {/* <directionalLight intensity={0.5} /> */}
              <ambientLight intensity={0.6} />
              <Suspense>
                <RenderPlanet planets='uranus' />
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
