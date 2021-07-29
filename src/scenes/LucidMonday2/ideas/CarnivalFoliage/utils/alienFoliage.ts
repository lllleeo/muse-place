import { useGLTF } from "@react-three/drei/";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { MeshStandardMaterial } from "three";

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/AlienFoliage-1627591995/alien_foliage_lod2_02_processed-v1.glb.gz";

export const useAlienFoliage = (): AlienFoliageResult => {
  const { nodes, materials } = useGLTF(FILE_URL) as AlienFoliageResult;

  const keys = Object.keys(materials);
  for (const key of keys) {
    // @ts-ignore
    (materials[key] as MeshStandardMaterial).metalness = 0;
  }

  return { nodes, materials } as AlienFoliageResult;
};

type AlienFoliageResult = GLTF & {
  nodes: {
    fern_a: THREE.Mesh;
    fern_b: THREE.Mesh;
    fern_c_1: THREE.Mesh;
    fern_c_2: THREE.Mesh;
    fungi_a: THREE.Mesh;
    fungi_b: THREE.Mesh;
    fungi_c: THREE.Mesh;
    fungi_d: THREE.Mesh;
    grass: THREE.Mesh;
    rock_a: THREE.Mesh;
    rock_b: THREE.Mesh;
    rock_c: THREE.Mesh;
    root_a: THREE.Mesh;
    root_b: THREE.Mesh;
    root_b2: THREE.Mesh;
    bulb_tree_b_1: THREE.Mesh;
    bulb_tree_b_2: THREE.Mesh;
    bulb_tree_a_1: THREE.Mesh;
    bulb_tree_a_2: THREE.Mesh;
    tree_b: THREE.Mesh;
    tree_a: THREE.Mesh;
  };
  materials: {
    Fern_A: THREE.MeshStandardMaterial;
    Fern_B: THREE.MeshStandardMaterial;
    Fern_C_Trunk: THREE.MeshStandardMaterial;
    Fern_C_Leaf: THREE.MeshStandardMaterial;
    Tree_B: THREE.MeshStandardMaterial;
    ["Tree_B.001"]: THREE.MeshStandardMaterial;
    ["Tree_B.002"]: THREE.MeshStandardMaterial;
    ["Tree_B.003"]: THREE.MeshStandardMaterial;
    Grass: THREE.MeshStandardMaterial;
    Rock_A: THREE.MeshStandardMaterial;
    Rock_BC: THREE.MeshStandardMaterial;
    ["Rock_BC.001"]: THREE.MeshStandardMaterial;
    Root_A: THREE.MeshStandardMaterial;
    Root_B: THREE.MeshStandardMaterial;
    ["Root_B.001"]: THREE.MeshStandardMaterial;
    Tree_A_Trunk: THREE.MeshStandardMaterial;
    Tree_A_Top: THREE.MeshStandardMaterial;
    ["Tree_A_Trunk.001"]: THREE.MeshStandardMaterial;
    ["Tree_A_Top.001"]: THREE.MeshStandardMaterial;
    ["Tree_B.004"]: THREE.MeshStandardMaterial;
    ["Tree_B.005"]: THREE.MeshStandardMaterial;
  };
};

useGLTF.preload(FILE_URL);
