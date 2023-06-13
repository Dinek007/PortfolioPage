import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import CustomOrbitControls from "../orbitControls";
import { Cube } from "./cube";
import { isMobile } from "react-device-detect";

export const CubeScene: React.FC<{ src: string }> = ({ src }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.7} />
      {/* <pointLight position={[0, 0, 2]} intensity={2} /> */}
      {!isMobile ? <CustomOrbitControls /> : <></>}
      {/* <axesHelper scale={3}/> */}

      {!isMobile ? (
        <Float speed={1} rotationIntensity={2} floatIntensity={1}>
          <Cube src={src} />
        </Float>
      ) : (
        <Cube src={src} />
      )}
    </Canvas>
  );
};
