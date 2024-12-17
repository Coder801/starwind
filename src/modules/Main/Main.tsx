"use client";

import { FC, useState, useEffect } from "react";
import dynamic from "next/dynamic";

import clsx from "clsx";
import styles from "./styles.module.scss";

import { useAppContext } from "@/context/AppContext";

type MainProps = {
  className?: string;
};

export const Main: FC<MainProps> = ({ className }) => {
  const [loadedComponents, setLoadedComponents] = useState<any[]>([]);
  const { state }: any = useAppContext(); // eslint-disable-line
  const { plugins } = state?.data || {};

  useEffect(() => {
    const loadComponents = () => {
      const result = plugins
        .map(({ name }) => name)
        .map((path: string) => {
          return dynamic(
            () => import(/* webpackMode: "eager" */ `pluginA/App`),
            {
              ssr: false,
            }
          );
        });
      setLoadedComponents(result);
    };

    console.log(plugins, "plugins");

    if (plugins?.length) {
      loadComponents();
    }
  }, [plugins]);

  return (
    <main className={clsx(className, styles.container)}>
      {[...loadedComponents, ...loadedComponents].map(
        (Component: FC, index: number) => {
          return (
            <div key={index} className={styles.item}>
              <Component />
            </div>
          );
        }
      )}
    </main>
  );
};
