import { DirectionalLight, DirectionalLightHelper } from 'three'

import { useControls } from 'leva'
import { useHelper } from '@react-three/drei'
import { useRef } from 'react'

const SunLight = () => {
  const directionalLight = useRef<DirectionalLight>(null!)
  useHelper(directionalLight, DirectionalLightHelper, 1)
  const { x, y, z } = useControls('directionaLight', {
    x: 2.3,
    y: 8,
    z: -16.5,
  })

  return <directionalLight ref={directionalLight} position={[x, y, z]} intensity={1.5} />
}

export default SunLight
