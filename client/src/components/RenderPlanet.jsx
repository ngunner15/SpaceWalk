import React, { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function RenderPlanet(props) {
  
  const [model, setModel] =useState();
  const planet = props.planets;
  useEffect(() => {
    new GLTFLoader().load(`models/${planet}/scene.gltf`, setModel);
  }, [])
  console.log(model);
  return model ? <primitive object={model.scene} /> : null;
}