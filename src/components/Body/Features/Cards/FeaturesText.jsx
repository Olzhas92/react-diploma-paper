import React from "react";
import styles from "../Features.module.css";
import { Destination } from "../Cards/Destination";
import { Payment } from "../Cards/Payment";
import { Airport } from "../Cards/Airport";

export const FeaturesText = () => {
  return (
    <div className={styles.features__text}>
      <p className={styles.features_text_paragraph}>Easy and Fast</p>
      <h2 className={styles.features_text_title}>
        Book your next trip in 3 easy steps
      </h2>
      <div className={styles.advantages}>
        <Destination />
        <Payment />
        <Airport />
      </div>
    </div>
  );
};
