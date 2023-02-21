import React from "react";
import subscription_image from "../../../assets/subscription_image.svg";
import styles from "./Subscription.module.css";

export const Subscription = () => {
  return (
    <div className={styles.subscription}>
      <div className={styles.subscription__text}>
        <p>
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </p>
        <form className={styles.subscription_text_form}>
          <input type="text" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <img src={subscription_image} alt="" className={styles.subscription__image}/>
    </div>
  );
};
