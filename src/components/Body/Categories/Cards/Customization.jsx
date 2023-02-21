import React from "react";
import styles from "../Categories.module.css";
import settings from "../../../../assets/settings.svg";

export const Customization = () => {
  return (
    <div className={styles.customization}>
      <img src={settings} alt="" className={styles.customization__image} />
      <div className={styles.customization__text}>
        <h4 className={styles.customization__title}>Customization</h4>
        <p className={styles.customization__paragraph}>
          We deliver outsourced aviation services for military customers
        </p>
      </div>
    </div>
  );
};
