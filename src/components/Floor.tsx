import * as THREE from 'three';

import { useControls } from 'leva';

const Floor = () => {
  const { posX, posY, posZ } = useControls('plane', {
    posX: { value: 0, step: 1, min: -20, max: 30 },
    posY: { value: 0, step: 1, min: -20, max: 30 },
    posZ: { value: 0, step: 1, min: -20, max: 30 },
  });
  return (
    <mesh position={[posX, posY, posZ]} scale={[10, 10, 10]}>
      <planeGeometry />
      <meshBasicMaterial color={'#f0e6db'} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Floor;
