import { Text } from "@react-three/drei";
import { Arrow } from "spacesvr";
const Statement = () => {
  return (
    <group
      name="back-wall"
      rotation={[0, 0, 0]}
      position={[-0.4, 1.7, -9.2]}
      scale={[0.7, 0.7, 0.7]}
    >
      <group position={[-2.75, -1.75, 0]} scale={[2, 2, 2]}>
        <Text
          position={[-0.58, 1, 0]}
          scale={[4.5 * 1.6, 6 * 1.6, 4.5 * 1.6]}
          anchorY="middle"
          maxWidth={3}
          textAlign="left"
          color="black"
        >
          {"LUCID MONDAY"}
        </Text>
        <Text
          position={[-0.1, 0.5, 0]}
          scale={[2, 2, 2]}
          anchorY="top"
          maxWidth={3}
          textAlign="left"
          color="black"
        >
          {
            "You can put whatever tf you want here, like a quote from Julius,\
                        or how activity friday is the shit; really whatever you want. Free \
                        creative direction on copy/prose/scripture—u tell us, we'll write \
                        it. (hint: it's part of the contract ;)"
          }
        </Text>
        <group position={[0.4, -0.15, 0]}>
          <Text
            position={[-3, -1, 0]}
            scale={[1.5, 1.5, 1.5]}
            anchorY="middle"
            maxWidth={3}
            textAlign="left"
            color="black"
          >
            @lucidmonday
          </Text>
          <Text
            position={[0.28, -1, 0]}
            scale={[1.5, 1.5, 1.5]}
            anchorY="middle"
            maxWidth={3}
            textAlign="left"
            color="black"
          >
            ENTER HERE
          </Text>
          <Arrow position={[1, -1.01, 0]} rotation={[0, 0, Math.PI]} dark />
        </group>
      </group>
    </group>
  );
};
export default Statement;
