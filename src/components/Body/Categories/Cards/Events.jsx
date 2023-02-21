import React from "react";
import styles from "../Categories.module.css";
import microphone from "../../../../assets/microphone.svg";

export const Events = () => {
  return (
    <div className={styles.events}>
      <img src={microphone} alt="" className={styles.events__image} />
      <div className={styles.events__text}>
        <h4 className={styles.events__title}>Local Events</h4>
        <p className={styles.events__paragraph}>
          Barton vanity itself do in it. Preferd to men it engrossed listening.{" "}
        </p>
      </div>
    </div>
  );
};
