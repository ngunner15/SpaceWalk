import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree, extend } from "react-three-fiber";
import {  Stars } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ OrbitControls });

// function Box() {
//   return(
//     <mesh>
//       <boxBufferGeometry attach="geometry" />
//       <meshLambertMaterial attach="material" color="hotpink" />
//     </mesh>
//   )
// }

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
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
    new GLTFLoader().load('models/venus/scene.gltf', setModel);
  }, [])
  console.log(model);
  return model ? <primitive object={model.scene} /> : null;
}

export default function Venus(props) {

  return (
    <Canvas>
      <CameraControls />
      <directionalLight intensity={1} />
      <ambientLight intensity={0.5} />
      <Suspense>
        <Planet />
      </Suspense>
      <Stars />
    </Canvas>
  )
}