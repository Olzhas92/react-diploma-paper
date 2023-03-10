import React from "react";
import ritz from "../../assets/ritz.jpg";
import styles from "./Hotel.module.css";

export const Hotel = (props) => {
  const { name, price, city } = props;

  return (
    <div className={styles.hotel}>
      <img src={ritz} alt="hotel" />
      <div className={styles.hotel__details}>
        <h4>{name}</h4>
        <p>{price}</p>
        <p>{city}</p>
      </div>
    </div>
  );
};
