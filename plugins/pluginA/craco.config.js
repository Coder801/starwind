const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: 3001,
    open: false,
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "pluginA",
          filename: "remoteEntry.js",
          library: { type: "var", name: "pluginA" },
          exposes: {
            "./App": "./src/App.js",
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: "^19.0.0",
              eager: false,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: "^19.0.0",
              eager: false,
            },
            "react-dom/client": {
              singleton: false,
              requiredVersion: "^19.0.0",
              eager: false,
            },
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
