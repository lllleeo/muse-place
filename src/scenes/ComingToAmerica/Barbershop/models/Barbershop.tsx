/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACO_URL, useTrimeshCollision } from "spacesvr";
import { BufferGeometry, MeshStandardMaterial } from "three";
import Trigger from "../../modifiers/Trigger";

type GLTFResult = GLTF & {
  nodes: {
    ["hairstyle-hitbox"]: THREE.Mesh;
    ["defjam-hitbox"]: THREE.Mesh;
    ["giveaway-hitbox"]: THREE.Mesh;
    ["radio-hitbox"]: THREE.Mesh;
    ["tv-hitbox"]: THREE.Mesh;
    ["backdoor-hitbox"]: THREE.Mesh;
    ["barber-hitbox"]: THREE.Mesh;
    photos: THREE.Mesh;
    news: THREE.Mesh;
    product: THREE.Mesh;
    clay: THREE.Mesh;
    tv: THREE.Mesh;
    phone: THREE.Mesh;
    seatframe: THREE.Mesh;
    chairs: THREE.Mesh;
    armrest: THREE.Mesh;
    barberchair: THREE.Mesh;
    walls: THREE.Mesh;
    ceiling: THREE.Mesh;
    collider: THREE.Mesh;
  };
  materials: {
    photos: THREE.MeshStandardMaterial;
    news: THREE.MeshStandardMaterial;
    product: THREE.MeshStandardMaterial;
    clay: THREE.MeshStandardMaterial;
    telephone: THREE.MeshStandardMaterial;
    seatframe: THREE.MeshStandardMaterial;
    ["chairs.1"]: THREE.MeshStandardMaterial;
    armrest: THREE.MeshStandardMaterial;
    ["barberchair.1"]: THREE.MeshStandardMaterial;
    ["walls.1"]: THREE.MeshStandardMaterial;
    celining: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/C2ABarbershop-1614083036/barbershop_04.glb";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();

  const { nodes, materials } = useGLTF(FILE_URL, DRACO_URL) as GLTFResult;

  useTrimeshCollision(
    (nodes.collider.geometry as BufferGeometry)
      .clone()
      .scale(0.275, 0.275, 0.275)
  );

  const hitboxMat = useMemo(
    () => new MeshStandardMaterial({ opacity: 0, transparent: true }),
    []
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[0.275, 0.275, 0.275]} position-y={0.005}>
        <mesh
          name="hairstyle-hitbox"
          material={hitboxMat}
          geometry={nodes["hairstyle-hitbox"].geometry}
        />
        <mesh
          name="defjam-hitbox"
          material={hitboxMat}
          geometry={nodes["defjam-hitbox"].geometry}
        />
        <Trigger>
          <mesh
            name="barberchair"
            material={materials["barberchair.1"]}
            geometry={nodes.barberchair.geometry}
          />
          <mesh
            name="barber-hitbox"
            material={hitboxMat}
            geometry={nodes["barber-hitbox"].geometry}
          />
        </Trigger>
        <mesh
          name="giveaway-hitbox"
          material={hitboxMat}
          geometry={nodes["giveaway-hitbox"].geometry}
        />
        <mesh
          name="radio-hitbox"
          material={hitboxMat}
          geometry={nodes["radio-hitbox"].geometry}
        />
        <Trigger>
          <mesh
            name="tv"
            material={nodes.tv.material}
            geometry={nodes.tv.geometry}
          />
          <mesh
            name="tv-hitbox"
            material={hitboxMat}
            geometry={nodes["tv-hitbox"].geometry}
          />
        </Trigger>
        <Trigger>
          <mesh
            name="clay"
            material={materials.clay}
            geometry={nodes.clay.geometry}
          />
          <mesh
            name="backdoor-hitbox"
            material={hitboxMat}
            geometry={nodes["backdoor-hitbox"].geometry}
          />
        </Trigger>
        <mesh
          name="photos"
          material={materials.photos}
          geometry={nodes.photos.geometry}
        />
        <mesh
          name="news"
          material={materials.news}
          geometry={nodes.news.geometry}
        />
        <mesh
          name="product"
          material={materials.product}
          geometry={nodes.product.geometry}
        />

        <mesh
          name="phone"
          material={materials.telephone}
          geometry={nodes.phone.geometry}
        />
        <mesh
          name="seatframe"
          material={materials.seatframe}
          geometry={nodes.seatframe.geometry}
        />
        <mesh
          name="chairs"
          material={materials["chairs.1"]}
          geometry={nodes.chairs.geometry}
        />
        <mesh
          name="armrest"
          material={materials.armrest}
          geometry={nodes.armrest.geometry}
        />

        <mesh
          name="walls"
          material={materials["walls.1"]}
          geometry={nodes.walls.geometry}
        />
        <mesh
          name="ceiling"
          material={materials.celining}
          geometry={nodes.ceiling.geometry}
          scale={[168.1893, 57.9186, 215.7007]}
        />
        {/*<mesh*/}
        {/*  name="collider"*/}
        {/*  material={nodes.collider.material}*/}
        {/*  geometry={nodes.collider.geometry}*/}
        {/*/>*/}
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL, DRACO_URL);
