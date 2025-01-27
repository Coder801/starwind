import { FC } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

import { Typography } from "@/ui/Typography";

import {
  useAppContext,
  useAppSelector,
  selectPlugins,
} from "@/context/AppContext";

export const PluginList: FC = () => {
  const { dispatch } = useAppContext();
  const plugins = useAppSelector(selectPlugins);

  const onClickHandler = (name: string) => {
    dispatch({
      type: "TOGGLE_ACTIVE_PLUGIN",
      payload: name,
    });
  };

  return (
    <div className={styles.container}>
      <Typography variant="h3" className={styles.title}>
        Plugin List
      </Typography>
      <ul className={styles.list}>
        {plugins &&
          plugins.map(({ name, isActive }) => (
            <li
              key={name}
              className={clsx(styles.item, { [styles.active]: isActive })}
              onClick={() => onClickHandler(name)}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};
