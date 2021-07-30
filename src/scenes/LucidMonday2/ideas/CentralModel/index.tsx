import { Suspense } from "react";
import Monmon06 from "./models/Monmon_06";
import { Floating } from "spacesvr";

export default function CentralModel() {
  return (
    <Suspense fallback={null}>
      <Floating height={15}>
        <Monmon06 scale={0.5} position-y={10} />
      </Floating>
    </Suspense>
  );
}
