import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSignup } from "../../../store/SignupSlice";
import ReactDOM from "react-dom";
import cancelButton from "../../../assets/cancel.svg";
import styles from "./ModalWindows.module.css";

export const SignupModal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      email.trim().toLocaleLowerCase().length > 0 &&
      email.includes("@") &&
      email.includes(".") &&
      password.trim().length > 0 &&
      isAgreed
    ) {
      setIsComplete(true);
      setIsAgreed(true);
      dispatch(addSignup({ email: email, password: password }));
      setEmail("");
      setPassword("");
      props.closeSignup();
    } else {
      setIsComplete(false);
    }
  };

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
        <form className={styles.signup__form} onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="Email"
            className={styles.signup_form_email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.signup_form_password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.signup_checkbox_wrapper}>
            <div className={styles.signup_form_checkbox}>
              <input
                type="checkbox"
                id="checkbox"
                onClick={() => {
                  setIsAgreed(!isAgreed);
                  console.log(isAgreed);
                }}
              />
              <label id="checkbox">
                I agree with{" "}
                <a href="https://www.sports.ru/" target="_blank">
                  the Rules
                </a>
              </label>
            </div>
          </div>
          <button type="submit" className={styles.signup_form_button}>
            Sign Up
          </button>
        </form>
        {!isComplete && (
          <p className={styles.alert__paragraph}>Please, fill in the form</p>
        )}
      </div>
    </div>,
    document.getElementById("signup")
  );
};
