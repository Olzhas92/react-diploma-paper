import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LoginModal } from "./ModalWindows/LoginModal";
import { SignupModal } from "./ModalWindows/SignupModal";
import user from "../../assets/user.png";
import styles from "./Registration.module.css";

export const Registration = () => {
  const [loginIsClicked, setLoginIsClicked] = useState(false);
  const [signupIsClicked, setSignupIsClicked] = useState(false);
  const isLoggedIn = useSelector((state) => state.loginSlice.isLoggedIn);
  const isSignedUp = useSelector((state) => state.signupSlice.isSignedUp);

  return (
    <div className={styles.registration}>
      {(isLoggedIn || isSignedUp) && <img src={user} alt="user" />}
      {!isLoggedIn && !isSignedUp && (
        <div>
          <button
            className={styles.login}
            onClick={() => setLoginIsClicked(true)}
          >
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
      )}
    </div>
  );
};
