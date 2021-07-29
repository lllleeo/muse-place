import { Suspense } from "react";
import Monmon06 from "./models/Monmon_06";

export default function CentralModel() {
  return (
    <Suspense fallback={null}>
      <Monmon06 />
    </Suspense>
  );
}
