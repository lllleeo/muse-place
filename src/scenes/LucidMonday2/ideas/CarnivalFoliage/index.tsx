import Foliage from "./components/Foliage";
import { useAlienFoliage } from "./utils/alienFoliage";
import {
  coverFirstFloor,
  randomYRot,
  slightRandomScale,
} from "./utils/placement";

export default function CarnivalFoliage() {
  const foliage = useAlienFoliage();

  return (
    <group name="foliage">
      <Foliage
        mesh={foliage.nodes.grass}
        count={5000}
        position={coverFirstFloor}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.fern_b}
        count={100}
        position={coverFirstFloor}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
    </group>
  );
}
