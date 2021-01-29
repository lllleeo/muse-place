import React, { useRef, Suspense } from "react";
import { Image } from "spacesvr";

const Website = (props) => {
  const mesh = useRef();

  return (
    <Suspense fallback>
      <mesh onClick={(e) => window.open(props.url, "_blank")}>
        <Image
          src={
            "https://spaces-gallery-assets.s3-us-west-1.amazonaws.com/images/" +
            props.image
          }
          framed={true}
          size={[5, 5]}
        />
      </mesh>
    </Suspense>
  );
};

export default Website;
