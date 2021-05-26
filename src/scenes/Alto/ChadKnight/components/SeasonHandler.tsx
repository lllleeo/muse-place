import { useFrame, useThree } from "@react-three/fiber";
import { useLimiter } from "spacesvr";

export default function SeasonHandler(props: {
  setCurrentSeason: React.Dispatch<
    React.SetStateAction<"Winter" | "Summer" | "Spring" | "Fall">
  >;
}) {
  const { setCurrentSeason } = props;

  const { camera } = useThree();
  const limiter = useLimiter(45);
  useFrame(({ clock }) => {
    if (!limiter.isReady(clock)) return;

    if (camera.position.x > 0 && camera.position.z > 0) {
      setCurrentSeason("Winter");
    }
    if (camera.position.x > 0 && camera.position.z < 0) {
      setCurrentSeason("Summer");
    }
    if (camera.position.x < 0 && camera.position.z > 0) {
      setCurrentSeason("Spring");
    }
    if (camera.position.x < 0 && camera.position.z < 0) {
      setCurrentSeason("Fall");
    }
  });

  return <></>;
}
