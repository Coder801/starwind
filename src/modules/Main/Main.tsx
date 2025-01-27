"use client";

import { FC, useState, useEffect, lazy } from "react";

import clsx from "clsx";
import styles from "./styles.module.scss";

import { useAppContext } from "@/context/AppContext";

// import { getImports, PluginNames } from "@/utils/pluginImports";
// import { camelCase } from "lodash";

// import Test from "starwindPluginA/appInjector";

import { Spinner } from "@/ui/Spinner";
import { Typography } from "@/ui/Typography";

type MainProps = {
  className?: string;
};

export const Main: FC<MainProps> = ({ className }) => {
  // const [loadedComponents, setLoadedComponents] = useState<any[]>([]);
  const { state }: any = useAppContext(); // eslint-disable-line
  const [Component, setComponent] = useState(null);
  // const { plugins } = state?.data || {};
  const parentElementId1 = "parent1";
  const parentElementId2 = "parent2";
  const parentElementId3 = "parent3";

  // const Test = dynamic(() => import(`starwindPluginA/appInjector`), {
  //   ssr: false,
  //   loading: () => <Spinner />,
  // });

  const handleCalculate = async () => {
    // const { inject: inject1 } = await import("starwindPluginA/injector");
    // const { inject: inject2 } = await import("starwindPluginB/appInjector");
    // const { inject: inject3 } = await import("starwindPluginC/appInjector");
    // inject1(parentElementId1);
    // inject2(parentElementId2);
    // inject1(parentElementId1);
  };

  useEffect(() => {
    // const loadComponents = () => {
    //   const result = plugins.map(
    //     ({ name, framework }: { name: PluginNames; framework: string }) => ({
    //       framework,
    //       Component: getImports(camelCase(name), Spinner),
    //     })
    //   );
    //   setLoadedComponents(result);
    // };
    // if (plugins?.length) {
    //   loadComponents();
    // }
    // setComponent(lazy(() => import("starwindPluginA/appInjector")));
    // console.log(Component);
    // console.log(inject);
    // console.log(Test);
    handleCalculate();
  }, []);

  return (
    <main className={clsx(className, styles.container)}>
      <div className={styles.items}>
        {/* {loadedComponents.map(({ framework, Component }, index: number) => (
          <div key={index} className={styles.item}>
            <Typography>{framework}</Typography>
            <div className={styles.frame}>
              <Component />
            </div>
          </div>
        ))} */}
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <Typography className={styles.title}>Test</Typography>
          <div className={styles.frame}>
            <div id={parentElementId1}></div>
          </div>
        </div>
        <div className={styles.item}>
          <Typography className={styles.title}>Test 2</Typography>
          <div className={styles.frame}>
            <div id={parentElementId2}></div>
          </div>
        </div>
        {/* <div className={styles.item}>
          <Typography className={styles.title}>Test 3</Typography>
          <div className={styles.frame}>
            <div id={parentElementId3}></div>
          </div>
        </div> */}
        <div className={styles.item}>
          <Typography className={styles.title}>Test 4</Typography>
          <div className={styles.frame}></div>
        </div>
      </div>
    </main>
  );
};
