import type { NextConfig } from "next";
import { dependencies } from "./package.json" assert { type: "json" };

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
          pluginA: "pluginA@http://localhost:3001/remoteEntry.js",
          pluginB: "pluginB@http://localhost:3002/remoteEntry.js",
          pluginC: "pluginC@http://localhost:3003/remoteEntry.js",
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
