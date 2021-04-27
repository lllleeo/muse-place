import SocialButton from "./SocialButton";
import { GroupProps } from "@react-three/fiber";

type SocialLinksProps = {
  socials: string[];
} & GroupProps;

const SocialLinks = (props: SocialLinksProps) => {
  const { socials } = props;

  return (
    <group {...props}>
      {socials.map((social, i) => {
        const x = (-(socials.length - 1) / 2 + i) * 0.75;
        return (
          <SocialButton key={social} link={social} position={[x, 0, 0.075]} />
        );
      })}
    </group>
  );
};

export default SocialLinks;
