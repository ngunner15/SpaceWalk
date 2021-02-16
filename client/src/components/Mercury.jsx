import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree, extend } from "react-three-fiber";
import {  Stars } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={true}
      minDistance={165}
      maxDistance={275}
      autoRotate
      autoRotateSpeed={0.8}
    />
  );
};

const Planet = () => {
  const [model, setModel] =useState();
  useEffect(() => {
    new GLTFLoader().load('models/mercury/scene.gltf', setModel);
  }, [])
  console.log(model);
  return model ? <primitive object={model.scene} /> : null;
}

export default function Mercury(props) {

  return (
    <Canvas>
      <CameraControls />
      {/* <directionalLight intensity={0.5} /> */}
      <ambientLight intensity={0.6} />
      <Suspense>
        <Planet />
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