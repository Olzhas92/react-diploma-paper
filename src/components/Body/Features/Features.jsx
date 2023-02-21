import React from "react";
import styles from "./Features.module.css";
import { Destination } from "./Cards/Destination";
import { Payment } from "./Cards/Payment";
import { Airport } from "./Cards/Airport";
import { FeaturesCard } from "./Cards/FeaturesCard";

export const Features = () => {
  return (
    <div className={styles.features}>
      <div>
        <p className={styles.features__paragraph}>Easy and Fast</p>
        <h2 className={styles.features__title}>
          Book your next trip in 3 easy steps
        </h2>
        <div className={styles.advantages}>
          <Destination />
          <Payment />
          <Airport />
        </div>
        <FeaturesCard />
      </div>
    </div>
  );
};
