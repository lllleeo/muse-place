/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACO_URL, useEnvironment, useTrimeshCollision } from "spacesvr";
import { BufferGeometry, MeshStandardMaterial } from "three";
import Trigger from "../../modifiers/Trigger";

type GLTFResult = GLTF & {
  nodes: {
    barberchair: THREE.Mesh;
    ["barberchair-hitbox"]: THREE.Mesh;
    hairstyle: THREE.Mesh;
    ["hairstyle-hitbox"]: THREE.Mesh;
    defjam: THREE.Mesh;
    ["defjam-hitbox"]: THREE.Mesh;
    giveaway: THREE.Mesh;
    ["giveaway-hitbox"]: THREE.Mesh;
    tv: THREE.Mesh;
    ["tv-hitbox"]: THREE.Mesh;
    backdoor: THREE.Mesh;
    ["backdoor-hitbox"]: THREE.Mesh;
    ["radio-hitbox"]: THREE.Mesh;
    barberchairs: THREE.Mesh;
    photos: THREE.Mesh;
    news: THREE.Mesh;
    product: THREE.Mesh;
    clay: THREE.Mesh;
    phone: THREE.Mesh;
    seatframe: THREE.Mesh;
    chairs: THREE.Mesh;
    armrest: THREE.Mesh;
    walls: THREE.Mesh;
    checkers: THREE.Mesh;
    ceiling: THREE.Mesh;
    collider: THREE.Mesh;
  };
  materials: {
    ["barberchair.1"]: THREE.MeshStandardMaterial;
    hairstyle: THREE.MeshStandardMaterial;
    defjam: THREE.MeshStandardMaterial;
    clay: THREE.MeshStandardMaterial;
    tv: THREE.MeshStandardMaterial;
    photos: THREE.MeshStandardMaterial;
    ["news.2"]: THREE.MeshStandardMaterial;
    ["product.1"]: THREE.MeshStandardMaterial;
    telephone: THREE.MeshStandardMaterial;
    seatframe: THREE.MeshStandardMaterial;
    ["chairs.1"]: THREE.MeshStandardMaterial;
    armrest: THREE.MeshStandardMaterial;
    ["walls.1"]: THREE.MeshStandardMaterial;
    checkers: THREE.MeshStandardMaterial;
    celining: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/C2ABarbershop-1614090962/barbershop_06.glb";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { setPaused } = useEnvironment();
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
        <Trigger onClick={() => setPaused(true, "bts")}>
          <mesh
            name="hairstyle"
            material={materials.hairstyle}
            geometry={nodes.hairstyle.geometry}
          />
          <mesh
            name="hairstyle-hitbox"
            material={hitboxMat}
            geometry={nodes["hairstyle-hitbox"].geometry}
          />
        </Trigger>
        <Trigger onClick={() => setPaused(true, "fullscreen-barberchair-0")}>
          <mesh
            name="barberchair"
            material={materials["barberchair.1"]}
            geometry={nodes.barberchair.geometry}
          />
          <mesh
            name="barberchair-hitbox"
            material={hitboxMat}
            geometry={nodes["barberchair-hitbox"].geometry}
          />
        </Trigger>
        <Trigger onClick={() => setPaused(true, "bts")}>
          <mesh
            name="defjam"
            material={materials.defjam}
            geometry={nodes.defjam.geometry}
          />
          <mesh
            name="defjam-hitbox"
            material={hitboxMat}
            geometry={nodes["defjam-hitbox"].geometry}
          />
        </Trigger>
        <Trigger onClick={() => setPaused(true, "bts")}>
          <mesh
            name="giveaway"
            material={materials.clay}
            geometry={nodes.giveaway.geometry}
          />
          <mesh
            name="giveaway-hitbox"
            material={hitboxMat}
            geometry={nodes["giveaway-hitbox"].geometry}
          />
        </Trigger>
        <Trigger onClick={() => setPaused(true, "castconvo")}>
          <mesh
            name="tv"
            material={materials.tv}
            geometry={nodes.tv.geometry}
          />
          <mesh
            name="tv-hitbox"
            material={hitboxMat}
            geometry={nodes["tv-hitbox"].geometry}
          />
        </Trigger>
        <Trigger onClick={() => setPaused(true, "bts")}>
          <mesh
            name="backdoor"
            material={materials.clay}
            geometry={nodes.backdoor.geometry}
          />
          <mesh
            name="backdoor-hitbox"
            material={hitboxMat}
            geometry={nodes["backdoor-hitbox"].geometry}
          />
        </Trigger>
        {/*<mesh name="radio-hitbox" material={nodes['radio-hitbox'].material} geometry={nodes['radio-hitbox'].geometry} />*/}
        <mesh
          name="barberchairs"
          material={materials["barberchair.1"]}
          geometry={nodes.barberchairs.geometry}
        />
        <mesh
          name="photos"
          material={materials.photos}
          geometry={nodes.photos.geometry}
        />
        <mesh
          name="news"
          material={materials["news.2"]}
          geometry={nodes.news.geometry}
        />
        <Trigger onClick={() => setPaused(true, "bts")}>
          <mesh
            name="product"
            material={materials["product.1"]}
            geometry={nodes.product.geometry}
          />
          <mesh
            position={[-7.44, 2.5, -3.2]}
            rotation-y={Math.PI / 2}
            material={hitboxMat}
          >
            <boxBufferGeometry args={[7.25, 1, 1.25]} />
          </mesh>
        </Trigger>
        <mesh
          name="clay"
          material={materials.clay}
          geometry={nodes.clay.geometry}
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
          name="checkers"
          material={materials.checkers}
          geometry={nodes.checkers.geometry}
        />
        <mesh
          name="ceiling"
          material={materials.celining}
          geometry={nodes.ceiling.geometry}
          scale={[168.1893, 57.9186, 215.7007]}
        />
        {/*<mesh name="collider" material={nodes.collider.material} geometry={nodes.collider.geometry} />*/}
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL, DRACO_URL);
