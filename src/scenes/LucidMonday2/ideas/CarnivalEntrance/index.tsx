import RightWall from "./components/RightWall";
import Credits from "./components/Credits";
import Statement from "./components/Statement";
import ButtonTest from "./components/ButtonTest";
import LucidEntrace from "./models/Lucidmonday_entry_04";
import { Suspense } from "react";

export default function ChadEntrance() {
  return (
    <group position={[3, 70, 10]}>
      <Suspense fallback={null}>
        <LucidEntrace />
      </Suspense>
      {/*<Statement />*/}
      {/*<Credits />*/}
      <RightWall />
      <ButtonTest />
    </group>
  );
}
