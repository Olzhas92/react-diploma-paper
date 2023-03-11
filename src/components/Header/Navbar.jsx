import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Registration } from "../Header/Registration";
import burger from "../../assets/burger.svg";
import styles from "./Navbar.module.css";
import { LoginModal } from "./ModalWindows/LoginModal";
import { SignupModal } from "./ModalWindows/SignupModal";

export const Navbar = () => {
  const [burgerIsClicked, setBurgerIsClicked] = useState(false);
  const [loginIsClicked, setLoginIsClicked] = useState(false);
  const [signupIsClicked, setSignupIsClicked] = useState(false);

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navbar__logo}>
        <h2 className={styles.navbar_logo_title}>Olzhas & Co.</h2>
      </Link>
      <nav className={styles.nav}>
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
      <img
        src={burger}
        alt="burger menu"
        className={styles.burger}
        onClick={() => setBurgerIsClicked(!burgerIsClicked)}
      />
      {burgerIsClicked && (
        <div className={styles.dropdown}>
          <nav className={styles.dropdown__nav}>
            <Link to="/hotels" className={styles.dropdown_nav_link}>
              Hotels
            </Link>
            <Link to="/flights" className={styles.dropdown_nav_link}>
              Flights
            </Link>
            <Link to="/bookings" className={styles.dropdown_nav_link}>
              Bookings
            </Link>
          </nav>
          <div className={styles.dropdown__buttons}>
            <button
              className={styles.dropdown__login}
              onClick={() => setLoginIsClicked(true)}
            >
              Login
            </button>
            <button
              className={styles.dropdown__signup}
              onClick={() => setSignupIsClicked(true)}
            >
              Signup
            </button>
            {(loginIsClicked || signupIsClicked) && (
              <button
                className={styles.dropdown__exit}
                onClick={() => window.location.reload(false)}
              >
                Exit
              </button>
            )}
          </div>
          {loginIsClicked && (
            <LoginModal
              closeLogin={() => setLoginIsClicked(false)}
              closeBurger={() => setBurgerIsClicked(false)}
            />
          )}
          {signupIsClicked && (
            <SignupModal
              closeSignup={() => setSignupIsClicked(false)}
              closeBurger={() => setBurgerIsClicked(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};
