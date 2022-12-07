import './css/styles.css';

import { Canvas, useLoader } from '@react-three/fiber';
import { DirectionalLight, DirectionalLightHelper, DoubleSide } from 'three';
import {
  Edges,
  OrthographicCamera,
  PerspectiveCamera,
  useHelper,
} from '@react-three/drei';
import React, { useRef } from 'react';

import Controls from './components/Controls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { createRoot } from 'react-dom/client';
import { useControls } from 'leva';

const PerspectiveCam = () => {
  const { camX, camY, camZ, fov } = useControls('perspective camera', {
    camX: { value: -10, min: -50, max: 50, step: 5 },
    camY: { value: 5, min: -50, max: 50, step: 5 },
    camZ: { value: -5, min: -50, max: 50, step: 5 },
    fov: { value: 70, step: 1 },
  });

  return (
    <PerspectiveCamera makeDefault position={[camX, camY, camZ]} fov={fov} />
  );
};

const OrthoCam = () => {
  const { camX, camY, camZ, zoom } = useControls('camera', {
    camX: { value: 12, min: -50, max: 50, step: 1 },
    camY: { value: 11, min: -50, max: 50, step: 1 },
    camZ: { value: 5, min: -50, max: 50, step: 1 },
    zoom: { value: 13, min: 0, max: 50, step: 1 },
  });

  return (
    <OrthographicCamera
      makeDefault
      position={[camX, camY, camZ]}
      zoom={zoom}
      near={-200}
      far={1000}
    />
  );
};

const Light = () => {
  const directionalLight = useRef<DirectionalLight>(null!);
  useHelper(directionalLight, DirectionalLightHelper, 1);
  const { x, y, z } = useControls('directionaLight', {
    x: 2.3,
    y: 8,
    z: -16.5,
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
  const { nodes } = useLoader(GLTFLoader, './models/pont-de-la-tournelle.gltf');

  return (
    <Canvas>
      <OrthoCam />
      {/* <PerspectiveCam /> */}
      <Light />
      <axesHelper />

      <mesh geometry={nodes.pont.geometry} scale={1} rotation-y={Math.PI}>
        <meshStandardMaterial transparent side={DoubleSide} />
      </mesh>

      <Controls />
    </Canvas>
  );
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
