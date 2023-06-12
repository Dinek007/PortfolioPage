import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import CustomOrbitControls from "../orbitControls";
import { Cube } from "./cube";

export const CubeScene: React.FC<{src:string}> = ({src}) => {
  return (
    <Canvas  >
      <ambientLight intensity={0.5} />
      {/* <pointLight position={[1, 1, 1]} intensity={1} /> */}
      <CustomOrbitControls />
      {/* <axesHelper scale={3}/> */}
      <Float speed={1} rotationIntensity={2} floatIntensity={1} >
        <Cube src={src} />
      </Float>
    </Canvas>
  );
};
