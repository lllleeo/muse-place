/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    avatar_1: THREE.SkinnedMesh;
    Hips_bind: THREE.Bone;
  };
  materials: {
    ["avatar.mat"]: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Armature|mixamo.com|Layer0";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/Builder00-1620851795/avatar_00.glb.gz";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(FILE_URL) as GLTFResult;
  const { actions } = useAnimations<GLTFActions>(animations, group);

  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"].play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" frustumCulled={false}>
        <group
          name="Armature"
          scale={0.007}
          rotation-x={Math.PI / 2}
          frustumCulled={false}
        >
          <primitive object={nodes.Hips_bind} />
          <skinnedMesh
            frustumCulled={false}
            name="avatar_1"
            geometry={nodes.avatar_1.geometry}
            material={materials["avatar.mat"]}
            skeleton={nodes.avatar_1.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);
