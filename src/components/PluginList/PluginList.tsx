import { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";

import { Typography } from "@/ui/Typography";

import { useAppContext } from "@/context/AppContext";

export const PluginList: FC = () => {
  const { state }: any = useAppContext(); // eslint-disable-line
  const [plugins, setPlugins] = useState(state?.data?.plugins || []);

  useEffect(() => {
    if (state?.data?.plugins) {
      setPlugins(state?.data?.plugins);
    }
  }, [state]);

  const onClickHandler = (name: string) => {
    console.log(name);
  };

  return (
    <div className={styles.container}>
      <Typography variant="h3" className={styles.title}>
        Plugin List
      </Typography>
      <ul className={styles.list}>
        {plugins.map(({ name }) => (
          <li
            key={name}
            className={styles.item}
            onClick={() => onClickHandler(name)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
