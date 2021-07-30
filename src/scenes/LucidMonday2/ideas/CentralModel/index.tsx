import { Suspense } from "react";
import Monmon06 from "./models/Monmon_06";
import { Floating } from "spacesvr";
import Distort from "./modifiers/Distort";

export default function CentralModel() {
  return (
    <Suspense fallback={null}>
      <Floating height={15}>
        <Distort>
          <Monmon06 scale={0.5} position-y={10} />
        </Distort>
      </Floating>
    </Suspense>
  );
}
