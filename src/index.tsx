import ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber';
import './index.css';

function App() {
  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
