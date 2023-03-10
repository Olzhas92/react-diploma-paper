import React from "react";
import { useSelector } from "react-redux";
import ritz from "../assets/ritz.jpg";
import airplane from "../assets/Airplane.png";
import styles from "./Bookings.module.css";

export const Bookings = () => {
  const hotelsArr = useSelector((state) => state.bookingsSlice.hotelsArr);
  const flightsArr = useSelector((state) => state.bookingsSlice.flightsArr);

  return (
    <div className={styles.bookings}>
      {hotelsArr.map((item) => (
        <div key={item.id} className={styles.bookings__hotels}>
          <img src={ritz} alt="ritz" />
          <p>Hotel: {item.hotel}</p>
          <p>Price: $ {item.price}</p>
          <p>City: {item.city}</p>
        </div>
      ))}
      <br />
      <br />
      {flightsArr.map((item) => (
        <div key={item.id} className={styles.bookings__flights}>
          <img src={airplane} alt="airplane" />
          <p>Price: $ {item.price}</p>
          <p>City: {item.city}</p>
        </div>
      ))}
      <p className={styles.total__price}>Total price:</p>
    </div>
  );
};
