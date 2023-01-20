import * as THREE from 'three'

import { Box, shaderMaterial, useTexture } from '@react-three/drei'

import React from 'react'
import { Texture } from 'three'
import { extend } from '@react-three/fiber'

const MyMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
  // vertex shader
  `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
  // fragment shader
  `
      uniform float time;
      uniform vec3 color;
      varying vec2 vUv;
      void main() {
        gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + time) + color, 1.0);
      }
    `
)

extend({ MyMaterial })

type MyMaterialImpl = {
  repeats: number

  map: Texture | Texture[]
} & JSX.IntrinsicElements['shaderMaterial']

declare global {
  namespace JSX {
    interface IntrinsicElements {
      myMaterial: MyMaterialImpl
    }
  }
}

function ShaderMaterialScene() {
  const map = useTexture(`https://source.unsplash.com/random/400x400`)

  return (
    <Box args={[5, 5, 5]} position={[0, 10, 3]}>
      <myMaterial repeats={1} map={map} />
    </Box>
  )
}
export default ShaderMaterialScene
