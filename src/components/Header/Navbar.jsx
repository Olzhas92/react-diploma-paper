import React from "react";
import { Link } from "react-router-dom";
import { Registration } from "../Header/Registration";
import jadoo from "../../assets/jadoo.svg";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navbar__logo}>
        <h2 className={styles.navbar_logo_title}>Olzhas & Co.</h2>
      </Link>
      <nav className={styles.nav}>
        <Link to="/destinations" className={styles.navlink}>
          Destinations
        </Link>
        <Link to="/hotels" className={styles.navlink}>
          Hotels
        </Link>
        <Link to="/bookings" className={styles.navlink}>
          Bookings
        </Link>
      </nav>
      <Registration />
    </div>
  );
};
