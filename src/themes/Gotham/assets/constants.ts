import { Vector3 } from "three";
import { Keyframe } from "spacesvr";

export const linkPositions = [
  {
    p: new Vector3(-1.4, 1, 0.25),
    r: Math.PI / 2,
  },
  {
    p: new Vector3(-1.62, 1, 0.25),
    r: -Math.PI / 2,
  },
  {
    p: new Vector3(-1.4, 1, 4.25),
    r: Math.PI / 2,
  },
  {
    p: new Vector3(-1.62, 1, 4.25),
    r: -Math.PI / 2,
  },
  {
    p: new Vector3(-1.4, 1, 8.25),
    r: Math.PI / 2,
  },
  {
    p: new Vector3(-1.62, 1, 8.25),
    r: -Math.PI / 2,
  },
];

const DIST = 7;
const SCALE = 4; // taken from Space.tsx and Links.tsx
export const keyframes: Keyframe[] = [
  {
    position: linkPositions[2].p
      .clone()
      .add(new Vector3(-(DIST + 5), 0, 0))
      .multiplyScalar(1 / SCALE),
    label: "socials",
  },
  {
    position: linkPositions[0].p
      .clone()
      .add(new Vector3(-DIST, 0, 0))
      .multiplyScalar(1 / SCALE),
    label: "1",
  },
  {
    position: linkPositions[2].p
      .clone()
      .add(new Vector3(-DIST, 0, 0))
      .multiplyScalar(1 / SCALE),
    label: "3",
  },
  {
    position: linkPositions[4].p
      .clone()
      .add(new Vector3(-DIST, 0, 0))
      .multiplyScalar(1 / SCALE),
    label: "5",
  },
  {
    position: linkPositions[5].p
      .clone()
      .add(new Vector3(DIST, 0, 0))
      .multiplyScalar(1 / SCALE),
    label: "6",
  },
  {
    position: linkPositions[3].p
      .clone()
      .add(new Vector3(DIST, 0, 0))
      .multiplyScalar(1 / SCALE),
    label: "4",
  },
  {
    position: linkPositions[1].p
      .clone()
      .add(new Vector3(DIST, 0, 0))
      .multiplyScalar(1 / SCALE),
    label: "2",
  },
];
