import { Image } from "spacesvr";
import { Text } from "@react-three/drei";

const CONTENT_FOLDER =
  "https://spaces-gallery-assets.s3.us-west-1.amazonaws.com/content/muse.place/artbox";

export default function Artwork() {
  return (
    <group>
      <Image
        name="lisergia"
        src={`${CONTENT_FOLDER}/LISERGIA.png`}
        position={[0.92, 4.13, -0.62]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="gundam"
        src={`${CONTENT_FOLDER}/GUNDAM.png`}
        position={[-2.07, 5.97, -2.95]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="fratura"
        src={`${CONTENT_FOLDER}/FRATURA+TEMPORAL.png`}
        position={[1.62, 6.92, 0.91]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="spider"
        src={`${CONTENT_FOLDER}/SPIDER.png`}
        position={[-1.1, 9.81, 1.06]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="blackhole"
        src={`${CONTENT_FOLDER}/BLACK+HOLE.png`}
        position={[-3.79, 9.3, -3.83]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="digital"
        src={`${CONTENT_FOLDER}/DIGITAL+DREAMS.jpg`}
        position={[-2.93, 12.59, -0.76]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="notacrossroad"
        src={`${CONTENT_FOLDER}/NOT+A+CROSSROAD.png`}
        position={[1.42, 11, 4.29]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="lostfreq2"
        src={`${CONTENT_FOLDER}/LOST+FREQUENCIES2.png`}
        position={[-0.37, 14.29, 5.77]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="conhece3"
        src={`${CONTENT_FOLDER}/CONHECE3+(1).png`}
        position={[4.26, 12.59, 0.22]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="reallove"
        src={`${CONTENT_FOLDER}/real+love.png`}
        position={[-1.24, 15.3, -1.25]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="frequencies"
        src={`${CONTENT_FOLDER}/LOST+FREQUENCIES.png`}
        position={[0.51, 18.13, -2.96]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="image"
        src={`${CONTENT_FOLDER}/image.jpg`}
        position={[-0.27, 4.13, -1.82]}
        size={1.75}
        rotation-y={Math.PI}
        framed
      />
      <Image
        name="nowibecomemyself"
        src={`${CONTENT_FOLDER}/Now-I-become-myself.jpg`}
        position={[0.3, 6.92, -0.33]}
        size={1.75}
        rotation-y={Math.PI}
        framed
      />
      <Image
        name="thefeelsweshared"
        src={`${CONTENT_FOLDER}/The-feelings-we-once-shared.jpg`}
        position={[0.13, 11.04, 3.08]}
        size={1.75}
        rotation-y={Math.PI}
        framed
      />
      <Image
        name="justbtwnus"
        src={`${CONTENT_FOLDER}/just-between-the-two-of-us.jpg`}
        position={[-5.01, 9.3, -5.02]}
        size={1.75}
        rotation-y={Math.PI}
        framed
      />
      <Image
        name="iseeatoms"
        src={`${CONTENT_FOLDER}/i-see-the-atoms-split-in-2.jpg`}
        position={[-4.12, 12.59, -2.04]}
        size={1.75}
        rotation-y={Math.PI}
        framed
      />
      <Image
        name="hidemyface"
        src={`${CONTENT_FOLDER}/hide-my-face.jpg`}
        position={[3.01, 12.59, -0.98]}
        size={1.75}
        rotation-y={Math.PI}
        framed
      />
      <Image
        name="scream"
        src={`${CONTENT_FOLDER}/scream2.jpg`}
        position={[-2.51, 15.3, -2.46]}
        size={1.75}
        rotation-y={Math.PI}
        framed
      />
      <Image
        name="rainbowafterstorm"
        src={`${CONTENT_FOLDER}/the+rainbow+after+the+storm.jpg`}
        position={[-0.69, 18.13, -4.12]}
        size={1.75}
        rotation-y={Math.PI}
        framed
      />
      <Image
        name="hidemyface"
        src={`${CONTENT_FOLDER}/hide-my-face.jpg`}
        position={[-3.01, 0.88, -0.15]}
        size={1}
        rotation-y={-Math.PI / 2}
        framed
      />
      <Image
        name="sheddingshadows"
        src={`${CONTENT_FOLDER}/My-shadow's-shedding-skin.jpg`}
        position={[-4.65, 5.97, -2.95]}
        size={1.75}
        rotation-y={-Math.PI / 2}
        framed
      />
      <Image
        name="tempestade"
        src={`${CONTENT_FOLDER}/TEMPESTADE.png`}
        position={[-6.2, 9.3, -3.83]}
        size={1.75}
        rotation-y={-Math.PI / 2}
        framed
      />
      <Image
        name="reallove"
        src={`${CONTENT_FOLDER}/real+love.png`}
        position={[-3.5, 9.81, 1.06]}
        size={1.75}
        rotation-y={-Math.PI / 2}
        framed
      />
      <Image
        name="gum"
        src={`${CONTENT_FOLDER}/GUM+(1).png`}
        position={[-2.8, 14.29, 5.77]}
        size={1.75}
        rotation-y={-Math.PI / 2}
        framed
      />
      <Text></Text>
    </group>
  );
}
