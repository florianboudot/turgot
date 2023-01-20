import './css/styles.css'

import { Canvas } from '@react-three/fiber'
import Controls from './components/Controls'
import { Grid } from '@react-three/drei'
import OrthoCam from './components/OrthoCamera'
import PontDeLaTournelle from './models/PontDelaTournelle'
import React from 'react'
import ShaderMaterialScene from './components/shaders/ShaderMaterial'
import SunLight from './components/SunLight'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <Canvas>
      <Grid cellColor="white" args={[10, 10]} />

      <gridHelper />
      <OrthoCam />
      {/* <PerspectiveCam /> */}
      <SunLight />
      <axesHelper args={[10]} />
      <ambientLight intensity={0.3} />
      <group>
        <PontDeLaTournelle />
        {/* <Terrain /> */}
        <ShaderMaterialScene />
      </group>
      <Controls />
    </Canvas>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
