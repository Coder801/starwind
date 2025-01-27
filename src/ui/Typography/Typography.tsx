import clsx from "clsx";
import { FC } from "react";

import styles from "./styles.module.scss";
import { TypographyProps } from "./types";

export const Typography: FC<TypographyProps> = ({
  color = "primary",
  variant = "p",
  className,
  children,
  style,
}) => {
  const Component = variant;

  const current = variant === "p" ? "paragraph" : `header-${variant}`;
  const currentClass = color ? `${current}-${color}` : "";

  const classes = clsx(styles[currentClass], className);

  return (
    <Component className={classes} style={style}>
      {children}
    </Component>
  );
};
