import SocialButton from "./SocialButton";

type SocialLinksProps = {
  socials: string[];
} & JSX.IntrinsicElements["group"];

const SocialLinks = (props: SocialLinksProps) => {
  const { socials } = props;

  return (
    <group {...props}>
      <group scale={[0.225, 0.225, 0.225]}>
        {socials.map((social, i) => {
          const x = (-(socials.length - 1) / 2 + i) * 0.75;
          return (
            <SocialButton key={social} link={social} position={[x, 0, 0.075]} />
          );
        })}
      </group>
    </group>
  );
};

export default SocialLinks;
