import { Vector3 } from "three";

const INNER_RADIUS = 9.5;
const RADIUS_WIDTH = 12.75;
const GLOBAL_SCALE = 0.6;
const FLOOR_HEIGHT = 5;

const INNER_STAIR_RADIUS = 9.5 + 6;
const OUTER_STAIR_RADIUS = 9.5 + 9;
const STAIR_THETA_RANGE_CCW = 0.23;
const STAIR_THETA_RANGE_CW = 0.45;

// position ---------------------------------------------------------------------------------------
export const coverFirstFloor = (x: number, y: number, z: number): Vector3 => {
  const [r, t] = stairProtectedRT(x, z);
  return new Vector3().setFromSphericalCoords(r, Math.PI / 2, t);
};

export const allFloorsButBottom = (
  x: number,
  y: number,
  z: number
): Vector3 => {
  const floor = intFromRange(4) + 1;
  const [r, t] = stairProtectedRT(attenuateTowardsInnerEdge(x), z, floor);
  const v = new Vector3()
    .setFromSphericalCoords(r, Math.PI / 2, t)
    .setY(floor * FLOOR_HEIGHT + 0.01);
  return v;
};

export const allFloorsButTopBottom = (
  x: number,
  y: number,
  z: number
): Vector3 => {
  const floor = intFromRange(3) + 1;
  const [r, t] = stairProtectedRT(attenuateTowardsInnerEdge(x), z, floor);
  const v = new Vector3()
    .setFromSphericalCoords(r, Math.PI / 2, t)
    .setY(floor * FLOOR_HEIGHT + 0.01);
  return v;
};

export const bottomFloorOnly = (x: number, y: number, z: number): Vector3 => {
  const [r, t] = stairProtectedRT(x, z);
  const v = new Vector3()
    .setFromSphericalCoords(
      x > 0.5 ? INNER_STAIR_RADIUS : OUTER_STAIR_RADIUS,
      Math.PI / 2,
      t
    )
    .setY(0.01);
  return v;
};

export const topFloorOnly = (x: number, y: number, z: number): Vector3 => {
  const [r, t] = stairProtectedRT(x, z);
  const v = new Vector3()
    .setFromSphericalCoords(r, Math.PI / 2, t)
    .setY(FLOOR_HEIGHT * 4 + 0.01);
  return v;
};

// scale ---------------------------------------------------------------------------------------
export const slightRandomScale = (x: number, y: number, z: number): Vector3 =>
  new Vector3(
    1 + range(x, 0.25),
    1 + range(y, 0.4),
    1 + range(z, 0.25)
  ).multiplyScalar(GLOBAL_SCALE);

export const smallerRoots = (x: number, y: number, z: number): Vector3 =>
  new Vector3(
    1 + range(x, 0.25),
    0.7 + range(y, 0.5),
    1 + range(z, 0.25)
  ).multiplyScalar(GLOBAL_SCALE);

export const slightlyRandomHeight = (
  x: number,
  y: number,
  z: number
): Vector3 =>
  new Vector3(
    1 + range(x, 0.1),
    1 + range(y, 0.6),
    1 + range(z, 0.1)
  ).multiplyScalar(GLOBAL_SCALE);

export const slightlyRandomButSmaller = (
  x: number,
  y: number,
  z: number
): Vector3 =>
  new Vector3(
    0.6 + range(x, 0.1),
    0.6 + range(y, 0.3),
    0.6 + range(z, 0.1)
  ).multiplyScalar(GLOBAL_SCALE);

export const bigFuckersWithSlightVariation = (
  x: number,
  y: number,
  z: number
): Vector3 =>
  new Vector3(
    1.5 + range(x, 0.1),
    1.5 + range(y, 0.6),
    1.5 + range(z, 0.1)
  ).multiplyScalar(GLOBAL_SCALE);

// rotation ---------------------------------------------------------------------------------------
export const randomYRot = (x: number, y: number, z: number): Vector3 =>
  new Vector3(0, y * Math.random() * 2, 0);

// helper  ---------------------------------------------------------------------------------------
const range = (n: number, r: number) => (n - 0.5) * 2 * r;

const intFromRange = (n: number) => Math.floor(Math.random() * n);

const stairProtectedRT = (
  x: number,
  z: number,
  floor = -1
): [number, number] => {
  let r = INNER_RADIUS + x * RADIUS_WIDTH;
  let theta = Math.PI * 2 * z;

  if (floor === 0) return [r, theta];

  while (
    r < OUTER_STAIR_RADIUS &&
    r > INNER_STAIR_RADIUS &&
    ((theta < Math.PI / 2 + STAIR_THETA_RANGE_CW &&
      theta > Math.PI / 2 - STAIR_THETA_RANGE_CCW) ||
      (theta < (Math.PI * 3) / 2 + STAIR_THETA_RANGE_CW &&
        theta > (Math.PI * 3) / 2 - STAIR_THETA_RANGE_CCW))
  ) {
    r = INNER_RADIUS + Math.random() * RADIUS_WIDTH;
    theta = Math.PI * 2 * Math.random();
  }

  return [r, theta];
};

const attenuateTowardsInnerEdge = (r: number) => 1 - Math.pow(r, 3);
