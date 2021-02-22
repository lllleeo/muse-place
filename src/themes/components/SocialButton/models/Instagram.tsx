/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACO_URL } from "spacesvr";

type GLTFResult = GLTF & {
  nodes: {
    instagrambutton: THREE.Mesh;
  };
  materials: {
    ["instagram.mat"]: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/Instagram-1611646044/instagram.glb";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL, DRACO_URL) as GLTFResult;

  materials["instagram.mat"].metalness = 0;
  materials["instagram.mat"].roughness = 0.25;

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          name="instagrambutton"
          material={materials["instagram.mat"]}
          geometry={nodes.instagrambutton.geometry}
        />
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL, DRACO_URL);