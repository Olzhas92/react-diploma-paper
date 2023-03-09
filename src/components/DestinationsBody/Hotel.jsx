import React, { useState } from "react";
import ritz from "../../assets/ritz.jpg";
import styles from "./Hotel.module.css";

export const Hotel = (props) => {
  const [hotelIsBooked, setHotelIsBooked] = useState(false);
  const { name, price } = props;

  return (
    <div className={styles.hotel}>
      <img src={ritz} alt="hotel" />
      <div className={styles.hotel__details}>
        <h4>{name}</h4>
        <p>{price}</p>
        <button
          onClick={() => {
            setHotelIsBooked(true);
            console.log(`hotel is booked = ${hotelIsBooked} `);
          }}
        >
          Book a Hotel
        </button>
      </div>
    </div>
  );
};
