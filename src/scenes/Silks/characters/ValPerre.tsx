import { Suspense } from "react";
import ValModel from "../models/ValModel";

const ValPerre = () => {
  return (
    <Suspense fallback={null}>
      <ValModel position={[-4.86, 0, -4.65]} />
    </Suspense>
  );
};

export default ValPerre;
