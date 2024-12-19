"use client";

import { FC, useState, useEffect } from "react";

import clsx from "clsx";
import styles from "./styles.module.scss";

import { useAppContext } from "@/context/AppContext";

import { getPlugin, PluginNames } from "@/utils/pluginImports";

import { Spinner } from "@/ui/Spinner";

type MainProps = {
  className?: string;
};

export const Main: FC<MainProps> = ({ className }) => {
  const [loadedComponents, setLoadedComponents] = useState<any[]>([]);
  const { state }: any = useAppContext(); // eslint-disable-line
  const { plugins } = state?.data || {};

  useEffect(() => {
    const loadComponents = () => {
      const result = plugins.map(({ name }: { name: PluginNames }) =>
        getPlugin(name, Spinner)
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
        {loadedComponents.map((Component: FC, index: number) => (
          <div key={index} className={styles.item}>
            <Component />
          </div>
        ))}
      </div>
    </main>
  );
};
