import InstancedObject from "./components/InstancedObject";
import { Mesh, Object3D, Vector3 } from "three";
import { useMemo } from "react";

type ImplicitFunc = (x: number, y: number, z: number) => Vector3;

type FoliageProps = {
  mesh: Mesh;
  count: number;
  position?: ImplicitFunc;
  rotation?: ImplicitFunc;
  scale?: ImplicitFunc;
};

export default function Foliage(props: FoliageProps) {
  const { mesh, count, position, rotation, scale } = props;

  const transform: Object3D[] = useMemo(() => {
    const transes = [];
    for (let i = 0; i < count; i++) {
      const obj = new Object3D();

      if (position) {
        obj.position.copy(
          position(Math.random(), Math.random(), Math.random())
        );
      }
      if (rotation) {
        obj.rotation.setFromVector3(
          rotation(Math.random(), Math.random(), Math.random())
        );
      }
      if (scale) {
        obj.scale.copy(scale(Math.random(), Math.random(), Math.random()));
      }

      transes.push(obj);
    }
    return transes;
  }, [position, rotation, scale, count]);

  return (
    <group name={`foliage-${mesh.name}`}>
      <InstancedObject key={mesh.uuid} mesh={mesh} transforms={transform} />
    </group>
  );
}
