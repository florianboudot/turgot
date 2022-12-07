import { Mesh, MeshStandardMaterial } from 'three'

import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'

interface MyGLTF extends GLTF {
  nodes: {
    /* Manually typed meshes names */
    pont: Mesh
  }
  materials: {
    /* Manually typed meshes names */
    'Material.001': MeshStandardMaterial
  }
}

const PontDeLaTournelle = () => {
  const { nodes, materials } = useGLTF('./models/pont-de-la-tournelle.gltf') as unknown as MyGLTF
  return (
    <mesh
      geometry={nodes.pont.geometry}
      scale={1}
      rotation-y={Math.PI}
      material={materials['Material.001']}
    />
  )
}

export default PontDeLaTournelle
