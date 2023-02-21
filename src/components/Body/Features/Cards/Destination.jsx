import React from "react";
import styles from "../Features.module.css";
import destination from "../../../../assets/destination.svg";

export const Destination = () => {
  return (
    <div className={styles.destination}>
      <img src={destination} alt="" />
      <div className={styles.destination__text}>
        <span>Choose Destination</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor
          tempus.{" "}
        </p>
      </div>
    </div>
  );
};
