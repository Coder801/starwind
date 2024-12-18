const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: 3002,
    open: false,
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "pluginB",
          filename: "remoteEntry.js",
          library: { type: "var", name: "pluginB" },
          exposes: {
            "./App": "./src/App",
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: "^17.0.2",
              eager: false,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: "^17.0.2",
              eager: false,
            },
            "react-dom/client": {
              singleton: false,
              requiredVersion: "^17.0.2",
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
