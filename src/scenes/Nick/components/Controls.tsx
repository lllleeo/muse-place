import { Dispatch, SetStateAction, useRef } from "react";
import { Interactable } from "spacesvr";
import { PolyProps } from "../index";
import { useFrame } from "react-three-fiber";
import Info from "./Info";

type ControlProps = {
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
} & PolyProps &
  JSX.IntrinsicElements["group"];

const Controls = (props: ControlProps) => {
  const { current, setCurrent, models } = props;
  const group = useRef();

  useFrame(({ camera }) => {
    if (group.current) {
      // @ts-ignore
      group.current.lookAt(camera.position);
    }
  });

  function handleUp() {
    console.log("up");
    setCurrent(current + 1);
  }
  function handleDown() {
    console.log("down");
    if (current < 1) {
      setCurrent(models.length - 1);
    } else {
      setCurrent(current - 1);
    }
  }

  return (
    <group ref={group}>
      <Info position={[0, -0.5, 0.25]}>
        <Interactable onClick={handleUp}>
          <mesh position={[0.4, 1, 5]}>
            <coneBufferGeometry attach="geometry" args={[0.1, 0.25, 0.1]} />
            <meshBasicMaterial attach="material" color="red" />
          </mesh>
        </Interactable>
        <Interactable onClick={handleDown}>
          <mesh position={[0.4, 0.5, 5]} rotation-x={Math.PI / 2}>
            <coneBufferGeometry attach="geometry" args={[0.1, 0.25, 0.1]} />
            <meshBasicMaterial attach="material" color="blue" />
          </mesh>
        </Interactable>
      </Info>
    </group>
  );
};

export default Controls;
