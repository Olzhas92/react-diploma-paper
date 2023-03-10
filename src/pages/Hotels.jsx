import React from "react";
import { HotelsBody } from "../components/HotelsBody/HotelsBody";
import styles from "./Hotels.module.css";

export const Hotels = () => {
  return (
    <div className={styles.destinations}>
      <HotelsBody />
    </div>
  );
};
