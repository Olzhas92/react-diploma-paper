import React from "react";
import styles from "../Categories.module.css";
import microphone from "../../../../assets/microphone.svg";

export const Flights = () => {
  return (
    <div className={styles.flights}>
      <img src={microphone} alt="" className={styles.flights__image} />
      <div className={styles.flights__text}>
        <h4 className={styles.flights__title}>Best Flights</h4>
        <p className={styles.flights__paragraph}>
          Engrossed listening. Park gate sell they west hard for the.
        </p>
      </div>
    </div>
  );
};
