import { OrthographicCamera } from '@react-three/drei'
import { useControls } from 'leva'

const OrthoCam = () => {
  const { camX, camY, camZ, zoom } = useControls('camera', {
    camX: { value: 12, min: -50, max: 50, step: 1 },
    camY: { value: 11, min: -50, max: 50, step: 1 },
    camZ: { value: 5, min: -50, max: 50, step: 1 },
    zoom: { value: 13, min: 0, max: 50, step: 1 },
  })

  return (
    <OrthographicCamera
      makeDefault
      position={[camX, camY, camZ]}
      zoom={zoom}
      near={-200}
      far={1000}
    />
  )
}

export default OrthoCam
