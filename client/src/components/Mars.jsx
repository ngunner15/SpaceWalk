import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { Stars } from '@react-three/drei';
import CameraControls from './CameraControls';
import RenderPlanet from './RenderPlanet';
import axios from 'axios';

export default function Mars(props) {
  function getWeather() {
    axios.get(`/getMarsWeather`).then((result) => {
      const { sol_keys, validity_checks, ...solData } = result.data;
      console.log(solData);
    });
    //           const temp = Object.entries(solData).map(([sol, data]) => {
    //             return {
    //               sol: sol,
    //               // maxTemp: data.AT.mx,
    //               // minTemp: data.AT.mn,
    //               // windSpeed: data.HWS.av,
    //               // windDirectionDegrees: data.WD.most_common.compass_degrees,
    //               // windDirectionCardinal: data.WD.most_common.compass_point,
    //               date: new Date(data.First_UTC)
    //             }
    //           })
  }

  getWeather();
  return (
    <main className='display-all'>
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
      <div className='container-right'>
        <div className='planet-details'>
          <h1>I am Mars</h1>
        </div>
      </div>
    </main>
  );
}
