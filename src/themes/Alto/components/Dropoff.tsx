import { useEnvironment } from "spacesvr";
import { useThree } from "react-three-fiber";
import { useFrame } from "react-three-fiber";
import { Vector3 } from "three";

const Dropoff = () => {
  const { camera } = useThree();
  const { player } = useEnvironment();

  useFrame(() => {
    if (camera.position.y < -20) {
      player.controls.lock();
      if (camera.position.y < -350) {
        player.velocity.set(new Vector3(0, 0, 0));
        player.position.set(new Vector3(0, 10, 32));
        setTimeout(() => player.controls.unlock(), 2000);
      }
    }
  });

  return null;
};

export default Dropoff;
