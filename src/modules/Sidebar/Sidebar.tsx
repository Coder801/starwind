import { FC } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

type SidebarProps = {
  className?: string;
};

import { PluginList } from "@/components/PluginList";

export const Sidebar: FC<SidebarProps> = ({ className }) => (
  <aside className={clsx(className, styles.container)}>
    <PluginList />
  </aside>
);
