import React from "react";
import { Weather } from "./Cards/Weather";
import { Flights } from "./Cards/Flights";
import { Events } from "./Cards/Events";
import { Customization } from "./Cards/Customization";
import styles from "./Categories.module.css";

export const Categories = () => {
  return (
    <div className={styles.categories}>
      <p className={styles.categories__paragraph}>Category</p>
      <h2 className={styles.categories__title}>We Offer Best Services</h2>
      <div className={styles.categories__cards}>
        <Weather />
        <Flights />
        <Events />
        <Customization />
      </div>
    </div>
  );
};
