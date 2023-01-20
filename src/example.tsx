import * as React from 'react'
import * as THREE from 'three'

import { BoxHelper, CameraHelper } from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Sphere, useHelper } from '@react-three/drei'

import { createRoot } from 'react-dom/client'

const Scene: React.FC = () => {
  const mesh = React.useRef()

  useHelper(mesh.current, BoxHelper, 'royalblue')

  return (
    <Sphere ref={mesh}>
      <meshBasicMaterial />
    </Sphere>
  )
}

const CameraScene: React.FC = () => {
  const camera = React.useRef<React.MutableRefObject<THREE.PerspectiveCamera>>(null)
  useHelper(camera.current, CameraHelper)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (camera.current) {
      camera.current.current.lookAt(0, 0, 0)
      camera.current.current.position.x = Math.sin(t) * 4
      camera.current.current.position.z = Math.cos(t) * 4
    }
  })

  return (
    <PerspectiveCamera makeDefault={false} position={[0, 3, 3]} near={1} far={4} ref={camera}>
      <Scene />
      <meshBasicMaterial />
    </PerspectiveCamera>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <Canvas>
    <CameraScene />
  </Canvas>
)
