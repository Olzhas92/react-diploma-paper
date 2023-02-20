import React from "react";
import { Link } from "react-router-dom";
import { Registration } from "./Registration";
import jadoo from "../assets/Jadoo.svg";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={jadoo} alt="" />
      <nav className={styles.nav}>
        <Link to="/" className={styles.navlink}>
          Home
        </Link>
        <Link to="/destinations" className={styles.navlink}>
          Destinations
        </Link>
        <Link to="/hotels" className={styles.navlink}>
          Hotels
        </Link>
        <Link to="/flights" className={styles.navlink}>
          Flights
        </Link>
        <Link to="/bookings" className={styles.navlink}>
          Bookings
        </Link>
      </nav>
      <Registration />
    </div>
  );
};
