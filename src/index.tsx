import ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div id="canvas-container">
      <Canvas>lol</Canvas>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
