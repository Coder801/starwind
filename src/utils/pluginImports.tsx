import dynamic from "next/dynamic";

import { FC } from "react";

export enum PluginNames {
  starwindPluginA = "starwindPluginA",
  starwindPluginB = "starwindPluginB",
  starwindPluginC = "starwindPluginC",
}

export const getImports = (name: PluginNames, Spinner: FC) => {
  const plugins = {
    starwindPluginA: dynamic(
      () => import(`${PluginNames.starwindPluginA}/App`),
      {
        ssr: false,
        loading: () => <Spinner />,
      }
    ),
    starwindPluginB: dynamic(
      () => import(`${PluginNames.starwindPluginB}/App`),
      {
        ssr: false,
        loading: () => <Spinner />,
      }
    ),
    starwindPluginC: dynamic(
      () => import(`${PluginNames.starwindPluginC}/App`),
      {
        ssr: false,
        loading: () => <Spinner />,
      }
    ),
  };

  return plugins[name as unknown as keyof typeof plugins];
};
