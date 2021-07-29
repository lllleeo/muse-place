import { Suspense } from "react";
import Lucidmonday13 from "./models/Lucidmonday_13";

export default function CarnivalStructure() {
  return (
    <Suspense fallback={null}>
      <Lucidmonday13 />
    </Suspense>
  );
}
