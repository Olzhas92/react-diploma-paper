import React from "react";
import styles from "../Features.module.css";
import duomo from "../../../../assets/duomo.svg";
import completion from "../../../../assets/completion.svg";

export const SideCard = () => {
  return (
    <div className={styles.sidecard}>
      <img src={duomo} alt="" />
      <div className={styles.sidecard__text}>
        <span className={styles.sidecard_text_ongoing}>Ongoing</span>
        <span className={styles.sidecard_text_trip}>Trip to Rome</span>
        <span className={styles.sidecard_text_completed}>
          <span className={styles.sidecard_text_completed_percentage}>40%</span>
          completed
        </span>
        <img src={completion} alt="" />
      </div>
    </div>
  );
};
