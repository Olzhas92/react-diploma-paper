import React from "react";
import logos from "../../../assets/logos.svg";
import styles from "./Logos.module.css";

export const Logos = () => {
  return <img src={logos} alt="" className={styles.logos} />;
};
