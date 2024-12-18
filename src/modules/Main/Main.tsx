"use client";

import { FC, useState, useEffect } from "react";
import dynamic from "next/dynamic";

import clsx from "clsx";
import styles from "./styles.module.scss";

import { useAppContext } from "@/context/AppContext";
import { Typography } from "@/ui/Typography";

type MainProps = {
  className?: string;
};

const pluginsList = [
  dynamic(() => import(`pluginA/App`), {
    ssr: false,
  }),
  dynamic(() => import(`pluginB/App`), {
    ssr: false,
  }),
  dynamic(() => import(`pluginC/App`), {
    ssr: false,
  }),
];

export const Main: FC<MainProps> = ({ className }) => {
  // const [loadedComponents, setLoadedComponents] = useState<any[]>([]);
  const { state }: any = useAppContext(); // eslint-disable-line
  const { plugins } = state?.data || {};

  // useEffect(() => {
  //   const loadComponents = () => {
  //     const result = plugins
  //       .map(({ name, path }) => {
  //         return dynamic(
  //           () => import(/* webpackMode: "eager" */ `pluginA/App`),
  //           {
  //             ssr: false,
  //           }
  //         );
  //       });
  //     setLoadedComponents(result);
  //   };

  //   if (plugins?.length) {
  //     loadComponents();
  //   }
  // }, [plugins]);

  return (
    <main className={clsx(className, styles.container)}>
      {pluginsList.map((Component: FC, index: number) => {
        return (
          <div key={index} className={styles.item}>
            <Component />
          </div>
        );
      })}
    </main>
  );
};
