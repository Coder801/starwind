import { FC } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

import { Typography } from "@/ui/Typography";

type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => (
  <header className={clsx(className, styles.container)}>
    <Typography variant="h1">Test for Starwind</Typography>
  </header>
);
