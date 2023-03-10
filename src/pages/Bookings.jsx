import React from "react";
import { useSelector } from "react-redux";
import styles from "./Bookings.module.css";

export const Bookings = () => {
  const bookingsArr = useSelector((state) => state.bookingsSlice.bookingsArr);
  return (
    <div className={styles.bookings}>
      {bookingsArr.map((item) => (
        <div key={item.id}>
          <p>{item.hotel}</p>
          <p>{item.price}</p>
          <p>{item.city}</p>
        </div>
      ))}
    </div>
  );
};
