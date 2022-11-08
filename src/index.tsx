import './index.css';

import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei';

import Building from './components/Building';
import { Canvas } from '@react-three/fiber';
import Controls from './components/Controls';
import Floor from './components/Floor';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { useControls } from 'leva';

const PerspectiveCam = () => {
  const { camX, camY, camZ } = useControls('perspective camera', {
    camX: { value: -20, min: -50, max: 50, step: 5 },
    camY: { value: 10, min: -50, max: 50, step: 5 },
    camZ: { value: 0, min: -50, max: 50, step: 5 },
  });

  return <PerspectiveCamera makeDefault position={[camX, camY, camZ]} />;
};

const OrthoCam = () => {
  const { camX, camY, camZ, zoom } = useControls('camera', {
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
      {/* <OrthoCam /> */}
      <PerspectiveCam />

      <group rotation={[Math.PI / 2, 0, 0]}>
        <Building position={[0, 0, 0]} />
        <Floor />
      </group>

      <Controls />
    </Canvas>
  );
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
