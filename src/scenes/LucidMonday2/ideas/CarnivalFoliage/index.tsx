import Foliage from "./components/Foliage";
import { useAlienFoliage } from "./utils/alienFoliage";
import {
  allFloors,
  allFloorsButTop,
  bigFuckersWithSlightVariation,
  randomYRot,
  slightlyRandomButSmaller,
  slightlyRandomHeight,
  slightRandomScale,
  smallerRoots,
  topFloorOnly,
} from "./utils/placement";

export default function CarnivalFoliage() {
  const foliage = useAlienFoliage();

  return (
    <group name="foliage">
      <Foliage
        mesh={foliage.nodes.grass}
        count={33000}
        position={allFloors}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.fern_a}
        count={20}
        position={allFloors}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.fern_b}
        count={300}
        position={allFloors}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={[foliage.nodes.fern_c_1, foliage.nodes.fern_c_2]}
        count={30}
        position={allFloors}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.rock_c}
        count={60}
        position={allFloors}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.rock_a}
        count={20}
        position={allFloors}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.fungi_a}
        count={60}
        position={allFloors}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.fungi_b}
        count={30}
        position={allFloors}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.fungi_c}
        count={30}
        position={allFloors}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.fungi_d}
        count={30}
        position={allFloors}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.root_a}
        count={8}
        position={allFloors}
        rotation={randomYRot}
        scale={smallerRoots}
      />
      <Foliage
        mesh={foliage.nodes.root_b}
        count={8}
        position={allFloors}
        rotation={randomYRot}
        scale={smallerRoots}
      />
      <Foliage
        mesh={foliage.nodes.tree_a}
        count={40}
        position={allFloorsButTop}
        rotation={randomYRot}
        scale={slightlyRandomButSmaller}
      />
      <Foliage
        mesh={foliage.nodes.tree_b}
        count={25}
        position={topFloorOnly}
        rotation={randomYRot}
        scale={bigFuckersWithSlightVariation}
      />
    </group>
  );
}
