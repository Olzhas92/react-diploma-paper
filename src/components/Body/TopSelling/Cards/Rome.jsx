import React from "react";
import styles from "../TopSelling.module.css";
import rome from "../../../../assets/rome.svg";
import pin from "../../../../assets/pin.svg";

export const Rome = () => {
  return (
    <div className={styles.rome}>
      <img src={rome} alt="rome" className={styles.rome__image} />
      <div className={styles.rome__destination}>
        <span>Rome, Italy</span>
        <span>$5,42k</span>
      </div>
      <div className={styles.rome__trip}>
        <img src={pin} alt="" />
        <span>10 Days Trip</span>
      </div>
    </div>
  );
};
