import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LoginModal } from "./ModalWindows/LoginModal";
import { SignupModal } from "./ModalWindows/SignupModal";
import user from "../../assets/user.png";
import styles from "./Registration.module.css";

export const Registration = () => {
  const [loginIsClicked, setLoginIsClicked] = useState(false);
  const [signupIsClicked, setSignupIsClicked] = useState(false);
  const [imgIsClicked, setImgIsClicked] = useState(false);
  let isLoggedIn = useSelector((state) => state.loginSlice.isLoggedIn);
  let isSignedUp = useSelector((state) => state.signupSlice.isSignedUp);

  return (
    <div className={styles.registration}>
      {(isLoggedIn || isSignedUp) && (
        <img src={user} alt="user" onClick={() => setImgIsClicked(true)} />
      )}
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
      {imgIsClicked && (
        <p
          onClick={() => window.location.reload(false)}
          className={styles.refresh__exit}
        >
          Exit
        </p>
      )}
    </div>
  );
};
