import styles from "./styles.module.scss";

import { Sidebar } from "@/modules/Sidebar";
import { Header } from "@/modules/Header";
import { Main } from "@/modules/Main";
import { Footer } from "@/modules/Footer";

export const Home = () => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <Main className={styles.main} />
      <Footer className={styles.footer} />
    </div>
  );
};
