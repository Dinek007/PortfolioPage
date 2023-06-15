
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import {
  BoxGeometry,
  MeshStandardMaterial,
  TextureLoader,
  Vector2,
} from "three";

export const Cube: React.FC<{
  src: string;
}> = ({ src }) => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (isHovered) {
      cubeRef.current.rotation.y += 0.5; // Szybkość obrotu, gdy mysz nie jest najechana
    }
  });

  const texture = new TextureLoader().load(src);
  const material = new MeshStandardMaterial({ map: texture });
  const geometry = new BoxGeometry(1, 1, 1);

  return (
    <mesh
      ref={cubeRef}
      material={material}
      geometry={geometry}
      position={[0, 0, 0]}
      scale={3}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    />
  );
};