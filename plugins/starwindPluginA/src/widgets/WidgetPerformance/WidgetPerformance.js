import { useEffect, useState } from "react";
import { subArcsColorScheme } from "./constants";
import { GaugeComponent } from "react-gauge-component";

import styles from "./styles.module.scss";

export const WidgetPerformance = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fetchLink = "https://deploy-test-donischenko.netlify.app/api/get-stats";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchLink);
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const { value } = await response.json();

        if (value) {
          setData((value / 10).toFixed(1));
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data ? (
        <GaugeComponent
          arc={{
            subArcs: subArcsColorScheme,
          }}
          value={data}
        />
      ) : (
        <p>Data is loading...</p>
      )}
    </div>
  );
};
