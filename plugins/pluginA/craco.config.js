const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: 3003,
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "pluginA",
          filename: "remoteEntry.js",
          exposes: {
            "./App": "./src/App.js",
          },
          shared: {
            react: { singleton: true, eager: true },
            "react-dom": { singleton: true, eager: true },
            "react-dom/client": {
              eager: true,
              singleton: true,
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
