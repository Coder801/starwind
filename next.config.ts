import type { NextConfig } from "next";

import { container } from "webpack";
import pluginConfig from "./plugins.config.json";

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
        remotes: pluginConfig.plugins.reduce(
          (result: { [key: string]: string }, item) => {
            result[
              item.name
            ] = `${item.name}@http://localhost:${item.port}/remoteEntry.js`;
            return result;
          },
          {}
        ),
      })
    );

    return config;
  },
};

export default nextConfig;
