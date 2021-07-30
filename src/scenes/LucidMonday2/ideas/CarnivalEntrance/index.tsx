import RightWall from "./components/RightWall";
import LucidEntrace from "./models/Lucidmonday_entry_04";
import { Suspense } from "react";

export default function ChadEntrance() {
  return (
    <group position={[3, 70, 10]}>
      <Suspense fallback={null}>
        <LucidEntrace />
      </Suspense>
      <RightWall />
    </group>
  );
}
