import React from "react";
import { useSelector } from "react-redux";
import styles from "./Bookings.module.css";

export const Bookings = () => {
  const hotelsArr = useSelector((state) => state.bookingsSlice.hotelsArr);
  const flightsArr = useSelector((state) => state.bookingsSlice.flightsArr);

  return (
    <div className={styles.bookings}>
      {hotelsArr.map((item) => (
        <div key={item.id}>
          <p>{item.hotel}</p>
          <p>{item.price}</p>
          <p>{item.city}</p>
        </div>
      ))}
      <br />
      <br />
      {flightsArr.map((item) => (
        <div key={item.id}>
          <p>{item.price}</p>
          <p>{item.city}</p>
        </div>
      ))}
    </div>
  );
};
