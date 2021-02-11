import { GroupProps, useFrame } from "react-three-fiber";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Floating } from "spacesvr";
import Control from "./components/Control";
import { useBox } from "@react-three/cannon";
import { Group, Vector3 } from "three";
import Images from "./components/Images";
import Description from "./components/Description";

type Props = {
  children: ReactNode;
} & GroupProps;

const DEPTH = 0.5;
const WIDTH = 0.6;

const Kiosk = (props: Props) => {
  const { children } = props;

  const group = useRef<Group>();
  const [open, setOpen] = useState(false);
  const { current: pos } = useRef(new Vector3(100, 100, 100));

  const [, box] = useBox(() => ({
    position: pos.toArray(),
    args: [WIDTH, 0.05, DEPTH],
    type: "Static",
    mass: 0,
  }));

  useFrame(({ camera }) => {
    if (group.current && camera.position.distanceTo(pos) < 1) {
      setOpen(true);
    } else if (open) {
      setOpen(false);
    }
  });

  useEffect(() => {
    if (group.current) {
      group.current.getWorldPosition(pos);
      box.position.copy(pos);
    }
  }, []);

  return (
    <group name="kiosk" {...props} ref={group}>
      <mesh>
        <boxBufferGeometry args={[WIDTH, 0.05, DEPTH]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <group position-y={0.4}>
        <Floating height={0.05} speed={2}>
          {children}
        </Floating>
      </group>
      <Control width={WIDTH} position-z={DEPTH / 2} />
      <Images open={open} position={[-WIDTH / 2 - 0.15, 0.25, DEPTH / 4]} />
      <Description open={open} position={[WIDTH / 2 + 0.15, 0.25, DEPTH / 4]} />
    </group>
  );
};

export default Kiosk;
