import React, { useState } from "react";
import { LoginModal } from "./ModalWindows/LoginModal";
import { SignupModal } from "./ModalWindows/SignupModal";
import styles from "./Registration.module.css";

export const Registration = () => {
  const [loginIsClicked, setLoginIsClicked] = useState(false);
  const [signupIsClicked, setSignupIsClicked] = useState(false);
  return (
    <div className={styles.registration}>
      <button className={styles.login} onClick={() => setLoginIsClicked(true)}>
        Login
      </button>
      <button
        className={styles.signup}
        onClick={() => setSignupIsClicked(true)}
      >
        Sign up
      </button>
      {loginIsClicked && (
        <LoginModal closeLogin={() => setLoginIsClicked(false)} />
      )}
      {signupIsClicked && (
        <SignupModal closeSignup={() => setSignupIsClicked(false)} />
      )}
    </div>
  );
};
