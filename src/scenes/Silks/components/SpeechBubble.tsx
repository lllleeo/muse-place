import { Text } from "@react-three/drei";
import { GroupProps, useFrame } from "react-three-fiber";
import { ReactNode, useRef, useState } from "react";

type Props = {
  children: ReactNode;
} & GroupProps;

const MAX_WIDTH = 1;

const FONT_SIZE = 0.08;
const PADDING_X = 0.1;
const PADDING_Y = 0.04;
const CHAR_SPEED = 0.05;

const SpeechBubble = (props: Props) => {
  const { children, ...restProps } = props;

  const charWidth = 0.71;
  const width =
    (children as string).length * FONT_SIZE * charWidth + PADDING_X * 2;
  const height = FONT_SIZE * 1.75 + PADDING_Y * 2;

  const [str, setStr] = useState("");
  const startTime = useRef<number>();

  useFrame(({ clock }) => {
    if (!startTime.current) {
      startTime.current = clock.getElapsedTime();
    } else if (str !== (children as string)) {
      const elapsed = clock.getElapsedTime() - startTime.current;
      const count = Math.floor(elapsed / CHAR_SPEED);
      const newString = (children as string).substr(0, count);
      if (newString !== str) {
        setStr(newString);
      }
    }
  });

  return (
    <group {...restProps}>
      <group>
        {/* @ts-ignore */}
        <Text
          color="white"
          maxWidth={MAX_WIDTH}
          fontSize={FONT_SIZE}
          anchorX="left"
          outlineColor="black"
          outlineWidth={FONT_SIZE * 0.1}
        >
          {str}
        </Text>
      </group>
    </group>
  );
};

export default SpeechBubble;
