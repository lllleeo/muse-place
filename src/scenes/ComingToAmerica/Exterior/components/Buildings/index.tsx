import { GroupProps } from "react-three-fiber";
import { INSTANCE_DATA } from "./instance";
import { useGLTF } from "@react-three/drei";
import { DRACO_URL } from "spacesvr";
import { InstancedMesh, Mesh } from "three";
import { useLayoutEffect, useRef } from "react";

const Buildings = (props: GroupProps) => {
  const mesh = useRef<InstancedMesh>();
  const gltf = useGLTF(
    "https://d27rt3a60hh1lx.cloudfront.net/models/Eagle-1612497310/eagle4.glb",
    DRACO_URL
  );

  useLayoutEffect(() => {
    if (!mesh.current) return;

    for (let i = 0; i < INSTANCE_DATA.length; i++) {
      INSTANCE_DATA[i].updateMatrix();
      mesh.current.setMatrixAt(i, INSTANCE_DATA[i].matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  }, [INSTANCE_DATA]);

  return (
    <group {...props}>
      <instancedMesh
        ref={mesh}
        args={[
          (gltf.nodes.Eagle as Mesh).geometry,
          (gltf.nodes.Eagle as Mesh).material,
          INSTANCE_DATA.length,
        ]}
      />
    </group>
  );
};

export default Buildings;
