import React from "react";
import { Hotel } from "./Hotel";
import styles from "./HotelsBody.module.css";

const myDestinations = [
  { id: 1, name: "Marriot", price: 1000 },
  {
    id: 2,
    name: "Ritz-Carlton",
    price: 2000,
  },
  { id: 3, name: "Hilton", price: 3000 },
  { id: 4, name: "Rixos", price: 4000 },
  {
    id: 5,
    name: "Rixos Burabay",
    price: 5000,
  },
  {
    id: 6,
    name: "Rixos Aktau",
    price: 6000,
  },
  {
    id: 7,
    name: "Kazakhstan",
    price: 7000,
  },
  { id: 8, name: "CR7", price: 8000 },
  {
    id: 9,
    name: "Wyndham Garden",
    price: 9000,
  },
];

export const HotelsBody = (props) => {
  return (
    <div className={styles.destinations__body}>
      {myDestinations.map((item) => (
        <Hotel
          key={item.id}
          name={item.name}
          price={item.price}
          isBooked={item.isBooked}
        />
      ))}
    </div>
  );
};
