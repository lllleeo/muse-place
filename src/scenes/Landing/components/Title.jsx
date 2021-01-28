import React, { Suspense } from "react";
import { Box } from "react-three-flex";
import Text from "./Text";

const Title = (props) => {
  const { size, text, url, marginTop, marginBottom, paddingTop } = props;

  return (
    <Box
      centerAnchor
      marginBottom={marginBottom}
      marginTop={marginTop}
      paddingTop={paddingTop}
      flexBasis={"100%"}
    >
      <Suspense fallback>
        <Text size={size} url={url}>
          {text}
        </Text>
      </Suspense>
    </Box>
  );
};

export default Title;
