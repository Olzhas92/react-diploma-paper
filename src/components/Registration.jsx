import React from "react";
import styles from "./Registration.module.css";

export const Registration = () => {
  return (
    <div className={styles.registration}>
      <button className={styles.login}>Login</button>
      <button className={styles.signup}>Sign up</button>
    </div>
  );
};
