import Foliage from "./components/Foliage";
import { useAlienFoliage } from "./utils/alienFoliage";
import { coverFloors, randomYRot, slightRandomScale } from "./utils/placement";

export default function CarnivalFoliage() {
  const foliage = useAlienFoliage();

  return (
    <group name="foliage">
      <Foliage
        mesh={foliage.nodes.grass}
        count={10000 * 3}
        position={coverFloors}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.fern_b}
        count={300}
        position={coverFloors}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.fern_c_2}
        count={30}
        position={coverFloors}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.rock_c}
        count={60}
        position={coverFloors}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.rock_a}
        count={20}
        position={coverFloors}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.fungi_a}
        count={60}
        position={coverFloors}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.fungi_b}
        count={30}
        position={coverFloors}
        rotation={randomYRot}
      />
    </group>
  );
}
