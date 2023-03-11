import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFlight } from "../../store/BookingsSlice";
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
  const [newCity, setNewCity] = useState("");
  const [newPrice, setNewPrice] = useState(0);

  const [isCompleted, setIsCompleted] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    setIsCompleted(false);
    if (newPrice > 0 && newCity.trim().length > 0) {
      setIsCompleted(true);
      dispatch(addFlight({ city: newCity, price: newPrice }));
      setNewPrice(0);
      setNewCity("");
    } else {
      setIsCompleted(false);
    }
  };

  return (
    <div className={styles.flights__body}>
      <h3>Please fill in this form and we'll search this flight</h3>
      <form onSubmit={submitHandler} className={styles.flights_body_form}>
        <input
          type="number"
          placeholder="Price"
          value={Number(newPrice).toString()}
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
