import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLogin } from "../../../store/LoginSlice";
import ReactDOM from "react-dom";
import cancelButton from "../../../assets/cancel.svg";
import styles from "./ModalWindows.module.css";

export const LoginModal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      email.trim().toLocaleLowerCase().length > 0 &&
      email.includes("@") &&
      email.includes(".") &&
      password.trim().length > 0
    ) {
      setIsComplete(true);
      dispatch(addLogin({ email: email, password: password }));
      setEmail("");
      setPassword("");
      props.closeLogin();
    } else {
      setIsComplete(false);
    }
  };

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
        <form className={styles.login__form} onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="Email"
            className={styles.login_form_email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.login_form_password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.login_form_button}>
            Login
          </button>
        </form>
        {!isComplete && (
          <p className={styles.alert__paragraph}>Please, fill in the form</p>
        )}
      </div>
    </div>,
    document.getElementById("login")
  );
};
