import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Registration } from "../Header/Registration";
import burger from "../../assets/burger.svg";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [burgerIsClicked, setBurgerIsClicked] = useState(false);
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
      <img
        src={burger}
        alt="burger menu"
        className={styles.burger}
        onClick={() => setBurgerIsClicked(!burgerIsClicked)}
      />
      {burgerIsClicked && (
        <div className={styles.dropdown}>
          <nav className={styles.dropdown__nav}>
            <Link to="/destinations" className={styles.dropdown_nav_link}>
              Destinations
            </Link>
            <Link to="/hotels" className={styles.dropdown_nav_link}>
              Hotels
            </Link>
            <Link to="/bookings" className={styles.dropdown_nav_link}>
              Bookings
            </Link>
          </nav>
          <div className={styles.dropdown__buttons}>
            <button className={styles.dropdown__login}>Login</button>
            <button className={styles.dropdown__signup}>Signup</button>
          </div>
        </div>
      )}
    </div>
  );
};
