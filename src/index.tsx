import ReactDOM from 'react-dom';
import './index.css';
import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';

function App() {
  return (
    <Canvas>
      <OrthographicCamera
        makeDefault
        position={[0, 0, 10]}
        zoom={5}
        near={-200}
        far={4000}
      />

      <mesh position={[2, -8, 2]} rotation={[Math.PI * 0.5, 0, 0]}>
        <planeGeometry args={[200, 200, 75, 75]} />
        <meshBasicMaterial wireframe color="white" side={THREE.DoubleSide} />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
