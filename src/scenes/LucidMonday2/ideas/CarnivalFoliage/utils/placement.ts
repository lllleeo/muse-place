import { Vector3 } from "three";

const INNER_RADIUS = 9.5;
const RADIUS_WIDTH = 12.75;
const GLOBAL_SCALE = 0.6;
const FLOOR_HEIGHT = 5.03;

export const coverFirstFloor = (x: number, y: number, z: number): Vector3 =>
  new Vector3().setFromSphericalCoords(
    INNER_RADIUS + x * RADIUS_WIDTH,
    Math.PI / 2,
    Math.PI * 2 * z
  );

export const coverFloors = (x: number, y: number, z: number): Vector3 => {
  const v = new Vector3()
    .setFromSphericalCoords(
      INNER_RADIUS + x * RADIUS_WIDTH,
      Math.PI / 2,
      Math.PI * 2 * z
    )
    .setY(intFromRange(5) * FLOOR_HEIGHT + 0.01);

  return v;
};

export const slightRandomScale = (x: number, y: number, z: number): Vector3 =>
  new Vector3(
    1 + range(x, 0.25),
    1 + range(y, 0.6),
    1 + range(z, 0.25)
  ).multiplyScalar(GLOBAL_SCALE);

export const randomYRot = (x: number, y: number, z: number): Vector3 =>
  new Vector3(0, y * Math.random() * 2, 0);

const range = (n: number, r: number) => (n - 0.5) * 2 * r;

const intFromRange = (n: number) => Math.floor(Math.random() * n);
