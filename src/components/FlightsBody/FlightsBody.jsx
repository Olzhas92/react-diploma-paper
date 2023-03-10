import React, { useState } from "react";
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
  const [newPrice, setNewPrice] = useState(0);
  const [newCity, setNewCity] = useState("");
  return (
    <div className={styles.destinations__body}>
      <h3>Please fill in this form and we'll search this hotel</h3>
      <form onSubmit={submitHandler} className={styles.destinations_body_form}>
        <input
          type="text"
          placeholder="Hotel"
          value={newHotel}
          onChange={(e) => setNewHotel(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {myFlights.map((item) => (
        <Flight key={item.id} name={item.name} price={item.price} />
      ))}
    </div>
  );
};
