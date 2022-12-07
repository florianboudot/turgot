import { PerspectiveCamera } from '@react-three/drei'
import { useControls } from 'leva'

const PerspectiveCam = () => {
  const { camX, camY, camZ, fov } = useControls('perspective camera', {
    camX: { value: -10, min: -50, max: 50, step: 5 },
    camY: { value: 5, min: -50, max: 50, step: 5 },
    camZ: { value: -5, min: -50, max: 50, step: 5 },
    fov: { value: 70, step: 1 },
  })

  return <PerspectiveCamera makeDefault position={[camX, camY, camZ]} fov={fov} />
}

export default PerspectiveCam
