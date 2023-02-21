import React from "react";
import styles from "../Categories.module.css";
import satellite from "../../../../assets/satellite.svg";

export const Weather = () => {
  return (
    <div className={styles.weather}>
      <img src={satellite} alt="" className={styles.weather__image} />
      <div className={styles.weather__text}>
        <h4 className={styles.weather__title}>Calculated Weather </h4>
        <p className={styles.weather__paragraph}>
          Built Wicket longer admire do barton vanity itself do in it.
        </p>
      </div>
    </div>
  );
};
