import { shadeHexColor, blendHexColors } from "../assets/pSBC";
import { cubePositions } from "../assets/constants";

type SkyCubesProps = {
  baseColor?: string;
  baseColor2?: string;
} & JSX.IntrinsicElements["group"];

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

  for (let i = 0; i < cubePositions.length; i++) {
    const cube = cubePositions[i];
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
