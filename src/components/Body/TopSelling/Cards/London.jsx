import React, { useState } from "react";
import { BookingButton } from "./BookingButton";
import styles from "../TopSelling.module.css";
import london from "../../../../assets/london.svg";
import pin from "../../../../assets/pin.svg";

export const London = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className={styles.london}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      <img
        src={london}
        alt="rome"
        className={styles.london__image}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      />
      <div
        className={styles.london__destination}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        <span>London, UK</span>
        <span>$$4.2k</span>
      </div>
      <div
        className={styles.london__trip}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        <img src={pin} alt="" />
        <span>12 Days Trip</span>
      </div>
      {isVisible && <BookingButton />}
    </div>
  );
};
