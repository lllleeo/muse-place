import { shadeHexColor, blendHexColors } from "../assets/pSBC";

type SkyCubesProps = {
  baseColor?: string;
  baseColor2?: string;
} & JSX.IntrinsicElements["group"];

const positions = [
  {
    p: [1, 0, 1],
    r: [0, 0, 0],
    s: [1, 1, 1],
  },
  {
    p: [-2, 0, 5],
    r: [Math.PI, -Math.PI / 3, 0],
    s: [1, 1, 1],
  },
  {
    p: [3, 0, -2],
    r: [-Math.PI / 3, Math.PI, 0],
    s: [1, 1, 1],
  },
  {
    p: [-4, 0, -2],
    r: [-Math.PI, -Math.PI / 2, 0],
    s: [1, 1, 1],
  },
  {
    p: [6, 0, -3],
    r: [Math.PI / 2, Math.PI, 0],
    s: [1, 1, 1],
  },
  {
    p: [0, 0, 0],
    r: [Math.PI / 2, Math.PI, 0],
    s: [0.25, 0.25, 0.25],
    c: "green",
  },
  {
    p: [1, 0, 0],
    r: [Math.PI / 2, Math.PI, 0],
    s: [0.25, 0.25, 0.25],
    c: "red",
  },
  {
    p: [0, 0, 1],
    r: [Math.PI / 2, Math.PI, 0],
    s: [0.25, 0.25, 0.25],
    c: "blue",
  },
];

const SkyCubes = (props: SkyCubesProps) => {
  const { baseColor = "#FF0000", baseColor2 } = props;
  const cubes = [];
  let colors: string[];

  if (baseColor2) {
    colors = [
      blendHexColors(baseColor, baseColor2, 0.1),
      blendHexColors(baseColor, baseColor2, 0.2),
      blendHexColors(baseColor, baseColor2, 0.3),
      blendHexColors(baseColor, baseColor2, 0.4),
      blendHexColors(baseColor, baseColor2, 0.5),
      blendHexColors(baseColor, baseColor2, 0.6),
      blendHexColors(baseColor, baseColor2, 0.7),
      blendHexColors(baseColor, baseColor2, 0.8),
      blendHexColors(baseColor, baseColor2, 0.9),
      blendHexColors(baseColor, baseColor2, 1),
    ];
  } else {
    colors = [
      shadeHexColor(baseColor, 0.1),
      shadeHexColor(baseColor, 0.2),
      shadeHexColor(baseColor, 0.3),
      shadeHexColor(baseColor, 0.5),
      shadeHexColor(baseColor, 0.7),
      shadeHexColor(baseColor, -0.1),
      shadeHexColor(baseColor, -0.2),
      shadeHexColor(baseColor, -0.3),
      shadeHexColor(baseColor, -0.5),
      shadeHexColor(baseColor, -0.7),
    ];
  }

  for (let i = 0; i < positions.length; i++) {
    const cube = positions[i];
    const color = colors[Math.floor(Math.random() * 10)];
    console.log(color);
    cubes.push(
      // @ts-ignore
      <mesh position={cube.p} rotation={cube.r} scale={cube.s} key={i}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        {/*@ts-ignore*/}
        <meshStandardMaterial attach="material" color={cube.c || color} />
      </mesh>
    );
  }

  return <group {...props}>{cubes}</group>;
};

export default SkyCubes;
