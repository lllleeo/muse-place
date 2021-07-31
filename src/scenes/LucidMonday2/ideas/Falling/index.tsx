import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { usePlayer } from "spacesvr";

type FallingProps = {
  low?: number;
  high?: number;
};

export default function Falling(props: FallingProps) {
  const { low = -80, high = 100 } = props;

  const { camera } = useThree();
  const player = usePlayer();

  useFrame(() => {
    if (camera.position.y < low) {
      player.controls.lock();
      player.position.set(new Vector3(3, high, 10));
      player.velocity.set(new Vector3(0, player.velocity.get().y * 0.5, 0));
      setTimeout(() => player.controls.unlock(), 2000);
    }
  });

  return null;
}
