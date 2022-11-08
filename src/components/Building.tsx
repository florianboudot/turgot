import * as THREE from 'three';

import { Box } from '@react-three/drei';
import { MeshProps } from '@react-three/fiber';

interface BuildingProps extends MeshProps {
  storeys?: number;
}
const lineColor = '#373030';

const Building = ({ position, storeys = 1 }: BuildingProps) => {
  return (
    <Box position={position}>
      <meshBasicMaterial wireframe color={lineColor} side={THREE.DoubleSide} />
    </Box>
  );
};

export default Building;
