import React, { useState } from "react";
import { BookingButton } from "./BookingButton";
import styles from "../TopSelling.module.css";
import europe from "../../../../assets/europe.svg";
import pin from "../../../../assets/pin.svg";

export const Europe = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className={styles.europe}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      <img
        src={europe}
        alt="rome"
        className={styles.europe__image}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      />
      <div
        className={styles.europe__destination}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        <span>Full Europe</span>
        <span>$15k</span>
      </div>
      <div
        className={styles.europe__trip}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        <img src={pin} alt="" />
        <span>28 Days Trip</span>
      </div>
      {isVisible && <BookingButton />}
    </div>
  );
};
