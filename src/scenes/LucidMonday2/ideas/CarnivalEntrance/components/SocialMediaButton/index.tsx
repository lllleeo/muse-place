import { Interactable } from "spacesvr";
import { Suspense, useCallback } from "react";
import { GroupProps } from "@react-three/fiber";

import Instagram from "./models/Instagram";
import Twitter from "./models/Twitter";
import Web from "./models/Web";
import Spotify from "./models/Spotify";
import Youtube from "./models/Youtube";
import Typeform from "./models/Typeform";
import Soundcloud from "./models/Soundcloud";
import Email from "./models/Email";
import Nifty from "./models/Nifty";
import Discord from "./models/Discord";
import Linkedin from "./models/Linkedin";
import Opensea from "./models/Opensea";
import Tiktok from "./models/Tiktok";

type SocialProps = {
  link: string;
} & GroupProps;

export default function SocialMediaButton(props: SocialProps) {
  const { link, ...restProps } = props;

  let lowerLink = link.toLowerCase();
  if (!lowerLink.includes("://")) {
    lowerLink = "https://" + lowerLink;
  }
  const contains = (str: string) => lowerLink.includes(str);

  const Model = contains("instagram.com")
    ? Instagram
    : contains("twitter.com")
    ? Twitter
    : contains("mailto:")
    ? Email
    : contains("discord.com") || contains("discord.gg")
    ? Discord
    : contains("linkedin.com") || contains("linked.in")
    ? Linkedin
    : contains("spotify.com")
    ? Spotify
    : contains("youtube.com") || contains("youtu.be")
    ? Youtube
    : contains("typeform")
    ? Typeform
    : contains("soundcloud.com")
    ? Soundcloud
    : contains("opensea.io")
    ? Opensea
    : contains("tiktok.com")
    ? Tiktok
    : contains("niftygateway.com")
    ? Nifty
    : Web;

  const handleClick = useCallback(
    () => window.open(lowerLink, "_blank"),
    [lowerLink]
  );

  return (
    <group {...restProps} name={`socialbutton-${link}`}>
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
