/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACO_URL, useTrimeshCollision } from "spacesvr";
import { BufferGeometry, MeshStandardMaterial, Vector2 } from "three";
import { useLoader } from "react-three-fiber";

type GLTFResult = GLTF & {
  nodes: {
    structure: THREE.Mesh;
    gods: THREE.Mesh;
    stairs: THREE.Mesh;
    information: THREE.Mesh;
    spawn: THREE.Mesh;
    terrain: THREE.Mesh;
    collider: THREE.Mesh;
  };
  materials: {
    ["structure.mat"]: THREE.MeshStandardMaterial;
    ["gods.mat"]: THREE.MeshStandardMaterial;
    ["stairs.mat"]: THREE.MeshStandardMaterial;
    ["information.mat"]: THREE.MeshStandardMaterial;
    ["spawn.mat"]: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/AltoLowPolyCollider-1618364747/scene.glb.gz";

const GRASS_TEX =
  "https://d27rt3a60hh1lx.cloudfront.net/content/alto/grasstile.jpg";
const TREE_TRANSP_TEX =
  "https://d27rt3a60hh1lx.cloudfront.net/content/alto/Tree-Transparency-1.jpg";
const TREE_TEX =
  "https://d27rt3a60hh1lx.cloudfront.net/content/alto/Tree-Color.jpg";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;

  // grass texture
  const grassTileTex = useLoader(THREE.TextureLoader, GRASS_TEX);
  grassTileTex.repeat.x = 100;
  grassTileTex.repeat.y = 100;
  grassTileTex.wrapS = grassTileTex.wrapT = THREE.RepeatWrapping;
  const grassMat = useMemo(
    () => new MeshStandardMaterial({ map: grassTileTex }),
    [grassTileTex]
  );

  // materials["bench.mat"].envMapIntensity = 0.38;

  useTrimeshCollision(
    (nodes.collider.geometry as BufferGeometry)
      .clone()
      .scale(12, 12, 12)
      .translate(0, -36.69, 0)
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group position-y={-36.69}>
        <group scale={[12, 12, 12]}>
          <mesh
            name="gods"
            material={materials["gods.mat"]}
            geometry={nodes.gods.geometry}
            rotation={[0, 0, 0]}
          />
          <mesh
            name="stairs"
            material={materials["stairs.mat"]}
            geometry={nodes.stairs.geometry}
          />
          <mesh
            name="structure"
            material={materials["structure.mat"]}
            geometry={nodes.structure.geometry}
          />
          <mesh
            name="spawn"
            material={materials["spawn.mat"]}
            geometry={nodes.spawn.geometry}
          />
          <mesh
            name="information"
            material={materials["information.mat"]}
            geometry={nodes.information.geometry}
          />
          <mesh
            name="terrain"
            material={grassMat}
            geometry={nodes.terrain.geometry}
          />
          {/*<mesh name="collider" material={nodes.collider.material} geometry={nodes.collider.geometry} />*/}
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);
