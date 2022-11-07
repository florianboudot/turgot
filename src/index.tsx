import { useControls } from 'leva';
import ReactDOM from 'react-dom';
import './index.css';
import React, { useMemo } from 'react';
import { Canvas, MeshProps } from '@react-three/fiber';
import * as THREE from 'three';
import { Box, OrbitControls, OrthographicCamera } from '@react-three/drei';

const NUM = 3;
interface Positions {
  id: string;
  position: [number, number, number];
}

interface BuildingProps extends MeshProps {
  storeys?: number;
}
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
          <meshBasicMaterial color="white" side={THREE.DoubleSide} />
        </Box>
      ))}
    </>
  );
};

const OrthoCam = () => {
  const { camX, camY, camZ, zoom } = useControls({
    camX: { value: 1, min: -50, max: 50, step: 5 },
    camY: { value: 0.542, min: -50, max: 50, step: 5 },
    camZ: { value: 1, min: -50, max: 50, step: 5 },
    zoom: { value: 20, min: 0, max: 50, step: 1 },
  });

  return (
    <OrthographicCamera
      makeDefault
      position={[camX, camY, camZ]}
      zoom={zoom}
      near={-200}
      far={4000}
    />
  );
};

function App() {
  return (
    <Canvas>
      <OrthoCam />

      <Building position={[0, 0, 0]} />
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[200, 200, 75, 75]} />
        <meshBasicMaterial wireframe color="white" side={THREE.DoubleSide} />
      </mesh>
      <OrbitControls
        // autoRotate={false}
        enableRotate={false}
        screenSpacePanning={true}
        mouseButtons={{
          LEFT: THREE.MOUSE.PAN,
          MIDDLE: THREE.MOUSE.DOLLY,
          RIGHT: THREE.MOUSE.PAN,
        }}
      />
    </Canvas>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
