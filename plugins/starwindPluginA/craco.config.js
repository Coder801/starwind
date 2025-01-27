const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: 3005,
    open: false,
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "starwindPluginA",
          filename: "remoteEntry.js",
          library: { type: "var", name: "starwindPluginA" },
          exposes: {
            "./injector": "./src/injector",
          },
        }),
      ],
    },
    configure: (webpackConfig) => ({
      ...webpackConfig,
      output: {
        ...webpackConfig.output,
        publicPath: "auto",
      },
    }),
  },
};
