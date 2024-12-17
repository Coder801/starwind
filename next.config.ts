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
          pluginA: "pluginA@http://localhost:3003/remoteEntry.js",
        },
        shared: {
          react: { singleton: true, eager: true },
          "react-dom": { singleton: true, eager: true },
          "react-dom/client": {
            eager: true,
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      })
    );

    return config;
  },
};

export default nextConfig;
