import './index.css';

import { Canvas, useLoader } from '@react-three/fiber';
import { DirectionalLight, DirectionalLightHelper } from 'three';
import {
  OrthographicCamera,
  PerspectiveCamera,
  useHelper,
} from '@react-three/drei';
import React, { useRef } from 'react';

import Controls from './components/Controls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { createRoot } from 'react-dom/client';
import { useControls } from 'leva';

// const PerspectiveCam = () => {
//   const { camX, camY, camZ, fov } = useControls('perspective camera', {
//     camX: { value: -10, min: -50, max: 50, step: 5 },
//     camY: { value: 5, min: -50, max: 50, step: 5 },
//     camZ: { value: -5, min: -50, max: 50, step: 5 },
//     fov: { value: 70, step: 1 },
//   });

//   return (
//     <PerspectiveCamera makeDefault position={[camX, camY, camZ]} fov={fov} />
//   );
// };

const OrthoCam = () => {
  const { camX, camY, camZ, zoom } = useControls('camera', {
    camX: { value: 1, min: -50, max: 50, step: 1 },
    camY: { value: 1, min: -50, max: 50, step: 1 },
    camZ: { value: 2, min: -50, max: 50, step: 1 },
    zoom: { value: 50, min: 0, max: 50, step: 1 },
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

const Light = () => {
  const directionalLight = useRef<DirectionalLight>(null!);
  useHelper(directionalLight, DirectionalLightHelper, 1);
  const { x, y, z } = useControls('directionaLight', {
    x: 1,
    y: 1,
    z: 2,
  });

  return (
    <directionalLight
      ref={directionalLight}
      position={[x, y, z]}
      intensity={1.5}
    />
  );
};

function App() {
  const model = useLoader(GLTFLoader, './models/pont-de-la-tournelle.glb');

  return (
    <Canvas>
      <OrthoCam />
      {/* <PerspectiveCam /> */}
      <Light />
      <axesHelper />

      {/* <PivotControls depthTest={false} anchor={[-1, -1, -1]} scale={0.75}> */}
      <primitive object={model.scene} scale={10} />
      {/* </PivotControls> */}

      <Controls />
    </Canvas>
  );
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
