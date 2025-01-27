import React from "react";
import styles from "./App.module.scss";

import { WidgetPerformance } from "./widgets/WidgetPerformance";
import { AddPlugin } from "./components/AddPlugin";

function App() {
  return (
    <div className={styles.container}>
      <div>
        <WidgetPerformance />
      </div>
      <div>
        <AddPlugin />
      </div>
    </div>
  );
}

export default App;
