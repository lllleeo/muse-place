/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    content_01: THREE.Mesh;
  };
  materials: {
    ["content_01.mat"]: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/content1-1627645243/content1.glb.gz";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;
  materials["content_01.mat"].emissive = new THREE.Color("white");
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="content_01glb">
          <mesh
            name="content_01"
            geometry={nodes.content_01.geometry}
            material={materials["content_01.mat"]}
            scale={[98.4614, 98.4614, 98.4614]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);