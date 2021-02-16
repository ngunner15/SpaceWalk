import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import {  Stars } from "@react-three/drei";
import CameraControls from './CameraControls';
import RenderPlanet from './RenderPlanet'

export default function Venus(props) {

  return (
    <Canvas>
      <CameraControls zoomedInDistance={165} zoomedOutDistance={275} />
      {/* <directionalLight intensity={0.5} /> */}
      <ambientLight intensity={0.6} />
      {/* <spotLight
        intensity={8}
        position={[3, 3, 3]}
        angle={45}
        penumbra={1}
        color="#F28C38"
      /> */}
      <Suspense>
      <RenderPlanet planets="venus"/>
      </Suspense>
      <Stars 
        radius={150} // Radius of the inner sphere (default=100)
        depth={70} // Depth of area where stars should fit (default=50)
        count={4000} // Amount of stars (default=5000)
        factor={5} // Size factor (default=4)
      />
    </Canvas>
  )
}