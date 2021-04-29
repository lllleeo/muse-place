/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    Wheel: THREE.Mesh;
    Plastic: THREE.Mesh;
    Metal: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/ShoppingCartNoDraco-1615800244/scene.glb.gz";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" scale={[3, 3, 3]}>
        <mesh
          name="Wheel"
          material={materials.Material}
          geometry={nodes.Wheel.geometry}
        />
        <mesh
          name="Plastic"
          material={materials["Material.002"]}
          geometry={nodes.Plastic.geometry}
        />
        <mesh
          name="Metal"
          material={materials["Material.001"]}
          geometry={nodes.Metal.geometry}
        />
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);
