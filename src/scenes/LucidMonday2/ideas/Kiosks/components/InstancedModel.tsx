import { useGLTF } from "@react-three/drei";
import { InstancedMesh, Mesh, Object3D, Vector3 } from "three";
import { useLayoutEffect, useMemo, useRef } from "react";
import { positions } from "../assets/constants";

const InstancedObject = (props: { mesh: Mesh; placements: Object3D[] }) => {
  const { mesh, placements } = props;
  const instances = useRef<InstancedMesh>();

  useLayoutEffect(() => {
    if (!instances.current) return;

    for (let i = 0; i < placements.length; i++) {
      const obj = placements[i];
      obj.updateMatrix();
      instances.current.setMatrixAt(i, obj.matrix);
    }
    instances.current.instanceMatrix.needsUpdate = true;
  }, [placements]);

  return (
    <group {...props}>
      <instancedMesh
        ref={instances}
        args={[mesh.geometry, mesh.material, placements.length]}
      />
    </group>
  );
};

type GenerateFunc = (t: number, r: number) => Vector3;

type InstancedModelProps = {
  model: string;
  count: number;
  variants: number;
  places: number[];
  generation: GenerateFunc;
  transform?: Object3D;
  index?: number;
};

const InstancedModel = (props: InstancedModelProps) => {
  const {
    model,
    count,
    generation,
    index = 0,
    places,
    transform = new Object3D(),
    variants,
  } = props;

  const gltf = useGLTF(model);

  const meshes: Mesh[] = useMemo(() => {
    const pic: Mesh[] = [];
    gltf.scene.traverse((child) => {
      if ((child as Mesh).material && (child as Mesh).geometry) {
        pic.push(child as Mesh);
      }
    });
    return pic;
  }, [gltf, model]);

  const placements: Object3D[] = useMemo(() => {
    const spots = [];
    for (let i = 0; i < count; i++) {
      const obj = transform.clone();
      obj.position.add(
        generation(
          (Math.PI / 180) *
            ((places[i] * 360) / variants +
              (i * 360) / variants / count +
              Math.random()),
          11
        )
      );
      obj.lookAt(obj.position.clone().multiplyScalar(2));
      spots.push(obj);
    }
    return spots;
  }, [generation, count]);

  const instances = meshes.map((mesh) => (
    <group key={mesh.uuid}>
      <InstancedObject mesh={mesh} placements={placements} />
    </group>
  ));

  const content = placements.map((placement, i) => (
    <mesh key={i} position={[placement.position.x, 0.5, placement.position.z]}>
      <boxBufferGeometry args={[0.5, 1, 0.5]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  ));

  return (
    <group {...props}>
      {instances}
      {content}
    </group>
  );
};

export default InstancedModel;
