/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    TEST1: THREE.Mesh;
  };
  materials: {
    initialShadingGroup: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/Tribox-1622083182/tri-box.glb.gz";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;

  materials.initialShadingGroup.envMapIntensity = 2.19;
  materials.initialShadingGroup.metalness = 1;
  materials.initialShadingGroup.roughness = 0.3;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="TEST1"
          geometry={nodes.TEST1.geometry}
          material={materials.initialShadingGroup}
        />
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);
