import { Vector3 } from "three";
import { Keyframe } from "spacesvr";

export const linkPositions = [
  {
    p: new Vector3(-5.5, 4, 1),
    r: Math.PI / 2,
  },
  {
    p: new Vector3(-6.5, 4, 1),
    r: -Math.PI / 2,
  },
  {
    p: new Vector3(-5.5, 4, 17),
    r: Math.PI / 2,
  },
  {
    p: new Vector3(-6.5, 4, 17),
    r: -Math.PI / 2,
  },
  {
    p: new Vector3(-5.5, 4, 33),
    r: Math.PI / 2,
  },
  {
    p: new Vector3(-6.5, 4, 33),
    r: -Math.PI / 2,
  },
];

const DIST = 5;
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
