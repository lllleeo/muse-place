import { Suspense } from "react";
import Lucidmonday from "./models/LucidMonday_TestOptimization_04";

export default function CarnivalStructure() {
  return (
    <Suspense fallback={null}>
      <Lucidmonday />
    </Suspense>
  );
}
