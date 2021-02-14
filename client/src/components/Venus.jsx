import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";
// import { Sphere } from "./Sphere";

function Box() {
  return(
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

// function Sphere() {
//   return (
//     <mesh visible userData={{ test: "hello" }} position={[0, 0, 0]} castShadow>
//       <sphereGeometry attach="geometry" args={[1, 16, 16]} />
//       <meshStandardMaterial
//         attach="material"
//         color="white"
//         transparent
//         roughness={0.1}
//         metalness={0.1}
//       />
//     </mesh>
//   );
// }

export default function Venus(props) {

  return (
    <Canvas>
      <OrbitControls />
      <directionalLight intensity={1} />
      <ambientLight intensity={0.5} />
        <Box />
        <Stars />
    </Canvas>   
  )
}