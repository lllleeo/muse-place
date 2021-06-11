import { useLayoutEffect, useRef } from "react";
import { default as THREE, InstancedMesh, Object3D } from "three";
import { RADIUS, TABLE_HEIGHT, TABLE_THETA } from "../assets/constants";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

const SCALE = 0.7;

type GLTFResult = GLTF & {
  nodes: { world_holder: THREE.Mesh };
  materials: { ["world_holder.mat"]: THREE.MeshStandardMaterial };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/WorldHolder-1623380206/world_holder_01.glb.gz";

type WorldPedestalsProps = {
  num: number;
};

export default function WorldPedestals(props: WorldPedestalsProps) {
  const { num } = props;

  const mesh = useRef<InstancedMesh>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;

  useLayoutEffect(() => {
    if (!mesh.current) return;

    for (let i = 0; i < num; i++) {
      const obj = new Object3D();
      const theta = -Math.PI / 2 + i * TABLE_THETA;
      obj.position.setFromSphericalCoords(RADIUS + 0.1, Math.PI / 2, theta);
      obj.position.y = TABLE_HEIGHT - 0.25;
      obj.rotation.y = theta + Math.PI / 2;
      obj.scale.set(SCALE, SCALE, SCALE);
      obj.updateMatrix();
      mesh.current.setMatrixAt(i, obj.matrix);
    }

    mesh.current.instanceMatrix.needsUpdate = true;
  }, [num]);

  return (
    <group name="world-pedestals">
      <instancedMesh
        ref={mesh}
        args={[nodes.world_holder.geometry, materials["world_holder.mat"], num]}
      />
    </group>
  );
}
