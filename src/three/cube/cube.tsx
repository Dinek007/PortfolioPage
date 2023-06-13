
import { BoxGeometry, Mesh, MeshBasicMaterial, TextureLoader } from "three";
import { isMobile } from "react-device-detect";

export const Cube: React.FC<{ src: string }> = ({ src }) => {
  const texture = new TextureLoader().load(src);
  const material = new MeshBasicMaterial({ map: texture });
  let geometry;

  if (isMobile) {
    geometry = new BoxGeometry(0.5, 0.5, 0.5);
  } else {
    geometry = new BoxGeometry(1, 1, 1);
  }

  return (
    <mesh
      material={material}
      geometry={geometry}
      position={[0, 0, 0]}
      scale={3}
    />
  );
};