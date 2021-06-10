import { useMemo } from "react";
import { Vector3 } from "three";
import { RADIUS, TABLE_HEIGHT } from "../assets/constants";

const CYLINDER_HEIGHT = 0.05;
const CYLINDER_RADIUS = 0.1;

type WorldPedestalsProps = {
  angle: number;
  num: number;
};

export default function WorldPedestals(props: WorldPedestalsProps) {
  const { angle, num } = props;

  const pedestals: Vector3[] = useMemo(() => {
    let arr: Vector3[] = [];
    for (let i = 0; i < num; i++) {
      const pos = new Vector3().setFromSphericalCoords(
        RADIUS,
        Math.PI / 2,
        -Math.PI / 2 + i * angle
      );
      pos.y = TABLE_HEIGHT - 0.275 + CYLINDER_HEIGHT / 2;
      arr.push(pos);
    }
    return arr;
  }, []);

  return (
    <group name="world-pedestals">
      {pedestals.map((pedestal) => (
        <group position={pedestal}>
          <mesh>
            <cylinderBufferGeometry
              args={[CYLINDER_RADIUS, CYLINDER_RADIUS, CYLINDER_HEIGHT, 28]}
            />
            <meshStandardMaterial color="white" />
          </mesh>
          <mesh position-y={CYLINDER_HEIGHT * 2.5}>
            <cylinderBufferGeometry
              args={[
                CYLINDER_RADIUS * 2,
                CYLINDER_RADIUS,
                CYLINDER_HEIGHT * 4,
                18,
              ]}
            />
            <meshStandardMaterial color="blue" transparent opacity={0.25} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
