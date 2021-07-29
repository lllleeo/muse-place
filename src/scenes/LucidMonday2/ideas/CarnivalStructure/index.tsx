import { Suspense } from "react";
import Lucidmonday13 from "./models/Lucidmonday_13";
import Lucidmonday1 from "./models/LucidMonday_TestOptimization_01";

export default function CarnivalStructure() {
  return (
    <Suspense fallback={null}>
      {/*<Lucidmonday13 scale={[0.5, 1, 0.5]} />*/}
      <Lucidmonday1 />
    </Suspense>
  );
}
