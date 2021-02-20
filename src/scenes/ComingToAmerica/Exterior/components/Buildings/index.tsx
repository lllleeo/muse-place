import { GroupProps } from "react-three-fiber";
import { INSTANCE_DATA } from "./instance";
import { useGLTF } from "@react-three/drei";
import { DRACO_URL } from "spacesvr";
import {
  InstancedMesh,
  Mesh,
  default as THREE,
  Material,
  Geometry,
} from "three";
import { ReactNode, useLayoutEffect, useMemo, useRef } from "react";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    light: THREE.Mesh;
    dark: THREE.Mesh;
    lattice: THREE.Mesh;
    stairs: THREE.Mesh;
    windows: THREE.Mesh;
    glass: THREE.Mesh;
  };
  materials: {
    ["lattice.mat"]: THREE.MeshStandardMaterial;
    ["stairs.mat"]: THREE.MeshStandardMaterial;
    ["windows.mat"]: THREE.MeshStandardMaterial;
    ["glass.mat"]: THREE.MeshStandardMaterial;
  };
};
const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/C2ABuilding-1613815933/building_01.glb";

const InstancedBuildingPiece = (props: {
  material: Material;
  geometry: Geometry;
}) => {
  const { geometry, material } = props;
  const mesh = useRef<InstancedMesh>();

  useLayoutEffect(() => {
    if (!mesh.current) return;

    for (let i = 0; i < INSTANCE_DATA.length; i++) {
      const obj = INSTANCE_DATA[i]();
      obj.updateMatrix();
      mesh.current.setMatrixAt(i, obj.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  }, [INSTANCE_DATA]);

  return (
    <group {...props}>
      <instancedMesh
        ref={mesh}
        args={[geometry, material, INSTANCE_DATA.length]}
      />
    </group>
  );
};

const Buildings = (props: GroupProps) => {
  const gltf = useGLTF(FILE_URL, DRACO_URL) as GLTFResult;

  const pieces = useMemo(() => {
    const pic: ReactNode[] = [];
    gltf.scene.traverse((child) => {
      if ((child as Mesh).material && (child as Mesh).geometry) {
        pic.push(
          <InstancedBuildingPiece
            key={child.uuid}
            material={(child as Mesh).material as Material}
            geometry={(child as Mesh).geometry as Geometry}
          />
        );
      }
    });
    return pic;
  }, []);

  return <group {...props}>{pieces}</group>;
};

export default Buildings;
