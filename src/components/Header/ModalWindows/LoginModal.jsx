import React from "react";
import ReactDOM from "react-dom";
import cancelButton from "../../../assets/cancel.svg";
import styles from "./ModalWindows.module.css";

export const LoginModal = (props) => {
  return ReactDOM.createPortal(
    <div className={styles.login__modal}>
      <div className={styles.login__overlay} onClick={props.closeLogin}></div>
      <img
        alt="cancel"
        src={cancelButton}
        className={styles.login__cancel}
        onClick={props.closeLogin}
      />
      <div className={styles.login__content}>
        <h2 className={styles.login_content_title}>Login</h2>
        <form className={styles.login__form}>
          <input
            type="email"
            placeholder="Email"
            className={styles.login_form_email}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.login_form_password}
          />
          <input type="checkbox" />
          <button type="submit" className={styles.login_form_button}>
            Login
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("login")
  );
};
