import type { NextConfig } from "next";

import { container } from "webpack";

const { ModuleFederationPlugin } = container;

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  webpack(config) {
    config.resolve.fallback = { fs: false };
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "host",
        remotes: {
          starwindPluginA:
            "starwindPluginA@http://localhost:3001/remoteEntry.js",
          starwindPluginB:
            "starwindPluginB@http://localhost:3002/remoteEntry.js",
          starwindPluginC:
            "starwindPluginC@http://localhost:3003/remoteEntry.js",
        },
        shared: {
          react: { singleton: true, requiredVersion: "^19.0.0", eager: true },
          "react-dom": {
            singleton: true,
            requiredVersion: "^19.0.0",
            eager: true,
          },
          "react-dom/client": {
            requiredVersion: "^19.0.0",
            singleton: true,
            eager: true,
          },
        },
      })
    );

    return config;
  },
};

export default nextConfig;
