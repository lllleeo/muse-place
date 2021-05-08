import { Box, RoundedBox, Text } from "@react-three/drei";
import { animated, useSpring, config } from "react-spring/three";
import { useState } from "react";
import { Interactable } from "spacesvr";
import { GroupProps } from "@react-three/fiber";

const FONT_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/fonts/AcuminProMedium.otf";

type ButtonProps = {
  children: string;
  textStyles?: Partial<React.ComponentProps<typeof Text>>;
  rounded?: boolean;
  size?: number;
  onClick?: () => void;
} & GroupProps;

export default function Button(props: ButtonProps) {
  const { children, textStyles, rounded, onClick, size = 1, ...rest } = props;

  const HEIGHT = 1.25;
  const WIDTH = 1.25;
  const DEPTH = 0.1;
  const TEXT_STYLES: Partial<React.ComponentProps<typeof Text>> = {
    color: "black",
    font: FONT_URL,
    fontSize: 1,
    anchorY: "middle",
    ...textStyles,
  };

  const [hovered, setHovered] = useState(false);

  const { color, scale } = useSpring({
    color: hovered ? "#aaa" : "#fff",
    scale: hovered ? 0.5 : 1,
    ...config.stiff,
  });

  return (
    <group name={`button-${children}`} {...rest}>
      <group name="button-wrapper" scale={size}>
        <Text {...TEXT_STYLES} position-z={DEPTH / 2 + 0.001}>
          {children}
        </Text>
        <Interactable
          onClick={onClick}
          onHover={() => setHovered(true)}
          onUnHover={() => setHovered(false)}
        >
          {rounded ? (
            <RoundedBox
              args={[WIDTH, HEIGHT, DEPTH]}
              radius={0.25}
              smoothness={4}
            >
              <animated.meshStandardMaterial color={color} />
            </RoundedBox>
          ) : (
            <Box args={[WIDTH, HEIGHT, DEPTH]}>
              <animated.meshStandardMaterial color={color} />
            </Box>
          )}
        </Interactable>
      </group>
    </group>
  );
}
