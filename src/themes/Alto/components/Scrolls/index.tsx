import Scroll from "./Scroll";

const ScrollArray = [];

const Scrolls = () => {
  return (
    <group>
      <Scroll
        img="https://spaces-gallery-assets.s3-us-west-1.amazonaws.com/images/muse.png"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        position={[15, 0, 30]}
      />
    </group>
  );
};

export default Scrolls;
