import * as THREE from 'three';

import { Box } from '@react-three/drei';
import { MeshProps } from '@react-three/fiber';
import { useMemo } from 'react';

const NUM = 3;
interface Positions {
  id: string;
  position: [number, number, number];
}
interface BuildingProps extends MeshProps {
  storeys?: number;
}
const lineColor = '#373030';

const Building = ({ position, storeys = 1 }: BuildingProps) => {
  const positions = useMemo(() => {
    const pos: Positions[] = [];
    const half = (NUM - 1) / 2;

    for (let x = 0; x < NUM; x++) {
      for (let y = 0; y < NUM; y++) {
        pos.push({
          id: `${x}-${y}`,
          position: [(x - half) * 4, (y - half) * 4, 0],
        });
      }
    }

    return pos;
  }, []);

  return (
    <>
      {positions.map(({ id, position }) => (
        <Box key={id} position={position}>
          <meshBasicMaterial
            wireframe
            color={lineColor}
            side={THREE.DoubleSide}
          />
        </Box>
      ))}
    </>
  );
};

export default Building;
