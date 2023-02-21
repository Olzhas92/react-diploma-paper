import React from "react";
import { Rome } from "./Cards/Rome";
import { London } from "./Cards/London";
import { Europe } from "./Cards/Europe";
import styles from "./TopSelling.module.css";

export const TopSelling = () => {
  return (
    <div className={styles.topselling}>
      <p className={styles.topselling__paragraph}>Top Selling</p>
      <h2 className={styles.topselling__title}>Top Destinations</h2>
      <div className={styles.topselling__cards}>
        <Rome />
        <London />
        <Europe />
      </div>
    </div>
  );
};
