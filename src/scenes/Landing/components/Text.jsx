import React, { forwardRef } from "react";
import { Text as FlatText } from "@react-three/drei";
import { useThree } from "react-three-fiber";

const Text = forwardRef(
  (
    {
      children,
      vAlign = "center",
      hAlign = "center",
      size = 1,
      color = "#eb4034",
      ...props
    },
    ref
  ) => {
    const { viewport } = useThree();

    console.log(viewport.width);

    return (
      <group
        ref={ref}
        {...props}
        scale={[0.1 * size, 0.1 * size, 0.1]}
        onClick={(e) =>
          props.url && props.url.length > 1
            ? window.open(props.url, "_blank")
            : null
        }
      >
        <FlatText
          fontSize={30}
          maxWidth={viewport.width * 30}
          textAlign="center"
          font="https://d27rt3a60hh1lx.cloudfront.net/fonts/Quicksand_Bold.otf"
        >
          {children}
        </FlatText>
      </group>
    );
  }
);

export default Text;
