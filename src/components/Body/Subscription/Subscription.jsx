import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSubscription } from "../../../store/SubscriptionSlice";
import styles from "./Subscription.module.css";

export const Subscription = () => {
  const [email, setEmail] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      email.trim().toLocaleLowerCase().length > 0 &&
      email.includes("@") &&
      email.includes(".")
    ) {
      setIsComplete(true);
      dispatch(addSubscription({ email: email }));
      setEmail("");
    } else {
      setIsComplete(false);
    }
  };

  return (
    <div className={styles.subscription}>
      <div className={styles.subscription__text}>
        <p>
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </p>
        <form
          className={styles.subscription_text_form}
          onSubmit={submitHandler}
        >
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe</button>
        </form>
        {isComplete && <p>You have successfully subscribed!</p>}
        {!isComplete && <p>Please, fill in the form</p>}
      </div>
    </div>
  );
};
