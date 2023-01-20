import { OrthographicCamera } from '@react-three/drei'
import { useControls } from 'leva'

const OrthoCam = () => {
  const { camX, camY, camZ, zoom } = useControls('camera', {
    camX: { value: 0, min: 0, max: 20, step: 0.1 },
    camY: { value: 17, min: 0, max: 20, step: 0.1 },
    camZ: { value: -20, min: -20, max: 20, step: 0.1 },
    zoom: { value: 50, min: 0, max: 50, step: 0.1 },
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
