import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Duck = (props) => {
  const { nodes, materials } = useGLTF('/rubber_duck.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.material}
            position={[0, 173.286, -2.915]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.901, 1.086, 1.022]}
          />
        </group>
      </group>
    </group>
  )
}

export default Duck;