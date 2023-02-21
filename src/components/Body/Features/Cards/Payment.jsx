import React from "react";
import styles from "../Features.module.css";
import payment from "../../../../assets/payment.svg";

export const Payment = () => {
  return (
    <div className={styles.payment}>
      <img src={payment} alt="" />
      <div className={styles.payment__text}>
        <span>Choose Destination</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor
          tempus.{" "}
        </p>
      </div>
    </div>
  );
};
