import Social from "./Social";

type SocialLinksProps = {
  socials: string[];
} & JSX.IntrinsicElements["group"];

const SocialLinks = (props: SocialLinksProps) => {
  const { socials } = props;

  return (
    <group {...props}>
      <group position={[0, -0.17, 0.075]} scale={[0.225, 0.225, 0.225]}>
        {socials.map((social, i) => {
          const x = (-(socials.length - 1) / 2 + i) * 0.75;
          if (social.includes("instagram")) {
            return (
              <Social
                key={social}
                type="instagram"
                link={social}
                position={[x, 0, 0.075]}
              />
            );
          } else if (social.includes("twitter")) {
            return (
              <Social
                key={social}
                type="twitter"
                link={social}
                position={[x, 0, 0]}
              />
            );
          } else if (social.includes("spotify")) {
            return (
              <Social
                key={social}
                type="spotify"
                link={social}
                position={[x, 0, 0]}
              />
            );
          } else if (social.includes("youtube")) {
            return (
              <Social
                key={social}
                type="youtube"
                link={social}
                position={[x, 0, 0]}
              />
            );
          } else {
            return (
              <Social
                key={social}
                type="web"
                link={social}
                position={[x, 0, 0]}
              />
            );
          }
        })}
      </group>
    </group>
  );
};

export default SocialLinks;
