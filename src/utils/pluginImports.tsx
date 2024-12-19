import dynamic from "next/dynamic";

import { FC } from "react";

export enum PluginNames {
  pluginA = "pluginA",
  pluginB = "pluginB",
  pluginC = "pluginC",
}

export const getPlugin = (plugin: PluginNames, Spinner: FC) => {
  const plugins = {
    pluginA: dynamic(() => import("pluginA/App"), {
      ssr: false,
      loading: () => <Spinner />,
    }),
    pluginB: dynamic(() => import("pluginB/App"), {
      ssr: false,
      loading: () => <Spinner />,
    }),
    pluginC: dynamic(() => import("pluginC/App"), {
      ssr: false,
      loading: () => <Spinner />,
    }),
  };

  return plugins[plugin as keyof typeof plugins];
};
