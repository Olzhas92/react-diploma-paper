import React from "react";
import ReactDOM from "react-dom";
import cancelButton from "../../../assets/cancel.svg";
import styles from "./ModalWindows.module.css";

export const SignupModal = (props) => {
  return ReactDOM.createPortal(
    <div className={styles.signup__modal}>
      <div className={styles.signup__overlay} onClick={props.closeSignup}></div>
      <img
        alt="cancel"
        src={cancelButton}
        className={styles.signup__cancel}
        onClick={props.closeSignup}
      />
      <div className={styles.signup__content}>
        <h2 className={styles.signup_content_title}>Sign Up</h2>
        <form className={styles.signup__form}>
          <input
            type="email"
            placeholder="Email"
            className={styles.signup_form_email}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.signup_form_password}
          />
          <button type="submit" className={styles.signup_form_button}>
            Sign Up
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("signup")
  );
};
