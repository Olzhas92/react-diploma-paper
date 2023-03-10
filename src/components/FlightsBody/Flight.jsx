import React, { useState } from "react";
import airplane from "../../assets/Airplane.png";
import styles from "./Flight.module.css";

export const Flight = (props) => {
  const [flightIsBooked, setFlightIsBooked] = useState(false);
  const { name, price } = props;

  return (
    <div className={styles.flight}>
      <img src={airplane} alt="hotel" />
      <div className={styles.flight__details}>
        <h4>{name}</h4>
        <p>{price}</p>
        <button
          onClick={() => {
            setFlightIsBooked(true);
            console.log(`flight is booked = ${flightIsBooked} `);
          }}
        >
          Book a Flight
        </button>
      </div>
    </div>
  );
};
