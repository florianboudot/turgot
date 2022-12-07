import './css/styles.css'

import { Canvas } from '@react-three/fiber'
import Controls from './components/Controls'
import OrthoCam from './components/OrthoCamera'
import PontDeLaTournelle from './models/PontDelaTournelle'
import React from 'react'
import SunLight from './components/SunLight'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <Canvas>
      <OrthoCam />
      {/* <PerspectiveCam /> */}
      <SunLight />
      <axesHelper args={[10]} />
      <ambientLight intensity={0.3} />
      <PontDeLaTournelle />

      <Controls />
    </Canvas>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
