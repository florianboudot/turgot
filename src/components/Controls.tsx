// import * as THREE from 'three';

import { OrbitControls } from '@react-three/drei';

const Controls = () => {
  return (
    <OrbitControls
      dampingFactor={0.3}
      // settings to pan only

      // enableRotate={false}
      // screenSpacePanning={true}
      // mouseButtons={{
      //   LEFT: THREE.MOUSE.PAN,
      //   MIDDLE: THREE.MOUSE.DOLLY,
      //   RIGHT: THREE.MOUSE.PAN,
      // }}
    />
  );
};

export default Controls;
