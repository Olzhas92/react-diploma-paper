import React from "react";
import styles from "./Features.module.css";
import { FeaturesText } from "./Cards/FeaturesText";
import { FeaturesCard } from "./Cards/FeaturesCard";

export const Features = () => {
  return (
    <div className={styles.features}>
      <FeaturesText />
      <FeaturesCard />
    </div>
  );
};
