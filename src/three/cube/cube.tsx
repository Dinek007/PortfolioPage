
import { BoxGeometry, Mesh, MeshStandardMaterial, TextureLoader } from 'three';

export const Cube: React.FC<{src:string}>  = ({src}) => {
    const texture = new TextureLoader().load(
      `../src/assets/skillsTextures/${src}.png`
    );
    const material = new MeshStandardMaterial({map: texture});
    const geometry = new BoxGeometry(1, 1, 1);
  
    return (
      <mesh material={material} geometry={geometry} position={[0, 0, 0]} scale={3} />
    );
  }