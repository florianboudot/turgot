import * as THREE from 'three';

import { MeshProps } from '@react-three/fiber';

interface BuildingProps extends MeshProps {
  storeys?: number;
}
const lineColor = '#373030';

const Building = ({ position, storeys = 1 }: BuildingProps) => {
  return (
    <mesh position={position}>
      <boxGeometry />
      <meshBasicMaterial wireframe color={lineColor} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Building;
