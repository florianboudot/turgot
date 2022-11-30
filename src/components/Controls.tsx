// import * as THREE from 'three';

import { OrbitControls } from '@react-three/drei';

const Controls = () => {
  return (
    <OrbitControls
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
