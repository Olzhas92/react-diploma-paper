import React from "react";
import styles from "../Features.module.css";
import airport from "../../../../assets/airport.svg";

export const Airport = () => {
  return (
    <div className={styles.airport}>
      <img src={airport} alt="" />
      <div className={styles.airport__text}>
        <span>Choose Destination</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor
          tempus.{" "}
        </p>
      </div>
    </div>
  );
};
