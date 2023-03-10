import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHotel } from "../../store/BookingsSlice";
import { Hotel } from "./Hotel";
import styles from "./HotelsBody.module.css";

const myHotels = [
  { id: 1, name: "Marriot", price: 1000, city: "Astana" },
  {
    id: 2,
    name: "Ritz-Carlton",
    price: 2000,
    city: "Almaty",
  },
  { id: 3, name: "Hilton", price: 3000, city: "Kokshetau" },
  { id: 4, name: "Rixos", price: 4000, city: "Astana" },
  {
    id: 5,
    name: "Rixos Burabay",
    price: 5000,
    city: "Almaty",
  },
  {
    id: 6,
    name: "Rixos Aktau",
    price: 6000,
    city: "Kokshetau",
  },
  {
    id: 7,
    name: "Kazakhstan",
    price: 7000,
    city: "Astana",
  },
  { id: 8, name: "CR7", price: 8000, city: "Almaty" },
  {
    id: 9,
    name: "Wyndham Garden",
    price: 9000,
    city: "Kokshetau",
  },
];

export const HotelsBody = () => {
  const [newHotel, setNewHotel] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newCity, setNewCity] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    setIsCompleted(false);
    if (
      newHotel.trim().length > 0 &&
      newPrice > 0 &&
      newCity.trim().length > 0
    ) {
      setIsCompleted(true);
      dispatch(addHotel({ hotel: newHotel, price: newPrice, city: newCity }));
      setNewHotel("");
      setNewPrice(0);
      setNewCity("");
    } else {
      setIsCompleted(false);
    }
  };

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
      {!isCompleted && (
        <p className={styles.incomplete__form}>Please fill in the form</p>
      )}
      <h2>Our Top Offers</h2>
      {myHotels.map((item) => (
        <Hotel
          key={item.id}
          name={item.name}
          price={item.price}
          city={item.city}
        />
      ))}
    </div>
  );
};
