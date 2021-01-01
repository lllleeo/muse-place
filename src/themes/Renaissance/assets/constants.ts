import { Vector3 } from "three";
import { Keyframe } from "spacesvr";

export const linkPositions = [
  {
    p: new Vector3(25, 4, 5),
    r: (-2 * Math.PI) / 3.5,
  },
  {
    p: new Vector3(-25, 4, 5),
    r: (2 * Math.PI) / 3.5,
  },
  {
    p: new Vector3(14, 4, -20),
    r: -Math.PI / 5,
  },
  {
    p: new Vector3(-15, 4, -23),
    r: Math.PI / 5,
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

export const cubePositions = [
  {
    p: [-0.5, 2, 0.5],
    r: [
      ((2 * Math.PI) / Math.random()) * 12,
      ((2 * Math.PI) / Math.random()) * 12,
      0,
    ],
    s: [2, 2, 2],
  },
  {
    p: [1.5, 2.5, -2.5],
    r: [
      ((2 * Math.PI) / Math.random()) * 12,
      ((2 * Math.PI) / Math.random()) * 12,
      0,
    ],
    s: [2, 2, 2],
  },
  {
    p: [3, 0, 1],
    r: [
      ((2 * Math.PI) / Math.random()) * 12,
      ((2 * Math.PI) / Math.random()) * 12,
      0,
    ],
    s: [0.75, 0.75, 0.75],
  },
  {
    p: [-4, 0, 0.5],
    r: [
      ((2 * Math.PI) / Math.random()) * 12,
      ((2 * Math.PI) / Math.random()) * 12,
      0,
    ],
    s: [1, 1, 1],
  },
  {
    p: [3, 0, -2],
    r: [
      ((2 * Math.PI) / Math.random()) * 12,
      ((2 * Math.PI) / Math.random()) * 12,
      0,
    ],
    s: [1, 1, 1],
  },
  {
    p: [-4, 0, -2],
    r: [
      ((2 * Math.PI) / Math.random()) * 12,
      ((2 * Math.PI) / Math.random()) * 12,
      0,
    ],
    s: [1, 1, 1],
  },
  {
    p: [-1, 0, -5],
    r: [
      ((2 * Math.PI) / Math.random()) * 12,
      ((2 * Math.PI) / Math.random()) * 12,
      0,
    ],
    s: [1, 1, 1],
  },
  {
    p: [-1.5, 0, -2.5],
    r: [
      ((2 * Math.PI) / Math.random()) * 12,
      ((2 * Math.PI) / Math.random()) * 12,
      0,
    ],
    s: [1, 1, 1],
  },
  {
    p: [2, 0, 3],
    r: [
      ((2 * Math.PI) / Math.random()) * 12,
      ((2 * Math.PI) / Math.random()) * 12,
      0,
    ],
    s: [1, 1, 1],
  },
  {
    p: [-2, 0, 3],
    r: [
      ((2 * Math.PI) / Math.random()) * 12,
      ((2 * Math.PI) / Math.random()) * 12,
      0,
    ],
    s: [1, 1, 1],
  },
  {
    p: [0, 0, 5],
    r: [
      ((2 * Math.PI) / Math.random()) * 12,
      ((2 * Math.PI) / Math.random()) * 12,
      0,
    ],
    s: [1, 1, 1],
  },
  // {
  //   p: [0, 0, 0],
  //   r: [0, 0, 0],
  //   s: [0.25, 0.25, 0.25],
  //   c: "green",
  // },
  // {
  //   p: [1, 0, 0],
  //   r: [0, 0, 0],
  //   s: [0.25, 0.25, 0.25],
  //   c: "red",
  // },
  // {
  //   p: [-1, 0, 0],
  //   r: [0, 0, 0],
  //   s: [0.25, 0.25, 0.25],
  //   c: "brown",
  // },
  // {
  //   p: [0, 0, 1],
  //   r: [0, 0, 0],
  //   s: [0.25, 0.25, 0.25],
  //   c: "blue",
  // },
  // {
  //   p: [0, 0, -1],
  //   r: [0, 0, 0],
  //   s: [0.25, 0.25, 0.25],
  //   c: "purple",
  // },
];
