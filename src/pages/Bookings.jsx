import React from "react";
import { useSelector, useDispatch } from "react-redux";
import finalPrice from "../store/BookingsSlice";
import ritz from "../assets/ritz.jpg";
import airplane from "../assets/Airplane.png";
import styles from "./Bookings.module.css";

export const Bookings = () => {
  const hotelsArr = useSelector((state) => state.bookingsSlice.hotelsArr);
  const flightsArr = useSelector((state) => state.bookingsSlice.flightsArr);
  const hotelsTotalPrice = useSelector(
    (state) => state.bookingsSlice.hotelsTotalPrice
  );
  const flightsTotalPrice = useSelector(
    (state) => state.bookingsSlice.flightsTotalPrice
  );

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
      <p className={styles.total__price}>
        Hotels total price: {hotelsTotalPrice}
      </p>
      <p className={styles.total__price}>
        Flights total price: {flightsTotalPrice}
      </p>
      {/* <p className={styles.total__price}>Total price: {totalPrice}</p> */}
    </div>
  );
};
