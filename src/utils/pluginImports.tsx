import dynamic from "next/dynamic";

import { FC } from "react";

export enum PluginNames {
  pluginA = "pluginA",
  pluginB = "pluginB",
  pluginC = "pluginC",
}

export const getImports = (plugin: PluginNames, Spinner: FC) => {
  const plugins = {
    pluginA: dynamic(() => import(`${PluginNames.pluginA}/App`), {
      ssr: false,
      loading: () => <Spinner />,
    }),
    pluginB: dynamic(() => import(`${PluginNames.pluginB}/App`), {
      ssr: false,
      loading: () => <Spinner />,
    }),
    pluginC: dynamic(() => import(`${PluginNames.pluginC}/App`), {
      ssr: false,
      loading: () => <Spinner />,
    }),
  };

  return plugins[plugin as keyof typeof plugins];
};
