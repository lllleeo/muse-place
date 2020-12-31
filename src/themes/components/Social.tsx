import { Interactable } from "spacesvr";
import { Suspense } from "react";
import { Vector3 } from "three";

import Instagram from "../Gotham/models/Instagram";
import Twitter from "../Gotham/models/Twitter";
import Web from "../Gotham/models/Web";
import Spotify from "../Gotham/models/Spotify";
import Youtube from "../Gotham/models/Youtube";

type SocialProps = {
  type: string;
  link: string;
  position?: [number, number, number];
};

const Social = (props: SocialProps) => {
  const { link, type, position = new Vector3(0, 0, 0) } = props;

  const model =
    type === "instagram" ? (
      <Instagram />
    ) : type === "twitter" ? (
      <Twitter />
    ) : type === "spotify" ? (
      <Spotify />
    ) : type === "youtube" ? (
      <Youtube />
    ) : (
      <Web />
    );

  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <group position={position}>
      <Suspense fallback={null}>
        <Interactable onClick={handleClick}>{model}</Interactable>
      </Suspense>
    </group>
  );
};

export default Social;
