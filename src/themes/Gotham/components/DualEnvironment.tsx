import { Keyframe, KeyframeEnvironment, StandardEnvironment } from "spacesvr";
import { CanvasProps } from "react-three-fiber";
import { isMobile } from "react-device-detect";

const DualEnvironment = (props: {
  children: React.ReactNode;
  keyframes: Keyframe[];
  canvasProps: Partial<CanvasProps>;
}) => {
  const { keyframes, children, canvasProps } = props;

  if (isMobile) {
    return (
      <KeyframeEnvironment keyframes={keyframes} canvasProps={canvasProps}>
        {children}
      </KeyframeEnvironment>
    );
  } else {
    return (
      <StandardEnvironment canvasProps={canvasProps}>
        {children}
      </StandardEnvironment>
    );
  }
};

export default DualEnvironment;
