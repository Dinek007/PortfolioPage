
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  TextureLoader,
} from "three";
import { isMobile } from "react-device-detect";

export const Cube: React.FC<{ src: string }> = ({ src }) => {
  const texture = new TextureLoader().load(src);
  const material = new MeshStandardMaterial({ map: texture });
  const geometry = new BoxGeometry(1, 1, 1);

  return (
    <mesh
      material={material}
      geometry={geometry}
      position={[0, 0, 0]}
      scale={3}
    />
  );
};