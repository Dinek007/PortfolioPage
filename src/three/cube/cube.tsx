
import { BoxGeometry, Mesh, MeshStandardMaterial, TextureLoader } from 'three';

export const Cube: React.FC<{src:string}>  = ({src}) => {
  //const texture = new TextureLoader().load(src);
  const material = new MeshStandardMaterial({ color: 0xff00ff });
  const geometry = new BoxGeometry(1, 1, 1);

  return (
    <mesh
      material={material}
      geometry={geometry}
      position={[0, 0, 0]}
      scale={3}
    />
  );
}