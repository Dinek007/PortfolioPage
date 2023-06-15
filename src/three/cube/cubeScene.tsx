import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import CustomOrbitControls from "../orbitControls";
import { Cube } from "./cube";

export const CubeScene: React.FC<{ src: string }> = ({ src }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.35} />
      <pointLight position={[0, 0, 3]} intensity={0.25} />
      <CustomOrbitControls />
      {/* <axesHelper scale={3}/> */}
      <Float speed={1} rotationIntensity={1.5} floatIntensity={0}>
        <Cube src={src} />
      </Float>
    </Canvas>
  );
};
