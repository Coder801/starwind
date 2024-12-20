"use client";

import { FC, useState, useEffect } from "react";

import clsx from "clsx";
import styles from "./styles.module.scss";

import { useAppContext } from "@/context/AppContext";

import { getImports, PluginNames } from "@/utils/pluginImports";
import { camelCase } from "lodash";

import { Spinner } from "@/ui/Spinner";
import { Typography } from "@/ui/Typography";

type MainProps = {
  className?: string;
};

export const Main: FC<MainProps> = ({ className }) => {
  const [loadedComponents, setLoadedComponents] = useState<any[]>([]);
  const { state }: any = useAppContext(); // eslint-disable-line
  const { plugins } = state?.data || {};

  console.log(plugins);

  useEffect(() => {
    const loadComponents = () => {
      const result = plugins.map(
        ({ name, framework }: { name: PluginNames; framework: string }) => ({
          framework,
          Component: getImports(camelCase(name), Spinner),
        })
      );

      setLoadedComponents(result);
    };

    if (plugins?.length) {
      loadComponents();
    }
  }, [plugins]);

  return (
    <main className={clsx(className, styles.container)}>
      <div className={styles.items}>
        {loadedComponents.map(({ framework, Component }, index: number) => (
          <div key={index} className={styles.item}>
            <Typography>{framework}</Typography>
            <div className={styles.frame}>
              <Component />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
