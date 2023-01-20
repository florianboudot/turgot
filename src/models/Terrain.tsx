import { Mesh, MeshStandardMaterial } from 'three'

import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'

interface MyGLTF extends GLTF {
  nodes: {
    /* Manually typed meshes names */
    terrain: Mesh
  }
  materials: {
    /* Manually typed meshes names */
    'Material.001': MeshStandardMaterial
  }
}

const Terrain = () => {
  const { nodes } = useGLTF('./models/terrain.gltf') as unknown as MyGLTF

  return <mesh geometry={nodes.terrain.geometry} material={nodes.terrain.material} scale={1}></mesh>
}

export default Terrain
