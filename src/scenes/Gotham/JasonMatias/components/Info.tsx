import Contact from "./Contact";
import { Text } from "@react-three/drei";
import { Floating } from "spacesvr";
import { ReactNode } from "react";

type InfoProps = {
  title: string;
  email: string;
  subject?: string;
  body?: string;
  content?: string;
  fontSize?: number;
  children?: string | ReactNode | ReactNode[];
  width?: number;
  extend?: boolean;
  textY?: number;
  textX?: number;
  boxWidth?: number;
  boxHeight?: number;
  contactPos?: [number, number, number];
} & JSX.IntrinsicElements["group"];

export default function Info(props: InfoProps) {
  const {
    title,
    email,
    subject = "",
    body = "",
    width = 1,
    boxWidth = 0,
    boxHeight = 0,
    extend,
    fontSize = 1,
    content,
    contactPos,
    textY = 0,
    textX = 0,
    children,
    ...restProps
  } = props;

  const PADDING_X = 0.03;
  const PADDING_Y = 0.07;
  const HEIGHT =
    Math.max(0.5, ((children as string) || "").length * 0.000825) +
    PADDING_Y * 2;
  const WIDTH = 0.65 * width;

  const top = HEIGHT / 2 - PADDING_Y;
  const left = -WIDTH / 2 + PADDING_X;
  const maxWidth = WIDTH - PADDING_X * 2;

  const allStyles = {
    color: "black",
    textAlign: "justify",
    anchorX: "left",
    anchorY: "top",
  };

  const titleStyles = {
    ...allStyles,
    fontSize: 0.07 * fontSize,
    maxWidth,
    position: [left, top + 0.01, 0],
  };

  const bodyStyles = {
    ...allStyles,
    fontSize: 0.03 * fontSize,
    lineHeight: 1.3,
    maxWidth,
    position: [left, top - 0.035, 0],
  };

  return (
    <group name={title} {...restProps}>
      <Floating height={0.01} speed={3}>
        <mesh>
          <boxBufferGeometry
            args={[0.85 + boxWidth / 100, 0.25 + boxHeight / 100, 0.02]}
          />
          <meshStandardMaterial color="white" />
        </mesh>
        <group
          name="content"
          position={[-0.1 + textX / 10, -0.2 + textY / 10, 0.011]}
        >
          {/* @ts-ignore */}
          <Text {...titleStyles}>{title}</Text>
          {/* @ts-ignore */}
          <Text {...bodyStyles}>{children}</Text>
        </group>
        <Contact
          email={email}
          subject={subject}
          body={body}
          position={
            contactPos
              ? [contactPos[0] / 100, contactPos[1] / 100, contactPos[2] / 100]
              : [0.1, 0, 0]
          }
        />
      </Floating>
    </group>
  );
}
