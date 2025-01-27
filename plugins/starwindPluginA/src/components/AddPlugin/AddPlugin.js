import React from "react";
import styles from "./styles.module.scss";

export const AddPlugin = ({ onAdd }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onAdd}>
        <div className={styles.plus} /> Add Plugin
      </button>
    </div>
  );
};
