import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// function Box() {
//   return(
//     <mesh>
//       <boxBufferGeometry attach="geometry" />
//       <meshLambertMaterial attach="material" color="hotpink" />
//     </mesh>
//   )
// }

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
      <OrbitControls autoRotate />
      <directionalLight intensity={1} />
      <ambientLight intensity={0.5} />
      <Suspense>
        <Planet />
      </Suspense>
      <Stars />
    </Canvas>
  )
}