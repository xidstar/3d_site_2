import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import StoreScene from '../assets/3d/computer.glb'
import { a } from '@react-spring/three'

const Storefront = (props) => {
  const { nodes, materials } = useGLTF(StoreScene)
  return (
    <a.group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={51.446}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.typeMesh2_aiStandardSurface2_0.geometry}
            material={materials.aiStandardSurface2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.typeMesh2_lambert2_0.geometry}
            material={materials.lambert2}
          />
        </group>
      </group>
    </a.group>
  )
}

export default Storefront;
