import { Interactable } from "spacesvr";
import { Text } from "@react-three/drei";

type ContactProps = {
  email: string;
  subject: string;
  body: string;
} & JSX.IntrinsicElements["group"];

const Contact = (props: ContactProps) => {
  const { email, subject, body } = props;

  return (
    <group {...props}>
      <group
        name="add-to-cart"
        position-x={0.54 / 2 - 0.075 / 2 - 0.02}
        position-y={0.01}
        position-z={0.02}
      >
        <Interactable
          onClick={() =>
            window.open(
              `mailto:${email}?subject=${subject}&body=${body}`,
              "_blank"
            )
          }
        >
          <mesh>
            <boxBufferGeometry args={[0.125, 0.085, 0.015]} />
            <meshStandardMaterial color="black" />
          </mesh>
        </Interactable>
        {/* @ts-ignore */}
        <Text
          fontSize={0.025}
          color="white"
          textAlign="center"
          anchorY="middle"
          anchorX="center"
          position-z={0.021}
        >
          Contact
        </Text>
      </group>
    </group>
  );
};

export default Contact;
