const withPlugins = require("next-compose-plugins");
const transpileModules = require("next-transpile-modules")([
  "three",
  "drei",
  "postprocessing",
  "react-three-fiber",
  "use-cannon",
]);

module.exports = {
  ...withPlugins([transpileModules]),
  experimental: { reactMode: "concurrent" },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};
