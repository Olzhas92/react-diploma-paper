import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import rome from "../../../assets/rome.svg";
import london from "../../../assets/london.svg";
import europe from "../../../assets/europe.svg";
import pin from "../../../assets/pin.svg";
import styles from "./TopSelling.module.css";
import { addFlight } from "../../../store/BookingsSlice";

const myCities = [
  {
    id: 1,
    img: rome,
    destination: "Rome, Italy",
    duration: "10 days",
    price: "$5.42K",
  },
  {
    id: 2,
    img: london,
    destination: "London, UK",
    duration: "12 days",
    price: "$4.2K",
  },
  {
    id: 3,
    img: europe,
    destination: "Full Europe",
    duration: "10 days",
    price: "$15K",
  },
];

export const TopSelling = () => {
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  const clickHandler = (item) => {
    console.log("clicked");
    dispatch(addFlight(item));
  };

  return (
    <div className={styles.topselling}>
      <p className={styles.topselling__paragraph}>Top Selling</p>
      <h2 className={styles.topselling__title}>Top Destinations</h2>
      <div className={styles.topselling__cards}>
        {myCities.map((item) => (
          <div
            className={styles.city}
            onMouseOver={() => setIsVisible(true)}
            onMouseOut={() => setIsVisible(false)}
            key={item.id}
          >
            <img
              src={item.img}
              alt="rome"
              className={styles.city__image}
              onMouseOver={() => setIsVisible(true)}
              onMouseOut={() => setIsVisible(false)}
            />
            <div
              className={styles.city__destination}
              onMouseOver={() => setIsVisible(true)}
              onMouseOut={() => setIsVisible(false)}
            >
              <span>{item.destination}</span>
              <span>{item.price}</span>
            </div>
            <div
              className={styles.city__trip}
              onMouseOver={() => setIsVisible(true)}
              onMouseOut={() => setIsVisible(false)}
            >
              <img src={pin} alt="" />
              <span>{item.duration}</span>
            </div>
            {isVisible && (
              <button
                className={styles.booking__button}
                onClick={clickHandler(item)}
              >
                <Link
                  to="/hotels"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Book a Trip
                </Link>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
