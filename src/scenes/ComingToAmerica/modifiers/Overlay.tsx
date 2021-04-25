import { useEnvironment } from "spacesvr";
import { Html } from "@react-three/drei";
// @ts-ignore
import { createPortal } from "react-dom";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Overlay = (props: Props) => {
  const { children } = props;
  const { containerRef } = useEnvironment();

  if (!containerRef.current) {
    return null;
  }

  return <Html>{createPortal(children, containerRef!.current)}</Html>;
};

export default Overlay;
