import React from "react";
import { Flight } from "./Flight";
import styles from "./FlightsBody.module.css";

const myFlights = [
  { id: 1, name: "Astana - Almaty", price: 1000 },
  {
    id: 2,
    name: "Almaty - Astana",
    price: 2000,
  },
  { id: 3, name: "Astana - Atyrau", price: 3000 },
  { id: 4, name: "Atyrau - Astana", price: 4000 },
  {
    id: 5,
    name: "Astana - Aqtau",
    price: 5000,
  },
  {
    id: 6,
    name: "Aqtau - Astana",
    price: 6000,
  },
  {
    id: 7,
    name: "Astana - Aqtobe",
    price: 7000,
  },
  { id: 8, name: "Aqtobe - Astana", price: 8000 },
  {
    id: 9,
    name: "Astana - Qostanai",
    price: 9000,
  },
];

export const FlightsBody = () => {
  return (
    <div className={styles.destinations__body}>
      {myFlights.map((item) => (
        <Flight key={item.id} name={item.name} price={item.price} />
      ))}
    </div>
  );
};
