import { Canvas } from "@react-three/fiber";
import CustomOrbitControls from "../orbitControls";
import { Float } from "@react-three/drei";
// import { AxesHelper } from "three";
import { Model } from "./planet";


export const PlanetScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 100, 10]} intensity={5} />
      <CustomOrbitControls />
      {/* <axesHelper scale={3}/> */}
      <Float speed={0.8} rotationIntensity={1.5} floatIntensity={0}>
        <Model position={[1, 1.8, 0]}  />
      </Float>
    </Canvas>
  );
};
