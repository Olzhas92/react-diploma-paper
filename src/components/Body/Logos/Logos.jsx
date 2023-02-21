import React from "react";
import logos from "../../../assets/logos.svg";
import styles from "./Logos.module.css";

export const Logos = () => {
  return (
    <div className={styles.logos}>
      <img src={logos} alt="" />
    </div>
  );
};
