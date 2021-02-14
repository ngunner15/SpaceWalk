import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "react-three-fiber";

const Sphere = () => {
  const planet = useRef();

  const { nodes } = useLoader(GLTFLoader, "models/Mars.glb");

  useFrame(() => (planet.current.rotation.y += 0.0002));

  return (
    <mesh
      ref={planet}
      visible
      position={[0, 0, 0]}
      // Adding data from mars.glb to the geometry and material of the sphere
      geometry={nodes.Cube008.geometry}
      material={nodes.Cube008.material}
    />
  );
};

export default Sphere;