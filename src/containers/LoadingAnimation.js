import React, { useRef } from "react";
// @ts-ignore
import lottie from "lottie-web";
import { Box } from "@mui/material";

function LoadingAnimation({ zIndex, paddingBottom }) {
  const animation = useRef(null);

  React.useEffect(() => {
    if (animation.current) {
      lottie.loadAnimation({
        container: animation.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("./Lotties/loading.json"),
      });
    }
  }, [animation]);

  return (
    <React.Fragment>
      <Box
        className="animation"
        ref={animation}
        style={{
          height: "120px",
        }}
      ></Box>
    </React.Fragment>
  );
}

export default LoadingAnimation;
