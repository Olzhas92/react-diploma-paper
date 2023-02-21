import React from "react";
import styles from "../TopSelling.module.css";
import london from "../../../../assets/london.svg";
import pin from "../../../../assets/pin.svg";

export const London = () => {
  return (
    <div className={styles.london}>
      <img src={london} alt="rome" className={styles.london__image} />
      <div className={styles.london__destination}>
        <span>London, UK</span>
        <span>$$4.2k</span>
      </div>
      <div className={styles.london__trip}>
        <img src={pin} alt="" />
        <span>12 Days Trip</span>
      </div>
    </div>
  );
};
