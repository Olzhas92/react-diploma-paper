import React from "react";
import { DestinationsBody } from "../components/DestinationsBody/DestinationsBody";
import styles from "./Destinations.module.css";

export const Destinations = () => {
  return (
    <div className={styles.destinations}>
      <DestinationsBody />
    </div>
  );
};
