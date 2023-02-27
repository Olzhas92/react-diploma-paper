import React, { useState } from "react";
import { BookingButton } from "./BookingButton";
import styles from "../TopSelling.module.css";
import rome from "../../../../assets/rome.svg";
import pin from "../../../../assets/pin.svg";

export const Rome = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className={styles.rome}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      <img
        src={rome}
        alt="rome"
        className={styles.rome__image}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      />
      <div
        className={styles.rome__destination}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        <span>Rome, Italy</span>
        <span>$5,42k</span>
      </div>
      <div
        className={styles.rome__trip}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        <img src={pin} alt="" />
        <span>10 Days Trip</span>
      </div>
      {isVisible && <BookingButton />}
    </div>
  );
};
