/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    leaves: THREE.Mesh;
    trunk: THREE.Mesh;
  };
  materials: {
    ["leaves.mat"]: THREE.MeshStandardMaterial;
    ["trunk.mat"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/knight_tree.glb") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          name="leaves"
          geometry={nodes.leaves.geometry}
          material={materials["leaves.mat"]}
          scale={[100, 100, 100]}
        />
        <mesh
          name="trunk"
          geometry={nodes.trunk.geometry}
          material={materials["trunk.mat"]}
          scale={[100, 100, 100]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/knight_tree.glb");