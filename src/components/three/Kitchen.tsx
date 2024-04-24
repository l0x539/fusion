import { useState, useCallback, FC } from "react"
import { useGLTF, useEnvironment, Text } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"
import { GroupProps } from "@react-three/fiber"

const Kitchen: FC<GroupProps> = (props) => {
  // Load model
  const { nodes, materials } = useGLTF("/assets/models/kitchen-transformed.glb") as any
  // Load environment (using it only on the chairs, for reflections)
  const env = useEnvironment({ preset: "city" })

  return (
    <>
      <group {...props}>
        <mesh geometry={nodes.vase1.geometry} material={materials.gray} material-envMap={env} />
        <mesh geometry={nodes.bottle.geometry} material={materials.gray} material-envMap={env} />
        <mesh geometry={nodes.walls_1.geometry} material={materials.floor} />
        <mesh geometry={nodes.walls_2.geometry} material={materials.walls} />
        <mesh geometry={nodes.plant_1.geometry} material={materials.potted_plant_01_leaves} />
        <mesh geometry={nodes.plant_2.geometry} material={materials.potted_plant_01_pot} />
        <mesh geometry={nodes.cuttingboard.geometry} material={materials.walls} />
        <mesh geometry={nodes.bowl.geometry} material={materials.walls} />
        <mesh geometry={nodes.carpet.geometry} material={materials.carpet} />
        <mesh geometry={nodes.table.geometry} material={materials.walls} material-envMap={env} material-envMapIntensity={0.5} />
        <mesh geometry={nodes.chairs_1.geometry} material={materials.walls} />
        <mesh geometry={nodes.chairs_2.geometry} material={materials.plastic} material-color="#1a1a1a" material-envMap={env} />
        <mesh geometry={nodes.vase.geometry} material={materials.gray} material-envMap={env} />
        <mesh geometry={nodes.lamp_socket.geometry} material={materials.gray} material-envMap={env} />
        <mesh geometry={nodes.lamp.geometry} material={materials.gray} />
        <mesh geometry={nodes.lamp_cord.geometry} material={materials.gray} material-envMap={env} />
        <mesh geometry={nodes.kitchen.geometry} material={materials.walls} />
        <mesh geometry={nodes.sink.geometry} material={materials.chrome} material-envMap={env} />
      </group>

    </>
  )
}

export default Kitchen;