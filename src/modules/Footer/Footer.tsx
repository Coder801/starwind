import { FC } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

type FooterProps = {
  className?: string;
};

export const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <div className={clsx(className, styles.container)}>
      Some footer information =)
    </div>
  );
};
