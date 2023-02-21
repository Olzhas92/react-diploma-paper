import React from "react";
import styles from "../TopSelling.module.css";
import europe from "../../../../assets/europe.svg";
import pin from "../../../../assets/pin.svg";

export const Europe = () => {
  return (
    <div className={styles.europe}>
      <img src={europe} alt="rome" className={styles.europe__image} />
      <div className={styles.europe__destination}>
        <span>Full Europe</span>
        <span>$15k</span>
      </div>
      <div className={styles.europe__trip}>
        <img src={pin} alt="" />
        <span>28 Days Trip</span>
      </div>
    </div>
  );
};
