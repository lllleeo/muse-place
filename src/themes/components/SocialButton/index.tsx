import { Interactable } from "spacesvr";
import { Suspense, useEffect, useRef, useState } from "react";

import Instagram from "./models/Instagram";
import Twitter from "./models/Twitter";
import Web from "./models/Web";
import Spotify from "./models/Spotify";
import Youtube from "./models/Youtube";
import Typeform from "./models/Typeform";
import Soundcloud from "./models/Soundcloud";
import Email from "./models/Email";
import Nifty from "./models/Nifty";
import { GroupProps } from "@react-three/fiber";
import { Euler, Group, Vector3 } from "three";

type SocialProps = {
  link: string;
} & GroupProps;

export default function SocialButton(props: SocialProps) {
  const { link, ...restProps } = props;

  const lowerLink = link.toLowerCase();

  const Model = lowerLink.includes("instagram.com")
    ? Instagram
    : lowerLink.includes("twitter.com")
    ? Twitter
    : lowerLink.includes("mailto:")
    ? Email
    : lowerLink.includes("spotify.com")
    ? Spotify
    : lowerLink.includes("youtube.com")
    ? Youtube
    : lowerLink.includes("typeform")
    ? Typeform
    : lowerLink.includes("soundcloud.com")
    ? Soundcloud
    : lowerLink.includes("niftygateway.com")
    ? Nifty
    : Web;

  const handleClick = () => window.open(link, "_blank");

  const ref = useRef<Group>();
  const [ct, setCt] = useState(0);

  useEffect(() => {
    if (ct === 0) {
      setTimeout(() => setCt(1), 3000);
    } else if (ct === 1 && ref.current) {
      console.log(ref.current);
      const pos = new Vector3();
      ref.current?.getWorldPosition(pos);
      console.log(pos);
    }
  }, [ct]);

  return (
    <group {...restProps} ref={ref} name={`socialbutton-${link}`}>
      <Suspense fallback={null}>
        <Interactable onClick={handleClick}>
          <mesh position-z={-0.0175} visible={false}>
            <boxBufferGeometry args={[0.5, 0.5, 0.19]} />
          </mesh>
        </Interactable>
        <Model />
      </Suspense>
    </group>
  );
}
