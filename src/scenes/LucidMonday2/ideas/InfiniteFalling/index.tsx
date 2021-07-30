import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { usePlayer } from "spacesvr";

type InfiniteFallingProps = {
  low?: number;
  high?: number;
};

export default function InfiniteFalling(props: InfiniteFallingProps) {
  const { low = -80, high = 100 } = props;

  const { camera } = useThree();
  const player = usePlayer();

  useFrame(() => {
    if (camera.position.y < low) {
      player.controls.lock();
      player.position.set(
        new Vector3(camera.position.x, high, camera.position.z)
      );
      player.velocity.set(new Vector3(0, player.velocity.get().y * 0.85, 0));
      setTimeout(() => player.controls.unlock(), 2000);
    }
  });

  return null;
}
